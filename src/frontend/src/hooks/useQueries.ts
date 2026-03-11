import { useMutation, useQuery } from "@tanstack/react-query";
import type { Type } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAvailableProperties() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["availableProperties"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAvailableProperties();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      propertyType: Type;
      location: string;
      budget: bigint;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(
        data.name,
        data.phone,
        data.email,
        data.propertyType,
        data.location,
        data.budget,
        data.message,
      );
    },
  });
}
