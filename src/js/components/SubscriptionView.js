"use strict";

export default function SubscriptionView() {
  return `
  <div class="container">
      <span class="icon-box">
        <i class="fas fa-shield-alt"></i>
      </span>
      <h1>OTP Verification</h1>
      <p>Enter OTP Code</p>
      <div class="otp-input-container">
        <input pattern="[0-9]" class="otp-input" maxlength="1" />
        <input pattern="[0-9]" class="otp-input" maxlength="1" />
        <input pattern="[0-9]" class="otp-input" maxlength="1" />
        <input pattern="[0-9]" class="otp-input" maxlength="1" />
      </div>
      <span class="failed">Please enter code number</span>
      <button id="verify-btn" class="btn"><span>Verify OTP</span></button>
    </div>`;
}
