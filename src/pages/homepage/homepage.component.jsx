import React from 'react';
import Directory from '../../component/directory/directory.component';
import './homepage.style.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            {/* <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SHOES</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div> */}
            <Directory />
        </div>
    )
}

export default HomePage
