import { useEffect } from 'react';

function WelcomeEffect() {
  useEffect(() => {
    alert('hellow world');
  }, []);

  return <h1> hellow world!</h1>;
}

export default WelcomeEffect;
