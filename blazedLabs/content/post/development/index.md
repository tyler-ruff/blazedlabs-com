---
title: "Training and Contribution"
date: 2019-02-12T23:39:06-06:00
tags: [development, open, source, school, training, contribution]
toc: true
---

{{< blockquote author="Tyler Ruff" >}}
We are all the students, as well as the teachers.
{{< /blockquote >}}

## Contributing Guide
If you would like to contribute to Blazed open source software, you are in luck, because this project is open source! We welcome all types of contributions, project management, development, and testing.

### Project Management
- Submit feature requests in the [Discussions](https://github.com/blazed-labs/blazed-labs/discussions) section of this repo.
- Join the [Blazed Development Group](https://www.facebook.com/groups/blzdev), and post directly to the group.

### Development
- Fix bugs found in the [Issues](https://github.com/blazed-labs/blazed-labs/issues) section of this repo.
- Submit an implementation of an approved feature request.
To submit code: 
1. Fork this repo.
2. Commit your update.
3. Submit Pull Request
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge. Once you submit your PR, a Blazed team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
4. Your PR is merged!
Congratulations 🎉🎉 The Blazed Development Group thanks you ✨.
Once your PR is merged, your contributions will be publicly visible on the [Blazed Labs repo](https://github.com/blazed-labs/blazed-labs).

### Testing
- If you come across a bug, fluke, or unsavory UX story; please do not hesitate to create a new [Issue](https://github.com/blazed-labs/blazed-labs/issues/new). Of course, first check if the issue has already been raised by using the search feature.
- If you would like to share your user experience story, even if it was purely positive, you may do so in the [Discussions](https://github.com/blazed-labs/blazed-labs/discussions) section of this repo.

> [Source](https://github.com/blazed-labs/blazed-labs/blob/main/CONTRIBUTING.md)

## Website Standards

Thank you for your interest in the Blazed Development Group, your contributions are dearly appreciated. To begin, please refer to the specific guidelines present in the CONTRIBUTING.md file, found in the root of the target repository.

Please make sure to report all bugs to our ticketing system. 

Also, make use of the public [Development Group](https://blazed.dev/) to help connect with other contributors.

```html
<header>
    <nav>
        [...]
    </nav>
</header>
<main>
    [...]
</main>
<footer>
    [...]
</footer>
```
* Above is the ideal semantic layout for the inner body visible contents.

HTML Axioms and Snippets:

1. Add the following CSS snippet to remove the "phantom blinking caret" 
```CSS
/*
    @ blink-stop v1.0
    DESC: Prevent blinking cursor. Since the ::all selector is so slow,
          we define all HTML elements that are cross-browser supported.
    (c) MIT Tyler Ruff; Blazed Labs LLC
*/

div, table, button, a, i, span, body, html,
section, article, p, svg, h1, h2, h3, h4, h5, var,
h6, hr, br, thead, tr, th, td, footer, main, header,
aside, b, strong, blockquote, code, cite, col, colgroup,
input[type=submit], input[type=radio], input[type=checkbox],
input[type=color], input[type=date], input[type=file],
input[type=hidden], input[type=image], input[type=reset],
input[type=button], input[type=range], form, dl, dt, dd,
iframe, label, legend, ul, li, img, caption, dfn, em, tfoot,
fieldset, nav, ol, option, pre, select, sup, sub, tbody {
    caret-color: rgba(0,0,0,0);
}

/*
    Define cursor blinking color for text-based input types
*/
input[type=text]:focus, input[type=password]:focus, input[type=email]:focus,
input[type=tel]:focus, input[type=text]:focus, input[type=number]:focus,
input[type=search]:focus, input[type=url]:focus, textarea:focus {
    caret-color: rgba(0,0,0,1);
}
```
[Source](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/CSS-Snippets/blink-stop.css)


2. Create a custom scrollbar to increase immersion.
The following is the blz-custom-scrollbar, completely free to use.
```css
/*
    @ custom-scrollbar v1.0
    DESC: Blazed Labs Custom Scrollbar.
    (c) MIT Tyler Ruff; Blazed Labs LLC
*/

body::-webkit-scrollbar{
    width:10px;
}

body::-webkit-scrollbar-track{
    background:#727a8a;
}

body::-webkit-scrollbar-thumb{
    background-color:#afb4bd;
    border-radius:20px;
    border:1px solid #5b626e;
}

body::-webkit-scrollbar-thumb:hover{
    background-color:#5b626e;
}

::selection{
    background:#333;
    background:rgba(0, 0, 0, 0.6);
    color:#fff;
}

::-moz-selection{
    background:#333;
    background:rgba(0, 0, 0, 0.6);
    color:#fff;
}
```
[Source](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/CSS-Snippets/custom-scrollbar.css)



3. In the HTML itself
```html
<!DOCTYPE html>
<html lang="en" dir="ltr" itemscope itemtype="https://schema.org/Organization">
    <head>
        [...]
    </head>
    <body>
        [...]
        <script src="[...]"></script>
    </body>
</html>
```

4. The inside of the head

```html
<!-- MMC - Most Mission Critical -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="dns-prefetch" href="//blazed.sirv.com/">
<link rel="preconnect" href="https://blazed.sirv.com/">
<title>
   Page Title
</title>
<!-- Favicon -->
<link rel="icon" sizes="192x192" href="https://blazed.sirv.com/logo/BLZ-blue.png?w=192&h=192">
<link rel="icon" href="https://blazed.sirv.com/icon/favicon.ico">
<link rel="apple-touch-icon" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180">
<link rel="apple-touch-startup-image" href="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180">
<!--
<link rel="license" href="ENTER_URL_HERE/LICENSE">
<link rel="manifest" href="ENTER_URL_HERE/manifest.json">
<link rel="author" href="ENTER_URL_HERE/humans.txt">
-->
<!-- Meta -->
<!--<meta name="msapplication-config" content="ENTER_URL_HERE/browserconfig.xml">-->
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="theme-color" content="#000000">
<meta name="application-name" content="Page Title">
<meta name="apple-mobile-web-app-title" content="Page Title">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="google" content="nositelinkssearchbox">
<meta name="robots" content="index,follow">
<meta name="googlebot" content="index,follow">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@BlazedLabs">
<!--<meta name="twitter:url" content="ENTER_URL_HERE">-->
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="We turn dreams into reality.">
<meta name="twitter:image" content="https://blazed.sirv.com/blazed.space/erol-ahmed-d3pTF3r_hwY-unsplash.jpg?w=500&h=500">
<meta name="twitter:image:alt" content="Photo by Erol Ahmed on Unsplash">
<meta property="fb:app_id" content="503698127531557">
<!--<meta property="og:url" content="ENTER_URL_HERE">-->
<meta property="og:type" content="website">
<meta property="og:title" content="Page Title">
<meta property="og:image" content="https://blazed.sirv.com/blazed.space/erol-ahmed-d3pTF3r_hwY-unsplash.jpg?w=500&h=500">
<meta property="og:image:alt" content="Photo by Erol Ahmed on Unsplash">
<meta property="og:description" content="We turn dreams into reality.">
<meta property="og:site_name" content="Page Title">
<meta property="og:locale" content="en_US">
<meta property="article:author" content="Blazed Labs LLC">
<meta itemprop="name" content="Page Title">
<meta itemprop="description" content="We turn dreams into reality.">
<meta itemprop="image" content="https://blazed.sirv.com/logo/Beaker-Dark.png?w=180&h=180">

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->
```
[Source](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/HTML-Snippets/index.html)

* Note: don't forget to create [manifest.json](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/HTML-Snippets/manifest.json), [browserconfig.xml](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/HTML-Snippets/browserconfig.xml), [robots.txt](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/HTML-Snippets/robots.txt), and optionally [humans.txt](https://github.com/tyler-ruff/tyler-ruff/blob/main/Web-Gallery/HTML-Snippets/humans.txt).

## Example App

{{< codePen PoRpMjp >}}

## Facebook Groups

- [Blazed University](https://www.facebook.com/groups/blazed.edu)
- [Blazed Development](https://www.facebook.com/groups/blzdev)
- [Blazed National Forum](https://www.facebook.com/groups/blazedforum)
- [Web Development School](https://www.facebook.com/groups/webdevschool)
- [Truth](https://www.facebook.com/groups/eternalknowledge)
- [The Monastic Order of Nature](https://www.facebook.com/groups/naturalmonks)
- [Forbidden Mystery School of Atlantis](https://www.facebook.com/groups/atlantismysteryschool)

## Facebook Pages

- [Blazed Labs](https://www.facebook.com/blazedlabs)
- [Blazed Foods](https://www.facebook.com/blazedfoods)
- [Blazed Nation](https://www.facebook.com/blznation)
- [Woodrow Bronzelton](https://www.facebook.com/woodrowbronze/)
- [Plotinus Magnus](https://www.facebook.com/plotinusmagnus/)
- [Alexander Mazelow](https://www.facebook.com/alexmazelow/)
- [Thoth](https://www.facebook.com/thothbaboon)
- [Ruff Management Group](https://www.facebook.com/ruffmanagement)
- [Ocean Car Service](https://www.facebook.com/oceancarservicellc)
- [RTM Transportation](https://www.facebook.com/rtmtransit)

{{< tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" >}}