const uri = 'http://localhost:3000';
const $ = document.querySelector.bind(document);
const headerThemeColor = $("meta[name=theme-color]");
const headerMsAppNavButton = $("meta[name=msapplication-navbutton-color]");
const headerAppleMobWebApp = $("meta[name=apple-mobile-web-app-status-bar-style]");
const techSkillContainer = $('#techskills');
const softSkillsContainer = $('#softskills');
const portfolioContainer = $('#portfolio-items');
let currentTheme = -1;

// Theming
function thematize() {
	let theme = -1;

	do {
		theme = Math.floor(Math.random() * (6 - 0)) + 0;
	} while(theme == currentTheme);

	currentTheme = theme;

	let themeColor, themeDarkColor;

	switch (currentTheme) {
		case 0: {
			themeColor = '#CF1F2E';
			themeDarkColor = '#830000';
		} break;
		case 1: {
			themeColor = '#003B00';
			themeDarkColor = '#001900';
		} break;
		case 2: {
			themeColor = '#112e77';
			themeDarkColor = '#071638';
		} break;
		case 3: {
			themeColor = '#e6ac00';
			themeDarkColor = '#c29100';
		} break;
		case 4: {
			themeColor = '#4C3F4B';
			themeDarkColor = '#312930';
		} break;
		case 5: {
			themeColor = '#008967';
			themeDarkColor = '#005c45';
		} break;
		case 6: {
			themeColor = '#555';
			themeDarkColor = '#222';
		} break;
	}

	setCSSVariable('theme-color', themeColor);
	setCSSVariable('theme-color-darkened', themeDarkColor);
    headerThemeColor.setAttribute("content", themeColor);
    headerMsAppNavButton.setAttribute("content", themeColor);
	headerAppleMobWebApp.setAttribute("content", themeColor);
}
thematize();

// Remote info loading

fetch(`data/techskills.json`).then(response => response.json().then(skills => {
	skills.sort(sortAlphabeticaly).forEach((skill, index) => {
		techSkillContainer.appendChild(generateProgressBar(skill, index))
	});
}));

fetch(`data/softskills.json`).then(response => response.json().then(skills => {
	skills.sort(sortAlphabeticaly).forEach((skill, index) => {
		softSkillsContainer.appendChild(generateProgressBar(skill, index))
	});
}));

fetch(`data/portfolio.json`).then(response => response.json().then(portfolioItems => {
	portfolioItems.forEach(item => {
		const portfolioItem = document.createElement('div');
		const portfolioTitleContainer = document.createElement('div');
		const portfolioTitle = document.createElement('div');
		const portfolioChips = document.createElement('div');
		const portfolioContent = document.createElement('div');

		portfolioChips.classList.add('chipset');
		portfolioTitleContainer.classList.add('portfolio-item-title');
		portfolioContent.classList.add('portfolio-item-text');
		portfolioItem.classList.add('portfolio-item');

		portfolioTitle.innerText = item.name;
		portfolioContent.innerHTML = item.description;

		item.categories.forEach(category => {
			const chip = document.createElement('div');
			chip.classList.add('chip');
			chip.innerText = category;
			portfolioChips.appendChild(chip);
		});

		portfolioTitleContainer.appendChild(portfolioTitle);
		portfolioTitleContainer.appendChild(portfolioChips);
		portfolioItem.appendChild(portfolioTitleContainer);
		portfolioItem.appendChild(portfolioContent);
		portfolioContainer.appendChild(portfolioItem);
	});
}));

// Utilitary Functions

function sortAlphabeticaly(a, b) {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}

function generateProgressBar(item, index) {
	const skillset = document.createElement('div');
	const skillsetTitle = document.createElement('div');
	const progress = document.createElement('div');
	const progressLoaded = document.createElement('div');
	const title = document.createElement('span');
	const percentage = document.createElement('span');

	skillset.classList.add('skillset');
	skillsetTitle.classList.add('skillset-title');
	progress.classList.add('progress');
	progressLoaded.classList.add('loaded');

	title.innerText = item.name;
	if(item.percentage) {
		percentage.innerText = `${item.percentage}%`;
		progressLoaded.style.width = `${item.percentage}%`;
	} else {
		percentage.innerText = `Mais de 8 mil`;
		progressLoaded.style.width = '100%';
	}

	skillsetTitle.appendChild(title);
	skillsetTitle.appendChild(percentage);
	progress.appendChild(progressLoaded);
	skillset.appendChild(skillsetTitle);
	skillset.appendChild(progress);

	return skillset;
}

function setCSSVariable(variable, value) {
	if(variable.indexOf('--') != 0)
		variable = `--${variable}`;
	document.documentElement.style.setProperty(variable, value);
}
