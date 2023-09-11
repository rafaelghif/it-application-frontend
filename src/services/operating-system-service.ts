import { AxiosError } from "axios";
import { axiosGet } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { OperatingSystemInterface } from "../types/operating-system-type";

const apiName = "/operating-system";

export const getOperatingSystem = async (personalComputerId: string): Promise<OperatingSystemInterface> => {
    try {
        const response: ApiResponseInterface<OperatingSystemInterface> = await axiosGet(`${apiName}/personalComputerId/${personalComputerId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}