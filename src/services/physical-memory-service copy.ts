import { AxiosError } from "axios";
import { axiosGet } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { PhysicalMemoryInterface } from "../types/physical-memory-type";

const apiName = "/physical-memory";

export const getPhysicalMemories = async (personalComputerId: string): Promise<PhysicalMemoryInterface[]> => {
    try {
        const response: ApiResponseInterface<PhysicalMemoryInterface[]> = await axiosGet(`${apiName}/personalComputerId/${personalComputerId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}