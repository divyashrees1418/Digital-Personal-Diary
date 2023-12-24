var addnew=document.getElementById('add')
var back=document.querySelector('.pop-overlay')
var pop=document.querySelector('.pop-box')

addnew.addEventListener('click',function()
{
    back.style.display='block'
    pop.style.display='block'
})


var insidepopdel=document.getElementById('deletetoweb')

insidepopdel.addEventListener('click',function(event)
{
    event.preventDefault()
    back.style.display='none'
    pop.style.display='none'
})

var insidepopadd=document.getElementById('addtoweb')
var usercontainer=document.querySelector('.container')
var userdateday=document.getElementById('date-day')
var usertime=document.getElementById('time')
var usermem=document.getElementById('memory')

insidepopadd.addEventListener('click',function(event)
{
    event.preventDefault()
    var div1=document.createElement("div")
     div1.setAttribute('class','box-container')

     div1.innerHTML=`<h2>${userdateday.value}</h2>
     <h2>${usertime.value}</h2>
     <p>${usermem.value}</p>
     <button id="del" onclick='deleteitems(event)'>Delete</button>`
     usercontainer.append(div1)
     back.style.display='none'
     pop.style.display='none'
    
})

function deleteitems(event)
{
    event.target.parentElement.remove()
}




