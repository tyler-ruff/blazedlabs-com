function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 3,
                content: products()
            };
            break;
        }
    return data;
}

function products(){
    return `
        
        <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Our Products</h2>
                    </div>
                    <div class="col-12">
                        <a href="https://blazedlabs.com/">Home</a>
                        <a href="https://blazedlabs.com/products.html">Products</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- Portfolio Start -->
        <div class="portfolio">
            <div class="container">
                <div class="row">
                    <!--
                    <div class="col-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".web-des">Design</li>
                            <li data-filter=".web-dev">Development</li>
                            <li data-filter=".dig-mar">Digital Marketing</li>
                        </ul>
                    </div>
                    -->
                </div>
                <style>
                    .portfolio-container{
                        height:100%!important;
                    }
                    media only screen and (max-width:550px){
                        .portfolio-container{
                            height:auto!important;
                        }
                    }
                </style>
                <div id="products-inner" class="row portfolio-container"></div>
                <!--
                <div class="row">
                    <div class="col-12 load-more">
                        <a class="btn" href="#">Load More</a>
                    </div>
                </div>
                -->
            </div>
        </div>
        <!-- Portfolio Start -->


        <!-- Call to Action Start -->
        <div class="call-to-action">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <h2>
                            Discover Blazed One
                        </h2>
                        <p>
                            Check out the Blazed One solution and discover how One solution can solve many problems.
                        </p>
                    </div>
                    <div class="col-md-3">
                        <a class="btn" target="_blank" href="https://blz.one/">
                            Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call to Action End -->
    `;
}