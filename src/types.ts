/** A function that returns a new or existing instance. */
export type Factory<T> = () => T;

/**
 * A generic dependency‐injection container.
 *  - clear() clears all registered factories.
 *  - unregister() removes a factory by key.
 *  - register() binds a key to a Factory<T>
 *  - registerNonReplaceable() binds a key to a Factory<T> and throws if already registered
 *  - get() retrieves T by key and throws if none registered
 *  - isRegistered() checks if a factory is registered for key
 *  - getKeys() returns all registered keys
 */
export interface Container {
  /** Clear all registered factories. */
  clear(): void;

  /** Unregister a factory by `key`. */
  unregister(key: PropertyKey): void;

  /** Bind a factory function to `key`. */
  register<T>(key: PropertyKey, factory: Factory<T>): void;

  /** Bind a factory function to `key`. Throws if already registered. */
  registerNonReplaceable<T>(key: PropertyKey, factory: Factory<T>): void;

  /** Retrieve an instance by `key`. Throws if none registered. */
  get<T>(key: PropertyKey): T;

  /** Check if a factory is registered for `key`. */
  isRegistered(key: PropertyKey): boolean;

  /** Get all registered keys. */
  getKeys(): PropertyKey[];
}
