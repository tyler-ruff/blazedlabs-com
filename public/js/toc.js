function buildToc(){
    const tocRoot = document.getElementById('toc-root');
    const content = document.getElementById('blz-content');
    //const tocContainer = document.getElementById('toc-container');

    var headingTree = content.querySelectorAll("h1,h2,h3");

    const tocContainer = document.createElement('div');
    tocContainer.id = 'toc-container';


    //Create TOC List
    var tocList = document.createElement('ul');
    tocList.classList.add('py-5');
    tocList.role = "tree";
    var tocTree = [], cur;

    // Add Title Item
    var tocTitle = document.createElement('h4');
    tocTitle.classList.add('block','text-xl', 'py-5', 'select-none');
    tocTitle.innerText = `Table of Contents`;

    // Build TOC Component
    var tocComponent = document.createElement('div');
    tocComponent.id = "table-of-contents";
    tocComponent.classList.add('px-3', 'my-3');
    tocComponent.role = "menu";

    for (var i = 0; i < headingTree.length; i++) {
        var e = headingTree[i];
        tocTree.push({text:e.textContent, id: e.id, type: e.tagName, children:(cur=[])});

        var tocListItem = document.createElement('li');
        var tocItemLink = document.createElement('a');

        tocListItem.role = "treeitem";

        tocItemLink.innerHTML = e.textContent;
        tocItemLink.href = `#${e.id}`;

        if(e.tagName === "H1"){
            tocItemLink.classList.add('pl-0');
        } else if(e.tagName === "H2"){
            tocItemLink.classList.add('pl-3');
        } else if(e.tagName === "H3"){
            tocItemLink.classList.add('pl-6');
        } else if(e.tagName === "H4"){
            tocItemLink.classList.add('pl-12');
        }
        
        tocListItem.appendChild(tocItemLink);
        tocList.appendChild(tocListItem);
    }

    tocComponent.append(tocTitle);
    tocComponent.append(tocList);

    //tocContainer.innerHTML = "";
    // Add component to container
    tocContainer.append(tocComponent);
    tocRoot.append(tocContainer);
}

( function(){
    buildToc();
} )();
