import Raven from 'raven-js';

const sentry_key = '09f3fa141a3342a78b99479fc1f75ede';
const sentry_app = '1252857';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
