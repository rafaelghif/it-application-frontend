import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateSubCategoryType, SubCategoryInterface, UpdateSubCategoryType } from "../types/sub-category-type";

const apiName = "/sub-category";

export const getSubCategoryByCategoryId = async (categoryId: string): Promise<SubCategoryInterface[]> => {
    try {
        const response: ApiResponseInterface<SubCategoryInterface[]> = await axiosGet(`${apiName}/categoryId/${categoryId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveSubCategoryByCategoryId = async (categoryId: string): Promise<SubCategoryInterface[]> => {
    try {
        const response: ApiResponseInterface<SubCategoryInterface[]> = await axiosGet(`${apiName}/active/categoryId/${categoryId}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createSubCategory = async (payload: CreateSubCategoryType): Promise<string> => {
    try {
        const response: ApiResponseInterface<SubCategoryInterface> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateSubCategory = async (payload: UpdateSubCategoryType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}