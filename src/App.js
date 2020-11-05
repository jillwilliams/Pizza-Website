import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalState';
import Hero from './components/Hero';
import Products from './Products';
import {productData, productDataTwo} from './Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
// briancodex/react-restaurant-website-v1
function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Hero />
                <Products heading="Choose Your Favorite" data={productData} />
                <Feature />
                <Products heading="Sweet Treats for You" data={productDataTwo} />
                <Footer />
            </Router>
        </>
    );
}

export default App;
