
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
        <div class="hero">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2>404 <span>Error</span></h2>
                        <h3>Page not found.</h2>
                        <p>
                            But you'll find plenty of awesome stuff at our homepage.
                        </p>
                        <a class="btn" href="https://blazedlabs.com/">Go Home</a>
                    </div>
                    <div class="col-md-6">
                        <img class="home-promo-img" src="https://blazed.sirv.com/logo/john-mcmahon-ljjcoULkxL8-unsplash.jpg?w=500&h=500" alt="Our Products">
                    </div>
                </div>
            </div>
        </div>
    `;
}
