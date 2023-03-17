// https://www.ractoon.com/articles/using-sentry-with-nuxt-3
import { defineNuxtPlugin, useRouter, useRuntimeConfig } from '#app';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const router = useRouter();

  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: config.public.sentry.dsn,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      }),
    ],
    tracesSampleRate: 1.0,
  });

  return {
    provide: {
      sentry: Sentry,
    },
  };
})