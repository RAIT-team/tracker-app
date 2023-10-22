import React, { Component } from "react";
import "./loginPage.css";

function LoginPage() {
  async function terraWidget() {
    try {
      const params = {
        referenceID: "your-reference-id",
        language: "en", // Replace with the desired language
        providers: ["provider1", "provider2"], // Optional: an array of provider names
        authSuccessRedirectUrl: "https://your-success-redirect-url.com",
        authFailureRedirectUrl: "https://your-failure-redirect-url.com",
        showDisconnect: true, // Optional: boolean to show a disconnect option
      };

      const response = await terraWidget(params); // This line seems recursive. You probably have an external function or SDK method named terraWidget you want to call, but it's named the same as your local function.

      // Handle the response, which should contain data you need
      console.log("Widget session created:", response);

      // Redirect to Whoop website after widget session is created
      window.location.href =
        "https://widget.tryterra.co/session/da55ee27-a988-4eff-aedb-b2acaca88221";
    } catch (error) {
      console.error("Error creating widget session:", error);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-container-container">
          <div className="login-header-container">
            <div className="login-header">Log In</div>
            <div className="login-signup-instead">
              <a href="/signup">Sign Up</a>
            </div>
          </div>
          <div className="login-text">
            <input placeholder="Email"></input>
          </div>
          <div className="login-pw">
            <input placeholder="Password"></input>
          </div>
          <a href="/dashboard">
            <button className="login-submit">Sign In</button>
          </a>
          <button className="login-whoop" onClick={terraWidget}>
            Login With Whoop
          </button>
          <div className="login-signup">
            Not A Member Yet? <a href="/signup">&nbsp;&nbsp;Join Now!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

//docs.tryterra.co/reference/reference-javascript-client
// https: dev_id = rait - prod - QQNbCoqZZL;
// api_key = OAdpqscL1RpXLlJ36LeW5kS2NWP3KUHF;

export default LoginPage;
