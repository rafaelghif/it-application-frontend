import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getPersonalComputers } from "../../../services/personal-computer-service";

export const useQueryPersonalComputer = (category: string, search: string) => {
  const { setLoading } = useLoadingStore();
  const { errorToast } = useToast();
  return useQuery({
    queryKey: ["personal-computer", { category, search }],
    queryFn: () => getPersonalComputers(category, search),
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
