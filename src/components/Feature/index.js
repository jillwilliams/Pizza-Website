import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>
                Pizza of the Day
            </h1>
            <p>
                Alfredo sauce tops this special of the day
            </p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
}

export default Feature;
