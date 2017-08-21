console.log('Loaded!');
alert("Hi!bye");
//move image
var img=document.getElementById('dice');
var ml=0;
 function right()
    {   
         ml=ml+1;
        img.style.marginRight=ml+'px';
    }
img.onclick = function ()
{
   
    var inter=setInterval(right,50);
}