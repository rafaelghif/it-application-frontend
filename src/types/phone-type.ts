import { DepartmentInterface } from "./department-type";

export interface PhoneInterface {
    id: string;
    name: string;
    extNo: string;
    speedDialNo: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    DepartmentId: string;
}

export interface PhoneWithDepartmentInterface extends PhoneInterface {
    Department: Pick<DepartmentInterface, "id" | "name" | "abbreviation">;
}

export type CreatePhoneType = Pick<PhoneInterface, "name" | "extNo" | "speedDialNo" | "DepartmentId">;
export type UpdatePhoneType = Partial<PhoneInterface>;