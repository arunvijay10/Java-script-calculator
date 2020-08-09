function action(val)
{
  
    document.getElementById('inp').value+=val
    
}
function swipe()
{
    document.getElementById("inp").value=""
}
function result()
{
    var text= document.getElementById('inp').value
    var final = eval(text)
    document.getElementById('inp').value=final
}