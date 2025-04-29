import pluginJs from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginVue.configs['flat/recommended'],
  {
    rules: {
      // estilos
      indent: ['error', 2], // Establece la indentación de 2 espacios
      semi: ['error', 'always'], // Obligatorio el uso de punto y coma
      'space-infix-ops': 'error', // Requiere espacio alrededor de operadores
      'space-before-blocks': 'error', // Requiere espacio antes de las llaves de bloque
      'keyword-spacing': ['error', { before: true, after: true }], // Espacio antes y después de palabras clave
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ], // para los espacios despues de cada elemento de un json
      'space-before-function-paren': ['error', 'always'], // Espacio antes de la apertura de paréntesis en funciones
      'space-in-parens': ['error', 'never'], // Sin espacios dentro de paréntesis
      'array-bracket-spacing': ['error', 'never'], // Sin espacios dentro de corchetes de array
      'object-curly-spacing': ['error', 'always'], // Espacios dentro de llaves de objetos
      'arrow-spacing': ['error', { before: true, after: true }], // para los espacios entre la funcion de flecha
      'no-prototype-builtins': 'off', // Permite el uso de hasOwnProperty
      'no-debugger': 'off', // Permite el uso de debugger
      'comma-spacing': ['error', { before: false, after: true }], // Espacios después de las comas
      'no-multi-spaces': ['error'], // No permite multiples espacios
      // buenas practicas
      quotes: ['error', 'single'], // Hace obligatorio el uso de comillas simples
      'no-console': 'warn', // Advierte sobre el uso de console.log
      'no-unused-vars': 'warn', // Reporta variables no utilizadas como error

      // vue
      'vue/html-indent': ['error', 2], // Indentación para templates HTML en archivos Vue
      'vue/multi-word-component-names': 'off', // Obliga a que los nombres de los componentes no tengan numeros y sean CamelCase
      'vue/require-explicit-emits': 'off', // permite lanzar eventos emit directamente sin ser declarados
      'vue/no-mutating-props': 'off', // permite la mutacion de las propiedades que se les pasa a un componente,
      'vue/no-v-html': 'off', //Permite el uso v-html a pesar del riesgo de XSS attack
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/require-v-for-key': 'off',
    },
  },
]);