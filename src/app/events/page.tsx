
// // app/events/page.tsx
// import Link from 'next/link';

// // types.ts
// export interface Event {
//   id: string;
//   name: string;
//   date: string;
//   location: string;
//   description: string;
// }

// // Fetch data directly in the component using the fetch API
// const fetchEvents = async (): Promise<Event[]> => {
//   const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/eventlist',{
//     cache: 'no-store',
//   });
//   if (!response.ok) {
//     throw new Error('Failed to fetch events');
//   }
  
//   const data = await response.json();
//   // console.log('Fetched Data:', data); // Log full response for debugging
//   return data;
// };

// const EventList = async () => {
//   let events: Event[] = [];

//   try {
//     events = await fetchEvents();
//     // console.log('Events:', events); // Log events to check data
//   } catch (error) {
//     console.error('Error:', error); // Log errors for debugging
//     return <p className="text-center text-red-500">Failed to load events. Please try again later.</p>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Event List</h1>
//       <div className="grid grid-cols-2 gap-x-12 gap-y-4 justify-center">
//         {events.length === 0 ? (
//           <p>No events found</p>
//         ) : (
//           events.map((event) => (
//             <div key={event.id} className="p-4 border border-gray-700 bg-lime-300 rounded text-center">
//               <div className='text-black'>
//                 <Link href={`/events/${event.id}`} className="text-lg font-semibold">
//                   {event.name}
//                 </Link>
//                 <div className='flex justify-evenly mt-4'>
//                   <p>{event.date}</p>
//                   <p>{event.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventList;


// app/events/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

// types.ts
export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

// Fetch data directly in the component using the fetch API
const fetchEvents = async (): Promise<Event[]> => {
  const response = await fetch('https://66b2070e1ca8ad33d4f633d8.mockapi.io/blog/v1/eventlist',{
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  
  const data = await response.json();
  return data;
};

// Generate metadata based on fetched events
export async function generateMetadata(): Promise<Metadata> {
  const events = await fetchEvents();

  return {
    title: 'Event List',
    description: 'Explore upcoming events in various locations.',
    openGraph: {
      title: 'Event List',
      description: 'Discover the latest events happening around you.',
      url: '/events',
      type: 'website',
      images: events.map((event) => ({
        url: `/images/events/${event.id}.jpg`, // Assume you have event images stored by event ID
        alt: event.name,
      })),
    },
  };
}

const EventList = async () => {
  let events: Event[] = [];

  try {
    events = await fetchEvents();
  } catch (error) {
    console.error('Error:', error); // Log errors for debugging
    return <p className="text-center text-red-500">Failed to load events. Please try again later.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Event List</h1>
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 justify-center">
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="p-4 border border-gray-700 bg-lime-300 rounded text-center">
              <div className='text-black'>
                <Link href={`/events/${event.id}`} className="text-lg font-semibold">
                  {event.name}
                </Link>
                <div className='flex justify-evenly mt-4'>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventList;
