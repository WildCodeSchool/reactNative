const bodyParser = require('body-parser');
const express = require('express');
const firebase = require('firebase');
const { getDocumentData } = require('./scrape');

const fire = firebase.initializeApp({
  apiKey: 'AIzaSyCogKIlxdZhndoksUKFJvUcaJ01DbwHCMM',
  authDomain: 'projet2alternance.firebaseapp.com',
  databaseURL: 'https://projet2alternance.firebaseio.com',
  projectId: 'projet2alternance',
  storageBucket: 'projet2alternance.appspot.com',
  messagingSenderId: '663474905671',
});

const saveArticle = async (req, res) => {
  console.log(req.body);

  const { body } = req;
  const { url } = body;
  await getDocumentData(url)
    .then(response =>
      fire
        .database()
        .ref('articles')
        .push(response)
    )
    .then(() => res.status(201))
    .catch(error => console.log(error));
};

const app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post('/articles', saveArticle)
  .listen(3004, () => console.log('server listening on port 3004'));
