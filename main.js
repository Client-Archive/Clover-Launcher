const { app, BrowserWindow, ipcMain } = require("electron");

let splash;

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		title: "Clover",
		width: 1150,
		height: 650,
		minWidth: 800,
		minHeight: 670,

		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		},
		frame: false,
		transparent: true,
		show: false
	});

	splash = new BrowserWindow({
		width: 350,
		height: 350,
		transparent: true,
		frame: false,
		alwaysOnTop: true,
		resizable: false,
		title: "Loading Clover"
	});


	splash.loadURL(`file://${__dirname}/app/splash.html`);
	mainWindow.loadURL(`http://localhost`);

	ipcMain.handle("exit", () => {
		BrowserWindow.getFocusedWindow().destroy();
		console.log("exit-main");
	});

	ipcMain.handle("min", () => {
		BrowserWindow.getFocusedWindow().minimize();
		console.log("minimize-main");
	});

	ipcMain.handle("max", () => {
		BrowserWindow.getFocusedWindow().maximize();
		console.log("max-main");
	});

	mainWindow.webContents.setWindowOpenHandler(({ url }) => {
		if (url.includes("https")) {
		  return {
			action: 'allow',
			overrideBrowserWindowOptions: {
				fullscreenable: false,
				backgroundColor: 'black',
				autoHideMenuBar: true,
				width: 450,
				height: 650
			}
		  }
		}
		return { action: 'deny' }
	});

	mainWindow.once("ready-to-show", () => {
		splash.destroy();
		mainWindow.show();
	});
});
