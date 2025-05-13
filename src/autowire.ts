import {container} from './container';

type Constructor<T> = new (...args: any[]) => T;

/**
 * Autowire a class constructor with resolved dependencies.
 *
 * @param ClassDef - The target class constructor
 * @param keys - Keys of dependencies to inject from DI container
 * @return A function that returns a new instance of the class with injected dependencies
 */
export const autowire = <T>(
  ClassDef: Constructor<T>,
  keys: PropertyKey[],
): (() => T) => {
  return () => {
    const deps = keys.map(key => container.get(key));
    return new ClassDef(...deps);
  };
};


