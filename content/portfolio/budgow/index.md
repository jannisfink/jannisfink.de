---
title: budgow
description: budgow displays the income and expenses of all your accounts. It helps you to know what you are spending.
date: "2021-04-22T20:30:15+02:00"
jobDate: 2021
work: [Golang, Postgres, Kubernetes, React, Typescript]
thumbnail: budgow/budgow.v1.png
projectUrl: https://budgow.com
---

[budgow](https://budgow.com) is the project I'm currently developing. It is a web app that can save and track all your expenses from multiple accounts. With it, you can add tags to individual expenses to keep track of where you are spending money.

The backend is build using Golang, with a Postgres database. The frontend uses React and Typescript. For this project, I'm using contiuous deployment. With every commit to the `master` branch, a new Docker image is build and deployed in a Kubernetes cluster.
