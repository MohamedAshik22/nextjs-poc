// app/events/[id]/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';


export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

const fetchEventById = async (id: string): Promise<Event> => {
  const response = await fetch(`https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/eventlist/${id}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }
  return response.json();
};


// Fetch event data for a specific ID
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const event = await fetchEventById(params.id);

  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The event you are looking for does not exist.',
    };
  }


  return {
    title: event.name,
    description: event.description,
    openGraph: {
      title: event.name,
      description: event.description,
      url: `/events/${event.id}`,
      type: 'article',
      images: [
        {
          url: `/images/events/${event.id}.jpg`, // Assume you have event images stored by event ID
          alt: event.name,
        },
      ],
    },
  };
}

const EventDetail = async ({ params }: { params: { id: string } }) => {
  const event = await fetchEventById(params.id);

  if (!event) {
    notFound(); // Redirect to 404 page if event is not found
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <div className="flex justify-evenly mt-4">
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
      <p className="mt-4">{event.description}</p>
    </div>
  );
};

export default EventDetail;