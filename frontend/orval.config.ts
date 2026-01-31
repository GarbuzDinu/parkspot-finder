import { defineConfig } from 'orval';

export default defineConfig({
  parkApi: {
    input: {
      target: 'http://localhost:8080/v3/api-docs',
    },
    output: {
      target: './src/api/generated.ts',
      client: 'axios',
      mode: 'tags',
      prettier: true,
    },
  },
});
