export interface LocationInterface {
    id: string;
    name: string;
    lot: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    DepartmentId: string;
}

export type CreateLocationType = Pick<LocationInterface, "name" | "lot" | "DepartmentId">;
export type UpdateLocationType = Partial<LocationInterface>;