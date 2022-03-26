import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home2(props) {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/products")
    //     }, 3000)
    // }, [])

    return (
        <div>
            <h1>Home</h1>
            <Link to="/second/products"> Go to Products</Link>
        </div>
    );
}

export default Home2;