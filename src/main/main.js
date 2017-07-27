const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function isDevelopment() {
    return process.env.NODE_ENV === 'development';
}

function createWindow () {
    if (win != null) {
        return;
    }
    win = new BrowserWindow({width: 800, height: 600});

    if (isDevelopment()) {
        win.loadURL(`http://localhost:${process.env.PORT || 8080}`);
    } else {
        win.loadURL(url.format({
          pathname: path.join(__dirname, 'dist', 'index.html'),
          protocol: 'file:',
          slashes: true
        }));
    }

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('activate', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
