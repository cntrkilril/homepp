import React from 'react';
import Categories from "../components/Categories/Categories";
import ClimateControl from "../components/ClimateControl/ClimateControl";
import SecurityOverview from "../components/SecurityOverview/SecurityOverview";
import ScenesOverview from "../components/ScenesOverview/ScenesOverview";
import GraphicsOverview from "../components/GraphicsOverview/GraphicsOverview";
import Floorheating from "../components/FloorHeating/FloorHeating";
const OverviewPage = () => {
    return (
        <div className="grid grid-cols-24 gap-20px gap-y-23px pt-40px px-60px py-20px">
            <div className='col-start-1 col-end-13'>
                <div class="mb-20px">
                    <Categories/>
                </div>
                <div className="mb-20px">
                    <GraphicsOverview />
                </div>
            </div>
            <div className="col-start-13 col-end-25">
                <div className="mb-20px">
                    <ClimateControl/>
                </div>
                <div class="grid grid-cols-3 gap-x-20px">
                    <div className="col-start-1 col-end-3">
                        <SecurityOverview />
                        <div className="mt-20px">
                            <Floorheating />
                        </div>
                    </div>
                    <div className="col-start-3 col-end-4">
                        <ScenesOverview />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;