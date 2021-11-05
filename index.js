const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {

  if (error) {
    console.err('Error fetch details:', error);
  } else {
    console.log(desc);
  }

});