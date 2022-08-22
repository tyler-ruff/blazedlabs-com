const siteConfig = {
    siteTitle: "Blazed Labs",
    website: 'blazedlabs.com', 
    icon: 'https://blazed.sirv.com/logo/Beaker-Cobalt.png', 
    twitter: 'BlazedLabs',
    fbAppId: '503698127531557',
    theme: '1d76f2',
    company: 'Blazed Labs LLC',
    motto: 'We turn Dreams into Reality.',
    telephone: "+18557882348",
    email: "hello@blazed.space",
    address: "1650 Simpson Ave, Ocean City, NJ 08226",
    social: [{ 
        name: "Twitter",
        url: "https://twitter.com/BlazedLabs"
    }, {
        name: "Facebook",
        url: "https://www.facebook.com/blazedlabs",
    }, {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCUl9Q2Nq-bvju0wm3b-bohA",
    }, {
        name: "Instagram",
        url: "https://www.instagram.com/blazed_labs/"
    }, {
        name: "Linkedin",
        url: "https://www.linkedin.com/company/blazed-labs/"
    }],
    nav: [{
        text: "Home",
        url: "https://blazedlabs.com/"
    },
    {
        text: "About",
        url: "https://blazedlabs.com/about.html"
    },
    {
        text: "Services",
        url: "https://blazedlabs.com/services.html"
    },
    {
        text: "Products",
        url: "https://blazedlabs.com/products.html"
    },
    {
        text: "Contact",
        url: "https://blazedlabs.com/contact.html"
    }],
    footer: {
        left: [{
            text: "This Website"
        },
        {
            text: "Home",
            url: "https://blazedlabs.com/"
        },
        {
            text: "About",
            url: "https://blazedlabs.com/about.html"
        },
        {
            text: "Services",
            url: "https://blazedlabs.com/services.html"
        }, 
        {
            text: "Products",
            url: "https://blazedlabs.com/products.html"
        },
        {
            text: "Contact",
            url: "https://blazedlabs.com/contact.html"
        }],
        right: [{
            text: "Blazed Network"
        },
        {
            text: "Corporate",
            url: "https://blazed.company/"
        },
        {
            text: "Project Management",
            url: "https://blazed.quest/"
        },
        {
            text: "Blazed World",
            url: "https://blazed.world/"
        }, 
        {
            text: "Blazed One",
            url: "https://blz.one/"
        },
        {
            text: "Blazed Software",
            url: "https://blazed.software"
        }]
    }
};

