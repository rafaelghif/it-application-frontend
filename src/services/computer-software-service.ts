import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { SoftwareInterface, SoftwareWithComputerSoftwareInterface } from "../types/software-type";
import { CreateComputerSoftwareType, UpdateComputerSoftwareType } from "../types/computer-software-type";

const apiName = "/computer-software";

export const getComputerSoftwareByPersonalComputerId = async (personalComputerId: string): Promise<SoftwareWithComputerSoftwareInterface[]> => {
    try {
        const response: ApiResponseInterface<SoftwareWithComputerSoftwareInterface[]> = await axiosGet(`${apiName}/personalComputerId/${personalComputerId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createComputerSoftware = async (payload: CreateComputerSoftwareType): Promise<string> => {
    try {
        const response: ApiResponseInterface<CreateComputerSoftwareType> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateComputerSoftware = async (payload: UpdateComputerSoftwareType): Promise<string> => {
    try {
        const response: ApiResponseInterface<UpdateComputerSoftwareType> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}