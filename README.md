# Univers42

We are a group of students from the 42 school network. This organization is where we centralize the work done throughout the Common Core curriculum and beyond — a shared space to build, iterate, and keep track of what we learn along the way.

The 42 model is peer-to-peer, project-based, no teachers. Everything here was written by students, evaluated by students, and reflects real attempts at solving real problems — not textbook exercises.

---

## What we work on

The projects here follow the natural progression of the 42 Common Core, starting from low-level C foundations and going all the way up to full-stack web development.

### C foundations

The early projects are about understanding how things work at a low level — memory, file descriptors, processes, signals. Nothing is given to you; you reimplement it yourself.

- **libft** — a C standard library from scratch. The first project everyone does. You write `strlen`, `memset`, linked list utilities, and more without calling anything from `<string.h>`.
- **GetNextLine** — a function that reads a file line by line using a static buffer. Teaches you how file descriptors actually work.
- **push_swap** — sorting integers using two stacks and a restricted set of operations. The goal is to minimize the number of moves. Algorithmic thinking, nothing else.
- **minitalk** — two processes communicating using only Unix signals (`SIGUSR1` and `SIGUSR2`). You encode and decode data one bit at a time.
- **fdf** — reading a wireframe map from a file and rendering it in 3D using isometric projection. Your first contact with graphics programming.
- **philosopher** — the dining philosophers problem. Five philosophers, five forks, one table. You implement the solution using threads and mutexes without deadlocks or data races.
- **mini_shell / sh42** — a shell that handles pipes, redirections, environment variables, and built-ins like `cd` and `export`. The biggest C project before the system track. File descriptors everywhere.

### Going deeper

Once the basics are solid, the projects get harder and more specific.

- **minirt** — a minimal ray tracing engine in C. You compute light rays, intersections with spheres and planes, shadows, and basic lighting. CPU-expensive by nature.
- **ft_malloc** — a reimplementation of `malloc`, `free`, and `realloc`. You manage memory zones yourself using `mmap`.
- **Inception** — a Docker Compose setup with NGINX, WordPress, and MariaDB, all configured from scratch in a virtual machine. Introduction to containerization and system administration.
- **born2root** — Born2beRoot. Setting up a Debian server, configuring SSH, UFW, sudo rules, password policies, and a monitoring script. Your first taste of sysadmin work.
- **ft_linux** — building a Linux system from scratch, following the Linux From Scratch guide. You compile the kernel, build a toolchain, and assemble a bootable system by hand.
- **en-decoder_png** — a PNG encoder/decoder written in C. You parse and produce binary files following the PNG specification.

### C++

The C++ piscine is a set of modules that introduce object-oriented programming after months of C.

- **picine_cpp** — solutions to the 42 C++ modules, covering classes, inheritance, polymorphism, templates, STL containers, and more.
- **libcpp** — a C++ utility library built during and after the piscine.

### Tools and utilities we built for ourselves

During the curriculum you end up needing things that don't exist, so you build them.

- **Examen42** — solutions to the 42 exam ranks 02, 03, and 04. Useful for preparation. The exams are timed, solo, and graded automatically.
- **evals42** — a JavaScript tool to help with the peer evaluation process at 42.
- **minitalk_tester** — a shell script tester for the minitalk project.
- **log_debug** — a lightweight debug logging library in C.
- **catch_error** — a small framework for C error handling without stacking `if` checks everywhere. Designed to be low overhead.
- **design-patterns** — a reference repo for common software design patterns.
- **scripts** — miscellaneous utility scripts used across projects.
- **QA** — quality assurance and pentesting scripts in Python, used alongside the transcendence project.

### Full-stack and beyond

After the Common Core, the complexity shifts from system-level to full-stack and architecture.

- **transcendence** — the 42 Common Core capstone project. A full-stack web application built by a team of five: NestJS backend, React frontend, PostgreSQL, Redis, WebSockets, OAuth with the 42 API, all running in Docker Compose. The whole thing — authentication, real-time features, database migrations, CI, containerization — built from scratch.
- **mini-baas / mini-baas-infra** — a mini Backend-as-a-Service with its own infrastructure layer. An experiment in building something production-like outside the curriculum constraints.
- **prismatica** — a TypeScript project, currently in development.
- **libcss** — a CSS utility library in TypeScript.
- **portfolio** — personal portfolio site.

---

## Members

The organization currently has two active members:

- [LESdylan](https://github.com/LESdylan)
- [danielfdez17](https://github.com/danielfdez17)

---

## On the 42 model

42 is a school without teachers, without lectures, and without a fixed schedule. You learn by doing projects, getting evaluated by peers, and evaluating others. There is no shortcut — you either understand the project or you don't pass the evaluation.

This organization reflects that. The code here was written under real constraints: limited time, no Stack Overflow during exams, peer review that asks you to explain every line. It is not always clean and it is not always finished, but it is ours.

---

## Repository overview

| Repository | Language | What it is |
|---|---|---|
| transcendence | TypeScript / HTML | Full-stack capstone project |
| Examen42 | C | Exam rank 02–04 solutions |
| GetNextLine | C | Read file line by line |
| philosopher | C | Dining philosophers (threads/mutexes) |
| mini_shell / sh42 | C / Makefile | Shell with pipes and redirections |
| libft | C | C standard library reimplementation |
| push-swap | C | Stack-based sorting algorithm |
| minitalk | C | IPC via Unix signals |
| fdf | C | Wireframe 3D renderer |
| minirt | C | Ray tracing engine |
| ft_malloc | C | malloc/free reimplementation |
| Inception | Makefile | Docker infrastructure (NGINX, WP, MariaDB) |
| born2root | Shell | Debian server setup and hardening |
| ft_linux | Shell | Linux From Scratch |
| en-decoder_png | C | PNG binary encoder/decoder |
| picine_cpp | C++ | C++ piscine modules |
| libcpp | C++ | C++ utility library |
| mini-baas | Makefile | Mini Backend-as-a-Service |
| mini-baas-infra | Makefile | Infrastructure for mini-baas |
| prismatica | TypeScript | In development |
| libcss | TypeScript | CSS utility library |
| evals42 | JavaScript | Evaluation helper tool |
| log_debug | C | Debug logging library |
| catch_error | — | Lightweight C error handling framework |
| minitalk_tester | Shell | Tester for minitalk |
| design-patterns | — | Software design pattern reference |
| QA | Python | QA and pentesting scripts |
| portfolio | CSS | Personal portfolio |
| scripts | CSS / Shell | Utility scripts |
