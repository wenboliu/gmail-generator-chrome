window.addEventListener("load", function(){ render.onLoad();}, true);

var render = new Render();

function Render() {

	if(typeof Render.initialized == "undefined"){
		Render.prototype.getCurrentURL = function() {
			return window.location.href;
		}

		Render.prototype.onLoad = function () {
    		var position = this.getCurrentURL().indexOf("&travelType=");
    		if ( position > -1) {
        		var travelType = this.getCurrentURL().replace(/\S*&travelType=/,"");
        		this.loadingCheck(travelType);
    		}
		}
		
		Render.prototype.loadingCheck = function (travelType) {
    		window.setTimeout(this.populateMailContent, 2500, travelType);
		}
		
		Render.prototype.populateMailContent = function (travelType) {
			var template = new Template(travelType);
			var canvasFrame = document.getElementById("canvas_frame");
			if (canvasFrame) {
				var canvasDoc = canvasFrame.contentDocument;
		        if (canvasDoc) {
					var toElem = canvasDoc.getElementById(":qo");
		            if (toElem) {
			        	canvasDoc.getElementById(":rl").childNodes[1].style.display = "";
		                toElem.value = template.getEmailTo();
		                canvasDoc.getElementById(":qn").value = template.getEmailCc();
		                canvasDoc.getElementById(":ql").value = template.getSubject();
		                try{
		                	canvasDoc.getElementById(":qa").contentDocument.getElementById(":qa").innerHTML = "<br>" + template.getHTMLContent();
		                }catch(e) {
		                    try {
		                        canvasDoc.getElementById(":pp").value = template.getContent();
		                    }catch(e) {
		                        this.loadingCheck(travelType);  
		                    }
		                }
		                return;
			        }
				}
			}
			this.loadingCheck(travelType);  
		}
		
		Render.initialized = true;
	}
	
}


