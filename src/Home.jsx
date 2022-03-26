import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
       
        <div className='appBoard'>

            <div className="app">
            <Link to="/second">Products/Test</Link>
            
            </div>
            <div className="app">
            <Link to="/redux">Redux / ToDo</Link>

            </div>
            <div className="app">
            <Link to="/homework">Home Work 12</Link>
            </div>
        </div>
    );
}

export default Home;