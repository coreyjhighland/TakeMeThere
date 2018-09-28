let TAKEMETHERE = {
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

function getTopLocation(fn) {
  setTimeout(function() {
    fn(TAKEMETHERE);
  }, 1);
}

function displayTopLocations(data) {
  $.each(data.locations, function(i) {
    $('body').append(
      `<p>${data.locations[i].name}</p>
      <img src="${data.locations[i].picture}" alt="picture of ${
        data.locations[i].name
      }" style="width:500px;">`
    );
  });
}

function getAndShowTopLocations() {
  getTopLocation(displayTopLocations);
}

function getLocationsButton() {
  $('.start').on('click', '#startButton', function(e) {
    event.preventDefault();
    getAndShowTopLocations();
    $('#startButton').hide();
  });
}

$(function() {
  getLocationsButton();
});
