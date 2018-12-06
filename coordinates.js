class Coordinates{
    constructor(address){
        this.address = address
    }
    getCoords( callback ){ 
        let addressObject = {
            url: "https://maps.googleapis.com/maps/api/geocode/json?",
            dataType: 'json',
            method: 'get',
            data: {
                    key: 'AIzaSyBwpExu5jdrkegxTZJE5VIKAJ7ED_yWTFE',
                    address: this.address
            } 
        }
        $.ajax(addressObject).then(function(response){
            let newCoordinates = response.results[0].geometry.location;
            debugger;
            console.log(newCoordinates);
            callback(newCoordinates);
        })
    }
}