# CSS Guide

This guide is a complete reference for CSS properties, selectors, and values, demonstrating how to style HTML elements with CSS effectively.

## Contents

1. [CSS Selectors](#css-selectors)
2. [CSS Properties](#css-properties)
   - [Text and Font](#text-and-font)
   - [Box Model](#box-model)
   - [Background](#background)
   - [Display and Position](#display-and-position)
   - [Flexbox](#flexbox)
   - [Grid Layout](#grid-layout)
   - [Pseudo-Classes and Pseudo-Elements](#pseudo-classes-and-pseudo-elements)
   - [CSS Units](#css-units)
   - [Additional Properties](#additional-properties)

---

## CSS Selectors

CSS selectors target specific elements on the page. Here are the primary selector types and their functions.

### Element Selector

Targets all instances of a specific HTML element.

```css
p {
    color: blue;
}
```

### Class Selector

Targets elements with a specified class.

```css
.classname {
    color: red;
}
```

### ID Selector

Targets a single element with a specific ID.

```css
#idname {
    color: green;
}
```

### Attribute Selector

Targets elements with specific attributes.

```css
[type="text"] {
    border: 1px solid black;
}
```

### Pseudo-Classes and Pseudo-Elements

Pseudo-classes and pseudo-elements target elements based on their state or part.

```css
a:hover {
    color: orange;
}

p::first-line {
    font-weight: bold;
}
```

## CSS Properties

### Text and Font

- **color**: Sets text color.
    ```css
    p { color: blue; }
    ```
- **font-family**: Specifies font.
    ```css
    body { font-family: Arial, sans-serif; }
    ```
- **font-size**: Sets font size.
    ```css
    h1 { font-size: 2em; }
    ```
- **font-weight**: Defines font thickness.
    ```css
    p { font-weight: bold; }
    ```
    Possible values: `normal`, `bold`, `bolder`, `lighter`, `100` to `900`.
- **font-style**: Sets font style.
    ```css
    p { font-style: italic; }
    ```
    Possible values: `normal`, `italic`, `oblique`.
- **font-variant**: Controls font variants.
    ```css
    p { font-variant: small-caps; }
    ```
    Possible values: `normal`, `small-caps`.
- **line-height**: Sets line spacing.
    ```css
    p { line-height: 1.5; }
    ```
- **text-align**: Aligns text horizontally.
    ```css
    h1 { text-align: center; }
    ```
    Possible values: `left`, `right`, `center`, `justify`.
- **text-decoration**: Adds text effects.
    ```css
    a { text-decoration: underline; }
    ```
    Possible values: `none`, `underline`, `overline`, `line-through`.
- **text-transform**: Controls text capitalization.
    ```css
    p { text-transform: uppercase; }
    ```
    Possible values: `none`, `capitalize`, `uppercase`, `lowercase`.

### Box Model

- **width** and **height**: Define dimensions.
    ```css
    div { width: 300px; height: 200px; }
    ```
- **margin**: Sets outer spacing.
    ```css
    p { margin: 10px; }
    ```
- **padding**: Sets inner spacing.
    ```css
    div { padding: 20px; }
    ```
- **border**: Creates borders.
    ```css
    div { border: 1px solid black; }
    ```
    Possible values: `border-width` `border-style` `border-color`.
- **box-sizing**: Adjusts how size is calculated.
    ```css
    div { box-sizing: border-box; }
    ```
    Possible values: `content-box`, `border-box`.

### Background

- **background-color**: Defines background color.
    ```css
    body { background-color: lightgray; }
    ```
- **background-image**: Sets a background image.
    ```css
    div { background-image: url('image.jpg'); }
    ```
- **background-repeat**: Controls image repeat.
    ```css
    div { background-repeat: no-repeat; }
    ```
    Possible values: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.
- **background-size**: Sets image size.
    ```css
    div { background-size: cover; }
    ```
    Possible values: `auto`, `cover`, `contain`, specific dimensions (e.g., `100px 200px`).
- **background-attachment**: Defines scroll behavior of background.
    ```css
    div { background-attachment: fixed; }
    ```
    Possible values: `scroll`, `fixed`, `local`.
- **background-position**: Sets initial position of background.
    ```css
    div { background-position: center; }
    ```
    Possible values: `top`, `bottom`, `left`, `right`, `center`, and any percentage or pixel values.

### Display and Position

- **display**: Controls element display type.
    ```css
    .hidden { display: none; }
    ```
    Possible values: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`.
- **position**: Specifies position type.
    ```css
    .relative { position: relative; top: 10px; }
    ```
    Possible values: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- **z-index**: Sets element stacking order.
    ```css
    .top { z-index: 10; }
    ```
- **float** and **clear**: Floating properties.
    ```css
    .left { float: left; }
    .clear-both { clear: both; }
    ```
    Possible values for `float`: `left`, `right`, `none`.
    Possible values for `clear`: `left`, `right`, `both`, `none`.

### Flexbox

Flexbox properties create flexible layouts.

- **display: flex**: Enables flex layout.
    ```css
    .container { display: flex; }
    ```
- **flex-direction**: Row or column layout.
    ```css
    .container { flex-direction: row; }
    ```
    Possible values: `row`, `row-reverse`, `column`, `column-reverse`.
- **justify-content**: Aligns items on the main axis.
    ```css
    .container { justify-content: center; }
    ```
    Possible values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.
- **align-items**: Aligns items on the cross axis.
    ```css
    .container { align-items: center; }
    ```
    Possible values: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
- **align-content**: Controls lines when items wrap.
    ```css
    .container { align-content: space-between; }
    ```
    Possible values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.

### Grid Layout

Grid properties define two-dimensional layouts.

- **display: grid**: Activates grid layout.
    ```css
    .grid-container { display: grid; }
    ```
- **grid-template-columns** and **grid-template-rows**: Define rows and columns.
    ```css
    .grid-container { grid-template-columns: 1fr 2fr; }
    ```
- **grid-gap**: Creates space between items.
    ```css
    .grid-container { grid-gap: 10px; }
    ```
- **justify-items**: Aligns items along row axis.
    ```css
    .grid-container { justify-items: start; }
    ```
    Possible values: `start`, `end`, `center`, `stretch`.
- **align-items**: Aligns items along column axis.
    ```css
    .grid-container { align-items: center; }
    ```
    Possible values: `start`, `end`, `center`, `stretch`.

### CSS Units

CSS units define sizing.

- **px (pixels)**: Absolute unit.
    ```css
    p { font-size: 16px; }
    ```
- **em** and **rem**: Relative units.
    ```css
    p { margin: 2em; }
    h1 { font-size: 2rem; }
    ```
- **%**: Percent-based size.
    ```css
    div { width: 50%; }
    ```
- **vh** and **vw**: Viewport units.
    ```css
    div { height: 50vh; width: 50vw; }
    ```
- **vmin** and **vmax**: Relative to smaller or larger viewport dimension.
    ```css
    div { width: 10vmin; }
    ```

### Additional Properties

- **border-radius**: Rounds corners.
    ```css
    button { border-radius: 5px; }
    ```
- **box-shadow**: Adds shadow.
    ```css
    div { box-shadow: 5px 5px 10px gray; }
    ```
- **opacity**

: Sets transparency.
    ```css
    div { opacity: 0.5; }
    ```
- **overflow**: Controls overflow.
    ```css
    div { overflow: auto; }
    ```
    Possible values: `visible`, `hidden`, `scroll`, `auto`.
- **transition**: Smoothly animates property changes.
    ```css
    button { transition: background-color 0.3s; }
    ```
