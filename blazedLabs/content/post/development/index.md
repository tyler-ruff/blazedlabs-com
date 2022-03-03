---
title: "Training and Contribution"
date: 2019-02-12T23:39:06-06:00
tags: [development, open, source, school, training, contribution]
toc: true
---

{{< blockquote author="Tyler Ruff" >}}
We are all the students, as well as the teachers.
{{< /blockquote >}}

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

## Contributing Guide

Thank you for your interest in the Blazed Development Group, your contributions are dearly appreciated. To begin, please refer to the specific guidelines present in the CONTRIBUTING.md file, found in the root of the target repository.

Please make sure to report all bugs to our ticketing system. 

Also, make use of the public [Development Group](https://blazed.monster/dev/) to help connect with other contributors.

```html
<blz-app>
    <blz-header>
        <header>
            [...]
        </header>
    </blz-header>
    <main>
        [...]
    </main>
    <blz-footer>
        <footer>
            [...]
        </footer>
    </blz-footer>
</blz-app>
```

To submit changes to a Blazed Project, follow the steps below:

1. Fork the project and stage all changes within the forked repository.
2. Create a Pull Request, and submit a PR Form (Either ISSUE or FEATURE).
3. The Pull Request must then get the approval of two or more project maintainers.
4. Once a Pull request is accepted (merged), the senior development team will work to add attributions and documentation.

## syntax highlighting

To get syntax highlighting for your code, use markdown code fences, then specify the language:

```html
<div role="dialog" aria-labelledby="dialog-heading">
  <button aria-label="close">x</button>
  <h2 id="dialog-heading">Confirmation</h2>
  <p>Press Okay to confirm or Cancel</p>
  <button>Okay</button>
  <button>Cancel</button>
</div>
```

```html
<div role="dialog" aria-labelledby="dialog-heading">
  <button aria-label="close">x</button>
  <h2 id="dialog-heading">Confirmation</h2>
  <p>Press Okay to confirm or Cancel</p>
  <button>Okay</button>
  <button>Cancel</button>
</div>
```

## codePen

```
{{</* codePen VpVNKW */>}}
```

{{< codePen VpVNKW >}}

## colors

```
{{</* colors "#111111, #cccccc, #ffffff" */>}}
```

{{< colors "#111111, #cccccc, #ffffff" >}}

## expandable

```
{{</* expandable label="A section of dummy text" level="2" */>}}
Here is some markdown including [a link](https://twitter.com/heydonworks). Donec erat est, feugiat a est sed, aliquet pharetra ipsum. Vivamus in arcu leo. Praesent feugiat, purus a molestie ultrices, libero massa iaculis ante, sit amet accumsan leo eros vel ligula.
{{</* /expandable */>}}
```

{{< expandable label="A section of dummy text" level="2" >}}
Here is some markdown including [a link](https://twitter.com/heydonworks). Donec erat est, feugiat a est sed, aliquet pharetra ipsum. Vivamus in arcu leo. Praesent feugiat, purus a molestie ultrices, libero massa iaculis ante, sit amet accumsan leo eros vel ligula.
{{< /expandable >}}

## fileTree

```
{{</* fileTree */>}}
* Level 1 folder
    * Level 2 file
    * Level 2 folder
        * Level 3 file
        * Level 3 folder
            * Level 4 file
        * Level 3 folder
            * Level 4 file
            * Level 4 file
        * Level 3 file
    * Level 2 folder
        * Level 3 file
        * Level 3 file
        * Level 3 file
    * Level 2 file
* Level 1 file
{{</* /fileTree */>}}
```

{{< fileTree >}}
* Level 1 folder
    * Level 2 file
    * Level 2 folder
        * Level 3 file
        * Level 3 folder
            * Level 4 file
        * Level 3 folder
            * Level 4 file
            * Level 4 file
        * Level 3 file
    * Level 2 folder
        * Level 3 file
        * Level 3 file
        * Level 3 file
    * Level 2 file
* Level 1 file
{{< /fileTree >}}

## ticks

```
{{</* ticks */>}}
* Selling point one
* Selling point two
* Selling point three
{{</* /ticks */>}}
```

{{< ticks >}}
* Selling point one
* Selling point two
* Selling point three
{{< /ticks >}}

## figureCupper

```
{{</* figureCupper
img="sun.jpg" 
caption="The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. [Credits](https://images.nasa.gov/details-GSFC_20171208_Archive_e000393.html)." 
command="Resize" 
options="700x" */>}}
```

{{< figureCupper
img="sun.jpg" 
caption="The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. [Credits](https://images.nasa.gov/details-GSFC_20171208_Archive_e000393.html)." 
command="Resize" 
options="700x" >}}

## principles

See the [full principles list](https://github.com/zwbetz-gh/cupper-hugo-theme/blob/master/data/principles.json).

```
{{</* principles include="Add value, Be consistent" descriptions="true" */>}}
```

{{< principles include="Add value, Be consistent" descriptions="true" >}}

## wcag

See the [full wcag list](https://github.com/zwbetz-gh/cupper-hugo-theme/blob/master/data/wcag.json). 

```
{{</* wcag include="1.2.1, 1.3.1, 4.1.2" */>}}
```

{{< wcag include="1.2.1, 1.3.1, 4.1.2" >}}

## tested

See the [full browser list](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/static/images).

```
{{</* tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" */>}}
```

{{< tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" >}}
