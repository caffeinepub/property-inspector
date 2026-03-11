import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: bigint;
    status: Status;
    title: string;
    propertyType: Type;
    bedrooms?: bigint;
    area: bigint;
    isAvailable: boolean;
    description: string;
    bathrooms?: bigint;
    price: bigint;
    location: string;
}
export type Time = bigint;
export interface Inquiry {
    propertyType: Type;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
    budget: bigint;
    location: string;
}
export enum Status {
    rented = "rented",
    sold = "sold",
    available = "available"
}
export enum Type {
    retail = "retail",
    villa = "villa",
    apartment = "apartment",
    office = "office"
}
export interface backendInterface {
    addProperty(property: Property): Promise<bigint>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getAllProperties(): Promise<Array<Property>>;
    getAvailableProperties(): Promise<Array<Property>>;
    getProperty(propertyId: bigint): Promise<Property | null>;
    submitInquiry(name: string, phone: string, email: string, propertyType: Type, location: string, budget: bigint, message: string): Promise<bigint>;
    updatePropertyStatus(propertyId: bigint, newStatus: Status): Promise<void>;
}
