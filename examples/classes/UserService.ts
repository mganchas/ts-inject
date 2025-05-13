/**
 * This is an example of a class-based service that uses autowire.
 * It demonstrates how to use the autowire function to inject dependencies
 * into a class constructor.
 */

import {autowire} from '../../src/autowire';
import {API_KEY, LOGGER_KEY} from '../config/keys';
import {ApiService, Logger} from '../abstractions/types';

export class UserService {
  constructor(
    private logger: Logger,
    private api: ApiService,
  ) {}

  create(userId: string) {
    this.logger.log('Creating user ' + userId);
    this.api.call();
  }
}

export const userService = autowire(UserService, [LOGGER_KEY, API_KEY]);
