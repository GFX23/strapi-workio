const allowedOrigins = [
  "http://localhost:1337",
  "http://localhost:8000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://127.0.0.1",
  'https://studio.apollographql.com'
];


export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      origin: allowedOrigins,
      headers: ["Content-Type", "Authorization", "Cache", "access-control-allow-origin"],
    },
  },
  {
    name: "strapi::logger",
    config: {
      logger: {
        level: "debug",
        exposeInContext: true,
        requests: true,
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
