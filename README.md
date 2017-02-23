# Stopwatch

This project was created by Madeleinel and Eleanombre as a pair-programming exercise.

+ [Languages used](#languages-used)
+ [Ping Pong Programming](#what-is-ping-pong-programming?)
+ [Test-driven development](#test-driven-development)

## Languages used:

+ HTML
+ CSS
+ JavaScript

## Test-driven development:

TDD is an approach to software development that is meant to make you think through the requirements and/or design you want before you start writing the code.  
You write a test, and then just enough code to fulfill that test. Only once that is done do you write and work to fulfill the second test, and so on.  
It should follow the following steps:
+ Write a failing test
  + Ie you should write a test for what you want to accomplish; this test should not succeed based on the current code
+ Write code to make the test pass
  + Write just enough code required to make the text pass
  + Also make sure that previous tests are still passing
+ Refactor the new code
  + Try to clean up and simplify the code you've just written, while still maintaining all new features.

## Ping Pong Programming

### What is Ping Pong Programming?
(other than a tongue twister...)

![An image of extreme ping pong](http://www.asianreporter.com/film/2007/24-p20-Ping%20Pong.jpg)

Ping Pong Programming (P3 for short) is a programming technique which combines Test-driven development (TDD) and pair programming.

### Key features:
* programming in a pair
* testing after each significant change/step in code
* as small steps as possible

It is described by Dave Hoover in [his article on agile connection](https://www.agileconnection.com/article/ping-pong-programming-enhance-your-tdd-and-pair-programming-practices?page=0%2C1) as:

`... a curious mix of competition and collaboration...`

### How it works:
A pair (A and B) are working on the same project
1. A writes a test and makes sure it fails
2. B writes code which will pass A's test
3. B then writes a test which will fail
4. A then writes code which will pa ss B's test

### Links
* [A blog post on 3P programming on codeschool.com](https://www.codeschool.com/blog/2014/04/30/railsconf-2014-coding-dojo/) (2014)
* [Ward Cunningham's Wiki article on 3P programming](http://wiki.c2.com/?PairProgrammingPingPongPattern) (2011)
* [Dave Hoover's Agile Connection article](https://www.agileconnection.com/article/ping-pong-programming-enhance-your-tdd-and-pair-programming-practices?page=0%2C0) (2005)


## Progress:

+ Have a box for the time, and three buttons; start, stop and reset
+ Display numbers within .time-container, using JS
+ Create js function to make the time increase (seconds only)
+ Display time increase within .time-container (seconds only)
+ Set up js function to translate 60s = 1min & 60min = 1hr
+ Link increaseTime() to the Start button; so clicking the Start button will start increasing the time
+ Create function to make the Stop button work
+ 
