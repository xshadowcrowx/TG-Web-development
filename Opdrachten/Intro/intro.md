
# HTML week 1: intro vragen

1.	Wat is het verschil tussen het internet en het world wide web?
2.	Wat is het verschil tussen HTML, CSS en JavaScript?
3.	Wat is een HTML tag en een HTML element? Hoe open je een HTML tag en hoe sluit je een HTML tag. Maak hiervoor voorbeelden en leg uit.
4.	HTML gebruikt basis tags om structuur op te bouwen. De ```<html>```, ```<head>``` en ```<body>```. Geef voor elke element aan waarvoor het dient.
5.	Op HTML elementen kun je attributen gebruiken. Wat zijn HTML attributen ? Geef minimaal 5 attributen en maak voorbeelden waar je de attributen in toepast.
6.	Waarom is een goede HTML Structuur belangrijk? Is deze code een goede structuur? Leg uit.
7.	Wat is het verschil tussen inline en block elementen?
8.	Wat betekent nesting? Codeer een voorbeeld met nesting erin.
9.	Sinds de komst van HTML5 zijn er elementen die betekenissen hebben. Wat wordt er bedoeld met HTML semantics? Waarom is het gebruik van semantics belangrijk?
Lees meer over semantic markup
10.	Wat voor content zou je in de volgende elementen gebruiken?
Geef in je antwoord voor elk element een toelichting.

```<header>```
```<footer>```
```<main>```
```<nav>```
```<section>```
```<aside>```
```<article>```


&nbsp;


## Antwoorden:

1. The internet is a _(global)_ network of networks, whereas the world wide web are the pages _(websites)_ we visit while we're online. For example: highways and public transportation are everywhere, but we're free to choose which locations we visit and when. In this example the internet is the infrastructure, and the world wide web helps us get to the desired location.


2. Basically **HTML** is for building the page structure, **CSS** is for the aesthetics _(a.k.a. UX)_ and **Javascript** is for creating animations and communicating with a backend data server.


3. An HTML tag is a constituent part of an HTML element. These terms are sometimes used interchangeably, but in reality they are different things. See image below... 

> ![alt text](https://citsf221.community.uaf.edu/wp-content/uploads/sites/146/2009/08/taganatomy.png "HTML element syntax")


4. The `<html>` , `<head>` and `<body>` tags explained... 

> The HTML ```<html>``` element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

> The HTML ```<head>``` element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.

> The HTML ```<body>```Element represents the content of an HTML document. There can be only one ```<body>``` element in a document.


5. HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an HTML element type.

```<abbr id="anId" class="aClass" style="color:blue;" title="Hypertext Markup Language" data-*="global Attributes" >HTML</abbr>```


6. A good HTML structure is important because it forms the foundation upon which the rest of the website or application is built upon.

[This](https://raw.githubusercontent.com/mdn/learning-area/master/html/introduction-to-html/html-text-formatting/text-start.html "Github link") is not an example of good code. At the very least it's missing headings, paragraphs and unordered lists.


7. See table below...

| Inline Element | Block-level elements |
| --- | --- |
| does not start on a new line. | always start on a new line. |
| An inline element only takes up as much width as necessary. | always takes up the full width available (100% left and right!). |
| &nbsp; | A block level element has a top and a bottom margin, whereas an inline element does not. |


8. Nested elements are elements within other elements. 

Example:

> ```<div>```
>
>>  ```<div>```
>>
>>>    ` <p> this paragraph is located inside a nested div... </p> `
>>
>>  ```</div>```
>
> ```</div>``` 


9. Many HTML tags have semantic meaning. That is, the element itself conveys some information about the type of content contained between the opening and closing tags.

For example, when a browser encounters an h1 heading it interprets that tag to mean that the contents of the h1 element constitute the most important heading of the section that contains the element.

The semantic meaning of an h1 tag is that it is used to identify the most important header of a specific web page or section.


10. Elements and their uses:

```<header>``` represents introductory content, typically a group of introductory or navigational aids.

```<footer>``` represents a footer for its nearest sectioning content or sectioning root element. A ```<footer>``` typically contains information about the author of the section, copyright data or links to related documents.

```<main>``` represents the dominant content of the ```<body>``` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

```<nav>``` represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes. 

```<section>``` represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it.

```<aside>``` represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

```<article>``` represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).
