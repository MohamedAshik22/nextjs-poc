import Link from 'next/link';
import EventList from './events/page';


export default async function Home() {
  // const posts = await fetchPosts();

  return (
    <div className="px-72 ">
      <div className="text-center justify-center mt-40 grid grid-cols-2 bg-teal-300 my-8 py-4">
        <Link className="p-2 m-2 bg-blue-500 text-white rounded py-5" href="/posts/create"> Create post </Link>
        <Link className="p-2 m-2 bg-purple-500 text-white rounded py-5" href="/events/create"> Create Event </Link>
        <Link className="p-2 m-2 bg-green-500 text-white rounded py-5" href="/events">  Event Lists</Link>
      </div>
      <EventList />
    </div>
  );
}

