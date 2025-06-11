# Mobile Store App

Aplicación web para la gestión y compra de dispositivos móviles, desarrollada con Next.js, TypeScript y Styled Components.

---

## 📦 Descripción del Proyecto

La aplicación incluye:

- Listado y filtrado de productos.
- Vista de detalle con especificaciones y opciones de color/almacenamiento.
- Carrito de compra persistente.

---

## ⚙️ Organización de Variables de Entorno (`dotenv`)

Las variables de entorno se gestionan con archivos `.env`.  
Ejemplo de `.env.local`:

```
API_BASE_URL=https://api.tutienda.com
API_KEY=tu_api_key
API_TIMEOUT=30000
ALLOWED_IMAGES_DOMAINS=mi.dominio.com
```

- Recuerda que las variables que empiezan por `NEXT_PUBLIC_` estarán disponibles en el cliente.

---

## 🐳 Despliegue con Docker y Docker Compose

Montar la imagen con Docker:

1. **Construir la imagen:**

    ```bash
    docker build -t mobile-store-app .
    ```

2. **Ejecutar el contenedor:**

    ```bash
    docker run --env-file .env.local -p 3000:3000 mobile-store-app
    ```

3. Accede a la app en [http://localhost:3000](http://localhost:3000).

Lanzar los servicios con Docker Compose:

- **Levantar los servicios:**

    ```bash
    docker compose up --build
    ```

- **Detener los servicios:**

    ```bash
    docker compose down
    ```

- **Ver logs:**
    ```bash
    docker compose logs -f
    ```

---

## 🛠️ Comandos Disponibles

| Comando            | Descripción                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Arranca el servidor de desarrollo con Turbopack  |
| `npm run build`    | Compila la aplicación para producción            |
| `npm run start`    | Inicia la app en modo producción                 |
| `npm run lint`     | Ejecuta ESLint sobre el código                   |
| `npm run lint:fix` | Ejecuta ESLint y corrige errores automáticamente |
| `npm run test`     | Ejecuta los tests unitarios con Jest             |
| `npm run test:e2e` | Ejecuta los tests end-to-end con Playwright      |
| `npm run format`   | Formatea el código con Prettier                  |

---

## 🧰 Tecnología Utilizada

- **Next.js** (React SSR/SSG)
- **TypeScript**
- **Styled Components**
- **Jest** y **Testing Library** (tests)
- **Playwright** (tests e2e)
- **Mock Service Worker (msw)** (mock de API)
- **ESLint** y **Prettier** (calidad y formato)
- **Docker** (despliegue)
- **Husky** (pre-commits)

---

## 🐶 Uso de Husky en Commits

El proyecto utiliza **Husky** para mejorar la calidad del código y automatizar tareas antes de cada commit.

### ¿Qué hace Husky aquí?

- Ejecuta **ESLint** y **Prettier** antes de cada commit para asegurar que el código cumple con las reglas de estilo y calidad.
- Previene commits si hay errores de linting o formato.

### ¿Cómo funciona?

1. Al hacer un commit (`git commit`), Husky ejecuta los hooks definidos en `.husky/`.
2. Por defecto, se ejecuta el hook `pre-commit` que corre los siguientes comandos:
    - `npm run lint`
    - `npm run format`
    - (Puedes personalizar los hooks según tus necesidades)

### Instalación y configuración

Ya está configurado en el proyecto. Si necesitas reinstalar Husky:

```bash
npx husky install
```

Para agregar un nuevo hook, por ejemplo, para lint:

```bash
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

---

**Consejo:**  
Si tienes problemas al hacer commit, revisa los mensajes de error de Husky y corrige los problemas de linting o formato antes de volver a intentarlo.

---

## 📝 Decisiones de Diseño

- **Next.js**: Permite SSR y SSG para mejor SEO y rendimiento.
- **Styled Components**: CSS-in-JS para estilos encapsulados y dinámicos.
- **TypeScript**: Tipado estático para mayor robustez y autocompletado.
- **MSW**: Mock de API para desarrollo y testing sin depender de un backend real.
- **Arquitectura modular**: Separación clara por features (cart, detail, products, etc.).
- **Variables de entorno**: Uso de dotenv y prefijo `NEXT_PUBLIC_` para distinguir entre variables de cliente y servidor.
- **Accesibilidad**: Navegación por teclado y roles ARIA en componentes interactivos.
- **Testing**: Cobertura de tests unitarios y de integración para componentes clave.
- **Testing end to end**: Uso de Playwright para pruebas E2E, asegurando que los flujos críticos funcionan correctamente en un entorno realista.
- **Tema de la aplicación**: El tema se gestiona tanto mediante variables CSS (`variables.ts`) para estilos globales y consistentes, como a través de un objeto de tema en TypeScript que se inyecta en Styled Components, permitiendo acceso tipado y dinámico a los valores del tema desde los componentes.
- **Docker**: Facilita el despliegue y la portabilidad del entorno.

---

## 💬 Comentarios

- La feature cart no está testeada con jest. A cambio he incluido el testing de esta parte en el e2e (`cart-flow.spec.ts`).
- Puse todo el idioma de la aplicación en inglés. No hablaba de soporte multiidioma así que no introduje ninguna librería de etiquetado
- Para el listado puse un infinite-scroll pero la api no devolvía el total de elementos por lo que el número de resultados no lo he incluido debajo de la barra de búsqueda.
- Las imágenes vienen en distintos tamaños y con distinto padding, he intentado normalizarlas al máximo pero habría que tratar de unificarlas con `object-fit: contain`, para que se vienen igual.
- En el carrito no he añadido lógica al botón "Pay".

---

## 📄 Licencia

MIT
