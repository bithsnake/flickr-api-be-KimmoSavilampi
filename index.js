
const { default: axios } = require('axios');
const ENV = require('dotenv').config().parsed;
const express = require('express');
const app = express();
var cors = require('cors');
const PORT = 5000 || Number(process.env.PORT);
const SearchFlickrPhotos = require('./functions/SearchFlickrPhotos');

class Photo {
  constructor(
    farm,
    id ,
    isfamily,
    isFriend,
    isPublic,
    owner,
    secret,
    server,
    title
  ){}
}
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    // console.log("you are on the first page");
    res.send("Hello, world, nothing to see here!");
});
app.post('/photos', (req, res) => {
    // console.log("the request data: ", req.body);
    const output = SearchFlickrPhotos(req.body);
    let photoArray = [];
    output.then(result => {
        if (result.status === 200)
        {
            for (let i = 0; i < result.data.photos.photo.length; i++) {
                const photo = result.data.photos.photo[i];
                const photoObject = {
                    url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                    title: photo.title,
                }
                photoArray.push(photoObject);
            }
        }
        switch (result.status) {
            case 500:
                res.status(500).end(result.statusText);
                break;
            case 404:
                res.status(404).send(result);
                break;
            case 200:
                res.send(photoArray);
                break;
        }
        res.end();
    })
    // console.log("output: ", output);
});
const server = app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));

module.exports = { server };