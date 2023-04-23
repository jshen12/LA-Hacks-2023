import React, { useState } from "react";

export const SignUpPage = ({}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  const handleSubmit = () => {};

  return (
    <div className="sign-up-form-container">
      <form className="sign-up-form" onSubmit={() => handleSubmit()}>
        <div className="email-input-container">
          <label className="email-label">Email </label>
          <input
            className="email-input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-input-container">
          <label className="password-label">Password </label>
          <input
            className="password-input"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="name-input-container">
          <label className="name-label">Restaurant Name </label>
          <input
            className="name-input"
            type="string"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="address-input-container">
          <label className="address-label">Restaurant Address </label>
          <input
            className="address-input"
            type="string"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
