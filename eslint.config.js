import js from "@eslint/js";

export default [
  // Ignora artefactos
  { ignores: ["dist", "node_modules"] },

  // Reglas recomendadas de ESLint para JS
  js.configs.recommended,
  
  // Configuración para archivos JavaScript
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        // Node.js globals
        process: "readonly",
        console: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly"
      }
    }
  }
];