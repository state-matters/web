import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { X } from "react-feather"
import theme from "theme"

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: 100%;
  .body {
    position: relative;
    background-color: ${theme.colors.grey["100"]};
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    max-width: 60rem;
    .close {
      position: absolute;
      z-index: 3;
      top: 1rem;
      right: 1rem;
    }
  }
`

const modalRoot = document.getElementById("modal-root")

export default class Modal extends React.Component {
  modalNode = document.createElement("aside")
  state = { show: false }
  componentDidMount = _ => {
    this.modalNode.style.width = "100%"
    this.modalNode.style.position = "relative"
    modalRoot.appendChild(this.modalNode)
  }
  componentWillUnmount = _ => modalRoot.removeChild(this.modalNode)
  toggleModal = e => {
    e.stopPropagation()
    this.setState(state => {
      if (!state.show) document.body.style.overflowY = "hidden"
      else document.body.style.overflowY = "initial"
      return { show: !state.show }
    })
  }
  render = _ => (
    <React.Fragment>
      {this.state.show &&
        createPortal(
          <StyledModal onClick={this.toggleModal}>
            <div className="body" onClick={e => e.stopPropagation()}>
              <X className="close" onClick={this.toggleModal} />
              {this.props.body}
            </div>
          </StyledModal>,
          this.modalNode
        )}
      {this.props.render(this.toggleModal)}
    </React.Fragment>
  )
}
