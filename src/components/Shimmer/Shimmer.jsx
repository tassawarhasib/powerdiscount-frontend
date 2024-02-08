import React from 'react';
import "./Shimmer.scss";

const Shimmer = () => {
    return (
        <>
            <div className="shimmer-shop-by-category">
                <div className="shimmer-categories">
                    {[1, 2, 3, 4].map((index) => (
                        <div className="shimmer-category" key={index}>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}
export default Shimmer;
