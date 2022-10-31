import { useRef } from 'react';
import content from './content2.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{
            backgroundColor: '#F8CA9A',
            backgroundImage: `url(${content})`,
            backgroundSize: 'contain',
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Get better everyday</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundColor: '#F8CA9A',
            backgroundSize: 'cover',
          }}
        >
          
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 4.5 }}
          style={{ textAlign: 'center' }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Beta sign up soon</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h3>by Tyler Bordeaux</h3>
          <h4>tylerbordeaux06@icloud.com</h4>
        
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
