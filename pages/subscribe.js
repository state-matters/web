import { useReducer } from "react"
import styled from "styled-components"
import { colors } from "constants"
import axios from "axios"
import Container from "components/container"
import Button from "@statematters/components/button"
import Input from "components/input"

function reducer(state, action) {
  switch (action.type) {
    case "handle_change":
      return { ...state, [action.name]: action.value }
    case "subscribed":
      return { subscribed: true, firstName: "", lastName: "", email: "" }
    case "error":
      return { subscribed: false, firstName: "", lastName: "", email: "" }
    case "remove_success":
      return { ...state, subscribed: false }
    default:
      throw new Error()
  }
}

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  subscribed: false
}

export default function Subscribe() {
  const [{ firstName, lastName, email, subscribed }, dispatch] = useReducer(reducer, intialState)
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/subscribe", {
        first: firstName,
        last: lastName,
        email
      })
      dispatch({ type: "subscribed" })
      setTimeout(() => {
        dispatch({ type: "remove_success" })
      }, 4000)
    } catch (err) {
      dispatch({ type: "error" })
    }
  }
  return (
    <StyledSubscribe>
      <Container>
        <h1>Join our newsletter.</h1>
        <h3>Subscribe to get monthly updates about the policies and parties shaping your lives.</h3>
        {subscribed && (
          <h4 style={{ color: colors.green_700 }}>
            Congrats! You've subscribed to the newsletter. You should receive an email with all the
            deets shortly.
          </h4>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="sub__input"
            label="First name"
            value={firstName}
            onChange={e =>
              dispatch({ type: "handle_change", name: "firstName", value: e.target.value })
            }
          />
          <Input
            type="text"
            className="sub__input"
            label="Last name"
            value={lastName}
            onChange={e =>
              dispatch({ type: "handle_change", name: "lastName", value: e.target.value })
            }
          />
          <Input
            type="email"
            className="sub__input sub__input--email"
            label="Email address"
            value={email}
            onChange={e =>
              dispatch({ type: "handle_change", name: "email", value: e.target.value })
            }
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
  }
  ${Button} {
    border-radius: 4px;
    font-family: "Poppins";
    letter-spacing: 1px;
    grid-column: 2;
    margin-left: auto;
  }
`
