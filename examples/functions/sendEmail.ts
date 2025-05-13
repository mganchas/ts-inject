import {autowireFn} from '../../src/autowireFn';
import {ApiService, Logger} from '../abstractions/types';
import {API_KEY, LOGGER_KEY} from '../config/keys';

const sendEmail = (logger: Logger, api: ApiService, userEmail: string) => {
  logger.log(`Sending email to ${userEmail}`);
  api.email(userEmail);
};

export const sendEmailHandler = autowireFn(sendEmail, LOGGER_KEY, API_KEY);
