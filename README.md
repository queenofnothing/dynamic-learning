[![Build Status](https://travis-ci.org/JithinKS97/dynamic-learning.svg?branch=master)](https://travis-ci.org/JithinKS97/dynamic-learning)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
# Dynamic Learning
#### by Jithin KS ([@JithinKS97](https://github.com/JithinKS97))

## Overview of the app

Dynamic Learning is an online platform where teachers and creative programmers collaborate to create and share STEM lessons which make use of interactive visualisations created in p5.js.

The project was started as a part of GSoC 2018. The main objective in GSoC 2018 was to lay down a basic structure of the app which will act as a foundation for future developments and will provide an idea about the app to the teacher community and future contributors.

The three core objectives of the web app are -

1) Teachers are able to create, present, save and share lessons which make use of interactive visualisations.
2) Teachers are able to collaborate with programmers to produce new visualisations.
3) Students are able to view the video lessons prepared by teachers and should be able to use the simulations
the same time they watch it.

## Link to the webapp

http://dynamiclearning.io

## Link to Github repo

https://github.com/JithinKS97/dynamic-learning

## To know more about the project, take a look at these

#### Processing Medium post
https://medium.com/processing-foundation/improving-science-and-math-education-using-p5-js-d434beea465c

#### Tutorial manual created in Gitbook
https://dynamic-learning.gitbook.io/dynamic-learning/

#### GSoC works
https://github.com/JithinKS97/dynamic-learning/tree/master/GSoC%20proposals  
[2019 GSoC](https://summerofcode.withgoogle.com/projects/#4682013469048832)  
[2018 GSoC](https://summerofcode.withgoogle.com/archive/2018/projects/5629805013762048/)

## How to set up the development environment

1) Install Meteor.js - https://www.meteor.com/
2) Install git
3) Clone the dynamic-learning-app repository
4) Install the node dependencies by executing the command `meteor npm install --save` from the root directory
5) Start the app with the command `meteor` and the app will start running in localhost:3000 (By default)
6) Use the command `npm run full-test` to run unit tests. The server side tests results will appear in the terminal and client side test results are shown in the browser

## Build using Meteor.js

The webapp is build on top of full stack Javascript framework Meteor.js with React.js in the view layer. Meteor.js comes with inbuilt Mongo DB database which is used in the app. Semantic UI React is used for obtaining styled ui components used throughout for making the ui of the app.

## Main React components

Below are the main React Components of the app and much of the work in GSoC 2018 was focused on the development
of these React components. These main React page components can be found in 'client/ui/pages'.

The routes of each of the pages can be found in the 'clients/routes' directory. Detailed documentation for each
of the components are provided in the components' js files.

### 1) Workbook creator

##### Component - CreateWorkbook

This is the area where teachers create the workbooks. It is basically a drawing app on which simulations and textboxes can be added. Each workbook consists of a sequence of slides which is an array. Each element in the array consists of annotations of string type, array of simulations, array of textboxes.

Each simulation is an iframe which is obtained from the online p5 text editor export feature.

### 2) Login and Signup components

##### Components - Login, Signup

The login and sign up features are made by making use of the inbuilt authentication tools in Meteor.

### 3) The workbooks, simulations, lessons organization

##### Components - WorkbooksDirectories, LessonsDirectories, SimsDirectories

React Sortable tree component (https://github.com/frontend-collective/react-sortable-tree) is used for building the interface for the organization of workbooks, lessons and the uploaded simulations.

### 4) Request Forum

##### Component - Request

For each workbook, a request forum can be created by the teacher where a request for a new simulation can be made. These requests are visible to all the other users of the app and anyone logged in can participate in the discussion for the development of a new simulation.

### 5) Sharing of workbooks, lessons and simulations

##### Components - SharedSims, SharedWorkbooks, SharedLessons

The users can share workbooks, lessons and the simulations with the other users if they want. I've used the meteor easy search component for implementing the search (https://github.com/matteodem/meteor-easy-search)

### 6) Creation of Lessons

##### Component - Lesson

This is the component where we can create lessons. Each lesson consists of a series of slides and on each slide there will be a video and the associated simulations. When the creator of the lesson views the component, he/she will have options to edit the lesson (Add more slides, add video, add simulations) and for others, they can only view the lesson.

### 7) Exploring the App

##### Component - Explore

Users who are not logged in visiting the app will be able to view all the lessons, workbooks and request forums that have been created and shared with public so that they get an idea about the app.

### 8) Adding simulations and the communication between them and the app

##### Component - SimContainer

Simulations are added to the app by making use of the iframe export feature of the online p5 text editor. One of the challenges that I faced 
was the implementation of the communication between the webapp and the iframe. [Cassie Tarakajian](https://github.com/catarak) helped me with this. She suggested me to use MessageChannel API.

Another functionality I wanted to add was the ability to save the state of the simulations. This can be achieved by alloting a Javascript object for each of the simulation in the database. The Javascript object can be saved and loaded using MessageChannel.

#### Above are the main React Components of the app and the you can find the other React Components in the'client/ui/components' folder.

I've provided necessary documentations in the components' js files in all the areas where I felt like clarifications are necessary.

#### Icons

Icons have been used from the site `http://react-icons.github.io`

## Features that can be added

1) In GSoC 2018, my main target was to develop the overall basic structure of the application on top of which further development can be done. I haven't given much emphasis on the design aspects and didn't go much into the styling (The Components of Semantic UI React comes up with the essential styles that are needed). The app needs a general styling template.

2) Unit testing - I've added many server side and client side tests, but more tests are needed.

3) Enhancing the discussion forum- The forums area can be enhanced by providing more features like providing Avatars for each users, voting for the comments etc.

4) Adding Comments forum for the lessons.

5) Profile page for the users and notifications.

6) Login and Signup using Github, Google, email verification, password recovery.

For feature enhancements, bug reports and contributions

You can email me to jithunni.ks@gmail.com or you can create an issue in the repo.

## Acknowledgement 

I'm extremely thankful to Processing Foundation for having the faith in me and giving me an opportunity to start the project. There have been several situations where I have been stuck. I express my gratitude to my mentor [Saber Khan](https://github.com/saberkhaniscool), other members of Proessing Foundation [Cassie Tarakajian](https://github.com/catarak), [Lauren McCarthy](https://github.com/lmccart), [Daniel Shiffman](https://github.com/shiffman), [Cassey Reas](https://github.com/REAS) for getting back to me and providing me with intelligent advices and suggestions when I contacted them.

I've started this project and doing it with my friend [Anupam Asok](https://github.com/Anu-Asok). I'm so grateful to him for being with me in the development of this project.

I'm so grateful to [Andrew Mead](https://github.com/andrewjmead) and his course in udemy Full Stack Web Development using Meteor https://www.udemy.com/meteor-react/ for it has helped me greatly and Andrew has responded to each and every queries of mine.
