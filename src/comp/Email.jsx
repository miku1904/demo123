import React, { useState } from "react";

const Email = (props) => {
  const [email, setEmail] = useState();

  React.useEffect(() => setEmail(props.email), [props]);

  return (
    <>
      <div className="w-25 m-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="Email"
          value={email}
          onChange={(e) => {props.setEmail(e.target.value)}}
          placeholder="name@example.com"
        />
      </div>
    </>
  );
};

export default Email;
