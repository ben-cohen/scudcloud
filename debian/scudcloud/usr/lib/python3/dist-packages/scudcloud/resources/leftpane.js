var LeftPane={addTeam:function(e,t,n,l,c){var i=document.getElementById(e);if(null===i){var a=document.getElementById("teams");li=document.createElement("li"),li.id=e,li.setAttribute("onclick","LeftPane.switchTo('"+e.replace(/'/g,"&quot;")+"','"+n.replace(/'/g,"&quot;")+"')"),li.setAttribute("title",t),li.innerHTML=t[0],l&&(li.style.backgroundImage="url('"+l.replace(/'/g,"&quot;")+"')",li.innerHTML=""),a.appendChild(li),c&&LeftPane.setActive(e),LeftPane.switchTo(e,n)}},click:function(e){var t=document.getElementsByTagName("li");e<t.length&&t[e].click()},alert:function(e){document.getElementById(e).classList.add("alert")},stopAlert:function(e){document.getElementById(e).classList.remove("alert")},switchTo:function(e,t){leftPane.switchTo(t),LeftPane.setActive(e)},setActive:function(e){for(var t=document.getElementsByTagName("li"),n=0;n<t.length;n++)t[n].className="inactive";document.getElementById(e).className="active"},clickNext:function(e){for(var t=document.getElementsByTagName("li"),n=0;n<t.length&&"active"!=t[n].className;n++);n+=new Number(e),n>=t.length?n=0:0>n&&(n=t.length-1),LeftPane.click(n)}};
