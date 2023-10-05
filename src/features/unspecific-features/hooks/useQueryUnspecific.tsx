import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getUnspecificPersonalComputers } from "../../../services/personal-computer-service";

export const useQueryUnspecific = (search: string) => {
  const { setLoading } = useLoadingStore();
  const { errorToast } = useToast();
  return useQuery({
    queryKey: ["unspecific", { search }],
    queryFn: () => getUnspecificPersonalComputers(search),
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
