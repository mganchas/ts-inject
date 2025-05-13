import {container} from './container';

type FnType = (...args: any[]) => any;
type RemoveParam<TFunction extends FnType> = TFunction extends (
  _: any,
  ...tail: infer TRest
) => any
  ? (...params: TRest) => ReturnType<TFunction>
  : TFunction;

type RemoveInputParams<
  TFunction extends FnType,
  TKeys extends PropertyKey[],
> = TKeys extends [k: PropertyKey, ...rest: infer TRest extends PropertyKey[]]
  ? RemoveInputParams<RemoveParam<TFunction>, TRest>
  : TKeys extends [k: PropertyKey]
    ? RemoveParam<TFunction>
    : TFunction;

/**
 * Autowire a function with resolved dependencies.
 *
 * @param func - The target function
 * @param keys - Keys of dependencies to inject from DI container
 * @returns A function with the injected dependencies
 */
export const autowireFn =
  <TFunction extends FnType, TKeys extends PropertyKey[]>(
    func: TFunction,
    ...keys: TKeys
  ): RemoveInputParams<TFunction, TKeys> =>
  // @ts-ignore
  (...args) => {
    const services = keys.map(key => {
      return container.get(key);
    });
    return func(...services, ...args);
  };
