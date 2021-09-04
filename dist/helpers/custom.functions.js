window.onload = function () {
	jQuery(".light-img").on("click", function (e) {
		e.preventDefault();
		// custom click handler code 
	});
};
function customQuoteButton($customToolbarElements, item) {

	var s= '<button class="quote-button">Get A Quote</button>';
	$customToolbarElements.eq(0).html(s);
}


function quoteButtonClickHandler(customElementName, $customIcon, item){

		// Display the title of the current displayed image
		if( customElementName == 'custom1' ) {

			jQuery('.multi_qf-popup-show').trigger('click');
			const _popup =jQuery('#multiQF_popup');
			_popup.css({
				'z-index':9999999999,
			});

			_popup.find('h3#register').append(`<img class="img-quote" src="${item.src}" width="100" height="100"/><input value="${item.src}" name="image-quote-input" type="hidden" id="image-quote-input">`)
			_popup.find('.multiqf_looking_for label:last-child').trigger('click');

			_popup.find('.multi_qf-close-button').on('click', function(){
				_popup.find('.img-quote').remove();
				_popup.find('#image-quote-input').remove();
			})
		}


}