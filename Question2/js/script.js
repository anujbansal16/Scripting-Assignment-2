var last,count;
$(document).ready(function(){
  lastComic();
  // makeRequest("https://xkcd.com/1/info.0.json");
  $("button").click(function(){      
    var btnId=this.id;
    if(btnId=="first"){
      count=1;
    }
    if(btnId=="last"){
      count=last;
    }
    if(btnId=="prev"){
      if(count>1)
        count--;
    }
    if(btnId=="nxt"){
      if(count<last)
        count++;
    }
    if(btnId=="rand"){
      var temp=Math.floor(Math.random() * last) + 1;
      count=temp;
    }
    console.log(count);  
    makeRequest("https://xkcd.com/"+count+"/info.0.json");
  });
});

function parse(result){
    // console.log(result.img);
    var title=result.title;
    var imgUrl=result.img;
    var alt=result.alt;
    $("#cimg").attr("src",imgUrl);
    $("#title").html("<h3><b>"+title+"</b></h3>");
    $("#cimg").attr("title",alt);
    $("#cimg").attr("alt",title);
}

function makeRequest(url){
  $.ajax({url: url, success: function(result){
        parse(result);
    }})
}

function lastComic(){
  $.ajax({url:"https://xkcd.com/info.0.json", success: function(result){
        last=result.num;
        count=last;
        parse(result);
    }});
}


