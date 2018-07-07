function Loadjson(file,callback){
 var a = new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("get",file,true);
  a.onreadystatechange=function(){
    if(a.readyState===4 && a.status=="200"){
      callback(a.responseText);
    }
  }
  a.send(null);
}

Loadjson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
career(data.basics);
educ(data.education);
techi(data.tech);
achive(data.Achive);
});

var right = document.getElementById('right');
function career(edu){
  var h1=document.createElement("h1");
  h1.textContent="CAREER OBJECTIVE";
  right.appendChild(h1);
    var hr=document.createElement("hr");
      right.appendChild(hr);
      var p=document.createElement("p");
      p.textContent=edu.co;
      right.appendChild(p);
}

function educ(edu){
  var h1 =document.createElement("h1");
  h1.textContent="EDUCATION QUALIFICATIONS";
  right.appendChild(h1);
     var hr =document.createElement("hr");
       right.appendChild(hr);
       for(var i=0;i<edu.length;i++){
           var p =document.createElement("li");
           p.textContent =edu[i].name;
             right.appendChild(p);
             var p =document.createElement("p");
             p.textContent =edu[i].inst;
               right.appendChild(p);


       }
}
function techi(edu){
        var h1=document.createElement("h1");
        h1.textContent="TECHNICAL SKILLS";
        right.appendChild(h1);
        var hr=document.createElement("hr");
          right.appendChild(hr);
          for(var i=0;i<edu.length;i++){
    var p=document.createElement("p");
      p.textContent=edu[i].op;
      right.appendChild(p);
      var p=document.createElement("p");
      p.textContent=edu[i].values;
      right.appendChild(p);
      }
    }
    function achive(edu){
  var h1=document.createElement("h1");
  h1.textContent="ACHIEVEMENTS";
  right.appendChild(h1);
    var hr=document.createElement("hr");
      right.appendChild(hr);
      var p=document.createElement("p");
      p.textContent=edu.details;
      right.appendChild(p);
    }
