function showValues(){
	var elements = document.getElementsByClassName("bubble");
	var divel = document.getElementsByClassName("votes");
	for(var i=0; i< elements.length; i++) {
		x = elements[i];
		var plus = x.getAttribute("data-plus");
		var minus = x.getAttribute("data-minus");
		var plus_span = document.createElement("span");
		var minus_span = document.createElement("span");
		divel[i].appendChild(plus_span);
		divel[i].appendChild(minus_span);
		plus_span.className = "counter plus_node";
		minus_span.className = "counter minus_node";
		plus_span.innerHTML = plus;
		minus_span.innerHTML = minus;
	}
}

function updateValues(){
	var elements = document.getElementsByClassName("bubble");
	var plus_nodes = document.getElementsByClassName("plus_node");
	var minus_nodes = document.getElementsByClassName("minus_node");
	for(var i=0; i<elements.length; i++){
		var plus = elements[i].getAttribute("data-plus");
		var minus = elements[i].getAttribute("data-minus");
		plus_nodes[i].innerHTML = plus;
		minus_nodes[i].innerHTML = minus;
	}
}

function addListenersUpdate(){
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	var elements = document.getElementsByClassName("bubble");
	for(var i=0; i<elements.length; i++) {
		var observer = new MutationObserver(function(mutations){
			updateValues();
		});
		observer.observe(elements[i], {
			attributes: true
		});
	}
}

showValues();
addListenersUpdate();