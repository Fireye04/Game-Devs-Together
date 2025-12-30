//Code originally adapted from https://transring.neocities.org/ring.js
import * as data from "members.json";
import rainbowDarkWidget from "/Assets/Widgets/rainbow-dark.html?raw";
import originalWidget from "/Assets/Widgets/original.html?raw";

/*
 * Script Inputs
 * =============
 * "widget-style" - User widget style of choice. Either "rainbow-dark" or "original".
 *
 *
 * Widget Consts
 * -------------
 * {webring-link} - Link referring back to the GDT website. Currently https://gdt.fireye.coffee.
 * {alt-text} - Alt text descriptor for the widget.
 * {prev-link} - Link to previous GDT member.
 * {next-link} - link to next GDT member.
 */

/************** WIDGET INPUT **************/

// Apply identical wrappers to all widgets
function getWrapperHTML(rawWidget){
    return `<div id='GDT-Widget'>${rawWidget}</div>`;
}

function getErrorWrapperHTML(rawWidget){
    return `<div id="GDT-Widget-Error">
        ${rawWidget}
        <span id="GDT-Widget-Error-Message">
			This site is not yet a GDT member :)
		</span></div>`;
}


widgets = {
	"rainbow-dark": rainbowDarkWidget,
	"original": originalWidget,
};

style = document.currentScript.getAttribute("widget-style");

// User input handling
if (style === null) {
	style = "rainbow-dark";
}
if (!(style in widgets)) {
	style = "rainbow-dark";
	console.warn(`GDT Widget: "${style}" is not a valid style! Available styles: ${Object.keys(widgets).join(", ")}`);
}

html = widgets[style];


/************** MEMBER LIST RESOLUTION **************/

//Include GDT website by default
siteurls = ["gdt.fireye.coffee"];

for (const site of data.sites) {
	siteurls.push(site.url.replace(/https:\/\/|http:\/\/|\/.*/gm, ""));
}

window.data = siteurls;

idx = window.data.findIndex((site) =>
	location.href
		.replace(/https:\/\/|http:\/\/|\/.*/gm, "")
		.startsWith(site, 0),
);

// Remove GDT website from member URLs
window.data.splice(0,1);

webringLink = "https://gdt.fireye.coffee";

// Site not found in member list 
if (idx === -1) {
    // Set error wrapper
	html = getErrorWrapperHTML(html
		.replace("{webring-link}", webringLink)
		.replace("{prev-link}", webringLink)
		.replace("{next-link}", webringLink)
		.replace("{alt-text}", "Game Devs Together webring widget. This site is not a member."));
    document.currentScript.outerHTML = html;

    // return early
	throw new Error("This site is not a GDT member");	
} 

// Assemble next and previous member links
prevIdx = (idx - 1) % window.data.length;
nextIdx = (idx + 1) % window.data.length;

prevLink = "https://" + window.data[prevIdx];
nextLink = "https://" + window.data[nextIdx];

html = getWrapperHTML(html
    .replace("{webring-link}", webringLink)
    .replace("{prev-link}", prevLink)
    .replace("{next-link}", nextLink)
    .replace("{alt-text}", "Game Devs Together webring widget. This site is a member!"));

document.currentScript.outerHTML = html;
