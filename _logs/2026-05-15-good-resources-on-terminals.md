---
layout: post
title: "Good resources to learn about terminals"
data: 2026-05-15 20:23:00 +0530
categories: programming
tags:
  - terminals
  - programming
  - resources
---

Terminals have fascinated me ever since I got into programming.

In fact, I once attempted to make something like *Raycast*, but for terminals. That was long before Raycast was even a thing. Naturally, the project eventually ended up in the graveyard of my failed side projects. But it was fun. I even got to showcase it in one my job interviews. 

Yes, that weird thing got me a job.

Now, years later, when LLMs have made terminals interesting to more people than ever (even to the people with no background in programming), I’ve found myself pulled back into building stuff for terminals again. Except this time, I decided to understand them properly.

You know, I’ve always had these questions about terminals
1. How do they work at the system level?
2. What are *Terminal Emulators*? If they are the emulators, what are the terminals, then?
3. Why can’t we render powerful graphics on the terminals? Although, folks are now coming up with some [interesting things on terminal emulators](https://ratty-term.org/) too.
4. What about the character sequences like `\x1B[...]` that we need to make the text beautiful?
5. How do complex full-screen applications like Neovim run within the terminal?
6. What are TTYs and PTYs? And what’s with the “master” and “slave” things?

[yada, yada, yada.]

You get it.

I’ll probably create a good resource on terminals — like a long post (or a series of them) or a repo with runnable programs once I feel I understand things well enough.

But until then, if you too are curious about the computer terminals and how they work, here is a list of resources to read and learn from.

## Getting started
1. A bit of computing history is essential to understanding the terminals. So [A Guide to the Terminal, Console, and Shell](https://thevaluable.dev/guide-terminal-shell-console/) by valuable.dev is a good starting point.
2. Next in line would be [The TTY Demystified](https://www.linusakesson.net/programming/tty/) by Linus Åkesson. Which also contains a bit of history but quickly moves from surface-level concepts to technical details.

That’s it. You can stop right there and you’d still know more about terminals than most developers around you.

## Diving deep
The road ahead gets a bit more systems-y. So if that’s your thing or you’re innately curious to go a level down to understand things much better, below are the resources for that.

1. [GNU/Linux shell related internals for SRE](https://biriukov.dev/docs/fd-pipe-session-terminal/0-sre-should-know-about-gnu-linux-shell-related-internals-file-descriptors-pipes-terminals-user-sessions-process-groups-and-daemons/) by Viacheslav Biriukov.\
	 This thing is pretty nice. It’s a 4-part series that starts with Linux file descriptors and explains *pipes* and *processes* on the way to finally get to the terminals. Good stuff.
2. Aram Drevekenin (who’s an indie software developer) has been writing extensively about his project *Zellij*. If you haven’t heard about it, you should [check it out](https://zellij.dev/)!\
	 Here are a couple of posts on how Zellij is built, the technology involved and other things.
	 - [Anatomy of a Terminal Emulator](https://poor.dev/blog/terminal-anatomy/)
	 - [Terminal sessions you can bookmark: Building Zellij’s web client](https://poor.dev/blog/building-zellij-web-terminal/)
	 - [Why Zellij?](https://poor.dev/blog/why-zellij/)

## OpenTUI
Finally, the newest thing in the world of TUIs — OpenTUI.

OpenTUI is a framework (from [Dax](https://thdxr.com/) and other amazing people at [Anomaly](https://anoma.ly/)) for building terminal apps in TypeScript. Under the hood, it’s powered by a Zig core for optimized and performant rendering in the terminal. It even has bindings for React and Solid, which makes the developer experience surprisingly sweet. 

Beautiful engineering, imo.

It’s hard to find software today that’s designed and built with such care and attention. Good thing, there!

If you’d like to understand how it all works internally, Simon Klee — one of the people working on OpenTUI — wrote a wonderfully detailed and interactive post on [how OpenTUI works](https://simonklee.dk/static/lab/opentui-explained/). It covers TTYs to a good extent and then dives deep into the algorithm that powers OpenTUI.

---

I’ll keep this post updated with any new resources I find.

And until next time, have fun writing code and building things.


Peace,
yx.
