import { useEffect } from 'react';

const images = [
  'https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const Carusel = () => {

  return (
    <div className="container">
      <div className="slide">
        <ul>
          {images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`imagen: ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carusel;
