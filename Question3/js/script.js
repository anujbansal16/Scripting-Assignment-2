var valueArr;
var index;
var gType;
$(document).ready(function(){
  $("button").click(function(){      
    var btnId=this.id;
    if(btnId=="sC"){
      var search=($("#characterT").val()).trim();
      if(search==""){
          openDialog("error","Please enter the text");
      }else{
        makeRequest("characters",search,true);
      }
    }
    if(btnId=="sH"){
      search=($("#houseText").val()).trim();
      if(search==""){
          openDialog("error","Please enter the text");
      }else{
        makeRequest("houses",search,true);
      } 
    }
    if(btnId=="rC"){
      var id=Math.floor(Math.random() * 2138) + 1;
      randomMakeRequest("characters",id);
    }
    if(btnId=="rH"){
      id=Math.floor(Math.random() * 444) + 1;
      randomMakeRequest("houses",id);
    }
    if(btnId=="rHC"){
        search=($("#houseText").val()).trim();
        if(search==""){
            openDialog("error","Please enter the text");
        }else{
          makeRequest("houses",search,false);
        } 
    }
    if(btnId=="nxt"){
      var len=valueArr.length;
      if(index<len-1)
        parse(valueArr[(++index)],(gType=="characters"?"characters":"houses"),true);
    }
    if(btnId=="prev"){
      var len=valueArr.length;
      if(index>0)
        parse(valueArr[(--index)%len],(gType=="characters"?"characters":"houses"),true);
    }
  });
});

function openDialog(type, msg){
    $(".modal-title").html(msg);
  if(type=="error")
    $(".modal-header").css({"background":"#c9302c"});
  if(type=="warning")
    $(".modal-header").css({"background":"#ec971f"});
  $("#dial").click();
}

function parse(result,type,flag){
  console.log("in parse");
    var contain=$("#api-content");
    var text;
    if(type=="characters"){
        text="<h1 style='color:#000'><b>"+result.name+"</b></h1>"
        text+="<h2>Title: "+result.titles+"</h2>";
        text+="<h2>Gender: "+result.gender+"</h2>";
        text+="<h2>Born: "+result.born+"</h2>";
        text+="<h2>Died: "+result.died+"</h2>";        
        text+="<h2>Culture: "+result.culture+"</h2>";
        text+="<h2>PlayedBy: "+result.playedBy+"</h2>";
        contain.html(text);
    }
    else if(type=="houses" && flag==true){
        text="<h1 style='color:#000'><b>"+result.name+"</b></h1>"
        text+="<h2>Region: "+result.region+"</h2>";
        text+="<h2>CoatOfArms: "+result.coatOfArms+"</h2>";
        text+="<h2>Words: "+result.words+"</h2>";        
        text+="<h2>Titles: "+result.titles+"</h2>";
        text+="<h2>Founded: "+result.founded+"</h2>";
        contain.html(text);
    }else{
      var mem=result.swornMembers;
      var size=mem.length;
      console.log(size);
      var rand=Math.floor(Math.random()*size);
      if(size==0)
       openDialog("warning","No characters found in this house"); 
      else
        randomChar("characters",mem[rand]);
    }
    
}

function makeRequest(type,name,flag){
  $.ajax({url: "https://www.anapioficeandfire.com/api/"+type+"?name="+name, success: function(result){
        if(result==""||result==undefined){
           openDialog("warning","Entered "+type+" not found");
        }
        else{
          valueArr=result;
          index=0;
          gType=type;
          console.log(valueArr);
          parse(result[0],type,flag);
          if(valueArr.length>1)
            $("#buttonGrp").css("display","block");
          else
            $("#buttonGrp").css("display","none");
        }
    }})
}

function randomMakeRequest(type,id){
  $.ajax({url: "https://www.anapioficeandfire.com/api/"+type+"/"+id, success: function(result){
        $("#buttonGrp").css("display","none");
        parse(result,type,true);
    }})
}

function randomChar(type,urlC){
  $.ajax({url: urlC, success: function(result){
      $("#buttonGrp").css("display","none");
        parse(result,type,true);
    }})
}


