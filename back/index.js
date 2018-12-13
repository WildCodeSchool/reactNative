const bodyParser = require('body-parser');
const express = require('express');
const { getDocumentData } = require('./scrape');

const saveArticle = async (req, res) => {
  console.log('coucou');
  const { body } = req;
  const { url } = body;
  const documentData = await getDocumentData(url);

  res.status(201);
  res.send({ article: documentData });
};

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post('/articles', saveArticle)
  .listen(3004, () => console.log('server listening on port 3004'));
