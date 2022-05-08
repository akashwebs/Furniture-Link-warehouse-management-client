import React from 'react';
import Banner from '../Banner/Banner';
import BestSell from '../BestSell/BestSell';
import Fornitures from '../Fornitures/Fornitures';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fornitures></Fornitures>
            <BestSell></BestSell>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;