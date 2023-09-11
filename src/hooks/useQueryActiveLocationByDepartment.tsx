import { useQuery } from "react-query";
import useLoadingStore from "../stores/useLoadingStore";
import { useToast } from "./useToast";
import { getActiveLocationByDepartment } from "../services/location-service";

export const useQueryActiveLocationByDepartment = (departmentId: string) => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["active-locations", { departmentId }],
        queryFn: () => getActiveLocationByDepartment(departmentId),
        onError: async (error) => {
            errorToast(error);
            setLoading(false);
        },
        onSettled: async () => {
            setLoading(false);
        },
        refetchOnWindowFocus: false,
        retry: false
    });
}