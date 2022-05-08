import React from 'react';
import Banner from '../Banner/Banner';
import BestSell from '../BestSell/BestSell';
import Fornitures from '../Fornitures/Fornitures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fornitures></Fornitures>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;