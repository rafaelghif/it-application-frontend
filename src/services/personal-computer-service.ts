import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import {
  ApiResponseErrorInterface,
  ApiResponseInterface,
} from "../types/api-response-type";
import {
  CreatePersonalComputerType,
  PersonalComputerWithDepartmentLocationInterface,
  UpdatePersonalComputerType,
} from "../types/personal-computer-type";

const apiName = "/personal-computer";

export const getUnspecificPersonalComputers = async (
  search: string
): Promise<PersonalComputerWithDepartmentLocationInterface[]> => {
  try {
    const response: ApiResponseInterface<
      PersonalComputerWithDepartmentLocationInterface[]
    > = await axiosGet(`${apiName}/unspecific?search=${search}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const getPersonalComputers = async (
  category: string,
  search: string
): Promise<PersonalComputerWithDepartmentLocationInterface[]> => {
  try {
    const response: ApiResponseInterface<
      PersonalComputerWithDepartmentLocationInterface[]
    > = await axiosGet(`${apiName}/category/${category}/?search=${search}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const createPersonalComputer = async (
  payload: CreatePersonalComputerType
): Promise<string> => {
  try {
    const response: ApiResponseInterface<null> = await axiosPost(
      `${apiName}/`,
      payload
    );
    return response.message;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};

export const updatePersonalComputer = async (
  payload: UpdatePersonalComputerType
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

export const updatePersonalComputerCategory = async (
  payload: UpdatePersonalComputerType
): Promise<string> => {
  try {
    const response: ApiResponseInterface<null> = await axiosPatch(
      `${apiName}/category`,
      payload
    );
    return response.message;
  } catch (error) {
    const err = error as AxiosError<ApiResponseErrorInterface>;
    throw err;
  }
};
