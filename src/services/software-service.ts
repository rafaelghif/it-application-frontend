import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import {
  ApiResponseErrorInterface,
  ApiResponseInterface,
} from "../types/api-response-type";
import {
  CreateSoftwareType,
  SoftwareInterface,
  UpdateSoftwareType,
} from "../types/software-type";

const apiName = "/software";

export const getSoftwares = async (): Promise<SoftwareInterface[]> => {
  try {
    const response: ApiResponseInterface<SoftwareInterface[]> = await axiosGet(
      `${apiName}/`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const getUnAssignedSoftwares = async (
  search: string
): Promise<SoftwareInterface[]> => {
  try {
    const response: ApiResponseInterface<SoftwareInterface[]> = await axiosGet(
      `${apiName}/unAssigned?search=${search}`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const createSoftware = async (
  payload: CreateSoftwareType
): Promise<string> => {
  try {
    const response: ApiResponseInterface<SoftwareInterface> = await axiosPost(
      `${apiName}/`,
      payload
    );
    return response.message;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const updateSoftware = async (
  payload: UpdateSoftwareType
): Promise<string> => {
  try {
    const response: ApiResponseInterface<null> = await axiosPatch(
      `${apiName}/`,
      payload
    );
    return response.message;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};
