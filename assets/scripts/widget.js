import * as data from "members.json";

siteurls = [];

for (const site of data.sites) {
	siteurls.push(site.url.replace(/https:\/\/|http:\/\/|\/.*/gm, ""));
}

window.data = siteurls;

console.log(window.data);

//Code adapted from https://transring.neocities.org/
widgets = {
	default: `
		<div id="GDT-Widget">
			<a href="/" target="_blank"><img src="/Assets/GDT.svg" alt="Game Devs Together!" width=200></a>
		</div>
	`,
	error: `<div>
		<a href="/" target="_blank"><img src="/Assets/GDT.svg" width=200></a>
		<div>This site is not yet a GDT member :)</div>
	</div>`,
};
idx = window.data.findIndex((site) =>
	location.href
		.replace(/https:\/\/|http:\/\/|\/.*/gm, "")
		.startsWith(site, 0),
);

document.currentScript.outerHTML = idx === -1 ? widgets.error : widgets.default;
