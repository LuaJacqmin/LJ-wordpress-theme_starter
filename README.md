# webpack-project-template-LJ
Simple webpack template using JS and SCSS. 
Helps you work with grids thanks to some mixins I create and display a visual grid when you hit G on your keyboard.
Also you can work with php files

## Installation
1. Clone the repository with the method of your choice
2. Remove the .git folder and .gitattributes files
3. Go to your local copy
4. Use "npm i" to install all needed dependencies
5. Open webpack server by using "npm run dev" or build and minify your work by using "npm tun build". Please be aware that you may need to manually reload the first time you use webpack server

## Before diving in
I suggest you to take a look at my files before work with. There's a lot of files that can be removed, but that I put in my project because it look prettier when you open the webpack server.
I commented my files a lot (or at least I tried to !) so don't hesitate to take a look at each files. But here's some advices

### HTML pages
1. You can totally remove credits.html and UIkit.html. These two folders are here mostly for informations purpose and are no needed in all projects.

2. In index.html <head> you'll find favicon tags and meta tags. Feel free to change them (names and links) or just change the files in assets but without changing their names.


! Warning ! you can't change script src and stylesheet src due to the fact that names are automatically assigned by webpack.

### Assets
You can change all assets obviously. Please pay attention that webpack can throw some errors if you remove assets that are used in html, scss or js files.

### JS functions and files (Scripts folder)

1. A menu function is already set in scripts/functions/menu.js.
2. You can't remove scripts/functions/importFiles.js because it makes webpack imports files in dist folder. However you can modify it if you need to import files with extensions that are not already written in the function
3. You can remove grids.js if you don't need it
4. Hello.js is the file I usually use to write my JS
5. Don't forget to import all new JS files in app.js and don't delete "main.scss" import


### SCSS files (styles folder)
I use BEM method but also a system that breaks appart appearance of elements and layout itself. I also use mobile first method

For example, I change the appearance of my buttons using .btn class. But each button will be placed in their layouts using layout files and a defined class for that. In a hero, my button will also have .hero__btn class e.g.

#### Main.scss
Import your scss files here and don't modify it name unless you also change it in "App.js"
Also, if you don't know sass/scss just use css in the "main.scss" file, it will work as well.

#### Components folder
You can find elements that are already stylised here. I made a file for text, btn and img since they are the elements I use the most. You can totally delete it if you want to work differently

#### Layout folder
In layouts folder you can find layouts I use, including header.scss that is use for menu and logo position.

You can delete "sides" folder entirely.
You can modify all others files that are in layout folder. Some comments are still in theses files themselves

#### Utils
1. I use "GlobalClass.scss" for some "!importants" classes that must be prioritised above all other classes
2. Don't mind "GridOverflow.scss", that is a grid features that must be reworked. You can delete it
3. Don't modify "Grids.scss". It contains all the mixins I'll talk about later in this readme. Don't modify it either. You can find some comments about the mixins directly in the file.
4. "Normalize.scss" is the file I use for "normalizing" my elements, but it is really brief so you can either delete or modify it.

#### Variables
Variables.scss is the file I use to create all the variables I'll use in a project, including colors, fonts, breakpoints and grids. The file is highly commented so you can take a look at these comments

Note that $xlBP is a breakpoint that I use to fixed the width of my layouts when the width of the screen is bigger than this breakpoint.

### Mixins and others
In grids.scss, you'll find a lot of mixins I create.
Here's the list and how they work :

1. Paddings
=> sidePadding($pad) : add $pad on padding left and right.
=> topPadding($pad) : add $pad on padding top and bottom.
=> padding($pad) : add $pad on each padding
Also, box-sizing is set to border-box, which means padding is included in the total width/height of the element

2. Margins
=> sideMargin($margin) : add $margin on margin left and right.
=> topMargin($margin) : add $margin on margin top and bottom.
=> margin($margin) : add $margin on each margin

3. grid
=> set width to 100vw
=> display a grid that take n-number of column, n can be set in variables.scss (deskNmOfColumns, tabletNmOfColumns, mobileNmOfColumns)
=> display a n-width column and row gap, that can be set in variables.scss (deskColumnGap, deskRowGap, ...)
=> set a padding on left and right, that can be set in variables.scss (deskSidePadding, tabletsidePadding, ...)
=> automatically adapts regarding the width of the screen

4. gridColumn($gridStart, $span)
=> set place of an element on the grid, $gridstart is the column where the element begins and $span the number of columns it takes

5. columnsWidth($numCol)
=> set the width of an element based on the width of columns, but without being placed on the grid layout.

Example : columnsWidth(6), the element will be 6 columns large but does not need to be in a grid itself

6. columnsWidthPlusOneGap($numCol)
=> The same as columnsWidth($numCol), but the element will be $numCol columns + $numCol gap large

7. gridWidth($gridStart, $span)
=> Set a classic grid-column property and make sure the element would take all the width that it could

