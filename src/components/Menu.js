import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a from '../images/Rectangle 1.svg';
import b from '../images/Rectangle 2.svg';
import c from '../images/Rectangle 3.svg';
import d from '../images/Rectangle 4.svg';
import e from '../images/Rectangle 5.svg';
import Toast from 'react-bootstrap/Toast';

const images = [
  { id: 1, src: a, alt: 'Image A', title: 'Greek Salad', text: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' },
  { id: 2, src: b, alt: 'Image B', title: 'Bruschetta', text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.' },
  { id: 3, src: c, alt: 'Image C', title: 'Grilled Fish', text: 'Some text for Card C' },
  { id: 4, src: d, alt: 'Image D', title: 'Card Title D', text: 'Some text for Card D' },
  { id: 5, src: e, alt: 'Image E', title: 'Card Title E', text: 'Some text for Card E' },
];

function AddToCartButton({ handleAddToCart, image }) {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCartClick = () => {
    handleAddToCart(image);
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddToCartClick}>
        Add to Cart
      </Button>

      <Toast
        show={showToast}
        onClose={handleToastClose}
        delay={3000}
        autohide
        style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translateX(-50%)', background: 'yellow' }}
      >
        <Toast.Body>{`${image.title} added to cart`}</Toast.Body>
      </Toast>
    </>
  );
}

function Menu({ handleAddToCart }) {
  return (
    <>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-6 col-lg-4 mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image.src} alt={image.alt} style={{ height: '150px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.text}</Card.Text>
                <AddToCartButton handleAddToCart={handleAddToCart} image={image} />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;

