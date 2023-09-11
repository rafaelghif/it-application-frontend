import { AxiosError } from "axios";
import { axiosGet } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { NetworkAdapterInterface } from "../types/network-adapter-type";

const apiName = "/network-adapter";

export const getNetworkAdapters = async (personalComputerId: string): Promise<NetworkAdapterInterface[]> => {
    try {
        const response: ApiResponseInterface<NetworkAdapterInterface[]> = await axiosGet(`${apiName}/personalComputerId/${personalComputerId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}