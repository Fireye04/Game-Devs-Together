import * as data from "members.json";

//Include this site by default
siteurls = ["gdt.fireye.coffee"];

for (const site of data.sites) {
	siteurls.push(site.url.replace(/https:\/\/|http:\/\/|\/.*/gm, ""));
}

window.data = siteurls;

console.log(window.data);

//Code adapted from https://transring.neocities.org/
widgets = {
	default: `
		<div id="GDT-Widget">
			<a href="https://gdt.fireye.coffee" target="_blank"><img src="https://gdt.fireye.coffee/Assets/GDT.svg" alt="Game Devs Together Member!" width=200></a>
		</div>
	`,
	error: `<div>
		<a href="https://gdt.fireye.coffee" target="_blank"><img src="https://gdt.fireye.coffee/Assets/GDT.svg" width=200></a>
		<div>This site is not yet a GDT member :)</div>
	</div>`,
};
idx = window.data.findIndex((site) =>
	location.href
		.replace(/https:\/\/|http:\/\/|\/.*/gm, "")
		.startsWith(site, 0),
);

document.currentScript.outerHTML = idx === -1 ? widgets.error : widgets.default;
