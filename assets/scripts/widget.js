import * as data from "members.json";
import rainbowDarkWidget from "/Assets/widget-rainbow-dark.html?raw";

//Code adapted from https://transring.neocities.org/
widgets = {
	"rainbow-dark": rainbowDarkWidget,
	"original": `
		<div id="GDT-Widget">
			<a href="{webring-link}" target="_blank"><img src="https://gdt.fireye.coffee/Assets/GDT.svg" alt="{alt-text}" width=200></a>
		</div>
	`,
};

style = document.currentScript.getAttribute("widget-style");
if (style === null) {
	style = "rainbow-dark";
}
if (!(style in widgets)) {
	style = "rainbow-dark";
	console.warn(`GDT Widget: "${style}" is not a valid style! Available styles: ${Object.keys(widgets).join(", ")}`);
}

html = widgets[style];

//Include this site by default
siteurls = ["gdt.fireye.coffee"];

for (const site of data.sites) {
	siteurls.push(site.url.replace(/https:\/\/|http:\/\/|\/.*/gm, ""));
}

window.data = siteurls;

console.log(window.data);

idx = window.data.findIndex((site) =>
	location.href
		.replace(/https:\/\/|http:\/\/|\/.*/gm, "")
		.startsWith(site, 0),
);

webringLink = "https://gdt.fireye.coffee";

if (idx === -1) {
	html = html
		.replace("{webring-link}", webringLink)
		.replace("{prev-link}", webringLink)
		.replace("{next-link}", webringLink)
		.replace("{alt-text}", "");
	html = `
	<div id="gdt-widget-error">
		${html} 
		<span id="gdt-widget-error-message">
			This site is not yet a GDT member :)
		</span>
	</div>
	`;
	document.currentScript.outerHTML = html;
	throw new Error("This site is not a GDT member");	
}

prevIdx = (idx - 1) % window.data.length;
nextIdx = (idx + 1) % window.data.length;


prevLink = "https://" + window.data[prevIdx];
nextLink = "https://" + window.data[nextIdx];

html = html
	.replace("{webring-link}", webringLink)
	.replace("{prev-link}", prevLink)
	.replace("{next-link}", nextLink)
	.replace("{alt-text}", "Game Devs Together Member!");

document.currentScript.outerHTML = html;
