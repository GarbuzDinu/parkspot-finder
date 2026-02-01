import { defineConfig } from "orval";

export default defineConfig({
  "backend-endpoints": {
    input: {
      target: "openapi.json",
    },
    output: {
      mode: "single",
      prettier: true,
      clean: true,
      client: "react-query",
      workspace: "./src/api",
      target: "./endpoints.ts",
      schemas: "./model",
      override: {
        mutator: {
          path: "../config/axiosConfig.ts",
          name: "customInstance",
        },
      },
    },
  },
});
