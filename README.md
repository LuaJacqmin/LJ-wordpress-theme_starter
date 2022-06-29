# WORDPRESS THEME STARTER
A little wordpress theme starter with some pre-styled elements

## Installation
1. Clone the repository with the method of your choice
2. Remove the .git folder and .gitattributes files
3. Go to your local copy
4. Use "npm i" to install all needed dependencies
5. Open webpack server by using "npm run dev" or build and minify your work by using "npm tun build". Please be aware that you may need to manually reload the first time you use webpack server

## Before diving in
I suggest you to take a look at some files before starting to code.
Some files can be deleted, some cannot. I tried to comment my files a lot to help you as much as I can.

### PHP pages
I created index, single, singular, rchive, 404 and front-page. Theses pages are not customized for the moment

#### Footer and Header
In "INC" folder, you have a "my-footer" and "my-header" page. "my-header" has a logo and menu pre-builted and styled.

#### Template folder
A folder where you can put your customs templates

### SCSS
In the "styles" folder, you can find some files that pre-styled somes elements.

#### Components
Pre-styled components : 
- buttons : just add "btn" class to you btn
- form : add "form" class to your form and you input will be automatically styled
- link : thanks to "link" and "external-link" class, you can easily styled your links
- text : prestyled titles and paragraph.

#### Elements
Footer, header, menu and slider are already pre-styled.

#### Grids
This folder contains 3 files (if you dont use grid, just remove it)
- grid-help : a styled grid that can be displayed to help you design layouts
- grid-mixins : some helpfu mixins to design with grid faster. Informations are displayed in the file.
- grid-variables : customize number of columns, size of gaps, and more in this file

#### Layout
A hero is pre built

#### utils
- Global.scss : some global class as well as 'hidden' (display: none) and 'invisible' (opacity : 0)
- Mixins : you can create your own mixins here
- root : body and main style + css variables based on scss variables

#### variables
A lot of variables : colors, fonts, breakpoints... all is customizable

### JS
Do not remove importFiles.js, it makes my webpack config viable.
Forms.js helps to display files name when you use input file
Menu.js is a little function that makes appear the menu b clicking on the menu btn.
Grids.js create a visual grid you can display by pressing G on your keyboard. This one is removable.
