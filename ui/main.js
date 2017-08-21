console.log('Loaded!');
alert("Hi!bye");
//move image
var img=document.getElementById('dice');
 function right()
    {   var ml=0;
         ml=ml+10;
        img.style.marginLeft=ml+'px';
    }
img.onclick = function ()
{
   
    var inter=setInterval(right(),100);
}