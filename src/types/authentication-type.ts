import { DepartmentInterface } from "./department-type";
import { UserInterface } from "./user-type";

export interface AuthenticationFormInterface {
    badgeId: string;
    password: string;
}

export interface AuthenticationResponseInterface {
    message: string;
    data: {
        token: string;
        user: Pick<UserInterface, "id" | "badgeId" | "name" | "role">;
        department: Pick<DepartmentInterface, "id" | "name" | "abbreviation">;
    }
}