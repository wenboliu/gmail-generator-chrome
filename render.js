/*var gmailgenerator = {
  onLoad: function() {
    composeTravelMail();
  },

  getCurrentURL: function() {
      return window.location;
  },

  composeTravelMail: function() {
	alert("test1" + window.location);
	alert("test1" + getCurrentURL());
    var position = getCurrentURL().indexOf("&travelType=");
	alert("test2");
    if ( position > -1) {
        this.travelType = gmailgenerator.getCurrentURL().replace(/\S*&travelType=/,"");
		alert("composeTravelMail");
        //gmailgenerator.loadingCheck();
    }
  },
  ,

  onDomesticCommand: function(e) {
    gmailgenerator.openComposeWindow("domestic");
  },
  
  onInternationalCommand: function(e) {
    gmailgenerator.openComposeWindow("international");
  },
  
  openComposeWindow: function(travelType) {
    window.open (gmailgenerator.getCurrentURL().replace(/\?\S*$/, "?view=cm&fs=1&tf=1&source=mailto&travelType="+travelType));
  },
  
  
  
  getCanvasFrame: function() {
      return document.getElementById("canvas_frame");
  },
  
  getTemplate: function(travelType) {
      return new Template(travelType);
  },

  loadingCheck: function(event) {
    window.setTimeout(function(){   gmailgenerator.populateMailContent(); }, 3500);
  },

  populateMailContent = function() {
    var template = gmailgenerator.getTemplate(gmailgenerator.travelType);
    var canvasFrame = gmailgenerator.getCanvasFrame();
    if (canvasFrame) {
        var canvasDoc = canvasFrame.contentDocument;
        if (canvasDoc) {
              var toElem = canvasDoc.getElementById(":qo");
              if (toElem) {
                  canvasDoc.getElementById(":rl").childNodes[1].style.display = "";R
                  toElem.value = template.getEmailTo();
                  canvasDoc.getElementById(":qn").value = template.getEmailCc();
                  canvasDoc.getElementById(":ql").value = template.getSubject();
                  try{
                    canvasDoc.getElementById(":qa").contentDocument.getElementById(":qa").innerHTML = "<br>" + template.getHTMLContent();
                  }catch(e) {
                      try {
                        canvasDoc.getElementById(":pp").value = template.getContent();
                      }catch(e) {
                        gmailgenerator.loadingCheck();  
                      }
                  }
                  return;
              }
        }
    }
    gmailgenerator.loadingCheck();
 }
};*/


window.addEventListener("load", function(){ render.onLoad();}, true);

var render = new Render();

function Render() {

	Render.prototype.getCurrentURL = function() {
		return window.location.href;
	}

	Render.prototype.onLoad = function () {
		var currentUrl = window.location;
		for(var i in currentUrl) {
			alert(i + "----------------" + currentUrl[i]);
		}
    	var position = window.location.indexOf("&travelType=");
    	if ( position > -1) {
        	this.travelType = window.location.replace(/\S*&travelType=/,"");
			alert("composeTravelMail");
        	//gmailgenerator.loadingCheck();
    	}
	}

}


