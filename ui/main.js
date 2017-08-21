
var butt=document.getElementById('count');
butt.onclick =function ()
{
    var req=new XMLHttpRequests();
    req.onreadystatechange= function()
    { if(req.readystate===XMLHttpRequest.DONE)
    {
        if (req.status===200)
        {
          var counter=req.responseText;
          var span=document.getElementById('c');
          span.innerHTML=counter.toString(); 
        }
    }
        
    }
    //make request
    req.open('Get','http://aritrapaul363.imad.hasura-app.io/counter');
    req.send('null');
  
  
  
}