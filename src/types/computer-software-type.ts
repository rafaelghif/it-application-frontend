export interface ComputerSoftwareInterface {
  id: string;
  inActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  PersonalComputerId: string;
  SoftwareId: string;
}

export type CreateComputerSoftwareType = Pick<
  ComputerSoftwareInterface,
  "PersonalComputerId" | "SoftwareId"
>;

export type UpdateComputerSoftwareType = Partial<ComputerSoftwareInterface>;