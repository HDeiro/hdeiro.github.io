window.onload = () => {
	this.loadAsyncCSS();
	this.loadText();
	this.loadRandomTheme();
}

function loadAsyncCSS() {
	[
		'https://fonts.googleapis.com/css2?family=Open+Sans&family=Pacifico&display=swap',
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
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
					if (key === 'section5-portfolio') {
						parsePortfolio(value, element);
						return;
					}

					value.forEach(valueItem => {
						const node 	   = document.createElement('div');
						node.innerHTML = valueItem;
						node.classList.add('zoom-in');
						node.style.animationDelay = getRandomDelay();
						element.appendChild(node);
					});
				}
			}
		}));
}

function loadRandomTheme() {
	const options = ['#555', '#0077b5'];
	const index = Math.floor(Math.random() * options.length);
	document.documentElement.style.setProperty('--theme-color', options[index]);
}

function getRandomDelay() {
	const options = ['200ms', '400ms', '600ms'];
	const index = Math.floor(Math.random() * (options.length + 1));
	return options[index];
}

function parsePortfolio(data, elementContainer) {
	data.forEach(item => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.classList.add('slide-up-in');

		const title = document.createElement('div');
		title.classList.add('card-title');
		title.innerHTML = item.title;
		card.appendChild(title);

		const tags = document.createElement('div');
		tags.classList.add('card-tags');
		item.tags.forEach(tagText => {
			const tag = document.createElement('div');
			tag.classList.add('tag');
			tag.innerHTML = tagText;
			tags.appendChild(tag);
		});
		card.appendChild(tags);

		const description = document.createElement('div');
		description.classList.add('card-description');
		description.innerHTML = item.description;
		card.appendChild(description);

		elementContainer.appendChild(card);
	})
}


function navigateTo(target) {
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}
