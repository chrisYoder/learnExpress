# Introduction to Express

## Objectives
* What is a framework? How is it different from a Library?
* What is Express?
* Why are we using Express?

## Frameworks v. Libs
* [Frameworks v Toolkits v Libraries](https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library)
  * Inversion of Control
    * With libs you are in control. Basically you can call the functionality when and where you want.
    * With frameworks the control flow is already in the framework and there is just a bunch of predefined "white spots" that you can fill out with your code.

## Express and Why
* Express 
  * it does a lot of the menial, basic work for us.
  * it uses JS
  * most popular framework on npm
  * it is a lightweight framework
  * unopinionated means that it is flexible
 

# First Express App
* Review an existing app (Dogdemo).
* Review HTTP response/request lifecycle
* create our own simple express app


## Review of Dog Demo App
* it seems like the bulk of the backend has to do with:
    * listening for requests
    * how to respond to them
    * persistently storing data.
## Review of HTTP res/req cycle
* when you make a GET request you are querying a database for some info
* the server then decides on how to respond
## App

