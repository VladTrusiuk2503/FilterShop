document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".card").forEach(function(e){var t;switch(e.querySelector(".card__title").textContent){case"Green":t="green";break;case"Blue":t="blue";break;case"Red":t="red";break;case"Yellow":t="yellow";break;case"Pink":t="pink";break;case"Orange":t="orange";break;case"Brown":t="brown";break;case"Khaki":t="khaki";break;case"Lime":t="lime";break;case"Gray":t="gray";break;case"Black":t="black";break;case"Violet":t="violet";break;default:t="white"}e.style.backgroundColor=t})}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("startNumber"),t=document.getElementById("endNumber"),a=document.getElementById("colorSearch"),r=document.querySelectorAll(".card");function n(){var c=parseInt(e.value),d=parseInt(t.value),l=a.value.toLowerCase();r.forEach(function(e){var t=parseInt(e.getAttribute("data-number")),a=e.getAttribute("data-color").toLowerCase(),r=isNaN(c)||c<=t&&t<=d,n=a.includes(l),o=!(r&&n);e.style.display=o?"none":"block"})}e.addEventListener("input",n),t.addEventListener("input",n),a.addEventListener("input",n)});