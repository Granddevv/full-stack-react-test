import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss'
import TestIcon from '../../assets/images/dev-test-img.svg';
import { setReportData, removeReportItem } from '../../store/actions/report';
import { connect } from 'react-redux';

const Panel = ({setReportData, removeReportItem, report}) => {
    const [ fetchFlag, setFetchFlag ] = useState(false);
    const [ index, setIndex ] = useState(0);
    const handleLoadData = async () => {
        try {
            let result = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setReportData(result.data);
            setFetchFlag(true);
        } catch (err) {

        }
    }

    useEffect(() => {
        if(!fetchFlag) {
            handleLoadData();
        }
    });

    const handleRemove = () => {
        removeReportItem(index)
    }

    return (
        <div className="panel-container">
            <div className="pannel-left"></div>
            <div className="pannel-right">
                <div className="header-container">
                    <img src={TestIcon} />
                </div>
                <div className="body-container">
                    {
                        report && report.map((item, index) => <div className="list-item" key={'key-list-item-'+index}>{index} - {item.email}</div>)
                    }
                </div>
                <div className="toolbox-container">
                    <input className="index-input" value={index} onChange={evt => setIndex(evt.target.value)} />
                    <button className="btn-remove" onClick={handleRemove}>Remove</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        report: state.report,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setReportData: (reportData) => {
            dispatch(setReportData(reportData));
        },
        removeReportItem: (itemIndex) => {
            dispatch(removeReportItem(itemIndex))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Panel);
