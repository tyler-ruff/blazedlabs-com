
function build_routes(page){
    let data = {};
    switch(page){
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
    <!-- Hero Start -->
    <div class="hero">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2>We turn <span>Dreams</span></h2>
                    <h2>into <span>Reality</span>.</h2>
                    <p>
                        The <b>Blazed Labs LLC</b> company is dedicated to producing quality software, building secure and performant networks, and helping our customers experience immersive & interactive virtual worlds.
                    </p>
                    <a class="btn" href="https://blazedlabs.com/services.html">Our Services</a>
                </div>
                <div class="col-md-6">
                    <a href="https://blazedlabs.com/products.html" title="Our Products">
                        <img class="home-promo-img" src="https://blazed.sirv.com/blazedlabs.com/Blazed%20Labs%20(1).png?w=500&h=500" alt="Our Products">
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->
    
    
    <!-- About Start -->
    <div class="about">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="player" id="video-section">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJ-ezkCL2Jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6">
                    <h2 class="section-title">Our Company</h2>
                    <p>
                        Blazed Labs LLC is a product development company founded in 2020. Our business practices span multiple industries, but all center around the unified goal of individual actualization.
                    </p>
                    <p>
                    We operate globally for the collective betterment of all open source developers and contributors.
                    </p>
                    <a class="btn" href="https://blazedlabs.com/about.html">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <!-- Service Start -->
    <div class="service">
        <div class="container-fluid">
            <div class="section-header">
                <h2>
                    Our Solutions
                </h2>
                <p>
                    Our solutions are pretty spectacular, but don't take our word for it, let our dazzling portfolio of websites and software speak for itself.
                </p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            Web Design
                        </h3>
                        <img src="img/icon-service-1.png" alt="Service">
                        <p>
                            TailwindCSS or Bootstrap. Angular, React, Svelte, or a different/no framework, perhaps?
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            Development
                        </h3>
                        <img src="img/icon-service-2.png" alt="Service">
                        <p>
                            We provide scheduling, project management, and establishment of requirements.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            UI Design
                        </h3>
                        <img src="img/icon-service-3.png" alt="Service">
                        <p>
                            Interfaces designed with user experience in mind; perfectly laid out and organized to be easily consumed.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            Programming
                        </h3>
                        <img src="img/icon-service-4.png" alt="Service">
                        <p>
                            We <i>love</i> programming. We write code in PHP, Node.js, Ruby/Python, Java, and C#/.NET framework.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            Graphic Design
                        </h3>
                        <img src="img/icon-service-5.png" alt="Service">
                        <p>
                            We produce logos, branding, and promotional material.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            Video Editing
                        </h3>
                        <img src="img/icon-service-6.png" alt="Service">
                        <p>
                            Discover the Blazed Watch advantage.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>
                            SEO
                        </h3>
                        <img src="img/icon-service-7.png" alt="Service">
                        <p>
                            Our websites are always search engine friendly.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <h3>Online Marketing</h3>
                        <img src="img/icon-service-8.png" alt="Service">
                        <p>
                            Marketing through Google, Facebook, and Linkedin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->

    <!-- News Start -->
    <div class="news">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="https://blazed.sirv.com/blz.one/dylan-gillis-KdeqA3aTnBY-unsplash.jpg" alt="Project Management">
                </div>
                <div class="col-md-6">
                    <h2 class="section-title">
                        Project Management
                    </h2>
                    <p>
                        We participate in a healthy amount of startups and development initiatives, many of which are either open source or employ an open contribution model.
                    </p>
                    <p>
                        Through Blazed Quest, we publish development updates and project progress reports to investors and contributors. 
                        Blazed Labs hopes to maintain honesty, transparency, and equity with/amonst shareholders, investors, contractors, contributors, employees, and members
                        of our Blazed Nation.
                    </p>
                    <a class="btn" href="https://blazed.quest/">
                        Visit Blazed Quest
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- News End -->

    <!-- Call to Action Start -->
    <div class="call-to-action">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <h2>
                        Discover a world
                    </h2>
                    <p>
                        Beyond imagination, far outside of the cusps of space and time, a virtual kingdom like no-other. 
                    </p>
                </div>
                <div class="col-md-3">
                    <a class="btn" href="https://blazed.world/">Visit Blazed World</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Call to Action End -->
    `;
}
