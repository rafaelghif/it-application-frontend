import { AxiosError } from "axios";
import { AuthenticationFormInterface, AuthenticationResponseInterface } from "../types/authentication-type";
import { axiosPost } from "./api-service";
import { ApiResponseErrorInterface } from "../types/api-response-type";

const apiName = "/authentication";

export const authentication = async (payload: AuthenticationFormInterface): Promise<AuthenticationResponseInterface> => {
    try {
        const response: AuthenticationResponseInterface = await axiosPost(`${apiName}/`, payload);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}