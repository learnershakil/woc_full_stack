# Basic HTML Webpage Walkthrough

Welcome to this HTML tutorial-style README! This document will walk you through the tags and attributes used to build a basic webpage, explaining their roles in an easy-to-understand way. 

## Table of Contents
1. [Basic Structure](#basic-structure)
2. [Headings & Text Formatting](#headings--text-formatting)
3. [Links](#links)
4. [Lists](#lists)
5. [Images](#images)
6. [Tables](#tables)
7. [Forms](#forms)
8. [Media Elements](#media-elements)
9. [Sections & Layout](#sections--layout)
10. [Additional Elements](#additional-elements)
11. [Footer](#footer)

## Basic Structure

The HTML code begins with a few essential tags:

- `<!DOCTYPE html>`: This tells the browser that we're using HTML5, the latest version of HTML.
- `<html lang="en">`: This element wraps all our HTML code. The `lang` attribute specifies the document’s language (in this case, English).
- `<head>`: Contains metadata about the webpage (like the title and character set).
  - `<meta charset="UTF-8">`: Specifies the character encoding, making sure text is displayed correctly.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Makes the page responsive, adjusting the layout on mobile devices.
  - `<title>`: Sets the title of the webpage, which appears on the browser tab.

## Headings & Text Formatting

Headings and text tags organize content, make text bold or italic, and even add tooltips!

- `<header>`: Contains introductory content, like a title or navigation links.
- `<h1>` to `<h6>`: Heading tags in decreasing order of size and importance.
- Attributes:
  - `contenteditable`: Allows editing the text directly on the webpage.
  - `title`: Shows a tooltip when you hover over the element.

### Text Formatting Tags
- `<p>`: Defines a paragraph.
- `<strong>`: Bolds text and indicates emphasis.
- `<b>`: Simply bolds text without any emphasis indication.
- `<em>`: Italicizes text with an emphasis suggestion.
- `<i>`: Italicizes text, similar to `<em>`, but without suggesting emphasis.
- `<u>`: Underlines text.

## Links

Links let users jump to other sections of the page or visit external websites.

- `<a href="#section_id">`: Internal link that scrolls to a specific section.
- `<a href="https://example.com" target="_blank">`: External link that opens in a new tab.
- `title`: Shows a tooltip on hover.

## Lists

Lists organize items in a structured way. We use three main types:

- **Unordered List** (`<ul>`): Displays items with bullet points.
  - `<li>`: Each list item.
- **Ordered List** (`<ol>`): Displays items with numbers.
  - `id`: Allows linking to specific sections.
- **Definition List** (`<dl>`): Displays terms with definitions.
  - `<dt>`: Defines a term.
  - `<dd>`: Describes the term.

## Images

Images add visual interest to the page.

- `<img src="image_url" alt="description">`: Displays an image.
  - `src`: The source URL of the image.
  - `alt`: Text describing the image for accessibility and in case it doesn't load.

## Tables

Tables organize data in rows and columns.

- `<table border="1">`: Creates a table with a visible border.
  - `<tr>`: Defines a table row.
  - `<th>`: Defines a table header cell.
  - `<td>`: Defines a table data cell.
  - Attributes:
    - `colspan="2"`: Spans a cell across two columns.
    - `rowspan="2"`: Spans a cell across two rows.

## Forms

Forms collect input from users. Each input field collects specific types of data.

- `<form action="/submit.html" method="post">`: The form sends data to `/submit.html` using the POST method.
  - `<label>`: Displays text for an input field.
  - `<input type="text">`: Collects text input. Other input types:
    - `type="email"`: Collects email addresses.
    - `type="password"`: Collects password data (displays dots instead of text).
    - `type="file"`: Allows users to upload a file.
    - `type="color"`: Lets users select a color.
    - `type="datetime-local"`: Allows users to select a date and time.
    - `required`: Ensures the user fills out this field.
  - `<button type="submit">`: Submits the form.

## Media Elements

Audio and video elements add multimedia to the page.

- `<video controls>`: Embeds a video with playback controls.
  - `<source src="video_url" type="video/mp4">`: Defines the video source.
- `<audio controls>`: Embeds audio with playback controls.
  - `<source src="audio_url" type="audio/mp3">`: Defines the audio source.

## Sections & Layout

Layout elements help group content logically:

- `<main>`: Contains the main content of the page.
- `<section>`: Groups related content.
- `<article>`: Holds standalone content, like a blog post.
- `<aside>`: Holds content related to the main content, like a sidebar.
- `<figure>`: Groups an image and its caption.
  - `<figcaption>`: Describes the image.

## Additional Elements

These elements enhance the user experience with extra interactivity:

- `<details>`: Creates an expandable section that hides or shows content.
  - `<summary>`: The summary or title of the hidden content.
- `<progress value="62" max="100">`: Shows progress in a task (62% here).
- `<meter value="32" min="0" max="100">`: Visualizes a quantity within a known range (32% here).

## Footer

The footer typically contains legal or company information.

- `<footer>`: Holds footer content, like copyright info.
  - `<marquee>`: Creates scrolling text. In this case, it scrolls left-to-right.

## Comments

HTML comments help explain code without affecting the display:
- `<!-- This is a comment -->`: Comments are not displayed on the webpage but are helpful for documentation.

---

Happy coding and exploring HTML! 😊
