import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const ResCard = ({ resName, cuisine }) => {
  return (
    <div className="resCard">
      <img
        alt="res-food-logo"
        className="food-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        <ResCard resName="HOTEL1" cuisine="American, Indian, Biryani" />
        <ResCard resName="HOTEL2" cuisine="American, Indian" />
        <ResCard resName="HOTEL3" cuisine="American, Indian" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
