import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ReservationForm from './Table'; // Importa il componente del form di prenotazione

function Barra({ cartItems, setCartItems }) {
  const [showModal, setShowModal] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false); // Aggiungi uno stato per mostrare/nascondere il form di prenotazione

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  const handleCheckout = () => {
    // Logica per il checkout
    console.log('Procedi all\'acquisto!');
  };

  const handleTableClick = () => {
    setShowReservationForm(true); // Mostra il form di prenotazione quando viene cliccato il link "Table"
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt="Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Menù</Nav.Link>
            <Nav.Link onClick={handleTableClick}>Table</Nav.Link> {/* Aggiungi l'handler per il clic sul link "Table" */}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleModalOpen}>
              <i className="bi bi-cart-fill"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrello</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={item.src} alt={item.alt} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <div>
                        Quantità: {item.quantity}
                        <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      </div>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
          ) : (
            <p>Il carrello è vuoto</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleModalClose}>
            Chiudi
          </button>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Procedi all'acquisto
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showReservationForm} onHide={() => setShowReservationForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione Tavoli</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReservationForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Barra;




