"use client"

export default function AdvancedHero(props: any){
    return (
        <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
            <div className="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-gray-900 bg-gray-100 dark:bg-gray-800 border border-2 border-gray-900 rounded-none card card-body md:px-10 md:grid-cols-5 lg:gap-0">
                <div className="col-span-1 md:col-span-3">
                    <h2 className="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">
                        {props.headline}
                    </h2>
                    <p className="mb-6 pt-2 text-sm lg:text-base dark:text-gray-200">
                        {props.description}
                    </p>
                    <a href={props.url} className="w-full text-gray-100 shadow btn bg-blue-700 hover:bg-blue-900 btn-lg sm:w-auto">
                       {props.ctaText} 
                    </a>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <img src={props.imageURL} className="w-full ml-0 select-none lg:ml-20 dark:filter dark:invert dark:brightness-0" alt="Blazed Beaker" />
                </div>
            </div>
        </section>
    )
}