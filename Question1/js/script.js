$("#inputPanel").val("<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\n</body>\n</html>");
// $("#outframe").contents().find('body').html("<b style='color:#fff'>Result will be displayed here..</b>");
$(document).ready(function(){
  var button = $('.night-mode');
  var container = $('.content-box');
  var inp= $("#inputPanel");
  button.click(function() {
    container.toggleClass('nightmode');
    inp.toggleClass('nightmodeblk');
    $('.night-mode').toggleClass('turnedOff');
    $('.night-mode').text("Turn on the lights");
  });
  $("#inputPanel").keyup(function(){
    update();
  });
});


function update(){
    var oFrame = $("#outframe").contents().find('body');
    var data = $("#inputPanel").val();
    oFrame.html(data);
}
// setInterval(update,200);
function clearI(){
	$("#inputPanel").val("");
}
function clearO(){
	$("#outframe").contents().find('body').html("");
}
