/* eslint-env browser */
(function () {
	'use strict';

	function injectScript(src, cb) {
		const script = document.createElement('script');
		script.src = src;
		script.addEventListener('load', cb);
		document.head.appendChild(script);
	}

	window.handleRssPost = function (data) {
		var item = data.query.results.rss.channel.item;
		var link = document.createElement('a');
		link.href = item.link.replace(/\?source=rss.*$/, '');
		link.textContent = item.title;
		var container = document.querySelector('#latest-blog-post');
		container.appendChild(link);
		container.classList.add('visible');
	};

	// Burger menu toggle
	var burger = document.querySelectorAll('.nav-toggle');
	var menu = document.querySelectorAll('.nav-menu');
	for (var i = 0; i < burger.length; i++) {
		burger[i].addEventListener('click', function () {
			this.classList.toggle('is-active');
			this.nextElementSibling.classList.toggle('is-active');
		});
	}
	

})();

  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});
