let listItem = document.getElementsByTagName('li');
let count = -60;

for (var i = 0; i < listItem.length; i++) {
  listItem[i].style.transform = 'translateY('+count+'px)';
  count-=50;
}

let popUp = document.getElementById('popUp');
let linkContainer = document.getElementById('vueLink__container');
let proName = document.getElementById('name');
let proSkillUse = document.getElementById('skillUse');
let vueLink = document.getElementById('popUp__vueLink');
let openerLinkCont = document.getElementsByClassName('hexagonDone');
let links = [];

for (let i = 0; i < openerLinkCont.length; i++) {
  links.push(openerLinkCont[i].querySelector('a'));
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", aClick, false);
}

function aClick(e) {
  try { e.preventDefault(); }
  catch (x) { e.returnValue = false; }
  let num = this.getAttribute('href');

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var portfolioContent = JSON.parse(this.responseText);

      proName.innerText = portfolioContent[num].title;
      popUp.style.backgroundImage = 'url('+portfolioContent[num].img+')'
      proSkillUse.innerText = portfolioContent[num].description;

      let childLink = linkContainer.childNodes;

      while (true) {
        if (childLink.length != 0) {
          childLink[0].remove()
        } else {
          break;
        }
      }

      let ObjElem = portfolioContent[num].vueLink;

      for (let i = 0; i < ObjElem.length; i++) {
        var linkElem = document.createElement('a');
        linkElem.setAttribute('href', ObjElem[i].src)
        var linkContent = document.createTextNode(ObjElem[i].title);
        var Space = document.createTextNode('\n\r');
        linkElem.appendChild(linkContent);
        linkContainer.appendChild(linkElem);
        linkContainer.appendChild(Space);
      }

      e = e || event;
      var popup = document.getElementsByClassName("popUp__container")[0];

      if (popup.style.transform == 'translateY(0px)') {
        popup.style.transform = 'translateY(-100vh)';
      } else {
        popup.style.transform = 'translateY(0px)';
      };
    }
  };
  xmlhttp.open("GET", "./obj.json", true);
  xmlhttp.send();
};

window.onclick = function (e) {
  if (!e.target.matches('#popUp') && e.target.matches('.popUp__container')) {
    var dropdowns = document.getElementsByClassName("popUp__container")[0];
      if (dropdowns.style.transform == 'translateY(0px)') {
          dropdowns.style.transform = 'translateY(-100vh)';
      };
  };
};
