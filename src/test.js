import React from 'react';
import { render, screen } from '@testing-library/react';
import Barra from './components/Barra';
import Intro from './components/Intro';
import Menu from './components/Menu';
import ReservationForm from './components/Table';

test('renders Barra component', () => {
  render(<Barra />);
  // Assert specific elements or behaviors in the Barra component
});

test('renders Intro component', () => {
  render(<Intro />);
  // Assert specific elements or behaviors in the Intro component
});

test('renders Menu component', () => {
  render(<Menu />);
  // Assert specific elements or behaviors in the Menu component
});

test('renders ReservationForm component', () => {
  render(<ReservationForm />);
  // Assert specific elements or behaviors in the ReservationForm component
});
