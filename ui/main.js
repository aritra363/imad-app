
var butt=document.getElementById('count');
butt.onclick =function ()
{
    var request=new XMLHttpRequests();
    request.onreadystatechange= function()
    { if(request.readystate===XMLHttpRequest.DONE)
        {
        if (request.status===200)
        {
          var counter=request.responseText;
          var span=document.getElementById('c');
          span.innerHTML=counter.toString(); 
        }
    }
        
    }
    //make request
    request.open('GET','http://aritrapaul363.imad.hasura-app.io/counter',true);
    request.send(null);
  
  
  
}