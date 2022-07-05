import React from 'react'

const Name = (props) => {
  return (
    <div className="w-25 m-auto">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          name="Name"
          onChange={((e)=> props.setName (e.target.value))}
          placeholder="Enter your name"
        />
      </div>
  )
}

export default Name