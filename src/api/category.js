import { QUERY_KEYS } from "../reactQueryKeys/queryKeys";
import { backend } from "./network";
import { useQuery } from "@tanstack/react-query";

export const getCategories = async () => {
  const response = await backend.get("products");
  return response.data;
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => getCategories(),
  });
};
