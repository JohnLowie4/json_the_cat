const { fectchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  // Test for correct breed output
  it('returns a string description for a valid breed, via callback', (done) => {
    fectchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  // Test for invalid breed output
  it('returns a string description for an invalid breed, via callback', (done) => {
    fectchBreedDescription('chicken', (err, desc) => {
      const expectedDesc = "Breed Not Found";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
});