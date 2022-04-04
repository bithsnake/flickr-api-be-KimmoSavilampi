const { default: axios } = require('axios');
const ENV = require('dotenv').config().parsed;

/**Searches for photos with a keyword on flickr with an API key */
const SearchFlickrPhotos = async (request) => {
    const keyword = request.data;
    if (keyword === null || keyword === undefined || keyword === {}) {
        const response = { status : 500 , statusText : `current request is null or undefined, ${{request : keyword}}` };
        return response;
    } else if(String(keyword).trim() === ""){        
        const response = { status : 404 , statusText : `We can not do a search with an empty text string 🙁`};
        return response;
    }
    // console.log("Searching for: ", request.body.searchString);
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${ENV.API_KEY}&text=${keyword}&format=json&nojsoncallback=1&per_page=12`;
    return await axios.get(url + params);
};

module.exports = SearchFlickrPhotos;