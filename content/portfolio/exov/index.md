---
title: ExOv
description: ExOv displays the income and expenses of all your accounts. Built with Go, Postgres and React.
date: "2020-10-22T20:30:15+02:00"
jobDate: 2020
work: [Golang, Postgres, Kubernetes, React, Typescript]
thumbnail: exov/exov.v2.png
projectUrl: https://exov.org
---

[ExOv](https://exov.org) is the project I'm currently developing. It is a web app that can save and track all your expenses from multiple accounts. With it, you can add tags to individual expenses to keep track of where you are spending money.

The backend is build using Golang, with a Postgres database. The frontend uses React and Typescript. For this project, I'm using contiuous deployment. With every commit to the `master` branch, a new Docker image is build and deployed in a Kubernetes cluster.