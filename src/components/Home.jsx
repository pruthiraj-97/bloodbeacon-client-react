import '../componentCSS/home.css'
import React from "react";
import { useNavigate } from 'react-router-dom';
function HomeComponent(){
    const navigate=useNavigate()
    return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to BloodBeacon</h1>
        <p>Connecting blood donors with those in need.</p>
        <button className="cta-button"
          onClick={(e)=>navigate('/bloodbank/searchbloodbank')}
        >Get Started</button>
      </section>
      <section className="info-section">
        <div className="info-card">
          <h2>Why Donate Blood?</h2>
          <p>Donating blood saves lives. Your donation can help trauma patients, cancer patients, and those undergoing surgeries.</p>
        </div>
        <div className="info-card">
          <h2>How It Works</h2>
          <p>Register as a donor, find blood banks near you, and make a life-saving contribution.</p>
        </div>
        <div className="info-card">
          <h2>Get Involved</h2>
          <p>Join our community to stay informed about blood donation events and opportunities.</p>
        </div>
      </section>
    </div>
    )
}
export default HomeComponent