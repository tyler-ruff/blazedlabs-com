
function build_routes(page){
    let data = {};
    switch(page){
        case 'home':
        default:
            data = {
                pageNum: 4,
                content: contact()
            };
            break;
        }
    return data;
}


function contact(){
    return `
        <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Contact Us</h2>
                    </div>
                    <div class="col-12">
                        <a href="https://blazedlabs.com/">Home</a>
                        <a href="https://blazedlabs.com/contact.html">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- Contact Start -->
        <div class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="section-title">
                            Get In Touch
                        </h2>
                        <div class="contact-info">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.6905065928067!2d-74.5897134!3d39.272588299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c095542f1fc991%3A0xc5f9d94afed3036a!2s1650%20Simpson%20Ave%2C%20Ocean%20City%2C%20NJ%2008226!5e0!3m2!1sen!2sus!4v1661177245461!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h3>How to reach us</h3>
                            <h3>Telephone: <a href="tel:+18557882348">1 (855) 788-2348</a></h3>
                            <h3>E-mail: <a href="mailto:hello@blazed.space">hello@blazed.space</a></h3>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="editor-info">
                            <h2 class="section-title">
                                Contact Person
                            </h2>
                            <div class="editor-item">
                                <div class="editor-img">
                                    <img src="img/editor-1.jpg" alt="Editor Image">
                                </div>
                                <div class="editor-text">
                                    <h3>Name Goes Here</h3>
                                    <a href="mailto:email@example.com">Email Now</a>
                                </div>
                            </div>
                            <div class="editor-item">
                                <div class="editor-img">
                                    <img src="img/editor-1.jpg" alt="Editor Image">
                                </div>
                                <div class="editor-text">
                                    <h3>Name Goes Here</h3>
                                    <a href="mailto:email@example.com">Email Now</a>
                                </div>
                            </div>
                            <div class="editor-item">
                                <div class="editor-img">
                                    <img src="img/editor-1.jpg" alt="Editor Image">
                                </div>
                                <div class="editor-text">
                                    <h3>Name Goes Here</h3>
                                    <a href="mailto:email@example.com">Email Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    `;
}