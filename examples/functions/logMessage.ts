import {autowireFn} from '../../src/autowireFn.ts';
import {Logger} from '../abstractions/types';
import {LOGGER_KEY} from '../config/keys';

const logMessage = (
  logger: Logger,
  message: string,
  level: 'info' | 'error' = 'info',
) => {
  logger.log(`[${level}] ${message}`);
};

export const logMessageHandler = autowireFn(logMessage, LOGGER_KEY);
