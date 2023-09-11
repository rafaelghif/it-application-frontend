import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdatePersonalComputerType } from "../../../types/personal-computer-type";
import { updatePersonalComputer } from "../../../services/personal-computer-service";

export const useUpdatePersonalComputer = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdatePersonalComputerType) => updatePersonalComputer(payload),
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