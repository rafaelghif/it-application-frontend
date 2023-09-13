import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import * as fs from "fs";

export const ExportExcel = (apiData: unknown[], fileName: string) => {
	const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";

	XLSX.set_fs(fs);
	
	const worksheet = XLSX.utils.json_to_sheet(apiData);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, "IT Assets");
	XLSX.writeFile(workbook, fileName + fileExtension, { compression: true });
}