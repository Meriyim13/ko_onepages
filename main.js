/* form validation jquery*/

$(".submit").click(function(){
    var comment, author, email, url;
    comment = $("textarea[name=comment]").val();
    comment=$.trim(comment);
    console.log(comment);

    author = $("input[name=author]").val();
    author=$.trim(author);
    console.log(author);

    email = $("input[name=email]").val();
    email=$.trim(email);
    console.log(email);

    url = $("#url").val();
    
    if (comment == "") {
        $("#validation_comment").html("<br />Yorum boş geçilemez")
    }
    if (author == "") {
        $("#validation_author").html("<br />İsim boş geçilemez")
    }
    if (email == "") {
        $("#validation_email").html("<br />Email boş geçilemez")
    } else if (validateEmail(email) == false) {
        $("#validation_email").html("<br />Uygun formatta giriniz")


    }

    function validateEmail(email) {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
            return regex.test(email);
        
      
    }
  
	
	//rowId 1 olmayacak sonra
	addComment(comment, 1 ); 
    alert(" yorum eklendi");
            
});





$(document).ready(function () {
	
	$(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:300,    
        autoplayHoverPause:true,
        
    });
	 $('#add-comment').click(function () {
        // data = $(this); 
		comment = $("textarea[name=comment]").val();
		addComment(comment);
    });	


  
	$("#delete-comment").click(function () {
        data = $(this); 
        deleteComment(data.attr("row-id"));
     })
   
})


 function deleteComment(rowId ) {
 
    $('#comment' + rowId ).remove();

    alert(" yorum siliniyor");



    
 }




function addComment(value, rowId) {
	
	//formatComment(value, rowId);
	var divcomment = document.createElement("div");
        divcomment.classList.add('comment'); 	
        divcomment.classList.add('author'); 	

        
   divcomment.setAttribute("id", "comment-"+rowId);
    
        var messagediv = document.createElement("div");

		var deletebutton = document.createElement("a");
        messagediv.classList.add('message');
       


       		var deleteHTML = '<a class="fa fa-times text-danger" id="degistir" aria-hidden="true"></a>';
            var messageHTML = '<span class="message-content"> ' + value + ' </span>';
          //  var  imageHTML= '<span><img src="https://secure.gravatar.com/avatar/3fc581d571498af1e28db75e4805a112?s=48&amp;d=mm&amp;r=g" class="avatar avatar-48 photo rounded-circle mt-1" height="48" width="48"></span>';
   
       


        messagediv.innerHTML = messageHTML;
		deletebutton.innerHTML = deleteHTML;
        divcomment.appendChild(messagediv);
		divcomment.appendChild(deletebutton);

        

        document.getElementsByClassName('comments-list')[0].appendChild(divcomment);
       
}




