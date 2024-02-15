import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        'node_modules',
        'server/index.js',
        'test/*',
        '**/*.d.ts',
        '*/errors.ts',
        '*/types.ts',
        'human-formatter'
      ],
      provider: 'v8',
      thresholds: {
        lines: 100
      }
    },
    environment: 'node',
    exclude: ['node_modules', 'test/servers']
  }
})
