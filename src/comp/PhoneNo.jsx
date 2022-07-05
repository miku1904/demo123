import React from 'react'

const PhoneNo = (props) => {
  return (
    <div className="w-25 m-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Phone no.
        </label>
        <input
          type="PhoneNo"
          className="form-control"
          name="PhoneNo"
          onChange={((e)=> props.setPhoneNo (e.target.value))}
          placeholder="953***5655"
        />
      </div>
  )
}

export default PhoneNo