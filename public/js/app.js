// ============================================================
// Proyecto base — Taller de IA generativa
// Cada bloque comentado indica en qué día del taller se completa.
// ============================================================

const statusEl = document.getElementById('status');
const healthBtn = document.getElementById('btn-health');
const healthOutput = document.getElementById('health-output');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatEl = document.getElementById('chat');

// Historial de la conversación (Día 3-4: se manda completo en cada request
// para que el modelo tenga contexto de lo que se dijo antes)
const historial = [];

// ------------------------------------------------------------
// DÍA 1 — Probar el servidor con fetch simple
// ------------------------------------------------------------
// TODO (en vivo): reemplazar este listener por una función `async`
// que haga fetch a 'http://localhost:3000/api/health', use await
// para esperar la respuesta, y muestre el resultado en pantalla.
//
// Estructura que van a construir juntos:
//
// async function probarConexion() {
//   try {
//     const response = await fetch('http://localhost:3000/api/health');
//     const data = await response.json();
//     healthOutput.textContent = JSON.stringify(data, null, 2);
//     statusEl.textContent = 'servidor: ok';
//   } catch (error) {
//     healthOutput.textContent = 'Error: ' + error.message;
//     statusEl.textContent = 'servidor: error';
//   }
// }

healthBtn.addEventListener('click', () => {
  healthOutput.textContent = 'TODO: implementar fetch a /api/health (Día 1)';
});

// ------------------------------------------------------------
// DÍA 2 — Primer mensaje al asistente (sin streaming todavía)
// ------------------------------------------------------------
// TODO: función `async` que haga POST a 'http://localhost:3000/api/chat'
// con { mensaje } en el body, y muestre data.respuesta en el chat.

// ------------------------------------------------------------
// DÍA 3 — Streaming
// ------------------------------------------------------------
// TODO: reemplazar la función anterior por una que consuma
// 'http://localhost:3000/api/chat-stream' usando response.body.getReader()
// y vaya agregando texto a la burbuja del asistente a medida que llega.

// ------------------------------------------------------------
// Helper de UI: agrega una burbuja al chat (esto ya se los damos armado
// para que se enfoquen en la lógica de fetch, no en el DOM)
// ------------------------------------------------------------
function agregarMensaje(texto, rol) {
  const burbuja = document.createElement('div');
  burbuja.classList.add('msg', rol === 'user' ? 'msg--user' : 'msg--assistant');
  burbuja.textContent = texto;
  chatEl.appendChild(burbuja);
  chatEl.scrollTop = chatEl.scrollHeight;
  return burbuja;
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const mensaje = chatInput.value.trim();
  if (!mensaje) return;

  agregarMensaje(mensaje, 'user');
  historial.push({ role: 'user', content: mensaje });
  chatInput.value = '';

  // TODO (Día 2 en adelante): acá va la llamada al backend.
  agregarMensaje('TODO: conectar con el backend (Día 2)', 'assistant');
});
