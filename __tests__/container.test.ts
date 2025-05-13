import {container} from '../src/container';
import {Factory} from '../src/types';

describe('container', () => {
  beforeEach(() => {
    container.clear();
  });

  it('should register and retrieve a dependency', () => {
    container.register(aKey, aService);

    const instance = container.get<ServiceType>(aKey);
    expect(instance.id).toBe(aReturnValue);
  });

  it('should override an existing factory using register', () => {
    container.register(aKey, aService);
    container.register(aKey, anotherService);

    const instance = container.get<ServiceType>(aKey);
    expect(instance.id).toBe(anotherReturnValue);
  });

  it('should throw on duplicate key with registerNonReplaceable', () => {
    container.registerNonReplaceable(aKey, aService);

    expect(() => {
      container.registerNonReplaceable(aKey, anotherService);
    }).toThrow(/already registered/i);
  });

  it('should retrieve the correct type', () => {
    container.register<ServiceType>(aKey, aService);

    const instance = container.get<ServiceType>(aKey);
    expect(typeof instance).toBe('object');
    expect(instance).toHaveProperty('id');
    expect(typeof instance.id).toBe('number');
  });

  it('should throw if no provider is registered', () => {
    expect(() => {
      container.get(aKey);
    }).toThrow(/no provider registered/i);
  });

  it('should unregister a previously registered key', () => {
    container.register(aKey, aService);
    expect(container.get(aKey)).toBeDefined();

    container.unregister(aKey);

    expect(() => {
      container.get(aKey);
    }).toThrow(/no provider registered/i);
  });

  it('should do nothing if unregister is called on a non-existing key', () => {
    expect(() => {
      container.unregister(aKey);
    }).not.toThrow();
  });

  it('should remove all registered keys when clear is called', () => {
    container.register(aKey, aService);
    container.register(anotherKey, anotherService);

    const instance1 = container.get<ServiceType>(aKey);
    const instance2 = container.get<AnotherServiceType>(anotherKey);

    expect(instance1.id).toBe(aReturnValue);
    expect(instance2.id).toBe(anotherReturnValue);

    container.clear();

    expect(() => container.get(aKey)).toThrow();
    expect(() => container.get(anotherKey)).toThrow();
  });

  it('should check if a key is registered', () => {
    container.register(aKey, aService);

    expect(container.isRegistered(aKey)).toBe(true);
    expect(container.isRegistered(anotherKey)).toBe(false);
  });

  it('should return all registered keys', () => {
    container.register(aKey, aService);
    container.register(anotherKey, anotherService);

    const keys = container.getKeys();
    expect(keys).toHaveLength(2);
    expect(keys).toContain(aKey);
    expect(keys).toContain(anotherKey);
  });
});

const aKey = 'aKey';
const anotherKey = 'anotherKey';

type ServiceType = {id: number};
const aReturnValue = 1;
const aService: Factory<ServiceType> = () => ({id: aReturnValue});

type AnotherServiceType = {id: string};
const anotherReturnValue = 'aReturnValue';
const anotherService: Factory<AnotherServiceType> = () => ({
  id: anotherReturnValue,
});
