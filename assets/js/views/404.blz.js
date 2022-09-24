/*
    Blazed Fire for HTML5 Framework Example
    > Views in the "Index" namespace
*/

function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 404,
                content: unknown()
            };
            break;
        }
    return data;
}

function unknown(){
    return `
        <div class="flex items-center justify-center w-full min-h-screen bg-gray-100">
            <div class="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
                <div class="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
                    <header class="mb-6">
                        <h2 class="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
                        404.
                        </h2>
                        <h3 class="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
                        Sorry, we couldn't find this page.
                        </h3>
                    </header>

                    <p class="max-w-sm mb-5 leading-5 md:leading-7">
                        Don't worry, sometimes even we make mistakes.
                        You can find plenty of other things on our homepage.
                    </p>

                    <a href="https://blazed.systems/home"
                        class="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-gray-700">
                        Back to Homepage
                    </a>
                </div>

                <div class="max-w-lg">
                <img src="https://blazed.sirv.com/blazed.company/john-mcmahon-ljjcoULkxL8-unsplash.png?w=320&h=320" />
                </div>

            </div>
        </div>
    `;
}