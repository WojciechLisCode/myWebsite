const button2 = document.querySelector("#expand");
const description = document.querySelector("#description");
const body = document.querySelector("#body");

button2.onclick = function(event) {
    if (description.classList.contains("descriptionHidden")) {

        body.classList.add("expanded")

        description.classList.add("descriptionTransition");
        description.clientWidth;
        description.classList.remove("descriptionHidden")
        
        console.log('hidden to visible')
    } else {
        description.classList.add("descriptionTransition");
        description.classList.add("descriptionHidden")        
        console.log("visibletohidden")
        body.classList.remove("expanded")
    }

    description.addEventListener('transitionend', function() {
		description.classList.remove('descriptionTransition');
	}, false);
}

