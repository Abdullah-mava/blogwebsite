import Link from 'next/link';

const Home = async () => {
  // Use the correct endpoint
  const res = await fetch('https://67a72cb0203008941f66d44f.mockapi.io/bikes');
  const bikesData = await res.json();


  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">Blogs</h1>
      <p className="text-center text-gray-700 mb-8">
        Explore posts about various types of bikes!
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {bikesData.map((bike: any) => (
          <div
            key={bike.id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={bike.image}
              alt={bike.title}
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
