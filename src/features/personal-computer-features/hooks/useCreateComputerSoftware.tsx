import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateComputerSoftwareType } from "../../../types/computer-software-type";
import { createComputerSoftware } from "../../../services/computer-software-service";

export const useCreateComputerSoftware = () => {
  const queryClient = useQueryClient();
  const { setLoading } = useLoadingStore();
  const { successToast, errorToast } = useToast();
  return useMutation({
    mutationFn: (payload: CreateComputerSoftwareType) =>
      createComputerSoftware(payload),
    onMutate: () => {
      setLoading(true);
    },
    onError: async (error) => {
      setLoading(false);
      errorToast(error);
    },
    onSuccess: async (response) => {
      successToast(response);
      queryClient.invalidateQueries({
        queryKey: ["computer-softwares"],
      });
      queryClient.invalidateQueries({
        queryKey: ["softwares"],
      });
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};
