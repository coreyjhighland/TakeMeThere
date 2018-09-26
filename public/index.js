MOCK_DATA = {
  locations: [
    {
      name: 'Austria',
      picture: './pictures/austria.jpg'
    },
    {
      name: 'Bahamas',
      picture: './pictures/bahamas.jpg'
    },
    {
      name: 'China',
      picture: './pictures/china.jpg'
    },
    {
      name: 'France',
      picture: './pictures/france.jpg'
    },
    {
      name: 'India',
      picture: './pictures/india.jpg'
    },
    {
      name: 'Italy',
      picture: './pictures/italy.jpg'
    },
    {
      name: 'The Netherlands',
      picture: './pictures/netherlands.jpg'
    },
    {
      name: 'Norway',
      picture: './pictures/norway.jpg'
    },
    {
      name: 'Scotland',
      picture: './pictures/scotland.jpg'
    },
    {
      name: 'Spain',
      picture: './pictures/spain.jpg'
    }
  ]
};

function getLocation(fn) {}

function displayTopLocations() {}

function getAndShowTopLocations() {
  getLocation(displayTopLocations);
}

$(function() {
  getAndShowTopLocations();
});
