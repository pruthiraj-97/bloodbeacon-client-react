import '../componentCSS/About.css'
import React from "react";
function AboutComponent(){
    return (
        <div className="about">
            <div className="about-container">
                <h2>BloodBeacon</h2>
                <p>
                    BloodBeacon is a revolutionary platform designed to connect individuals in need of blood with nearby blood banks efficiently and effortlessly. Our goal is to create a community where donating and receiving blood is streamlined, secure, and accessible to everyone.
                </p>
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                        At BloodBeacon, we believe that every drop of blood is precious. Our mission is to make blood donation more accessible, efficient, and rewarding. By connecting donors and recipients through our platform, we aim to create a lifesaving network that can respond swiftly to emergencies and ongoing medical needs.
                    </p>
                    <p>
                        Join BloodBeacon today and be a part of a community dedicated to saving lives. Whether you are a donor, a recipient, or a blood bank representative, your participation is invaluable in creating a world where no one has to wait for the blood they need.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent