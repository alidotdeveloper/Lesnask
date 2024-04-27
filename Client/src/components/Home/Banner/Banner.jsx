import React from "react";

import "./Banner.scss";
import Ban from "../../../assets/bannner-img.avif";


const Banner = () => {
    return (
        <div className="hero-banner">
          
            <div className="content">
                <div className="text-content">
                    <h1>Style meets vision.</h1>
                    <p>
                    40% off premium clear and sun prescription lenses, from regular and thin Persol
Signature lenses to our top line of Premium Glass lenses by Barberini®.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
