import initialState from '../initialState';
import {
    SET_REPORT_DATA,
    REMOVE_REPORT_ITEM
} from '../actions/report';

function reportReducer(state = initialState.report, action) {
    let report = state;
    switch(action.type) {
        case SET_REPORT_DATA:
            report = action.data.reportData;
            return report;

        case REMOVE_REPORT_ITEM:
            let reportData = [...report]
            reportData.splice(action.data.itemIndex, 1);
            return reportData;

        default:
            return state;
    }
}

export default reportReducer;
