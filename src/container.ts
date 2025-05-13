import {Container, Factory} from './types';

const container = ((): Container => {
  const map = new Map<PropertyKey, Factory<any>>();

  const clear = () => {
    map.clear();
  };

  const unregister = (key: PropertyKey) => {
    map.delete(key);
  };

  const register = <T>(key: PropertyKey, factory: Factory<T>) => {
    map.set(key, factory);
  };

  const registerNonReplaceable = <T>(key: PropertyKey, factory: Factory<T>) => {
    if (map.has(key)) {
      throw new Error(`Key already registered: ${String(key)}`);
    }
    map.set(key, factory);
  };

  const get = <T>(key: PropertyKey): T => {
    const factory = map.get(key);
    if (!factory) {
      throw new Error(`No provider registered for key: ${String(key)}`);
    }
    return factory() as T;
  };

  const isRegistered = (key: PropertyKey): boolean => {
    return map.has(key);
  };

  const getKeys = (): PropertyKey[] => {
    return Array.from(map.keys());
  };

  return {
    clear,
    unregister,
    register,
    registerNonReplaceable,
    get,
    isRegistered,
    getKeys,
  };
})();

export {container};
