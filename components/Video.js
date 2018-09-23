import React, { Fragment } from "react"
import styled from "styled-components"
import { createPortal } from "react-dom"
import { colors } from "../constants"

export default class Video extends React.Component {
  state = { open: false }
  handleToggle = () =>
    this.setState(state => {
      document.body.classList.toggle("no-scroll")
      return { open: !state.open }
    })
  render = () => {
    return (
      <Fragment>
        <VideoModal open={this.state.open} toggle={this.handleToggle}>
          <VideoPlayer
            src={this.props.src}
            controls
            preload="auto"
            onClick={e => e.stopPropagation()}
          />
        </VideoModal>
        <VideoPoster poster={this.props.poster}>
          <i className="mdi mdi-play" onClick={this.handleToggle} />
        </VideoPoster>
      </Fragment>
    )
  }
}

class VideoModal extends React.Component {
  mountPoint = null
  componentDidMount = () => {
    this.mountPoint = document.createElement("aside")
    document.body.appendChild(this.mountPoint)
  }
  render = () =>
    this.props.open &&
    createPortal(
      <ModalBackground onClick={this.props.toggle}>
        {this.props.children}
      </ModalBackground>,
      this.mountPoint
    )
}

const VideoPlayer = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  max-width: 80rem;
  box-shadow: 0 4rem 4rem -2rem rgba(32, 30, 29, 0.96);
`

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(32, 30, 29, 0.6);
`

const VideoPoster = styled.div`
  padding-bottom: 100%;
  background: linear-gradient(rgba(32, 30, 29, 0.48), rgba(32, 30, 29, 0.48)),
    url(${({ poster }) => poster});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .mdi {
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${colors.grey_100};
    font-size: 4rem;
    transform: translate3d(-50%, -50%, 0);
    cursor: pointer;
  }
`
