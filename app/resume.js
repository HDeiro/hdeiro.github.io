const $ = document.querySelector.bind(document);

window.onload = () => {
	this.loadAsyncCSS();
	this.loadText();
}

$('#print').addEventListener('click', () => {
	window.print();
})

function loadAsyncCSS() {
	[
		'https://fonts.googleapis.com/css2?family=Open+Sans&family=Pacifico&display=swap',
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
	].forEach(href => {
		const myCSS = document.createElement( "link" );
		myCSS.rel = "stylesheet";
		myCSS.href = href;
		// insert it at the end of the head in a legacy-friendly manner
		document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling );
	})
}

function loadText() {
	const language = 'en-us';

	fetch(`i18n/resume-${language}.json`)
		.then(response => response.json())
		.then(({work, education, languages, tech, accomplishments, certifications, others}) => {
			const workElement 	  		 = $('#work');
			const educationElement		 = $('#education');
			const languagesElement		 = $('#languages');
			const techElement 	  		 = $('#tech');
			const accomplishmentsElement = $('#accomplishments');
			const certificationsElement  = $('#certifications');
			const othersElement 		 = $('#others');

			work.forEach(({company, description, roles, link}) => {
				const node = document.createElement('div');
				node.innerHTML = `
					<div class="item">
						<div class="item-title">
							<a href="${link}" class="link" target="_blank">${company}</a>
						</div>
						<div class="item-description">${description}</div>
						<ul class="item-roles">
							${roles.map(role => `<li>${role}</li>`).join('')}
						</ul>
					</div>
				`;

				workElement.appendChild(node);
			});

			education.forEach(({title, details, link}) => {
				const node = document.createElement('div');
				node.innerHTML = `
					<div class="item">
						<div class="item-title">
							<a href="${link}" class="link" target="_blank">${title}</a>
						</div>
						<div class="item-description">${details}</div>
					</div>
				`;

				educationElement.appendChild(node);
			});

			languages.forEach(({language, stars}) => {
				const node = document.createElement('div');
				node.classList.add('box');

				node.innerHTML = `
					<div class="box-title">${language}</div>
					<div class="box-item">
						<div class="box-item-title">Speaking</div>
						<div class="box-item-value">${starlize(stars.speak)}</div>
					</div>
					<div class="box-item">
						<div class="box-item-title">Writing</div>
						<div class="box-item-value">${starlize(stars.write)}</div>
					</div>
					<div class="box-item">
						<div class="box-item-title">Reading</div>
						<div class="box-item-value">${starlize(stars.read)}</div>
					</div>
				`;

				languagesElement.appendChild(node);
			});

			tech.forEach(({name, background, color}) => {
				const node 				   = document.createElement('div');
				node.style.backgroundColor = background;
				node.style.color 		   = color;
				node.innerHTML 			   = name;

				node.classList.add('pill');
				techElement.appendChild(node);
			});

			accomplishments.forEach(({title, details}) => {
				const node = document.createElement('div');
				node.innerHTML = `
					<div class="item">
						<div class="item-title">${title}</div>
						<div class="item-description">${details}</div>
					</div>
				`;

				accomplishmentsElement.appendChild(node);
			});

			certifications.forEach(({title, details, link}) => {
				const node = document.createElement('div');
				node.innerHTML = `
					<div class="item">
						<div class="item-title">
							<a href="${link}" class="link" target="_blank">${title}</a>
						</div>
						<div class="item-description">${details}</div>
					</div>
				`;

				certificationsElement.appendChild(node);
			});

			others.forEach(skill => {
				const node = document.createElement('div');
				node.classList.add('pill')
				node.innerHTML = skill;
				othersElement.appendChild(node);
			});

			console.log(work);
		})
}

function starlize(size) {
	return new Array(size)
		.fill('placeholder')
		.map(_ => '<div class="star-rate fa fa-star"></div>')
		.join('');
}


function navigateTo(target) {
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}
