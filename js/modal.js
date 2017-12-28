
// pop modal window
$(window).on('load', function () {
		$( ".modal-window" ).click(function(event) {
			if( $(event.target).attr('class') == 'modal-window' ) {
				$( this ).fadeOut("fast");
			}
		});
		
		
		// modal trigger
		$( "[data-modal-id]" ).click(function(event) {
			$( "#" + $(this).attr('data-modal-id') ).fadeIn();
			
			//if( $(event.target).attr('class') == 'modal-window' ) {
				//$( this ).fadeOut();
			//}   
			centerModal();

		});
		
		
		$( "[data-modal-close]" ).click(function(event) {
			if( $(this).parent().parent().attr('class') == 'modal-window' ){
				$(this).parent().parent().fadeOut("fast");
			} else if( $(this).attr('data-modal-close') != '' ){
				$("#"+$(this).attr('data-modal-close') ).fadeOut("fast");
			}
		});
		
		
 });	


$(window).resize(function(){
	centerModal();
});


function centerModal(){
	$( ".modal-content" ).position({
	    my: "center",
	    at: "center",
	    of: window,
	    using: function (pos, ext) {
	        $(this).animate({ top: pos.top }, "fast", "linear" );
	    }
	});
}


// this function is for whenever there is a hidden textblock on the modal window that needs to 
// be expanded and the text link toggled
function toggleModalDialog( target, text1, text2 ){
	currentText = $(event.target).text();
	$(event.target).text( currentText == text1 ? text2 : text1 );
	$('#'+target ).slideToggle( 200, function(){
		 centerModal();
		 });
	//centerModal(); 
	alert( $(event.target).text() );
	
}
