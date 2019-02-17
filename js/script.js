'use strict';

(function(){

	var templateList = document.getElementById('template').innerHTML;
	var cell = '';
	var carousel = document.querySelector('.carousel');
	var restart = document.getElementById('restartBtn');
	var progressBar = document.querySelector('.progress-bar');
	var infos = document.getElementById('infos');

	Mustache.parse(templateList);
	for (var i = 0; i < cells.length; i++){
		cell += Mustache.render(templateList, {number: cells[i].number, image: cells[i].image, title: cells[i].title, description: cells[i].description});
	}
	results.insertAdjacentHTML('beforeend', cell);

	var flkty = new Flickity(carousel, {
		pageDots: false,
		hash: true
	});
	
	addEventListener('click', function(event) {
		if (!matchesSelector (event.target, '.my-btn')) {
			return;
		}
		flkty.select(0);
	});
	
	flkty.on('scroll', function(progress) {
		progress = Math.max(0, Math.min(1, progress));
		progressBar.style.width = progress * 100 + '%';
	});

	window.initMap = function() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: cells[0].coords
		});
		for (var i=0; i < cells.length; i++){
			var marker = new google.maps.Marker({
				position: cells[i].coords,
				map: map, 
			});
		}
	};

})();
