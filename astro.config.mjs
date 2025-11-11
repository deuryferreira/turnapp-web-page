import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import node from "@astrojs/node";

export default defineConfig({
  site: "https://turnapp.ferreiraric.com",
  output: "server",
  prefetch: true,

  server: {
    host: "0.0.0.0",
  },

  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        ph: [
          "star-duotone",
          "lightning-duotone",
          "globe-duotone",
          "users-duotone",
          "buildings-duotone",
          "briefcase-duotone",
          "check-circle-duotone",
          "x-circle-duotone",
          "code-duotone",
          "puzzle-piece-duotone",
          "brain-duotone",
          "shield-check-duotone",
          "linkedin-logo-duotone",
          "twitter-logo-duotone",
          "github-logo-duotone",
          "currency-dollar-duotone",
          "arrow-left-duotone",
          "arrow-right",
          "file-search",
          "layout-duotone",
          "calendar-duotone",
          "clock-duotone",
          "link-duotone",
          "check-square-duotone",
          "credit-card-duotone",
          "paint-brush-duotone",
          "chart-line-duotone",
          "google-logo-duotone",
          "lock-key-duotone",
          "certificate-duotone",
          "lifebuoy-duotone",
          "handshake-duotone",
          "megaphone-duotone",
          "flow-chart-duotone", // AGREGAR ESTE
          "wrench-duotone",
          "youtube-logo-duotone",
          // AGREGAR ESTOS NUEVOS ICONOS
          "package-duotone",
          "chart-bar-duotone",
          "megaphone-simple-duotone",
          "palette-duotone",
          "tree-structure-duotone",
          "gear-six-duotone",
          "flow-arrow-duotone",
        ],
      },
    }),
  ],

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
