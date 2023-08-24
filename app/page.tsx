
export default async function Index() {
  return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://blazed.sirv.com/logo/Lockscreen-Beaker.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white">
              Welcome to Blazed Labs
            </h1>
            <h2 className="mb-5 text-xl text-gray-400">
              Your Source for Innovative Solutions.
            </h2>
            <p className="mb-5">
              Discover a world of possibilities where creativity meets technology.
              Explore our range of cutting-edge products and services designed to ignite your success.
            </p>
            <a href="/about" className="btn bg-gray-700/80 hover:bg-gray-900/70 hover:no-underline text-white">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  )
 }

