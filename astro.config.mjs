// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      // usando envField se puede definir el tipo de dato que se espera
      // el contexto puede ser 'client' o 'server', en este caso astro trabaja en el servidor
      // el acceso puede ser 'public' o 'private', por ejemplo, para api keys es recomensable 'private' porque astro nos informaria de cualquier vulnerabilidad
      // en caso de que no se encuentre la variable de entorno, se usara el valor por defecto
      SHOW_BUY_BUTTON: envField.boolean({ default: false, context: 'server', access: 'public' }),
      // para leer una variable de entorno en el cliente se hace diferente a las de server
      SCORE_API_ENDPOINT: envField.string({ context: 'client', access: 'public' }),
    }
  }
});
