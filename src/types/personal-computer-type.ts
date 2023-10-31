import { DepartmentInterface } from "./department-type";
import { LocationInterface } from "./location-type";
import { OperatingSystemInterface } from "./operating-system-type";

export type computerStatusType =
  | "Operational"
  | "Not Operating"
  | "Repair"
  | "Dispose";
export type categoryType =
  | "Unspecified"
  | "Server"
  | "Personal Computer"
  | "Laptop";

export interface PersonalComputerInterface {
  id: string;
  assetNo: string;
  invoiceNo: string;
  ownerName: string;
  previousOwner: string;
  detailName: string;
  name: string;
  username: string;
  domain: string;
  manufacturer: string;
  model: string;
  pcType: string;
  serialNumber: string;
  processor: string;
  architecture: string;
  totalMemory: string;
  purchaseDate: string;
  expireDate: string;
  status: computerStatusType;
  remark: string;
  additionalSoftware: string;
  category: categoryType;
  inActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  DepartmentId: string;
  LocationId: string;
}

export interface PersonalComputerWithDepartmentLocationInterface
  extends PersonalComputerInterface {
  Department: Pick<DepartmentInterface, "id" | "name">;
  Location: Pick<LocationInterface, "id" | "name">;
  OperatingSystem: Pick<OperatingSystemInterface, "id" | "name" | "version">;
}

export type CreatePersonalComputerType = Pick<
  PersonalComputerInterface,
  | "assetNo"
  | "invoiceNo"
  | "ownerName"
  | "detailName"
  | "serialNumber"
  | "DepartmentId"
  | "LocationId"
  | "category"
>;
export type UpdatePersonalComputerType = Partial<PersonalComputerInterface>;
