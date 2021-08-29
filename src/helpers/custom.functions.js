window.onload = function () {
	jQuery(".light-img").on("click", function (e) {
		e.preventDefault();
		const sbox = jQuery(this).parent().find("a").swipebox();
	});
};
