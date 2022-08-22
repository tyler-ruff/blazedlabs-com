function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 1,
                content: about()
            };
            break;
        }
    return data;
}

function about(){
    return `
        <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>
                            About Us
                        </h2>
                    </div>
                    <div class="col-12">
                        <a href="https://blazedlabs.com/">Home</a>
                        <a href="https://blazedlabs.com/about.html">About Us</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- About Start -->
        <div class="about">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="https://blazed.sirv.com/logo/Wallpaper-Beaker.png" alt="Image">
                    </div>
                    <div class="col-md-6">
                        <h2 class="section-title">Our Company</h2>
                        <p>
                            The Blazed Labs LLC company was founded in 2020 by <a href="https://tyler-ruff.com/" target="_blank">Tyler Ruff</a>.
                            Since our founding, we have amassed over 15 websites and counting, we have released software through Github, and we have published every medium from text to media.
                        </p>
                        <p>
                            Most of our strategic business campaigns are organized into "Projects". Investors and contributors can view the status of any project any any time through the 
                            <a href="https://blazed.quest/" target="_blank">Blazed Quest</a> platform.
                        </p>
                        <a class="btn" href="https://blazed.quest/portfolio.html?p=projects">Explore Our Projects</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->

        <!-- FAQs Start -->
        <div class="faqs">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2 class="section-title">Frequently Asked Questions</h2>
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                        What is your company's service offering?
                                    </a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                        Our services are as follows:
                                        <ul>
                                            <li>
                                                <a target="_blank" href="https://blazed.xyz/">Publishing</a> - We publish text, media, and software/interactive.
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://blazed.tel/">Telecommunications</a> - We provide managed services for businesses.
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://blazed.systems/">Systems Admin</a> - We provide managed networking solutions.
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://blazed.dev/">Development</a> - Web, Desktop, and Mobile application development.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                                        What are your company's social media accounts?
                                    </a>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <ul>
                                            <li>
                                                <a target="_blank" href="https://www.facebook.com/blazedlabs">Facebook</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://twitter.com/BlazedLabs/">Twitter</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.linkedin.com/company/blazed-labs/">Linkedin</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.alignable.com/ocean-city-nj/blazed-labs-llc">Alignable</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/blazed_labs/">Instagram</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://opencollective.com/blazed-labs">OpenCollective</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://github.com/blazed-labs/">GitHub</a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.ebay.com/usr/blazed.labs">Ebay</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#collapseThree">
                                        How can I contribute to Blazed Software?
                                    </a>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        We welcome contributions from all types of roles. In fact, most roles we need filled are not actually
                                        programming-related. We have many project management, planning, design, marketing, and testing roles available
                                        for you to grow your skills and your experience, and if the project makes money: <b>All Contributors get Paid</b>,
                                        based on contribution.
                                        <br />
                                        If this sounds appealing to you, head on over to <a target="_blank" href="https://blazed.quest/">Blazed Quest</a>,
                                        and/or join the <a href="https://www.facebook.com/groups/blzdev" target="_blank">Facebook Group</a>.
                                        <br />
                                        &bull; You can literally get started immediately.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#collapseFour">
                                        How can I contact Blazed Labs?
                                    </a>
                                </div>
                                <div id="collapseFour" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        &bull; <b>Email:</b>&nbsp;<a href="mailto:hello@blazed.space">hello@blazed.space</a>
                                        <br />
                                        &bull; <abbr title="Telephone"><b>Tel:</b></abbr>&nbsp;<a href="tel:+18557882348">1 (855) 788-2348</a>
                                        <br />
                                        &bull; <b>Online:</b>&nbsp;<a href="https://blazed.contact/">Sales Inquiries</a> or <a href="https://blazed.company/contact">Other Inquiries</a>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <a class="btn" href="https://www.blazed.quest/company.html?p=faq">View More</a>
                    </div>
                    <div class="col-md-6">
                        <img src="https://blazed.sirv.com/blz.one/brooke-cagle--uHVRvDr7pg-unsplash.jpg" alt="Image">
                    </div>
                </div>
            </div>
        </div>
        <!-- FAQs End -->
    `;
}