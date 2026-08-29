[# 🌌 Univers42

A shared workspace for 42 Madrid students — the curriculum projects, tools, and side experiments built across the Common Core and beyond.

42 doesn't run on lectures. You get a subject, a peer evaluator, and however many nights it takes to make something work. This org is where a chunk of that work lives: the mandatory projects, the tools people ended up building because the curriculum didn't hand them one, and a few things folks kept improving long after their evaluation was signed off.

## What's in here

### Systems & low-level
Working close to the machine — memory, processes, and the stuff usually hidden behind a syscall.
- **C** — memory, pointers, processes, file descriptors, syscalls
- **Unix** — signals, processes, pipes, file descriptors
- **Concurrency** — threads, mutexes, synchronization
- **Memory management** — custom allocators, `mmap`
- **Graphics** — rendering, projections, ray tracing
- **Linux** — building and administering a system from source

### Algorithms & CS
Where the right answer isn't enough on its own — it has to run fast and stay correct.
- Sorting and stack-based algorithms
- Inter-process communication
- Concurrency problems
- Parsing
- Data structures
- Binary formats
- Design patterns

### Infrastructure & DevOps
Because eventually the code has to run somewhere other than localhost.
- Docker & Docker Compose
- NGINX
- MariaDB / PostgreSQL
- Linux administration & networking
- Security
- CI/CD and infrastructure automation

### Full-stack & beyond
The later projects trade isolated components for complete systems.
- TypeScript, React, NestJS
- PostgreSQL, Redis
- WebSockets, OAuth, REST APIs
- Containerized, distributed applications

## Featured projects

| Project | Description | Stack |
|---|---|---|
| **transcendence** | Full-stack real-time web app | TypeScript · NestJS · React · PostgreSQL · Redis |
| **ft_malloc** | Reimplementation of `malloc`, `free`, `realloc` | C · mmap |
| **minirt** | Minimal ray-tracing engine | C |
| **mini_shell** | Unix shell with pipes, redirections, builtins | C |
| **philosopher** | Dining philosophers / concurrency | C · Threads · Mutexes |
| **Inception** | Containerized NGINX, WordPress, and MariaDB stack | Docker · Shell |
| **ft_linux** | A Linux system built from source | Shell · Linux |
| **born2root** | Debian server setup and hardening | Linux · Shell |
| **Examen42** | Notes and prep for 42 exams | C |

## Repository index

```
C
├── libft
├── get_next_line
├── push_swap
├── minitalk
├── philosopher
├── mini_shell
├── minirt
└── ft_malloc

Systems
├── Inception
├── born2root
└── ft_linux

C++
├── picine_cpp
└── libcpp

Tools
├── Examen42
├── evals42
├── log_debug
├── catch_error
├── minitalk_tester
└── design-patterns

Full stack
├── transcendence
├── mini-baas
├── mini-baas-infra
├── prismatica
└── libcss
```

## Tools we built for ourselves

Sometimes the curriculum creates a problem and doesn't hand you a way to solve it, so someone just builds the tool:

- Testing & evaluation tools
- Debugging utilities
- Logging libraries
- QA & security tooling
- Shell utilities
- C libraries
- Design-pattern references
- Developer productivity tools

## Contributing

Repos here are individual, pair, or team work. Some are curriculum-mandated; others exist because someone wanted to dig into an idea outside it. Pick one, read the code, and go from there — there's no single path through this org.

---

<p align="center">Built by 42 students, for 42 students.</p>
](https://github.com/Univers42/.github)
