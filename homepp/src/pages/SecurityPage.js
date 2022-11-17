import React from 'react';
import Alarm from "../components/Alarm/Alarm";
import WatchRecording from '../components/WatchRecording/WatchRecording';
import ImitationOfPresence from "../components/ImitationOfPresence/ImitationOfPresence";
import AccessControl from "../components/AccessControl/AccessControl";

const SecurityPage = () => {
    return (
        <div className="grid grid-cols-24 gap-x-20px gap-y-23px pt-40px px-60px">
            <div className='col-start-1 col-end-8'>
                <div className="mb-20px">
                    <WatchRecording />
                </div>
            </div>
            <div className='col-start-8 col-end-16'>
                <div className="mb-20px">
                    <Alarm />
                </div>
            </div>
            <div className="col-start-16 col-end-25 row-start-1 row-end-3">
                <div className="mb-20px">
                    <ImitationOfPresence />
                </div>
                <div className="mb-20px">
                    <AccessControl />
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;