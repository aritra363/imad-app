var counter=0;
var butt=document.getElementById('count');
butt.onclick =function ()
{
  counter=counter+1;
  var span=document.getElementById('c');
  span.innerHTML=counter.toString();
  
}