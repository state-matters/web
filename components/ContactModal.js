import React, { Fragment } from "react"
import styled from "styled-components"
import theme from "theme"
import Modal from "components/Modal"
import { Button, BlockLink } from "components/TouchTarget"
import { connect } from "react-redux"
import { handlecontact, togglecontactd } from "ducks/subscriptions"

const ContactForm = styled.div`
  h2,
  h3 {
    margin-bottom: 2rem;
  }
  .contact__form {
    display: flex;
    flex-wrap: wrap;
  }
  input {
    padding: 1rem;
    margin: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.grey["700"]};
    font-size: 1.5rem;
    outline: none;
  }
  .contact__email-input {
    width: 100%;
  }
  .contact__message-input {
    width: 100%;
    min-height: 200px;
    border-bottom: 1px solid ${theme.colors.grey["700"]};
    font-size: 1.5rem;
  }
  .contact__name-input {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .contact__button {
    margin-top: 1rem;
    width: 100%;
  }
  .contactd {
    margin: 5rem 1rem;
  }
  .error {
    color: #ff7675;
    font-weight: 700;
    margin: 2rem 0;
  }
`

const ContactBody = props => (
  <ContactForm>
    {props.sent ? (
      <Fragment>
        <h3 className="contactd">Thanks for reaching out,  {props.name}!</h3>
      </Fragment>
    ) : (
      <Fragment>
        <h2>Got something to say?</h2>
        {/*<h3>Comments, questions, feedback?</h3> */}
        <h3>We're all ears!</h3>

        <form
          onSubmit={props.handleSubmit}
          className="contact__form"
          action="//formspree.io/info@statematters.org"
          method="POST">

          <input
            value={props.first_name}
            onChange={e => props.onChange("first_name", e)}
            type="text"
            placeholder="First Name"
            className="contact__name-input"
            name="first_name"
          />
          <input
            value={props.last_name}
            onChange={e => props.onChange("last_name", e)}
            type="text"
            placeholder="Last Name"
            className="contact__name-input"
            name="last_name"
          />
          <input
            value={props.email}
            onChange={e => props.onChange("email", e)}
            type="email"
            placeholder="Email"
            className="contact__email-input"
            name="email"
          />
        <textarea
            value={props.message}
            onChange={e => props.onChange("message", e)}
            type="text"
            placeholder="What's up?"
            className="contact__message-input"
            name="message"
          />
          <Button type="submit" className="contact__button">
            Send!
          </Button>
        </form>
      </Fragment>
    )}
  </ContactForm>
)

class ContactModal extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    }
  }
  handleSubmit = e => {
  }
  onChange = (field, e) => {
    const value = e.target.value
    this.setState(state => ({ form: { ...state.form, [field]: value } }))
  }
  render = () => {
    return (
      <Modal
        body={
          <ContactBody
            onChange={this.onChange}
          />
        }
        render={toggle => (
          <BlockLink
            color={this.props.color || theme.colors.grey["700"]}
            onClick={toggle}
          >
            Contact Us
          </BlockLink>
        )}
      />
    )
  }
}

export default ContactModal
