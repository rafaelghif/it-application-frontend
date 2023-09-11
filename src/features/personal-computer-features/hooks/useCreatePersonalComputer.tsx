import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreatePersonalComputerType } from "../../../types/personal-computer-type";
import { createPersonalComputer } from "../../../services/personal-computer-service";

export const useCreatePersonalComputer = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreatePersonalComputerType) => createPersonalComputer(payload),
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
                queryKey: ["personal-computer"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}