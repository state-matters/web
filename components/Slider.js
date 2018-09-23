import React from "react"
import styled from "styled-components"
import theme from "theme"
import Swipeable from "react-swipeable"

const StyledScroller = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  .outer-wrapper {
    overflow-x: visible;
  }
  .inner-wrapper {
    display: flex;
    transition: transform 300ms;
  }
  .outer-wrapper .arrows {
    display: flex;
    justify-content: flex-end;
    .mdi {
      font-size: 4rem;
      cursor: pointer;
      &:hover {
        color: ${theme.colors.grey["500"]};
      }
    }
  }
  .item {
    flex: 0 0 100%;
    min-width: 100vw;
    &:not(:last-of-type) {
      margin-right: 0;
    }
    @media (min-width: 40rem) {
      flex: 0 0 ${({ basis = 30 }) => `${basis}rem`};
      min-width: ${({ basis = 30 }) => `${basis}rem`};
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
    }
  }
`

export default class extends React.Component {
  container = null
  state = {
    left: 0,
    elementWidth: 0
  }
  componentDidMount = () => {
    const element = this.container.firstChild
    const margin = parseInt(window.getComputedStyle(element).marginRight)
    const elementWidth = Math.round(
      element.getBoundingClientRect().width + margin
    )
    this.setState({
      elementWidth
    })
  }
  handleSwipe = (e, dx) =>
    this.setState(state => {
      if (dx < 0) {
        // swiped right
        return {
          left: Math.max(state.left - state.elementWidth, 0)
        }
      } else {
        // swiped left
        const fromRight = this.container.lastChild.getBoundingClientRect().right
        if (fromRight > window.innerWidth)
          return {
            left: state.left + state.elementWidth
          }
      }
    })
  render = () => {
    const { children, ...props } = this.props
    return (
      <Swipeable onSwiped={this.handleSwipe} trackMouse={true}>
        <StyledScroller {...props}>
          <div className="outer-wrapper container">
            <div
              className="inner-wrapper"
              style={{
                transform: `translate3d(-${this.state.left}px, 0, 0)`
              }}
              ref={node => (this.container = node)}
            >
              {React.Children.map(children, child => (
                <div className="item">{child}</div>
              ))}
            </div>
            <div className="arrows">
              <span
                className="mdi mdi-chevron-left"
                onClick={e => this.handleSwipe(e, -1)}
              />
              <span
                className="mdi mdi-chevron-right"
                onClick={e => this.handleSwipe(e, 1)}
              />
            </div>
          </div>
        </StyledScroller>
      </Swipeable>
    )
  }
}
