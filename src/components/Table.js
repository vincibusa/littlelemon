import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiCalendar, FiPhone, FiUsers, FiClock, FiAtSign } from 'react-icons/fi';

function ReservationForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [prefix, setPrefix] = useState('+39');
  const [numPeople, setNumPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [formError, setFormError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setFormError('Compila tutti i campi correttamente.');
      return;
    }

    // Effettua qui la logica per gestire la prenotazione
    console.log('Prenotazione inviata:', name, surname, email, phoneNumber, numPeople, date, time);
    setFormError(null);
    resetForm();
  };

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      surname.trim() !== '' &&
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber) &&
      date.trim() !== '' &&
      time.trim() !== ''
    );
  };

  const validateEmail = (value) => {
    // Validazione email semplice
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  };

  const validatePhoneNumber = (value) => {
    // Validazione numero di telefono semplice
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(value);
  };

  const resetForm = () => {
    setName('');
    setSurname('');
    setEmail('');
    setPhoneNumber('');
    setPrefix('+39');
    setNumPeople(1);
    setDate('');
    setTime('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="surname">
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <div className="input-group">
          <span className="input-group-text"><FiAtSign /></span>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Numero di Telefono</Form.Label>
        <div className="input-group">
          <span className="input-group-text"><FiPhone /></span>
          <Form.Control
            as="select"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            required
          >
            {['+39', '+1', '+44', '+33'].map((prefix) => (
              <option key={prefix} value={prefix}>
                {prefix}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
      </Form.Group>

      <Form.Group controlId="numPeople">
        <Form.Label>Numero di Persone</Form.Label>
        <div className="input-group">
          <span className="input-group-text"><FiUsers /></span>
          <Form.Control
            as="select"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Control>
        </div>
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Data</Form.Label>
        <div className="input-group">
          <span className="input-group-text"><FiCalendar /></span>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Ora</Form.Label>
        <div className="input-group">
          <span className="input-group-text"><FiClock /></span>
          <Form.Control
            as="select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {(() => {
              const options = [];

              for (let hour = 12; hour <= 22; hour++) {
                for (let minute = 0; minute < 60; minute += 15) {
                  const formattedHour = String(hour).padStart(2, '0');
                  const formattedMinute = String(minute).padStart(2, '0');
                  const time = `${formattedHour}:${formattedMinute}`;

                  options.push(
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                }
              }

              return options;
            })()}
          </Form.Control>
        </div>
      </Form.Group>

      {formError && <p style={{ color: 'red' }}>{formError}</p>}

      <Button variant="primary" type="submit">
        Prenota
      </Button>
    </Form>
  );
}

export default ReservationForm;

