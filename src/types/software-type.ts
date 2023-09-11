export type LicenseType = "Subscription" | "Perpetual";

export interface SoftwareInterface {
    id: string;
    name: string;
    version: string;
    licenseType: LicenseType;
    startDate: string;
    expireDate: string;
    remark: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateSoftwareType = Pick<SoftwareInterface, "name" | "version" | "licenseType" | "startDate" | "expireDate" | "remark">;
export type UpdateSoftwareType = Partial<SoftwareInterface>;