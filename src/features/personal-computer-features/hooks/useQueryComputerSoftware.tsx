import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getComputerSoftwareByPersonalComputerId } from "../../../services/computer-software-service";

export const useQueryComputerSoftware = (personalComputerId: string) => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["computer-softwares", { personalComputerId }],
        queryFn: () => getComputerSoftwareByPersonalComputerId(personalComputerId),
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
