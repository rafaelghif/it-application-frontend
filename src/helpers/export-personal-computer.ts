import { utils, set_fs, writeFile } from "xlsx";
import * as fs from "fs";
import { PersonalComputerWithDepartmentLocationInterface } from "../types/personal-computer-type";

export const ExportExcel = (apiData: unknown[], fileName: string) => {
	const fileExtension = ".xlsx";

	set_fs(fs);

	const personalComputer = apiData as PersonalComputerWithDepartmentLocationInterface[];

	const data = personalComputer.map((res) => {
		return {
			"Domain": res.domain,
			"Serial No.": res.serialNumber,
			"Computer Name": res.name,
			"UserId": res.username,
			"Owner Name": res.ownerName,
			"Previous Owner": res.previousOwner,
			"Department": res?.Department,
			"Detail": res.detailName,
			"Model": res.model,
			"PC Type": res.pcType,
			"Status": res.status,
			"Processor": res.processor,
			"Architecture": res.architecture,
			"Total Memory": res.totalMemory,
			"OS Version": `${res.OperatingSystem?.name || ""} ${res.OperatingSystem?.version || ""}`,
			"Asset No": res.assetNo,
			"Invoice No": res.invoiceNo,
			"Expire Date": res.expireDate,
			"Remark": res.remark,
			"Location": res.Location?.name
		}
	});

	const worksheet = utils.json_to_sheet(data);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "IT Assets");
	writeFile(workbook, fileName + fileExtension, { compression: true });
}