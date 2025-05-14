# ts-inject

[![npm version](https://img.shields.io/npm/v/@michaelganchas/ts-inject.svg?style=flat)](https://www.npmjs.com/package/@michaelganchas/ts-inject)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**A lightweight, type-safe dependency injection library for TypeScript.**

`ts-inject` simplifies dependency management in TypeScript applications by providing a straightforward and efficient way to inject dependencies, enhancing modularity and testability.

## ✨ Features

- **Type-Safe**: Leverages TypeScript's type system for compile-time safety.
- **Lightweight**: Minimal overhead with a focus on simplicity.
- **Flexible**: Supports various injection patterns to suit different needs.
- **Test-Friendly**: Facilitates easy mocking and testing of dependencies.

## 📦 Installation

```bash
npm install @michaelganchas/ts-inject
# or
yarn add @michaelganchas/ts-inject
```

## 📌 Where to Use

You can use `ts-inject` in any **TypeScript-based project** where clean architecture, testability, and modularity matter. Some common use cases include:

- **Modular backend applications** (e.g. Node.js with Express or Koa)
- **Domain-driven design (DDD)** implementations
- **Microservices** and **serverless functions**
- **CLIs and tooling** built with TypeScript
- **Unit testing** with easily mockable dependencies
- **Frontend apps** (e.g. React, React Native or Vue with TypeScript) that follow service-based architecture

> If you're tired of manually wiring dependencies or passing instances all over your codebase, `ts-inject` offers a clean, intuitive alternative.

## 🔍 Examples

Check the `examples/` folder for how to use for either Class injections, or functional ones.


## 📚 API Reference

Check the `types.ts` file under `src/` as it contains all the explanations inside their definitions.
