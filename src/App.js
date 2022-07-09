// import './App.css';
import React from "react";
import Logo from "../src/Assets/mail.png";
import Stepper from "react-stepper-horizontal";
import { StepperNav } from "vertical-stepper-nav";
function App() {
  return (
    <div>
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          // padding: "20px",
        }}
      >
        <div>
          <img
            src={Logo}
            alt="logo icon"
            style={{ paddingTop: "25px", width: "70px", height: "50px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "50%",
            margin: "0 auto",
            justifyContent: "space-between",
            paddingTop: "30px",
          }}
        >
          <button style={{ width: "95px", height: "35px", marginTop: "5px" }}>
            Services
          </button>
          <button style={{ width: "95px", height: "35px", marginTop: "5px" }}>
            Webinar
          </button>
          <button style={{ width: "150px", height: "35px", marginTop: "5px" }}>
            Profile Evaluation
          </button>
          <button style={{ width: "95px", height: "35px", marginTop: "5px" }}>
            About us
          </button>
          <button style={{ width: "95px", height: "35px", marginTop: "5px" }}>
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", padding: "30px" }}>
          University Dashboard
        </h1>
      </div>

      <div>
        <Stepper
          circleFontColor
          steps={[
            { title: "Fees" },
            { title: "COA" },
            { title: "Visa Process" },
            { title: "Visa Decision" },
          ]}
          activeStep={0}
        />
      </div>

      <div
        style={{
          display: "flex",
          marginLeft: "65px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "65%",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "250px",
            borderRadius: "10px",
            border: "2px solid black",
            marginTop: "10px",
          }}
        >
          <div style={{ marginLeft: 20, marginTop: "50px" }}>
            {" "}
            <StepperNav
              steps={[
                {
                  stepContent: () => (
                    <div style={{ fontSize: 16, fontWeight: "bold" }}>
                      Step 1
                    </div>
                  ),
                  stepStatusCircleSize: 20,
                  stepStateColor: "lightblue",
                },
                {
                  stepContent: () => (
                    <div style={{ fontSize: 16, fontWeight: "bold" }}>
                      Step 2
                    </div>
                  ),
                  stepStatusCircleSize: 20,
                  stepStateColor: "lightblue",
                },
              ]}
            />
          </div>
          <div style={{ marginLeft: 25, marginTop: "40px" }}></div>
          <button
            style={{
              backgroundColor: "grey",
              borderRadius: "50px",
              width: "100px",
              height: "25px",
              marginLeft: "30px",
              marginTop: "0px",
              border: "none",
            }}
          ></button>
        </div>
        <div
          style={{
            width: "200px",
            height: "250px",
            borderRadius: "10px",
            border: "2px solid black",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "250px",
            borderRadius: "10px",
            border: "2px solid black",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "250px",
            borderRadius: "10px",
            border: "2px solid black",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
