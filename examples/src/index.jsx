import { render } from 'react-dom';
import InfiniteScrollImages from '../../src/index.tsx';

import example1 from './example1.jpg';
import example2 from './example2.jpg';
import example3 from './example3.jpg';
import example4 from './example4.jpg';
import example5 from './example5.jpg';

const images = [example1, example2, example3, example4, example5];

const App = () => (
  <div style={{ width: 1080 }}>
    <InfiniteScrollImages images={images} imageHeight={200} duration={10} />
  </div>
);
render(<App />, document.getElementById('root'));
