import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CategoryInterface, CreateCategoryType, UpdateCategoryType } from "../types/category-type";

const apiName = "/category";

export const getCategories = async (): Promise<CategoryInterface[]> => {
    try {
        const response: ApiResponseInterface<CategoryInterface[]> = await axiosGet(`${apiName}/`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveCategories = async (): Promise<CategoryInterface[]> => {
    try {
        const response: ApiResponseInterface<CategoryInterface[]> = await axiosGet(`${apiName}/active`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createCategory = async (payload: CreateCategoryType): Promise<string> => {
    try {
        const response: ApiResponseInterface<CategoryInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateCategory = async (payload: UpdateCategoryType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}