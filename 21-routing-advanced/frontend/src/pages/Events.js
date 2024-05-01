import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

export default function EventsPage() {
  const { events } = useLoaderData();
  // const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch data.' }), {
    //   status: 500,
    // });
    throw json(
      {
        message: 'Could not fetch data.',
      },
      {
        status: 500,
      }
    );
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
