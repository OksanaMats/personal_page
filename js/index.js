$(function(){
    $('#btn-send').click(sendForm);
});
function sendForm(e){
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/oksanavengrun@gmail.com", 
        method: "POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#msg').val()
            
        },
        dataType: "json",
        success:function(){
            $('form')[0].reset();
            $('#thanks').html('thank you for contacting us!');
        }
    });
};
