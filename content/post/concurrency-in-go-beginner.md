---
title: Concurrency in Go from a beginners perspective
description: In this post, I will present my findings of wrinting concurrent code using Go
tags: 
  - Go
categories:
  - Development
work: []
date: 2020-05-07T20:55:12+02:00
publishDate: 2020-05-07T20:55:12+02:00
draft: true
---

I am developing software for a few years now. But one topic I never really touched is concurrency.
In this post, I am going to write down my steps when developing a small web scraper to find dead links
on web pages.

If you want to run multiple threads of your program at one in a single process, many programming languages
have the concept of threads, which are managed by the operating system. In Go, you have `Goroutines`. These
are lightweight threads, managed by the Go runtime[^1]. To create a new
goroutine, you can just prepend the keyword `go` in front of a function call. This function will then be executed
in a goroutine. The website "A Tour of Go" has a good introduction of how goroutines work and what 
they are: https://tour.golang.org/concurrency/1

When I first read about how to do concurrency in Go, I mainly focused on channels. Channels are a way of 
communicating information between two or more goroutines. Here is a quick example of how channels work:

```golang
exampleChan := make(chan int) // channel creation

someVariable := 42

exampleChan <- someVariable   // send the value of 
                              // someVariable to the 
                              // channel

otherVariable <- exampleChan  // receive a value 
                              // from the channel
```

[^1]: https://tour.golang.org/concurrency/1