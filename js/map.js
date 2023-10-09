function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 16,
		center: new google.maps.LatLng(51.142039532885065, 16.94334804818993),
		mapTypeId: "roadmap",
		disableDefaultUI: !0,
		styles: stylesMap
	});
	var e = "images/map-marker.png";
	console.log(e);
	var a = {
		url: e,
		anchor: new google.maps.Point(28, 72)
	};
	new google.maps.Marker({
		position: new google.maps.LatLng(51.142039532885065, 16.94334804818993),
		icon: a,
		map: map,
		title: "Stadion Aleja Śląska 1, 54-118 Wrocław",
	})
}
var stylesMap = [
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];
if ($("#map").length) var map;
