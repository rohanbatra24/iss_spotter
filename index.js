const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    const location = {
      latitude: coords.data.latitude,
      longitude: coords.data.longitude
    };

    console.log('It worked! Returned location:', location.latitude, location.longitude);

    fetchISSFlyOverTimes(location, (error, data) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }

      console.log('It worked! Returned passTimes:', data);
    });
  });
});
