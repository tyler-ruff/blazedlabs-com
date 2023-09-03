import Image from "next/image";

export default function Page(){
    return (
        <div>
            <div className="overflow-hidden sm:grid sm:grid-cols-2 pb-32">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl sm:pt-10 md:pt-20">
                        About Blazed Labs
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        We are a team of innovative thinkers and problem solvers dedicated to creating cutting-edge technology solutions for businesses and individuals alike.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="https://blazed.company/about"
                            target="_blank"
                            className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
                        >
                         Learn More
                        </a>
                    </div>
                </div>
            </div>

            <Image
                alt="Arena"
                width={1500}
                height={1500}
                src="/images/blazed-arena.jpg"
                className="h-56 w-full object-cover sm:h-full"
            />
            </div>
            <hr />
            <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <Image
                        width={1200}
                        height={1200}
                        alt="Beaker"
                        src="/images/lockscreen-beaker.png"
                        className="absolute inset-0 h-full w-full object-cover rounded-md"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <h2 className="text-3xl font-bold sm:text-4xl">
                                Unleashing Innovation
                            </h2>
                            <p>
                                At Blazed Labs, we are committed to staying at the forefront of the tech industry and delivering the best products and services to our clients. 
                                We believe in collaboration and transparency, and we work closely with our clients to understand their needs and develop custom solutions that meet their unique goals.
                            </p>
                            <p>
                                Whether you are a small business owner looking to streamline your operations or an individual looking to improve your online presence, we have the tools and expertise to help you succeed. 
                                Thank you for considering Blazed Labs as your partner in technology. We look forward to working with you.
                            </p>
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}