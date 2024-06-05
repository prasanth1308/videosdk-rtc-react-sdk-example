import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test', (_req, res) => {
  res.send({ express: 'UI routing' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'), { lastModified: false, etag: false });
});

const port = process.env.PORT || 3000;
app.listen(port);