function build_wrapper(config, page, content){
    /* Page Wrapper */
    //const wrapper = f('div');
    const wrapper = f('section');
    wrapper.classList.add('wrapper');
    /* Start of Header */
    //const header = f('div');
    const header = f('header');
    header.classList.add('header');
    const headerInnerWrapper = f('div');
    headerInnerWrapper.classList.add('container-fluid');
    const headerRow = f('div');
    headerRow.classList.add('row', 'align-items-center');
    /* Header Logo */
    const logoOuterWrapper = f('div');
    logoOuterWrapper.classList.add('col-lg-1', 'logo-outer-wrapper');
    const logoInnerWrapper = f('div');
    logoInnerWrapper.classList.add('brand');
    const logoLink = f('a');
    logoLink.href = "https://" + config.website + "/";
    logoLink.title = config.siteTitle;
    const logo = f('img');
    logo.src = config.icon + "?w=60&h=60";
    logo.width = 60;
    logo.height = 60;
    logoLink.appendChild(logo);
    logoInnerWrapper.appendChild(logoLink);
    logoOuterWrapper.appendChild(logoInnerWrapper);
    headerRow.appendChild(logoOuterWrapper);
    /* topbar & topbar-wrapper */
    const topBarWrapper = f('div');
    topBarWrapper.classList.add('col-lg-10');
    const topBar = f('div');
    //const topBar = f('div');
    topBar.classList.add('topbar');
    /* Topbar: Telephone */
    const topBarTelephoneCol = f('div');
    topBarTelephoneCol.classList.add('topbar-col');
    const topBarTelephoneLink = f('a');
    topBarTelephoneLink.href = "tel:" + config.telephone;
    const telephoneIcon = f('i');
    telephoneIcon.classList.add('fa', 'fa-phone-alt');
    topBarTelephoneLink.title = "Give us a ring.";
    topBarTelephoneLink.appendChild(telephoneIcon);
    topBarTelephoneLink.innerHTML += config.telephone;
    topBarTelephoneCol.appendChild(topBarTelephoneLink);
    topBar.appendChild(topBarTelephoneCol);
    /* Topbar: Email */
    const topBarEmailCol = f('div');
    topBarEmailCol.classList.add('topbar-col');
    const topBarEmailLink = f('a');
    topBarEmailLink.href = "mailto:" + config.email;
    topBarEmailLink.title = "Shoot us an email.";
    const emailIcon = f('i');
    emailIcon.classList.add('fa', 'fa-envelope');
    topBarEmailLink.appendChild(emailIcon);
    topBarEmailLink.innerHTML += config.email;
    topBarEmailCol.appendChild(topBarEmailLink);
    topBar.appendChild(topBarEmailCol);
    /* Topbar: Social */
    const topBarSocialCol = f('div');
    topBarSocialCol.classList.add('topbar-col');
    const topBarSocial = f('div');
    topBarSocial.classList.add('topbar-social');
    for(let i = 0; i < config.social.length; i++){
        const topBarSocialLink = f('a');
        topBarSocialLink.href = config.social[i].url;
        topBarSocialLink.title = config.social[i].name;
        topBarSocialLink.target = "_blank";
        const socialIcon = f('i');
        socialIcon.classList.add('fab');
        switch(config.social[i].name){
            case "Facebook":
                socialIcon.classList.add('fa-facebook-f');
                break;
            case "Youtube":
                socialIcon.classList.add('fa-youtube');
                break;
            case "Instagram":
                socialIcon.classList.add('fa-instagram');
                break;
            case "Linkedin":
                socialIcon.classList.add('fa-linkedin-in');
                break;
        }
        topBarSocialLink.appendChild(socialIcon);
        topBarSocial.appendChild(topBarSocialLink);
        topBarSocialCol.appendChild(topBarSocial);
        topBar.appendChild(topBarSocialCol);
        topBarWrapper.appendChild(topBar);
    }
    /* Start of NavBar */
    //const navBar = f('div');
    const navBar = f('nav');
    navBar.classList.add('navbar', 'navbar-expand-lg', 'bg-light', 'navbar-light');
    const menuLabel = f('a');
    menuLabel.classList.add('navbar-brand');
    menuLabel.innerHTML = "MENU";
    menuLabel.href = "#";
    const burger = f('button');
    burger.type = "button";
    burger.classList.add('navbar-toggler');
    burger.dataset.toggle = "collapse";
    burger.dataset.target = "#blz-nav";
    const burgerIcon = f('span');
    burgerIcon.classList.add('navbar-toggler-icon');
    burger.appendChild(burgerIcon);
    navBar.appendChild(menuLabel);
    navBar.appendChild(burger);
    const navWrapperOuter = f('div');
    navWrapperOuter.classList.add('collapse', 'navbar-collapse', 'justify-content-between');
    navWrapperOuter.id = "blz-nav";
    const navWrapperInner = f('div');
    navWrapperInner.classList.add('navbar-nav', 'ml-auto');
    for(let j = 0; j < config.menu.length; j++){
        const menuLink = f('a');
        menuLink.classList.add('nav-item', 'nav-link');
        if(j === page){
            menuLink.classList.add('active');
        }
        menuLink.innerHTML = config.menu[j].text;
        menuLink.href = config.menu[j].url;
        navWrapperInner.appendChild(menuLink);
    }
    navWrapperOuter.appendChild(navWrapperInner);
    navBar.appendChild(navWrapperOuter);
    topBarWrapper.appendChild(navBar);
    /* End of Navbar */
    headerRow.appendChild(topBarWrapper);
    headerInnerWrapper.appendChild(headerRow);
    header.appendChild(headerInnerWrapper);
    wrapper.appendChild(header);
    /* End of Header */

    /* Start of Main */

    const mainContent = f('main');
    mainContent.id = "main-content";
    mainContent.dataset.page = page;
    const innerWrapper = f('article');
    innerWrapper.innerHTML = content;
    mainContent.appendChild(innerWrapper);
    wrapper.appendChild(mainContent);

    /* End of Main */

    /* Start of Footer */

    const footer = f('footer');
    footer.classList.add('footer');
    footerInnerWrapper = f('div');
    footerInnerWrapper.classList.add('container');
    const footerInnerRow = f('div');
    footerInnerRow.classList.add('row');
    const footerAboutCol = f('div');
    footerAboutCol.classList.add('col-md-5');
    const footerAbout = f('div');
    footerAbout.classList.add('footer-about');
    const footerAboutTitle = f('h2');
    footerAboutTitle.innerHTML = "About Us";
    const tagline = f('p');
    tagline.innerHTML = config.motto;
    /* Footer Address */
    const businessAddress = f('div');
    const addressBody = f('address');
    addressBody.innerHTML = config.address;
    const addressIcon = f('i');
    addressIcon.classList.add('fa', 'fa-map-marker-alt');
    /* Footer Telephone */
    const phoneNumber = f('p');
    const phoneIcon = f('i');
    phoneIcon.classList.add('fa', 'fa-phone-alt');
    const phoneLink = f('a');
    phoneLink.title = "Give us a ring.";
    phoneLink.innerHTML = config.telephone;
    phoneLink.href = "tel:" + config.telephone;
    /* Footer Email */
    const contactEmail = f('p');
    const footerEmailIcon = f('i');
    footerEmailIcon.classList.add('fa', 'fa-envelope');
    const footerEmailLink = f('a');
    footerEmailLink.title = "Shoot us an email.";
    footerEmailLink.href = "mailto:" + config.email;
    footerEmailLink.innerHTML = config.email;
    businessAddress.appendChild(addressIcon);
    businessAddress.appendChild(addressBody);
    footerAbout.appendChild(footerAboutTitle);
    footerAbout.appendChild(tagline);
    footerAbout.appendChild(businessAddress);
    phoneNumber.appendChild(phoneIcon);
    phoneNumber.appendChild(phoneLink);
    footerAbout.appendChild(phoneNumber);
    contactEmail.appendChild(footerEmailIcon);
    contactEmail.appendChild(footerEmailLink);
    footerAbout.appendChild(contactEmail);
    footerAboutCol.appendChild(footerAbout);
    /* Footer Links Column */
    const linkCol = f('div');
    linkCol.classList.add('col-md-7');
    const linksColRow = f('div');
    linksColRow.classList.add('row');
    /* Footer Left Links */
    const footerLeftCol = f('div');
    footerLeftCol.classList.add('col-md-6');
    const footerLinkLeft = f('div');
    footerLinkLeft.classList.add('footer-link');
    for(let l = 0; l < config.footer.left.length; l++){
        if(!("url" in config.footer.left[l])){
            const listeItem = f('h2');
            listeItem.innerHTML = config.footer.left[l].text;
            footerLinkLeft.appendChild(listeItem);
        } else {
            const listeItem = f('a');
            listeItem.innerHTML = config.footer.left[l].text;
            listeItem.href = config.footer.left[l].url;
            footerLinkLeft.appendChild(listeItem);
        }
    }
    footerLeftCol.appendChild(footerLinkLeft);
    /* Footer Right Links */
    const footerRightCol = f('div');
    footerRightCol.classList.add('col-md-6');
    const footerLinkRight = f('div');
    footerLinkRight.classList.add('footer-link');
    for(let r = 0; r < config.footer.right.length; r++){
        if(!("url" in config.footer.right[r])){
            const listeItem = f('h2');
            listeItem.innerHTML = config.footer.right[r].text;
            footerLinkRight.appendChild(listeItem);
        } else {
            const listeItem = f('a');
            listeItem.innerHTML = config.footer.right[r].text;
            listeItem.href = config.footer.right[r].url;
            footerLinkRight.appendChild(listeItem);
        }
    }
    footerRightCol.appendChild(footerLinkRight);
    footerInnerRow.appendChild(footerAboutCol);
    linksColRow.appendChild(footerLeftCol);
    linksColRow.appendChild(footerRightCol);
    linkCol.appendChild(linksColRow);
    footerInnerRow.appendChild(linkCol);
    footerInnerWrapper.appendChild(footerInnerRow);
    footer.appendChild(footerInnerWrapper);
    /* Copyright */
    const copyRightWrapper = f('div');
    copyRightWrapper.classList.add('container', 'copyright');
    const copyRightInnerRow = f('div');
    copyRightInnerRow.classList.add('row');
    const copyRightCol = f('div');
    copyRightCol.classList.add('col-md-6');
    const year = new Date().getFullYear();
    const copyRight = f('p');
    copyRight.innerHTML = `&copy;${year}, <a target="_blank" href="https://blazed.company/">Blazed Labs LLC</a>, <a target="_blank" href="https://ruff-manage.com/">Ruff Management Inc.</a>. All Rights Reserved.`;
    copyRightCol.appendChild(copyRight);
    const attrCol = f('div');
    attrCol.classList.add('col-md-6');
    const attr = f('p');
    attr.innerHTML = `Template By <a target="_blank" href="https://htmlcodex.com">HTML Codex</a>`;
    attrCol.appendChild(attr);
    copyRightInnerRow.appendChild(copyRightCol);
    copyRightInnerRow.appendChild(attrCol);
    copyRightWrapper.appendChild(copyRightInnerRow);
    footer.appendChild(copyRightWrapper);
    wrapper.appendChild(footer);
    /* End of Footer */

    document.body.appendChild(wrapper);
}
