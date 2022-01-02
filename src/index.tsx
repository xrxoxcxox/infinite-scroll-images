import useDimensions from 'use-react-dimensions';

interface Props {
  images: string[];
  imageHeight: number;
  duration: number;
}

const Scroll = ({ images, imageHeight, duration }: Props): JSX.Element => {
  const { ref, dimensions } = useDimensions<HTMLDivElement>({});
  return (
    <>
      <style>
        {`@keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${dimensions.width}px);
          }
        }`}
      </style>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          animation: `scroll ${duration}s linear infinite`,
        }}
        ref={ref}
      >
        {images.map(image => (
          <img src={image} alt="" key={image} style={{ height: imageHeight }} />
        ))}
      </div>
    </>
  );
};

export const InfiniteScrollImages = (props: Props): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap', overflow: 'hidden' }}>
      <Scroll {...props} />
      <Scroll {...props} />
    </div>
  );
};
