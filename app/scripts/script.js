const uri = 'http://localhost:3000';
const $ = document.querySelector.bind(document);

const techSkillContainer = document.querySelector('#techskills');
const softSkillsContainer = document.querySelector('#softskills');

// Load tech skills
fetch(`data/techskills.json`).then(response => response.json().then(skills => {
	skills.sort(sortAlphabeticaly).forEach(skill => {
		techSkillContainer.appendChild(generateProgressBar(skill))
	});
}));

fetch(`data/softskills.json`).then(response => response.json().then(skills => {
	skills.sort(sortAlphabeticaly).forEach(skill => {
		softSkillsContainer.appendChild(generateProgressBar(skill))
	});
}));

function sortAlphabeticaly(a, b) {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}

function generateProgressBar(item) {
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
