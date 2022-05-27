import React from 'react';

const Business = () => {
    return (
        <div className='w-full'>
            <div className="stats shadow w-full mt-20">

                <div className="stat place-items-center">
                    <div className="stat-title">Product Delivered</div>
                    <div className="stat-value">25K+</div>
                    <div className="stat-desc">From January 2022 to till now</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Customers</div>
                    <div className="stat-value text-secondary">10000+</div>
                    <div className="stat-desc text-secondary">↗︎ Active (80%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Inventory</div>
                    <div className="stat-value">1000+ items</div>
                    <div className="stat-desc">↗︎ Increasing (5%)</div>
                </div>

            </div>

        </div>
    );
};

export default Business;