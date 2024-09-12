"use client"

export default function SuccessMessage(){
    return (
        <section className="px-4 py-32 mx-auto max-w-7xl">
            <div className="w-full mx-auto lg:w-8/12 xl:w-5/12">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                    Success!
                </p>
                <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                    Your message was sent.
                </h1>
                <p className="mb-5 text-base text-gray-500 md:text-lg">
                    A representative of the Blazed Labs company will reach out to you within 2-3 business days.
                </p>
                <a href="/" className="w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0">
                    Return Home
                </a>
            </div>
        </section>
    );
}