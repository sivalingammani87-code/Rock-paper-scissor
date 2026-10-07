import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('creates an itinerary and translates the planner and itinerary', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /less planning\. more somewhere/i })).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Lisbon' } });
  fireEvent.change(screen.getByLabelText('Departure date'), { target: { value: '2026-11-10' } });
  fireEvent.change(screen.getByLabelText('Return date'), { target: { value: '2026-11-13' } });
  fireEvent.click(screen.getByRole('button', { name: /make me a plan/i }));

  expect(screen.getByRole('heading', { name: /a trip to lisbon/i })).toBeInTheDocument();
  expect(screen.getAllByText(/day 0[1-3]/i)).toHaveLength(3);

  fireEvent.change(screen.getByLabelText('Language'), { target: { value: 'es' } });

  expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /un viaje a lisbon/i })).toBeInTheDocument();
  expect(screen.getAllByText(/día 0[1-3]/i)).toHaveLength(3);
});
