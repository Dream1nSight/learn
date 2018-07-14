
const VIEW_POINT = [55.752161956105276, 37.61949517968746];

const PLACEMARKS = [
	{point: [55.752161956105276, 37.61949517968746], tooltip: 'text', image: '1.png'},
	{point: [55.853809, 38.415948], tooltip: 'text 2', image: '1.png'},
];

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("litmap", {center: VIEW_POINT, zoom: 9});
	var map_marks = [];

	for (var i = PLACEMARKS.length - 1; i >= 0; i--) {
		map_marks.push(new ymaps.Placemark(PLACEMARKS[i].point, {
			balloonContentBody: PLACEMARKS[i].tooltip
		},{
			iconLayout: 'default#image',
			iconImageHref: '/litmap/' + PLACEMARKS[i].image,
			iconImageSize: [70, 70],
			iconImageOffset: [-35, -35]
		}));
	}

	var clusterer = new ymaps.Clusterer({
		clusterDisableClickZoom: false,
		clusterOpenBalloonOnClick: false,
		
	});

	clusterer.add(map_marks);
	myMap.geoObjects.add(clusterer);
	//myMap.behaviors.disable('scrollZoom');
}
