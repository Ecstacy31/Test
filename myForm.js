/*
 *
 * @author Saurabh Khemka
 * @version 1.0.1
 * 
 */

//DOCUMENT.READY START
$(document).ready(function(){
	
	// SUBMIT FORM
	$(document).on("submit", "#customForm", function(e){ 		
		var postData = $(this).serializeArray();
		var formURL = $(this).attr("action");
		
		// START OF AJAX CALL
		$.ajax(
				{
					url : formURL,
					type: "POST",
					data : postData,
					success:function(data, textStatus, jqXHR){
						$("<div><h1><i>Form submitted successfully.</i></h1></div>").fadeTo( 500, 1,"").css({
						    position: "absolute",
						    width: "100%",
						    height: "100%",
						    top: 0,
						    left: 0,
						    background: "white"
						}).appendTo($("#customForm").css("position", "relative"));						
					},
					error: function(jqXHR, textStatus, errorThrown){						
						$("<div>Please try again after sometime.</div>").fadeTo( 500, 1,"").css({
						    position: "absolute",
						    width: "100%",
						    height: "100%",
						    top: 0,
						    left: 0,
						    background: "white"
						}).appendTo($("#customForm").css("position", "relative"));
						
					}
				});
		// END OF AJAX CALL
		
		// PREVENTING THE PAGE FROM REFRESHING AFTER SUBMISSION
		return false;
	});
});

//DOCUMENT.READY END