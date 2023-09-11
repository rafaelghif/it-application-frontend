import { AxiosError } from "axios";
import { axiosGet } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { DiskDriveInterface } from "../types/disk-drive-type";

const apiName = "/disk-drive";

export const getDiskDrives = async (personalComputerId: string): Promise<DiskDriveInterface[]> => {
    try {
        const response: ApiResponseInterface<DiskDriveInterface[]> = await axiosGet(`${apiName}/personalComputerId/${personalComputerId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}