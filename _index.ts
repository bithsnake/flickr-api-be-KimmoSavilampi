
// const { default: axios } = require('axios');
// const Flickr = require('flickr-sdk');
// //require('dotenv').config(); test
// const express = require('express');
// const app = express();
// var cors = require('cors');
// const { environment } = require('./environments/environment');
// const PORT = 5000 || process.env.PORT;
// var oauth = new Flickr.OAuth(
//     environment.flickr.key,
//     environment.flickr.secret
// );
  
// var flickr = new Flickr(environment.flickr.key) ;

// class Photo {
//   constructor(
//     public farm : number,
//     public id : string ,
//     public isfamily : number,
//     public isFriend : number,
//     public isPublic : number,
//     public owner : string,
//     public secret : string,
//     public server : string,
//     public title : string
//   ){}
// }
// app.use(express.json());
// app.use(cors());
// // test
// const allBreeds = 'https://dog.ceo/api/breed/hound/images';
// const randomBreed = 'https://dog.ceo/api/breeds/image/random';

// const config = {
//     headers : {Accept : 'application/json'}
// }

// const getBreeds = async () => {
//     try {
//         console.log("Getting photos");
//         return await axios.get(allBreeds);
        
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// };
// const SearchFlickrPhotos = async (header) => {
//     const keyword = header.body.searchString;
//     console.log("Searching for: ", header.body.searchString);
//     const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
//     const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12`;

//     try {
//         axios.get(url + params).then(res => {
//             let photoArray = [];
//             // const photoObject = {
//             //     url: `https://live.staticflickr.com/${serverid}/${id}_${secret}_${size - suffix}.jpg`
//             //     title : 
//             // }
//             res.data.photos.photo.forEach((photo: Photo) => {
//                 const photoObject = {
//                     url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
//                     title: photo.title
//                 }
//                 photoArray.push(photoObject);
//             });
//             return photoArray;
//         });
//     } catch (error) {
//         return error;
//     }
// };

// app.get('/', (req,res) => {
//     console.log("you are on the first page");
//     res.send("Hello, world!");
// });
// app.post('/photos', (req, res) => {
//     console.log("the request data: ", req.body);
    
//     const output = SearchFlickrPhotos(req.body);
    
//     output.then(result => {
//         console.log("success getting photos: ", result);
//         if (result.status === 404) {
//             res.status(404).send('notfound');
//         } else if (result.status === 200) {
//             res.send(result.data.message);
//         }
//     })
// });
// // app.get('/photos', (req, res) => {
// //     const output = getBreeds();
// //     output.then(result => {
// //         console.log("success getting photos: ", result);
// //         if (result.status === 404) {
// //             res.status(404).send('notfound');
// //         } else if (result.status === 200) {
// //             res.send(result.data.message);
// //         }
// //     })
// // });

// /*
// old try catch for SearchFlickrPhotos()

//     try {
//         let res = await flickr.photos.search({
//             text: searchString,
//         });
//         if (res && res.status === 200) {
//             console.log("res is something: ", res); 
//         }
//         console.log("res is still searching: ", res); 
//     } catch (error) {
//         console.log("Error: ", error);
//     }
//  */
// app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))
