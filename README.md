# Superhero database

## Links

- [About](#about)
- [Users guide](#users-guide)
  - [Add new hero](#add-new-hero)
  - [Main menu](#main-menu)
  - [Hero page](#hero-page)
- [How to run](#how-to-run)
  - [Starting local server](#starting-local-server)
  - [Make build](#make-build)
  - [Development server](#development-server)

## About

This is a training project, used technologies - React, NodeJS, MongoDB.  
You can add, remove, edit heroes.

## Users Guide

### Add new hero

You can add new hero by pressing to big 'plus' image on main page.  
You need to enter heroe data to every text input and choose images from your disk (optional, if no will used "No Image" picture). If you want to clean inputs, just press "Reset" button on botton of page. If all as you want - just press "Create" button, if all right, next page will be changed to main where you will see new hero card. 

### Main menu

At main menu you can see heroes, by 5 to page (or less if it is last page or heroes count less then 5). At bottom you cant see navigation panel. Here present two nav rows and numbers with current page and page count.

If nav arrow is gray, that means that it is disabled and you cant navigate to this side. Active arrow is black.  

IF you want to return to the main menu from other page - just click to the title, it a link!

### Hero Page

On main menu page you can press to each hero container, next be opened the hero page, where you can see all hero data.

#### Delete Hero

On hero page you can delete this hero - press to "Delete" button and next be opened main page, but now without this hero.

#### Delete Images

You also can delete hero images from that page. If images present at bottom, you can see the trash can icon. Press to this button and image will be moved to delete state. To confirm deletion you must press the "Save changes" after that you will be redirected to main page. 

But if you don't want to confirm changes, you always can reset all data by pressing "Reset changes"

#### Change Hero Data

You can change each line of existing hero data. Press to "Edit" button to activate editing mode. To close this mode press "Edit" again.  

After editing you can reset inserted data and images by pressing "Reset changes". To save press "Save changes".

## How To Run

### Starting Local Server

Type `npm run local-server` and server will be started on `http://localhost:3001`.

### Make Build

If you want to use server separately from development server, you need to make fresh optimized build of project, to make it write to terminal `npm run build` and wait while it be done. Don't forget to change all addresses.

### Development Server
You can use usual React server by `npm start` command. But you need to use API. For that run local server and next start React dev server. Local server uses CORS and can be as API server.  
Dev server address is `http://localhost:3000`. But don't forget to change all links to local server, as here `fetch('http://localhost:3001/getSomething')`

## At Conclusion

Be good in future to make unit test (by defaul in CRA installed Jest) and optimize code (yes, now it's not so good).
