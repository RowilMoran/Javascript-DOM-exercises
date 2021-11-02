export default function getGeolocation(divId) {
    const $geoSpot = document.getElementById(divId);

    const succes = position => {
        let latlon = position.coords.latitude + "," + position.coords.longitude;
        $geoSpot.innerHTML = `<p>
            Latitude = ${position.coords.latitude}<br>
            Longitude = ${position.coords.longitude}<br>
            Accuracy =  ${position.coords.accuracy} metros<br> 
            </p>
            <br><a href="https://www.google.com.ar/maps/@${latlon}" target="_blank" rel="noopener">Click To google Map</a>`;
    }

    const denied = error => {
        $geoSpot.innerHTML = `<p>Error = ${error.code}: ${error.message}</p>`
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
    }

    navigator.geolocation.getCurrentPosition(succes, denied, options);

}