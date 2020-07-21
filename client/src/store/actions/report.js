export const SET_REPORT_DATA = 'SET_REPORT_DATA';
export const REMOVE_REPORT_ITEM = 'REMOVE_REPORT_ITEM';

export function setReportData(reportData) {
    return {
        type: SET_REPORT_DATA,
        data: { reportData },
    };
}

export function removeReportItem(itemIndex) {
    return {
        type: REMOVE_REPORT_ITEM,
        data: { itemIndex }
    }
}
