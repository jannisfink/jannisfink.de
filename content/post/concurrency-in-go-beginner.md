---
title: Concurrency in Go from a beginners perspective
description: In this post, I will present my findings of wrinting concurrent code using Go
tags:
  - Go
categories:
  - Development
work: []
date: 2021-05-15T20:55:12+02:00
publishDate: 2021-05-15T20:55:12+02:00
draft: false
---

I am developing software for a few years now. But one topic I never really touched is concurrency.
In this post, I am going to write down my steps when developing a small web scraper to find dead links
on web pages.

## The goal

I wanted a simple tool to check for dead links on a given website. Although there
[many tools out there](https://duckduckgo.com/?q=dead+link+checker), I wanted to write my own, because this
task seems like a good starter project. My goal was to build a command line tool with an interface like this:

```bash
yalc https://jannisfink.de
```

The name stands for "yet another link checker", the first name that came to my mind. I might change it
prior to finishing. For now, the only parameter would be a url. Starting with this url, the whole page
should be scanned recursively for everything that looks like a link. When the hostname of a referenced
website is not the same as the given url, it should not be followed, but only checked.

Additionally, I wanted this tool to have a non zero exit code, if dead links are found. This way, I can use
it in an automated way to test any website reguarly for dead links. You can see this in action here:
https://gitlab.com/jannisfink/linkcheck4jannisfink.de

## Concurrency in Go

If you want to run multiple threads of your program at one in a single process, many programming languages
have the concept of threads, which are managed by the operating system. In Go, you have `goroutines`. These
are lightweight threads, managed by the Go runtime[^1] instead of the operating system. To create a new
goroutine, you can just prepend the keyword `go` in front of a function call. That function will then be executed
in a goroutine. The website "A Tour of Go" has a good introduction of how goroutines work and what
they are: https://tour.golang.org/concurrency/1

## Data management

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

After some initial trials, I decided against channels for communication. I found it easier to just collect
all links on a given page and then recursively collecting all links for them. The recursion happens within
goroutines, so I had to make sure that the program would not terminate before all goroutines are finished.
For this, I used the `sync` package[^2]. This package contains a mechanism called `WaitGroup`, which is
exactly what I needed. Here is a short example:

```golang
import (
  "time"
  "sync"
)

func doStuff(wg *sync.WaitGroup) {
  time.Sleep(5 * time.Second)

  wg.Done()
}

func main() {
  wg := &sync.WaitGroup{}
  wg.Add(1)

  go doStuff(wg)

  wg.Wait()
}
```

Because of the `WaitGroup`, the main function won't return until the goroutine `doStuff` has called `wg.Done()`.

[^1]: https://tour.golang.org/concurrency/1
[^2]: https://golang.org/pkg/sync/