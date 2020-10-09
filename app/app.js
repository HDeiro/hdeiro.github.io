window.onload = () => {
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
		}))

}


function navigateTo(target) {
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}
