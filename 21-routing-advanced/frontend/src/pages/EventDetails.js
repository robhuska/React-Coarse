import { useParams } from 'react-router-dom';

export default function EventDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Details Page</h1>
      <p>{params.eventId}</p>
    </>
  );
}
