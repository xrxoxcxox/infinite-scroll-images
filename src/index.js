import React, { useState } from 'react';
import useDimensions from 'react-use-dimensions';

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

import emotion from './emotion.png';
import figma from './figma.png';
import gatsby from './gatsby.png';
import netlify from './netlify.png';
import ronin from './ronin.jpg';

const images = [emotion, figma, gatsby, netlify, ronin];
const listItems = images.map(listItem => (
  <img src={listItem} alt="" key={listItem} style={{ height: 200 }} />
));

const Scroll = () => {
  const [ref, { width }] = useDimensions();
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${width}px);
    }
  `;
  const visibleArea = css`
    display: flex;
    flex-wrap: nowrap;
    animation: ${scroll} 1s linear infinite;
  `;
  console.log(width);
  return (
    <div css={visibleArea} ref={ref}>
      {listItems}
    </div>
  );
};

const InfiniteScrollImages = () => {
  const container = css`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  `;
  const kari = css`
    width: 600px;
  `;
  return (
    <div css={kari}>
      <div css={container}>
        <Scroll />
        <Scroll />
      </div>
    </div>
  );
};

export default InfiniteScrollImages;
