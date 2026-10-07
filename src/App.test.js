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

  fireEvent.change(screen.getByLabelText('Idioma'), { target: { value: 'hi' } });
  expect(screen.getByRole('navigation', { name: 'मुख्य नेविगेशन' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /यात्रा lisbon/i })).toBeInTheDocument();
});

test('finds and previews a selected destination on the map', async () => {
  const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation((url) => Promise.resolve({
    ok: true,
    json: async () => (url.includes('nominatim')
      ? [{
        place_id: 1,
        display_name: 'Lisbon, Portugal',
        lat: '38.7078',
        lon: '-9.1366',
        boundingbox: ['38.6912', '38.7959', '-9.2298', '-9.0915'],
      }]
      : {
        elements: [
          {
            type: 'node',
            id: 2,
            lat: '38.7078',
            lon: '-9.1266',
            tags: { name: 'Riverside Hotel', tourism: 'hotel' },
          },
          {
            type: 'node',
            id: 3,
            lat: '38.7178',
            lon: '-9.1366',
            tags: { name: 'Garden Museum', tourism: 'museum', charge: '$12' },
          },
        ],
      }),
  }));
  render(<App />);

  fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Lisbon' } });
  fireEvent.click(screen.getByRole('button', { name: /find on map/i }));

  const location = await screen.findByRole('button', { name: 'Choose location: Lisbon, Portugal' });
  fireEvent.click(location);

  const map = await screen.findByTitle('Map showing Lisbon, Portugal');
  expect(map).toHaveAttribute('src', expect.stringContaining('marker=38.7078%2C-9.1366'));
  expect(screen.getByRole('link', { name: /open map/i })).toHaveAttribute('href', expect.stringContaining('openstreetmap.org'));
  expect(await screen.findByRole('heading', { name: 'Around your destination' })).toBeInTheDocument();
  expect(await screen.findByRole('link', { name: /riverside hotel/i })).toHaveAttribute('href', expect.stringContaining('openstreetmap.org/node/2'));
  expect(screen.getByText('$90–180 / night')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /check rates/i })).toHaveAttribute('href', expect.stringContaining('google.com/maps/search'));
  expect(screen.getByRole('link', { name: /garden museum/i })).toHaveAttribute('href', expect.stringContaining('openstreetmap.org/node/3'));
  expect(screen.getByText('$12')).toBeInTheDocument();
  fetchSpy.mockRestore();
});
