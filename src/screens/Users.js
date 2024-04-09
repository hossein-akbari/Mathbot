import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import profile from '../assets/images/profile.png';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Loader from "../components/Loader";


function Users() {

    const {username} = useParams();

    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://server.mathbot.ir/api/accounts/" + username + "/").then((res) => {
            setdata(res.data);
            setIsLoading(false)
        })

    },[username])

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>{data.name}</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="account-user-img-box-large">
                                <img style={{width: "200px"}} src={profile} className="account-user-img" alt={data.name} />
                            </div>
                            <div style={{textAlign: "center"}} className="forum-title">
                                <h3>{data.name}</h3>
                                <h4>{data.bio}</h4>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Users;