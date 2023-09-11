import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { getPhysicalMemories } from "../../../services/physical-memory-service copy";

export const useQueryPhysicalMemory = (personalComputerId: string) => {
    const { setLoading } = useLoadingStore();
    const { errorToast } = useToast();
    return useQuery({
        queryKey: ["physical-memory", { personalComputerId }],
        queryFn: () => getPhysicalMemories(personalComputerId),
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
