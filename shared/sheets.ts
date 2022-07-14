import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Sheets } from './types/Sheets';

// Config variables
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RSVP_SHEET_ID = process.env.RSVP_SHEET_ID;
const WISHES_SHEET_ID = process.env.WISHES_SHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const loadSheets = async() => {
    try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        return doc;
    } catch (e) {
        console.error('Error: ', e);
    }
}

export const appendSpreadsheet = async (row, sheetName: Sheets) => {
    try {
        await loadSheets();

        let sheet;
        if (sheetName === 'RSVP') {
            sheet = doc.sheetsById[RSVP_SHEET_ID];
        } else {
            sheet = doc.sheetsById[WISHES_SHEET_ID];
        }
        const result = await sheet.addRow(row);
        return result;
    } catch (e) {
        console.error('Error: ', e);
    }
};

export const getWishes = async() => {
    try {
        await loadSheets();

        const sheet = doc.sheetsById[WISHES_SHEET_ID];
        const rows = await sheet.getRows();
        return rows;
    } catch (e) {
        console.error('Error: ', e);
    }
}
