/**
 * @file This file renders and handles the top bar of the calendar (navigating between months)
 * Note: All dates are moment objects
 * @author Alwyn Tan
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { COLORS, fadeIn } from './constants';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > * {
    margin-bottom: 5%;
    margin-top: 3%;
  }

  > img {
    user-select: none;
    cursor: pointer;
    color: ${COLORS.gray};
    transition: 0.5s ease all;
    margin-left: 5px;
    margin-right: 5px;
  }

  > img:hover {
    filter: brightness(0);
  }

  > span {
    font-size: 1.35em;
    color: #424242;
    animation: ${fadeIn} 0.5s ease;
  }
`;

export default class TopBar extends Component {
  static defaultProps = {
    onPrevClick: () => {},
    onNextClick: () => {}
  };

  render() {
    const { date, onPrevClick, onNextClick, titleTextStyle } = this.props;
    return (
      <Container>
        <span key={date.format()} style={titleTextStyle}>
          {date.format('MMMM YYYY').toUpperCase()}
        </span>
      </Container>
    );
  }
}
