import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript Interface
interface Bike {
  id: string;
  title: string;
  image: string;
}

const Home = async () => {
  // Fetch data with error handling
  const res = await fetch('https://67a72cb0203008941f66d44f.mockapi.io/bikes');
  if (!res.ok) throw new Error('Failed to fetch bikes');
  
  const bikesData: Bike[] = await res.json(); // Use typed array

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Blogs</h1>
      <p className="text-center text-gray-700 mb-8">
        Explore posts about various types of bikes!
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {bikesData.map((bike) => (
          <div
            key={bike.id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {/* Optimized Image */}
            <Image
              src={bike.image}
              alt={bike.title}
              width={300} // Adjust based on layout
              height={160} // Adjust based on layout
              className="mb-4 w-full h-40 object-cover rounded"
            />

            {/* Link and text */}
            <Link href={`/Posts/${bike.id}`} passHref>
              <div className="text-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {bike.title}
                </h5>
                <p className="font-normal text-gray-700">
                  Click to explore!
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
