import React, { useState } from 'react';
import useDimensions from 'react-use-dimensions';

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

const Scroll = ({ images, imageHeight, duration }) => {
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
    animation: ${scroll} ${duration}s linear infinite;
  `;
  console.log(width);
  return (
    <div css={visibleArea} ref={ref}>
      {images.map(image => (
        <img src={image} alt="" key={image} style={{ height: imageHeight }} />
      ))}
    </div>
  );
};

const InfiniteScrollImages = props => {
  const container = css`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  `;
  return (
    <div css={container}>
      <Scroll {...props} />
      <Scroll {...props} />
    </div>
  );
};

export default InfiniteScrollImages;
