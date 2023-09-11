import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreatePhoneType, PhoneInterface, PhoneWithDepartmentInterface, UpdatePhoneType } from "../types/phone-type";

const apiName = "/phone";

export const getPhones = async (search: string): Promise<PhoneWithDepartmentInterface[]> => {
    try {
        const response: ApiResponseInterface<PhoneWithDepartmentInterface[]> = await axiosGet(`${apiName}/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActivePhones = async (search: string): Promise<PhoneWithDepartmentInterface[]> => {
    try {
        const response: ApiResponseInterface<PhoneWithDepartmentInterface[]> = await axiosGet(`${apiName}/active/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createPhone = async (payload: CreatePhoneType): Promise<string> => {
    try {
        const response: ApiResponseInterface<PhoneInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updatePhone = async (payload: UpdatePhoneType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}