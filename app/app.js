window.__forceSmoothScrollPolyfill__ = true;

function navigateTo(target) {
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
}
