import EventsList from '../components/EventsList';

const EVENTS = [
  {
    id: 'e1',
    title: 'Event 1',
    date: '05/05/2024',
  },
  {
    id: 'e2',
    title: 'Event 2',
    date: '06/05/2024',
  },
  {
    id: 'e3',
    title: 'Event 3',
    date: '07/05/2024',
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={EVENTS} />
    </>
  );
}
