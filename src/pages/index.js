import React from "react"
import { Link } from "gatsby"
import NavBar from "../components/navbar"
import "../styles/index.css"

const IndexPage = () => (
  <html>
      <div id="navbar">
        <NavBar/>
      </div>
      <div id = "introduction">
        <h1>Hello my name is Rohan Upponi!</h1>
      </div>
  </html>
)

export default IndexPage
