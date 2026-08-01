require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mensaje: 'Servidor funcionando' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { mensaje } = req.body;

    const completion = await openai.chat.completions.create({
      model: 'gpt-5.4-mini',
      messages: [
        { role: 'system', content: 'Sos un asistente útil y conciso.' },
        { role: 'user', content: mensaje }
      ]
    });

    const respuesta = completion.choices[0].message.content;
    res.json({ respuesta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Algo salió mal' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});