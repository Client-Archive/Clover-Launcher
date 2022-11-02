const { shell } = require('electron');
let app_div = document.getElementById('app');
const urlPageTitle = "Clover";
const minecraftAuth = require("minecraft-auth");
let addAccountUrl;

const urlRoutes = {
	"main-home": {
		template: "templates/main-home.html",
		header: "templates/main-header.html",
		style: "css/main-home.css",
		title: "Home | " + urlPageTitle,
		footer: "templates/footer.html",
	},
	"main-about": {
		template: "templates/main-about.html",
		header: "templates/main-header.html",
		style: "css/main-about.css",
		title: "About | " + urlPageTitle,
		footer: "templates/footer.html",
	},
	"main-settings": {
		template: "templates/main-settings.html",
		header: "templates/main-header.html",
		style: "css/main-settings.css",
		title: "Settings | " + urlPageTitle,
		footer: "templates/footer.html",
	},
	"login": {
		template: "templates/login.html",
		header: "templates/header.html",
		style: "css/login.css",
		title: "Login | " + urlPageTitle,
		footer: "templates/footer.html",
	},
	"account-selector": {
		template: "templates/account-selector.html",
		header: "templates/header.html",
		style: "css/account-selector.css",
		title: "Account | " + urlPageTitle,
		footer: "templates/footer.html",
	},
};

const router = async () => {
	// document.querySelector("#app").style.animation = "fade-out 500ms ease-out forwards";

	const pagelocation = await sessionStorage.getItem('page');
	//set the sessions page to homepage if no page is set

	if (pagelocation === null) {
		sessionStorage.setItem('page', 'account-selector');
		location.reload();
	}
	const route = urlRoutes[pagelocation];
	//get the header
	const header = await fetch(route.header).then((response) => response.text());
	//get the specific page
	const html = await fetch(route.template).then((response) => response.text());
	const footer = await fetch(route.footer).then((response) => response.text());
	//get the specific page script file

	const script = document.createElement("script");
	script.src = route.script;
	//get the header file for changing the page

	//get the style file for the page

	const css = document.createElement("link");
	css.rel = "stylesheet";
	css.href = route.style;

	//append all the assets to the page

	app_div.innerHTML = header + html + footer;
	document.head.appendChild(css);
	document.title = route.title;
	// document.querySelector("#app").style.animation = "fade-in 500ms ease-out forwards";
	window.fadeIn();

	setActiveTab();
};

//function for changing the page

const changePage = (page) => {
	window.fadeOut(); // fade out current page, trash impl
	sessionStorage.setItem('page', page);
	router();
}

window.onload = router();


const setActiveTab = async () => {
	const currentPage = await sessionStorage.getItem('page');
	var split = currentPage.split('-')[0];
	if (split == "main") {
		document.getElementById(currentPage).classList.add("active-tab");
	}
}


function Exit() {
	const {
		ipcRenderer
	} = require('electron')
	ipcRenderer.invoke("exit");
	console.log("The Exit Button is pressed");
}

function Minimize() {
	const {
		ipcRenderer
	} = require('electron')
	ipcRenderer.invoke("min");
	console.log("The Exit Button is pressed");
}

function Maximize() {
	const {
		ipcRenderer
	} = require('electron')
	ipcRenderer.invoke("max");
	console.log("The Exit Button is pressed");
}

function AddAccount() {
	const account = new minecraftAuth.MicrosoftAccount();

	const appID = "cb46f625-a6ff-4702-838c-4a040c6de146";
	const appSecret = "-kb8Q~Od4ghmEKumaM~Jc_O4bOZM34OJ-Kaubami";
	const redirectURL = "http://localhost:8080/token";
	
	minecraftAuth.MicrosoftAuth.setup(appID, appSecret, redirectURL);
	console.log("Add account also available @ " + minecraftAuth.MicrosoftAuth.createUrl());
	addAccountUrl = minecraftAuth.MicrosoftAuth.createUrl();
	window.open(minecraftAuth.MicrosoftAuth.createUrl(), '_blank', 'location=yes,scrollbars=yes,status=yes');
	document.querySelector('#login-overlay').style.display = "block";
	
	(async() => {
		const code = await minecraftAuth.MicrosoftAuth.listenForCode(8080);
		if (code !== undefined) {
			await account.authFlow(code);
			console.log(`DOG1 ${account.username}, ${account.uuid}, "${account.accessToken}, ${account.ownership}"`);
			if (account.ownership) {
				console.log(`DOG2 ${account.username}, ${account.uuid}, "${account.accessToken}"`);
				if (window.localStorage.getItem("accounts") !== undefined || window.localStorage.getItem("accounts") !== null) {
					const accounts = JSON.parse(window.localStorage.getItem("accounts"));
					console.log(`DOG3 ${account.username}, ${account.uuid}, "${account.accessToken}"`);
					accounts.push({
						username: account.username,
						uuid: account.uuid,
						token: account.accessToken
					});
					console.log(accounts)
					window.localStorage.setItem("accounts", JSON.stringify(accounts));
					document.querySelector('#login-overlay').style.display = "none";
				} else {
					console.log(`OTHERDOG3 ${account.username}, ${account.uuid}, "${account.accessToken}"`);
					window.localStorage.setItem("accounts", JSON.stringify([
						{
							username: account.username,
							uuid: account.uuid,
							token: account.accessToken
						}
					]));
					document.querySelector('#login-overlay').style.display = "none";
				}
			}
		}
	})();

}

function AddAccountBrowser() {
	shell.openExternal(addAccountUrl);
}

function showHide() {
	if (document.getElementById("hide-show-options").style.display === "none") {
		document.getElementById("hide-show-options").style.display = "block"
		document.getElementsByClassName("list-btn")[0].innerHTML = "&uarr;"
	} else {
		document.getElementById("hide-show-options").style.display = "none"
		document.getElementsByClassName("list-btn")[0].innerHTML = "&darr;"
	}
}

function changeRam() {
	document.getElementById("used-ram").value = document.getElementById("ram-slider").value;
}


function setLaunchbtn(style) {

	if (style == "launch") {
		document.getElementsByClassName("launch-btn")[0].innerHTML = "Launching...";
		document.getElementsByClassName("launch-btn")[0].disabled = true;
		document.getElementsByClassName("launch-btn")[0].classList.add("normal-btn");
		document.getElementsByClassName("list-btn")[0].classList.add("normal-btn");
	} else if (style == "normal") {
		document.getElementsByClassName("launch-btn")[0].innerHTML = "Launch Game";
		document.getElementsByClassName("launch-btn")[0].classList.add("normal-btn");
		document.getElementsByClassName("list-btn")[0].classList.add("normal-btn");
	} else if (style == "error") {
		document.getElementsByClassName("launch-btn")[0].innerHTML = "Error Launching Game";
		document.getElementsByClassName("launch-btn")[0].classList.add("error-btn");
		document.getElementsByClassName("list-btn")[0].classList.add("error-btn");


	}

}


window.fadeIn = () => {}
window.fadeOut = () => {}