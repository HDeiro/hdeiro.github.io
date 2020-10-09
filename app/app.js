window.onload = () => {
	this.loadAsyncCSS();
	this.loadText();
}

function loadAsyncCSS() {
	[
		'https://fonts.googleapis.com/css2?family=Open+Sans&family=Pacifico&display=swap',
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css&display=swap',
		'/non-critical.css'
	].forEach(href => {
		const myCSS = document.createElement( "link" );
		myCSS.rel = "stylesheet";
		myCSS.href = href;
		// insert it at the end of the head in a legacy-friendly manner
		document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling );
	})
}

function loadText() {
	const language = navigator.language === 'pt-BR' ? 'pt-br' : 'en-us';

	fetch(`i18n/${language}.json`)
		.then(response => response.json())
		.then(data => Object.keys(data).forEach(key => {
			const element = document.querySelector(`#${key}`);

			if (element) {
				const value = data[key];
				const itsJustAString = value[0].length === 1;

				if (itsJustAString) {
					element.innerHTML = value;
				} else {
					value.forEach(valueItem => {
						const node 	   = document.createElement('div');
						node.innerHTML = valueItem;
						element.appendChild(node);
					});
				}
			}
		}));
}


function navigateTo(target) {
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}
