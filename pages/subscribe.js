import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Container from "components/container"
import Input from "components/input"
import Button from "@statematters/components/button"

export default function Subscribe() {
  const [firstName, setFirst] = useState("")
  const [lastName, setLast] = useState("")
  const [email, setEmail] = useState("")

  const handleChange = (value, set) => set(value)
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(firstName, lastName, email)
    try {
      await axios.post("/api/subscribe", {
        name: `${firstName} ${lastName}`,
        email
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <StyledSubscribe>
      <Container>
        <h1>Join our newsletter.</h1>
        <h3>Subscribe to get monthly updates about the policies and parties shaping your lives.</h3>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="sub__input"
            label="First name"
            value={firstName}
            onChange={e => handleChange(e.target.value, setFirst)}
          />
          <Input
            type="text"
            className="sub__input"
            label="Last name"
            value={lastName}
            onChange={e => handleChange(e.target.value, setLast)}
          />
          <Input
            type="email"
            className="sub__input sub__input--email"
            label="Email address"
            value={email}
            onChange={e => handleChange(e.target.value, setEmail)}
          />
          <Button type="submit" className="subscription-button">
            subscribe
          </Button>
        </form>
      </Container>
    </StyledSubscribe>
  )
}

const StyledSubscribe = styled.main`
  padding-top: 10rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 2rem;
    .sub__input input {
      border-radius: 4px;
    }
    .sub__input--email {
      grid-column: span 2;
    }
  ${Button} {
    border-radius: 4px;
    font-family: "Poppins";
    letter-spacing: 1px;
    grid-column: 2;
    margin-left: auto;
  }
`
