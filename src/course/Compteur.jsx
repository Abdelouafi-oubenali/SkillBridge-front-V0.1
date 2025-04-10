import { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {isVisible && <h1> showd!</h1>}

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "hidden" : "show"}
      </button>
    </div>
  );
}

export default ToggleText;
