console.log('Loaded!');
alert("Hi!bye");
//move image
var img=document.getElementById('dice');
img.onclick = function ()
{
    function right()
    {   var ml=ml+10;
        img.style.marginLeft=ml+'px';
    }
    var inter=setInterval(right,100);
}