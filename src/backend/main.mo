import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  module Property {
    public type Type = {
      #apartment;
      #villa;
      #office;
      #retail;
    };

    public type Status = {
      #available;
      #sold;
      #rented;
    };

    public type Listing = {
      id : Nat;
      title : Text;
      location : Text;
      price : Nat;
      propertyType : Type;
      bedrooms : ?Nat;
      bathrooms : ?Nat;
      area : Nat;
      description : Text;
      status : Status;
      isAvailable : Bool;
    };

    public func compare(listing1 : Listing, listing2 : Listing) : Order.Order {
      Nat.compare(listing1.id, listing2.id);
    };
  };

  type Property = Property.Listing;

  module Inquiry {
    public type Submission = {
      name : Text;
      phone : Text;
      email : Text;
      propertyType : Property.Type;
      location : Text;
      budget : Nat;
      message : Text;
      timestamp : Time.Time;
    };

    public func compareByTimestamp(inq1 : Submission, inq2 : Submission) : Order.Order {
      Int.compare(inq2.timestamp, inq1.timestamp);
    };
  };

  type Inquiry = Inquiry.Submission;

  let properties = Map.empty<Nat, Property>();
  let inquiries = Map.empty<Nat, Inquiry>();

  var nextPropertyId = 9001;
  var nextInquiryId = 1;

  system func preupgrade() {
    properties.add(
      nextPropertyId,
      {
        id = nextPropertyId;
        title = "Luxury 3BHK in Bandra";
        location = "Bandra, Mumbai";
        price = 25000000;
        propertyType = #apartment;
        bedrooms = ?3;
        bathrooms = ?3;
        area = 1500;
        description = "Spacious 3BHK with sea view in Bandra West. Fully furnished.";
        status = #available;
        isAvailable = true;
      },
    );
    nextPropertyId += 1;

    properties.add(
      nextPropertyId,
      {
        id = nextPropertyId;
        title = "Commercial Office Space in BKC";
        location = "BKC, Mumbai";
        price = 45000000;
        propertyType = #office;
        bedrooms = null;
        bathrooms = ?2;
        area = 3000;
        description = "Premium Grade A office space in Bandra Kurla Complex.";
        status = #available;
        isAvailable = true;
      },
    );
    nextPropertyId += 1;

    properties.add(
      nextPropertyId,
      {
        id = nextPropertyId;
        title = "4BHK Sea View Apartment";
        location = "Juhu, Mumbai";
        price = 55000000;
        propertyType = #apartment;
        bedrooms = ?4;
        bathrooms = ?5;
        area = 3500;
        description = "Exclusive 4BHK apartment in Juhu with panoramic sea view.";
        status = #available;
        isAvailable = true;
      },
    );
    nextPropertyId += 1;
  };

  public shared ({ caller }) func submitInquiry(
    name : Text,
    phone : Text,
    email : Text,
    propertyType : Property.Type,
    location : Text,
    budget : Nat,
    message : Text,
  ) : async Nat {
    let inquiry : Inquiry = {
      name;
      phone;
      email;
      propertyType;
      location;
      budget;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextInquiryId, inquiry);
    let inquiryId = nextInquiryId;
    nextInquiryId += 1;
    inquiryId;
  };

  public query ({ caller }) func getAllProperties() : async [Property] {
    properties.values().toArray().sort();
  };

  public query ({ caller }) func getAvailableProperties() : async [Property] {
    properties.values().toArray().sort().values().filter(
      func(prop) { prop.status == #available }
    ).toArray();
  };

  public shared ({ caller }) func addProperty(property : Property) : async Nat {
    if (properties.containsKey(property.id)) { Runtime.trap("Property with this ID already exists.") };
    properties.add(property.id, property);
    nextPropertyId += 1;
    property.id;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByTimestamp);
  };

  public query ({ caller }) func getProperty(propertyId : Nat) : async ?Property {
    properties.get(propertyId);
  };

  public shared ({ caller }) func updatePropertyStatus(propertyId : Nat, newStatus : Property.Status) : async () {
    switch (properties.get(propertyId)) {
      case (null) { Runtime.trap("Property not found") };
      case (?property) {
        let updatedProperty = {
          property with
          status = newStatus;
          isAvailable = (newStatus == #available);
        };
        properties.add(propertyId, updatedProperty);
      };
    };
  };
};
