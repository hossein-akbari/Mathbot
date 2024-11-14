import React from "react";
import PostsListHomePage from '../components/PostsListHomePage';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LeftSidebar";
import ContestLargeBoxIntroduction from "../components/ContestLargeBoxIntroduction";

function Home() {

    return (
        <div>

            <Header />

            <Helmet>
                <title>Mathbot</title>
                <meta name="keywords" content="مث بات, mathbot"></meta>
            </Helmet>

            <div className="section">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <ContestLargeBoxIntroduction />
                        </div>
                    </div>

                    <div className="col-md-3 responsive-box">
                        <LeftSidebar />
                    </div>

                    <div className="col-md-9 responsive-box">
                        
                        <PostsListHomePage/>

                        <div className="col-md-12 col-xs-12">
                            <div className="row">
                                <p>
                                    <span>به دنبال بیشتر هستید؟ <span className="page2">به زودی </span></span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Home;