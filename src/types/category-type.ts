export interface CategoryInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateCategoryType = Pick<CategoryInterface, "name">;
export type UpdateCategoryType = Partial<CategoryInterface>;