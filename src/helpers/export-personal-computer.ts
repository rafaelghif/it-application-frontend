import { utils, set_fs, writeFile } from "xlsx";
import * as fs from "fs";

export const ExportExcel = (apiData: unknown[], fileName: string) => {
	const fileExtension = ".xlsx";

	set_fs(fs);

	const worksheet = utils.json_to_sheet(apiData);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "IT Assets");
	writeFile(workbook, fileName + fileExtension, { compression: true });
}