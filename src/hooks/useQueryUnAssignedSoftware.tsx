import { useQuery } from "react-query";
import useLoadingStore from "../stores/useLoadingStore";
import { useToast } from "./useToast";
import { getUnAssignedSoftwares } from "../services/software-service";

export const useQueryUnAssignedSoftware = (search: string) => {
  const { setLoading } = useLoadingStore();
  const { errorToast } = useToast();
  return useQuery({
    queryKey: ["unassigned-softwares", { search }],
    queryFn: () => getUnAssignedSoftwares(search),
    onError: async (error) => {
      errorToast(error);
      setLoading(false);
    },
    onSettled: async () => {
      setLoading(false);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};