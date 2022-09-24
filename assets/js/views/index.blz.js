/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'about':
            data = {
                pageNum: 1,
                content: about()
            };
            break;
        case 'home':
        default:
            data = {
                pageNum: 0,
                content: home()
            };
            break;
        }
    return data;
}

function home(){
    return `
        <section class="dark:bg-gray-800 dark:text-gray-100">
            <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-5xl font-bold leading-none sm:text-6xl">
                        We turn <span class="text-purple-500">Dreams</span> into <span class="text-indigo-700">Reality</span>.
                    </h1>
                    <p class="mt-6 mb-8 text-lg sm:mb-12">
                        The Blazed Labs LLC company is dedicated to producing quality software, building secure and performant networks, and helping our customers experience immersive & interactive virtual worlds.
                    </p>
                    <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="https://www.blazed.company/about" class="px-8 py-3 hover:underline text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            Learn More
                        </a>
                        <a rel="noopener noreferrer" href="https://blazed.contact/" class="px-8 py-3 hover:bg-gray-100 text-lg font-semibold border rounded dark:border-gray-100">
                            Contact
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <a href="https://blz.one/products">
                        <img src="https://blazed.sirv.com/blazedlabs.com/Blazed%20Labs%20(1).png?w=500&h=500" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg">
                    </a>
                </div>
            </div>
        </section>
        <hr />
        <section class="dark:bg-gray-800 dark:text-gray-100">
            <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kJ-ezkCL2Jk" title="Blazed Labs LLC: Company Services" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-5xl font-bold leading-none sm:text-6xl">
                        OUR COMPANY
                    </h1>
                    <p class="mt-6 mb-8 text-lg sm:mb-12">
                        Blazed Labs LLC is a product development company founded in 2020. Our business practices span multiple industries, but all center around the unified goal of individual actualization.
                        <br /> <br />
                        We operate globally for the collective betterment of all open source developers and contributors.
                    </p>
                    <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="https://blz.one/products" class="px-8 py-3 text-lg hover:underline font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            Our Products
                        </a>
                        <a rel="noopener noreferrer" href="https://blz.one/services" class="hover:bg-blue-500 hover:text-white px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        <section class="bg-gradient-to-r from-blue-500 to-gray-600 py-6 dark:bg-gray-800 dark:text-gray-50">
            <div class="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 class="text-3xl font-semibold leading-tight text-center lg:text-left">
                    Explore the Blazed Virtual World
                </h1>
                <a href="https://blazed.world/" class="hover:underline flex px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                    Visit
                </a>
            </div>
        </section>
    `;
}
