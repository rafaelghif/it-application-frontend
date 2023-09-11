import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateSubCategoryType } from "../../../types/sub-category-type";
import { createSubCategory } from "../../../services/sub-category-service";

export const useCreateSubCategory = (categoryId: string) => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateSubCategoryType) => createSubCategory(payload),
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
                queryKey: ["sub-categories", { categoryId }],
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}