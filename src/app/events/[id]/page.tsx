// app/events/[id]/page.tsx
import { Metadata } from 'next';

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
