# The talk

## The fire-fighter

the idea is that you got a new robot for free
on a recent purchase on Wish

it comes with a manual that says it supports
teaching it to do stuff

the point is
  - teach the robot to observe what is happening
  - teach the robot to observe the world

examples of fire:
- kid with flame-thrower
- npm install inside a docker container in a vm
- stove on
- galaxy 8 charging


Then we move on showing how this would map in a web application, and maybe even in a backend service...

- no libaries/frameworks specific, just concepts
- build a "game" with the fire example where you are a god

We might not be able to fit 'redux-heat' in the talk. We do it in the Q&A.

After the Q&A we can have a thank you slide with some links.

## Title ideas

- Side-effects of a function of state
- A tale of fire?
- State as the single source of truth?
- Drumming?
- Turning heat into useful work
- React, redux and side-effects
- Async operations in modern web applications
- Fatigue-less side-effects
- How to make stuff happen in your web application?
- How to write functions that don't return and don't suck
- React + Redux
- Keep it simple stupid: side-effects without fuzz
- Blow up the Ivory Tower
- How to survive the Ivory Tower
- How to write applications that have consequences
- Applications with consequences


## Points for the Abstract

- interact with the real world (backend systems, user interaction...)
- logic is easy, but interaction is hard
- application can be drawn in a white board (flow-charts are easy to work with) ??? (it is imperative and maybe doesn't make sense)
- No filling of details meme
- How to model consequences based on data and not user actions
- All reality needs to reflected in your data
- Connecting back to reality

## Abstract

Install React, install Redux... now fill the details. Every application has to do side-effects, so why our current solutions don't come bundled in with a default solution? Maybe they aleady are!! Redux core concept is a reducer of actions that output a resulting state, we can use this state to render a UI with React, and that is pretty straightforward, so why aren't we doing the same on respect to requests, async operations or any side-effect for that matter?

It comes a time in any adulthood life when you need to leave your own inner word and interact with external people and things...

There


It is the case with every web application

## Abstract 2

In the real world, you make decisions based on what you know. What data you have has consequences.



## Silly ideas

- There is a state in your side effect
- Monad is just a monoid in the category of endofunctors


## Proposed constraints

- Your UI has no state
- Your UI is a pure function
