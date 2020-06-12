'use strict';

require('dotenv/config');

const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'World' })
})

app.listen(PORT, (err) => (err) ? console.log(err) : console.log(`Rodando em: http://localhost:${PORT}`));
