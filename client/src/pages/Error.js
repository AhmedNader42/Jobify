import React from "react"
import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found"></img>
        <h3> How did you end up here? </h3>
        <p> Don't worry, We'll take you back to safety if you press this </p>
        <Link to="/"> Back Home </Link>
      </div>
    </Wrapper>
  )
}

export default Error
