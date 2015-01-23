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

- CSS Autoprefixing.
- Watches for changes.
- Automatically compile SASS.
- Annotated Gulpfile.js for extending.
- Includes jQuery CDN and relative fallback.
- Encourages one-file CSS/JS in the view (HTML) for performance.
- Built-in build script for auto-minification of CSS and JavaScript files for production.


## Structure

A sample project structure would be:

````
├── www
│   ├── css
│   ├── js
│   ├── img
│   └── index.html
├── src
│   ├── js
│   │   └── functions.js
│   │   └── main.js
│   └── scss
│       ├── mixins.scss
│       ├── responsive.scss
│       └── style.scss
├── node_modules 
├── package.json 
├── gulpfile.js
├── README.md
└── .jshintrc
````

## License
Copyright (c) 2014 Alan Gabriel Dawidowicz 
Licensed under the MIT license.