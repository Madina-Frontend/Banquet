import React, { useState } from 'react';

function Btn() {
  const [imageSrc, setImageSrc] = useState('https://www.banquet.uz/_next/image?url=%2Fassets%2Fimages%2Fbase-catering.jpeg&w=384&q=75'); // Dastlabki rasm

  const handleClick = (newSrc) => {
    setImageSrc(newSrc); 
  };

  return (
    <div>
      <img src={imageSrc} alt="Rasm" width="200" height="150" />

      <button onClick={() => handleClick('https://www.example.com/image1.jpg')}>
        Rasm 1
      </button>
      <button onClick={() => handleClick('https://www.example.com/image2.jpg')}>
        Rasm 2
      </button>
    </div>
  );
}

export default Btn;
