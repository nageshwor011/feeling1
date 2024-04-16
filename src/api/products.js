import { QUERY_KEYS } from "../reactQueryKeys/queryKeys";
import { backend } from "./network";
import { useQuery } from "@tanstack/react-query";

export const getProductsByCategoryId = async (categoryId) => {
  if (categoryId === undefined || categoryId === null) {
    return null;
  }
  const response = await backend.get(`categories/${categoryId}/products`);
  return response.data;
};

export const useGetAllProductsByCategoryId = (categoryId) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => getProductsByCategoryId(categoryId),
  });
};
