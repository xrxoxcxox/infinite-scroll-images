import useDimensions from 'use-react-dimensions';
import { css, keyframes } from '@emotion/react';

interface Props {
  images: string[]
  imageHeight: number
  duration: number
}

const Scroll = ({ images, imageHeight, duration }: Props): JSX.Element => {
  const { ref, dimensions } = useDimensions<HTMLDivElement>({});
  const scroll = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${dimensions.width}px);
    }
  `;
  const visibleArea = css`
    display: flex;
    flex-wrap: nowrap;
    animation: ${scroll} ${duration}s linear infinite;
  `;
  return (
    <div css={visibleArea} ref={ref}>
      {images.map(image => (
        <img src={image} alt="" key={image} style={{ height: imageHeight }} />
      ))}
    </div>
  );
};

const InfiniteScrollImages = (props: Props): JSX.Element => {
  const container = css`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  `;
  return (
    <div css={container}>
      <Scroll {...props} />
      <Scroll {...props} />
      <p>test</p>
    </div>
  );
};

export default InfiniteScrollImages;
