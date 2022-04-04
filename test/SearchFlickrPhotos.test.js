const express = require('express');
const app = express();
var cors = require('cors');
const PORT = 5000 || Number(process.env.PORT);
app.use(express.json());
app.use(cors());

const SearchFlickrPhotos = require('../functions/SearchFlickrPhotos');
let canCloseServer = false;

test('should return promise and contain array', async () => {
    try {
        let b;
        const a = await SearchFlickrPhotos({ data: 'batman' }).then(result => {
            expect(result.status).toBe(200);
            expect(a).toEqual(Array.isArray(Promise.prototype.then(res => { b = res; return res })));
            if (b) {
                server.close();
            }
        })
    } catch (error) {
        console.log("error: ", error);
        // expect(error).toMatch('error');
    }
});
const server = app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));