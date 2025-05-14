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


## 📚 API Reference

This library exposes the `Container` interface and the `Factory` type, which are the core components for managing dependencies.

### `Factory<T>`

A type representing a function that is responsible for creating or providing an instance of type `T`.

```typescript
type Factory<T> = () => T;
````

### `Container`

A generic dependency injection container with full control over registration and resolution of dependencies.

- #### clear()
Clears all registered factories from the container.
```typescript
clear(): void
```

- #### unregister(key: PropertyKey)
Unregisters the factory associated with the given `key`.
```typescript
unregister(key: PropertyKey): void
```


- #### register(key: PropertyKey, factory: Factory<T>)
Registers a factory function for the given `key`. Replaces any existing factory for that key.
```typescript
register<T>(key: PropertyKey, factory: Factory<T>): void
```

- #### registerNonReplaceable(key: PropertyKey, factory: Factory)
Registers a factory function for the given `key`, but throws an error if the key is already registered.
```typescript
registerNonReplaceable<T>(key: PropertyKey, factory: Factory<T>): void
```

- #### get(key: PropertyKey)
Resolves and returns the instance associated with the given `key`. Throws if no factory is registered.
```typescript
get<T>(key: PropertyKey): T
```

- #### isRegistered(key: PropertyKey)
Returns `true` if a factory is registered for the given `key`, otherwise `false`.
```typescript
isRegistered(key: PropertyKey): boolean
```

- #### getKeys(): PropertyKey[]
Returns an array of all keys currently registered in the container.
```typescript
getKeys(): PropertyKey[]
```
