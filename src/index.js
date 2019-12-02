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

const Scroll = ({ height }) => {
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
  return (
    <div css={visibleArea} ref={ref}>
      {images.map(image => (
        <img src={image} alt="" key={image} style={{ height: height }} />
      ))}
    </div>
  );
};

const InfiniteScrollImages = () => {
  const container = css`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  `;
  return (
    <div css={container}>
      <Scroll height="200" />
      <Scroll height="200" />
    </div>
  );
};

export default InfiniteScrollImages;
