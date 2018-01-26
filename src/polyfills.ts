import 'core-js/client/shim.min';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';



const stackTraceLimit: string = 'stackTraceLimit';

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error[stackTraceLimit] = Infinity;
  // tslint:disable-next-line
  require('zone.js/dist/long-stack-trace-zone');
}