import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { authentication } from "../../../services/authentication-service";
import { setToken } from "../../../services/local-storage-service";
import { AuthenticationFormInterface } from "../../../types/authentication-type";
import useLoadingStore from "../../../stores/useLoadingStore";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";
import { useToast } from "../../../hooks/useToast";
import useDepartmentStore from "../../../stores/useDepartmentStore";

export const useAuthentication = () => {
    const history = useHistory();
    const { setLoading } = useLoadingStore();
    const { errorToast, successToast } = useToast();
    const { setUser } = useUserStore();
    const { loginUser } = useAuthStore();
    const { setDepartment } = useDepartmentStore();

    return useMutation({
        mutationFn: (formData: AuthenticationFormInterface) => authentication(formData),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error: any) => {
            errorToast(error);
        },
        onSuccess: async (response) => {
            const { data, message } = response;
            const { user, department, token } = data;

            setToken(token);
            setUser(user);
            setDepartment(department);

            successToast(message);
            loginUser();
        },
        onSettled: (_, err) => {
            setLoading(false);
            if (err === null) {
                history.replace("/dashboard");
            }
        },
    });
}