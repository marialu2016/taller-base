require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const OpenAI = require('openai'); // Día 2: descomentar cuando armemos el proxy

const app = express();
app.use(cors());
app.use(express.json());

// Día 2: acá va a vivir la instancia del cliente de OpenAI
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Ruta de prueba: sirve para confirmar que el servidor está vivo
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mensaje: 'Servidor funcionando' });
});

// Día 2: acá va a ir la ruta POST /api/chat
// Día 3: acá va a ir la ruta POST /api/chat-stream

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
