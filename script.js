
$(document).on("click", '#subscribe_submit', function(e) {
    e.preventDefault();
    var parent = $(this).parent();
      $.ajax({
          url: '/local/ajax/subscribe.php',
          data: {
            mail: parent.find('input[name="mail"]').val(),
        },
        dataType: 'json',
          success: function(result){
              if(result.error){
                  alert(result.error);
              }else{
                   alert(result.sendMsg);
              }
          }
      });
});
