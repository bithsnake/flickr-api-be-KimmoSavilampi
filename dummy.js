// test
const allBreeds = 'https://dog.ceo/api/breed/hound/images';
const randomBreed = 'https://dog.ceo/api/breeds/image/random';

const config = {
    headers : {Accept : 'application/json'}
}

exports.GetBreedList = async () => {
    try {
        return await axios.get(allBreeds);
        
    } catch (error) {
        console.log("Error: ", error);
    }
};
exports.GetRandomBreed = async () => {
    try {
        return await axios.get(randomBreed);
        
    } catch (error) {
        console.log("Error: ", error);
    }
};