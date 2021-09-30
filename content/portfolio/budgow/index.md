---
title: budgow
description: budgow displays the income and expenses of all your accounts. It helps you to know what you are spending.
date: "2021-04-22T20:30:15+02:00"
jobDate: 2021
work: [Golang, PostgreSQL, Kubernetes, React, Typescript]
thumbnail: budgow/budgow.v1.webp
projectUrl: https://budgow.com
---

[budgow](https://budgow.com) is the project I'm currently developing.
It is a web app that can save and track all your expenses from multiple accounts.
With it, you can add tags to individual expenses to keep track of where you are spending money.
I'm planning on open sourcing it as soon as it's has matured to a degree where it makes sense to do so.
Right now, it is not possible for anybody (except me) to create an account and login, since the software has not yet reached my desired level of maturity.

The backend is build using Golang, with a PostgreSQL database.
The frontend uses React and Typescript.
While I'm very happy with the basic tech stack (PostgreSQL + Golang + Typescript), the rest of the stack still needs some figuring out.
At first, I had used [beego](https://beego.me) for almost everything (router + ORM).
Since then I have switched to [Gorilla](https://www.gorillatoolkit.org/) for the router, which gave me much more control and better integration into my error handling and access control.
The ORM still uses beego. It works, but has some rough edges, so I will most likely remove it medium term.

For the frontend, I used to use [Redux](https://redux.js.org/) with React, for data fetching and caching I used [Redux-Saga](https://redux-saga.js.org/).
Both have since been removed and replaced with [Recoil](https://recoiljs.org/).
In the medium term, I want to add [React Query](https://react-query.tanstack.com/) for data fetching and caching.
When adding React Query, I will reevaluate my decision for Recoil.
It might be just too powerful for the job.
With [zustand](https://zustand.surge.sh/) (as an example), there are much smaller and simpler alternatives for state management.

As it has been the case with all my projects for a few years, I've automated every aspect of testing, compiling, and deploying.
Specifially, I'm using GitLab CI to build and test the frontend and backend, build the docker image and deploy it to the kubernetes cluster.
