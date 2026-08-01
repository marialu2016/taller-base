# Taller de IA generativa — Proyecto base

Este es el punto de partida para el taller. No tiene ninguna integración con
OpenAI todavía — eso lo vamos construyendo juntos día a día. Lo que sí está
armado: el servidor Express corriendo, la interfaz de chat (HTML/CSS) y los
lugares exactos donde va a ir cada pieza (marcados con `TODO` en el código).

## Instalación

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
```

Abrí `.env` y completá `OPENAI_API_KEY` con la key que te va a dar el instructor.

```bash
npm run dev
```

Debería quedar corriendo en `http://localhost:3000`. Probalo abriendo esa URL
en el navegador — deberías ver un error de "Cannot GET /", eso es normal
(el servidor no sirve el frontend, solo la API).

### 2. Frontend

Necesitás servir la carpeta `public/` con un servidor local (no abrir el
`index.html` directo con doble click — PWA y fetch necesitan `http://`, no `file://`).

Opción rápida con Node:
```bash
cd public
npx serve
```

O con la extensión "Live Server" de VS Code, click derecho sobre `index.html` → "Open with Live Server".

## Estructura

```
taller-ia-base/
├── server/
│   ├── server.js       ← Express. Acá van las rutas /api/chat y /api/chat-stream
│   ├── package.json
│   └── .env.example    ← copiar a .env y completar con la key real
└── public/
    ├── index.html
    ├── css/styles.css
    └── js/app.js        ← acá van los fetch, marcados con TODO por día
```

## Progreso esperado por día

- **Día 1**: `app.js` hace fetch a `/api/health` y muestra el resultado.
- **Día 2**: `server.js` tiene la ruta `/api/chat` conectada a OpenAI; `app.js` la consume.
- **Día 3**: se agrega `/api/chat-stream` con streaming; `app.js` lo lee con `reader.read()`.
- **Día 4**: se suma `system` prompt propio, parámetros (`temperature`, `max_tokens`) y structured outputs.
- **Día 5**: feature extra (RAG o function calling) + proyecto final propio.

## Importante

Nunca subas el archivo `.env` a git — ya está en `.gitignore`, pero prestale
atención al hacer el primer commit.
