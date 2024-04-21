const allowedOrigins = [
  "http://localhost:1337",
  "http://localhost:8000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];


export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: allowedOrigins,
      headers: ["Content-Type", "Authorization", "Cache"],
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
