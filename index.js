


//now using event listener

var button = document.getElementById('bti');
//console.log(cg);
button.addEventListener('click',changetheme);
function changetheme()
{
    //picking the current element
 var theme = document.getElementById('theme');
 var currtheme = theme.getAttribute('currentTheme');
 
 //console.log(currtheme);
 if(currtheme == "default")
    {
        theme.setAttribute("href","darktheme.css");
        theme.setAttribute("currentTheme","darktheme.css");
        console.log("Theme changed to dark theme"); 
     }
 else
    {
        theme.setAttribute("href","style.css");
        theme.setAttribute("currentTheme","default");
        console.log("Theme changed to default theme");
    }
}