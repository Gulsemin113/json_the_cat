const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription('Siberian', (error, desc) => {

  if (error) {
    console.err('Error fetch details:', error);
  } else {
    console.log(desc);
  }

});