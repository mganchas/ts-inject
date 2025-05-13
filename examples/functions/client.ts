import {logMessageHandler} from './logMessage';
import {sendEmailHandler} from './sendEmail';

// consuming the function with parameters
sendEmailHandler('mike@example.com');

// consuming the function with parameters and default value
logMessageHandler('Something happened'); // Uses default value ("info")
logMessageHandler('Fatal crash', 'error');
