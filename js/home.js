var PixioCarouselCustom = function(){
	//  Swiper Five ==
	var handleSwiperFiveGift = function() {	
		if(jQuery('.swiper-five-gift').length > 0){
			var swiper = new Swiper( '.swiper-five-gift', {
				slidesPerView: 5,
				spaceBetween: 20,
				loop: true,
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".five-gift-button-next",
				  prevEl: ".five-gift-button-prev",
				},
				breakpoints: {
					1200: {
						slidesPerView: 5.2,
					},
					1024: {
						slidesPerView: 4.2,
					},
					991: {
						slidesPerView: 3.2,
					},
					591: {
						slidesPerView: 2.2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 1.2,
						spaceBetween: 15,
					},
				}
			} );
		}
	}

    var handleSwiperFiveTShirt = function() {	
		if(jQuery('.swiper-five-t-shirt').length > 0){
			var swiper = new Swiper( '.swiper-five-t-shirt', {
				slidesPerView: 5,
				spaceBetween: 20,
				loop: true,
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".t-shirt-button-next",
				  prevEl: ".t-shirt-button-prev",
				},
				breakpoints: {
					1200: {
						slidesPerView: 5.2,
					},
					1024: {
						slidesPerView: 4.2,
					},
					991: {
						slidesPerView: 3.2,
					},
					591: {
						slidesPerView: 2.2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 1.2,
						spaceBetween: 15,
					},
				}
			} );
		}
	}

    var handleSwiperHaveToSay = function() {	
		if(jQuery('.swiper-five-have-to-say').length > 0){
			var swiper = new Swiper( '.swiper-five-have-to-say', {
				slidesPerView: 5,
				spaceBetween: 20,
				loop: true,
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
				navigation: {
				  nextEl: ".have-to-say-button-next",
				  prevEl: ".have-to-say-button-prev",
				},
				breakpoints: {
					1200: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					591: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
				}
			} );
		}
	}

    var BlogSlideshowSwiper = function() {	
		if(jQuery('.blog-slideshow').length > 0){
			var swiperTestimonial = new Swiper('.blog-slideshow', {
				loop: true,
				spaceBetween: 0,
				slidesPerView: "auto",
				speed: 1500,
				//autoplay: {
				//   delay: 2000,
				//},
				pagination: {
				  el: ".swiper-pagination-two",
				  clickable: true,
				},
                navigation: {
					nextEl: ".banner-button-next",
					prevEl: ".banner-button-prev",
				},
			});
		}
	}
	
	/* Function ============ */
	return {
        init:function(){
		},

		load:function(){
			handleSwiperFiveGift();
            handleSwiperFiveTShirt();
			handleSwiperHaveToSay();
            BlogSlideshowSwiper();
		},
		resize:function(){
		}
	}
	
}();



/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	PixioCarouselCustom.load();

	
});
/*  Window Load END */
