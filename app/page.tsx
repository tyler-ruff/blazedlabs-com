import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-900 dark:to-black">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold bold-title">
                      Welcome to the Lab
                    </h1>
                    <p className="py-6 dark:text-gray-200">
                      Blazed is your Source for Innovative Solutions.
                    </p>
                    <Link href="/about">
                        <button className="self-center px-8 py-3 uppercase font-semibold rounded-full bg-primary hover:bg-blue-800 active:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400 text-gray-50">
                          Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
