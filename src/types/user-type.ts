export interface UserInterface {
    id: string;
    badgeId: string;
    password: string;
    email: string;
    name: string;
    role: "Super User" | "Admin" | "Basic";
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    DepartmentId: string;
}

export interface UserWithDepartmentInterface extends UserInterface {
    Department: {
        id: string;
        name: string;
    };
}


export type CreateUserType = Pick<UserInterface, "badgeId" | "password" | "email" | "name" | "role" | "DepartmentId">;
export type UpdateUserType = Partial<UserInterface>;