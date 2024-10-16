import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://906e7b976f5c908406219b71348f7b21@o4508133381832704.ingest.us.sentry.io/4508133384388608",

  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
