import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateLocationType, LocationInterface, UpdateLocationType } from "../types/location-type";

const apiName = "/location";

export const getLocationByDepartment = async (departmentId: string): Promise<LocationInterface[]> => {
    try {
        const response: ApiResponseInterface<LocationInterface[]> = await axiosGet(`${apiName}/departmentId/${departmentId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveLocationByDepartment = async (departmentId: string): Promise<LocationInterface[]> => {
    try {
        const response: ApiResponseInterface<LocationInterface[]> = await axiosGet(`${apiName}/active/departmentId/${departmentId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveLocation = async (): Promise<LocationInterface[]> => {
    try {
        const response: ApiResponseInterface<LocationInterface[]> = await axiosGet(`${apiName}/active`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createLocation = async (payload: CreateLocationType): Promise<string> => {
    try {
        const response: ApiResponseInterface<LocationInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateLocation = async (payload: UpdateLocationType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}