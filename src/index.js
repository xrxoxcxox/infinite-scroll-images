import React from 'react';

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

import emotion from './emotion.png';
import figma from './figma.png';
import gatsby from './gatsby.png';
import netlify from './netlify.png';

const images = [emotion, figma, gatsby, netlify];
const listItems = images.map(listItem => (
  <img src={listItem} alt="" key={listItem} />
));

const InfiniteScrollImages = () => {
  const container = css`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow: hidden;
  `;
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;
  const visibleArea = css`
    display: flex;
    flex-wrap: nowrap;
    width: 1920px;
    animation: ${scroll} 1s linear infinite;
  `;
  return (
    <div css={container} id="foobar">
      <div css={visibleArea}>{listItems}</div>
      <div css={visibleArea}>{listItems}</div>
    </div>
  );
};

export default InfiniteScrollImages;
