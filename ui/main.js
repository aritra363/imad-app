var counter=0;
var butt=document.getElementById('count');
butt.onclick =function ()
{   counter++;
    document.getElementById("c").innerHTML=counter;
    }
    //make request
    request.open('GET','http://aritrapaul363.imad.hasura-app.io/counter',true);
    request.send(null);
  
  
  
