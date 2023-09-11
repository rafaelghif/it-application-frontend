export interface SubCategoryInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    CategoryId: string;
}

export type CreateSubCategoryType = Pick<SubCategoryInterface, "name" | "CategoryId">;
export type UpdateSubCategoryType = Partial<SubCategoryInterface>;