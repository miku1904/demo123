import React from 'react'

const Output = (props) => {
  return (
    <>
    <div className='mt-5 shadow bg-light w-50 m-auto p-5 rounded'>

    <h4>
        <span>Name - </span> {props.name}
    </h4>
    <h4>
        <span>Email - </span> {props.email}
    </h4>
    <h4>
        <span>PhoneNo - </span> {props.phoneNo}
    </h4>

    </div>
    </>
  )
}

export default Output