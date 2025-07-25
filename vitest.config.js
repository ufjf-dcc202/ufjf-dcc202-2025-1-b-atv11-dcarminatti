import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Opções de configuração do Vitest
    // Por exemplo, para descobrir testes:
    include: ["**/*.test.js", "**/*.spec.js"],
    // Outras opções: environment, globals, etc.
  },
});
