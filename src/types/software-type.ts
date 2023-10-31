import { ComputerSoftwareInterface } from "./computer-software-type";

export type LicenseType = "Subscription" | "Perpetual";

export interface SoftwareInterface {
  id: string;
  name: string;
  version: string;
  licenseType: LicenseType;
  productKey: string;
  startDate: string;
  expireDate: string;
  remark: string;
  isAssigned: boolean;
  inActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateSoftwareType = Pick<
  SoftwareInterface,
  | "name"
  | "version"
  | "licenseType"
  | "productKey"
  | "startDate"
  | "expireDate"
  | "remark"
>;
export type UpdateSoftwareType = Partial<SoftwareInterface>;

export interface SoftwareWithComputerSoftwareInterface
  extends SoftwareInterface {
  ComputerSoftware: ComputerSoftwareInterface;
}
