function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 2,
                content: services()
            };
            break;
        }
    return data;
}

function services(){
    return `
        <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Our Services</h2>
                    </div>
                    <div class="col-12">
                        <a href="https://blazedlabs.com/">Home</a>
                        <a href="https://blazedlabs.com/services.html">Services</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->


    <!-- Service Start -->
    <div class="service">
        <div class="container-fluid">
        <!-- Service Row Start -->
        <div class="service-row">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 d-md-none d-block">
                        <div class="service-row-img">
                            <img src="img/service-1.png" alt="Service">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-row-text">
                            <h2 class="section-title">
                                Publishing
                            </h2>
                            <p>
                                Digital and Physical Publishing of Books, Magazines, Newspapers, Blogs, and Scholarly Journals. Also, software, games, and media.
                            </p>
                            <a class="btn" target="_blank" href="https://blazed.xyz/">Visit</a>
                        </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none">
                        <div class="service-row-img">
                            <img src="img/service-1.png" alt="Service">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service Row End -->


        <!-- Service Row Start -->
        <div class="service-row">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="service-row-img">
                            <img src="img/service-2.png" alt="Service">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-row-text">
                            <h2 class="section-title">
                                Telecommunications
                            </h2>
                            <p>
                                We can build call centers, PBX systems, and SMS gateway systems for Two-Factor Autentication (2FA).
                                Get connectivity to your VOIP SIP phone, a softphone on your computer or laptop, and/or your mobile device.
                            </p>
                            <a class="btn" target="_blank" href="https://blazed.tel/">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service Row End -->


        <!-- Service Row Start -->
        <div class="service-row">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 d-md-none d-block">
                        <div class="service-row-img">
                            <img src="img/service-3.png" alt="Service">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-row-text">
                            <h2 class="section-title">
                                Systems Administration
                            </h2>
                            <p>
                                Managed cloud and on-site networking systems. We can build you the perfect control panel for your work.
                                Did someone say <b>security</b>? Our networks are always hardened for peak security.
                            </p>
                            <a class="btn" target="_blank" href="https://blazed.systems/">Visit</a>
                        </div>
                    </div>
                    <div class="col-md-6 d-md-block d-none">
                        <div class="service-row-img">
                            <img src="img/service-3.png" alt="Service">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Service Row End -->

        <!-- Call to Action Start -->
        <div class="call-to-action">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <h2>
                            Software Development
                        </h2>
                        <p>
                            We also provide software development for web, desktop, and mobile.
                        </p>
                    </div>
                    <div class="col-md-3">
                        <a class="btn" target="_blank" href="https://blazed.dev/">Visit</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call to Action End -->
    `;
}