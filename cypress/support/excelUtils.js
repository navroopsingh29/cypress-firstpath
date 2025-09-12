// // cypress/support/excelUtils.js
// import * as XLSX from 'xlsx';

// export const ExcelUtils = {
//   getCellData(filePath, sheetNo, row, col) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[sheetNo - 1];
//     const sheet = workbook.Sheets[sheetName];
//     const cell = sheet[XLSX.utils.encode_cell({ r: row - 1, c: col - 1 })];
//     return cell ? cell.v : null;
//   },

//   getLastRow(filePath, sheetNo) {
//     const workbook = XLSX.readFile(filePath);
//     const sheetName = workbook.SheetNames[sheetNo - 1];
//     const sheet = workbook.Sheets[sheetName];
//     return XLSX.utils.sheet_to_json(sheet).length;
//   },
// };
