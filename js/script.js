'use strict';

(function(){

	var templateList = document.getElementById('template').innerHTML;
	Mustache.parse(templateList);
	var cell = '';
	for(var i = 0; i < cells.length; i++){
		console.log(cells);
		cell += Mustache.render(templateList, {number: cells[i].number, image: cells[i].image, title: cells[i].title, description: cells[i].description});
	}
	results.insertAdjacentHTML('beforeend', cell);

	var carousel = document.querySelector('.carousel');
	var flkty = new Flickity(carousel, {
		pageDots: false,
		hash: true
	});
	var restart = document.getElementById('restartBtn');
	addEventListener('click', function(event) {
		if (!matchesSelector (event.target, '.my-btn')) {
			return;
		}
		flkty.select(0);
	});
	var progressBar = document.querySelector('.progress-bar');
	flkty.on('scroll', function(progress) {
		progress = Math.max(0, Math.min(1, progress));
		progressBar.style.width = progress * 100 + '%';
	});
})();
