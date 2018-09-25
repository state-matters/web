import React, { Fragment } from "react"
import styled from "styled-components"
import theme from "theme"
import Modal from "components/Modal"
import { Button, BlockLink } from "components/TouchTarget"
import { connect } from "react-redux"
import { handleSubscribe, toggleSubscribed } from "ducks/subscriptions"

const SubscribeModal = styled.div`
  h2,
  h3 {
    margin-bottom: 2rem;
  }
  .subscribe__form {
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
  .subscribe__email-input {
    width: 100%;
  }
  .subscribe__name-input {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .subscribe__button {
    margin-top: 1rem;
    width: 100%;
  }
  .subscribed {
    margin: 5rem 1rem;
  }
  .error {
    color: #ff7675;
    font-weight: 700;
    margin: 2rem 0;
  }
`

const SubscriptionBody = props => (
  <SubscribeModal>
    {props.subscribed ? (
      <Fragment>
        <h3 className="subscribed">Thanks for subscribing {props.email}!</h3>
        <BlockLink color="black" onClick={props.toggleSubscribed}>
          Click here to subscribe another email.
        </BlockLink>
      </Fragment>
    ) : (
      <Fragment>
        <h2>Stay in the know</h2>
        <h3>We'll get you caught up</h3>
        {props.duplicate && (
          <p className="error">
            Please subscribe with a different email, that one is already on our
            list!
          </p>
        )}
        <form onSubmit={props.handleSubmit} className="subscribe__form">
          <input
            value={props.email}
            onChange={e => props.onChange("email", e)}
            type="email"
            placeholder="Email"
            className="subscribe__email-input"
          />
          <input
            value={props.first_name}
            onChange={e => props.onChange("first_name", e)}
            type="text"
            placeholder="First Name"
            className="subscribe__name-input"
          />
          <input
            value={props.last_name}
            onChange={e => props.onChange("last_name", e)}
            type="text"
            placeholder="Last Name"
            className="subscribe__name-input"
          />
          <Button type="submit" className="subscribe__button">
            Subscribe
          </Button>
        </form>
      </Fragment>
    )}
  </SubscribeModal>
)

class SubscriptionModal extends React.Component {
  state = {
    form: {
      first_name: "",
      last_name: "",
      email: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubscribe(this.state.form)
  }
  onChange = (field, e) => {
    const value = e.target.value
    this.setState(state => ({ form: { ...state.form, [field]: value } }))
  }
  render = () => {
    return (
      <Modal
        body={
          <SubscriptionBody
            subscribed={this.props.subscribed}
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
            toggleSubscribed={this.props.toggleSubscribed}
            duplicate={this.props.duplicate}
          />
        }
        render={toggle => (
          <BlockLink
            color={this.props.color || theme.colors.grey["700"]}
            onClick={toggle}
          >
            Subscribe to Our Newsletter
          </BlockLink>
        )}
      />
    )
  }
}

export default connect(
  ({ subscriptions: { subscribed, email, duplicate } }) => ({
    subscribed,
    email,
    duplicate
  }),
  {
    handleSubscribe,
    toggleSubscribed
  }
)(SubscriptionModal)
