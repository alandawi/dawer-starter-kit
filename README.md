# Dawer Starter Kit

A simple way to kick start gulp based web app projects. 

## Getting Started

First you need to install Gulp:

```shell
npm install -g gulp
```

To start using the Dawer Starter Kit, copy all files in your folder and run the following:

```shell
# Locate proyect directory
$ cd myproject_dir
# Install node dependencies
$ npm install
# Start gulp and watch for changes
$ gulp
``` 


## Features

- CSS Autoprefixing
- Automatically minify css files
- Automatically compile Sass
- Automatically uglify script files
- Watches for changes
- Generates an optimized build

## Structure

A sample project structure would be:

```
|-- css
|  |-- scss
|  |  |-- functions.scss
|  |  |-- helpers.scss
|  |  |-- screen.scss
|-- js
|  |-- build
      |-- main.min.js
|  |-- vendor
|  |  |-- jquery-1.11.1.min.js
|  |  |-- modernizr-2.8.3.min.js
|  |-- functions.js
|  |-- main.js
|-- node_modules
|-- gulpfile.js
|-- package.json
|-- index.html
```

## License
Copyright (c) 2014 Alan Gabriel Dawidowicz 
Licensed under the MIT license.