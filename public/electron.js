const { app, BrowserWindow, Menu } = require('electron');

const { join } = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const templateMenu = [
  {
    label: 'Menu',
    submenu: [
      { label: 'Minimizar', role: 'minimize' },
      { label: 'Maximizar', role: 'togglefullscreen' },
      { type: 'separator' },
      //{ label: 'Salir', role: 'quit', icon: __dirname + './favicon.ico' }
      { label: 'Salir', role: 'quit' }
    ]
  }, {
    label: 'Vista',
    submenu: [
      { label: 'Recargar', role: 'reload' },
      { label: 'Forzar Recargar', role: 'forcereload' },
      { type: 'separator' },
      { label: 'Reiniciar Zoom', role: 'resetzoom' },
      { label: 'Zoom +', role: 'zoomin' },
      { label: 'Zoom -', role: 'zoomout' },
      { type: 'separator' },
      { label: 'Pantalla Completa', role: 'togglefullscreen' }
    ]
  }, {
    label: 'Editar',
    submenu: [
      { label: 'Deshacer', role: 'undo' },
      { label: 'Rehacer', role: 'redo' },
      { type: 'separator' }, ,
      { label: 'Cortar', role: 'cut' },
      { label: 'Copiar', role: 'copy' },
      { label: 'Pegar', role: 'paste' },
      { label: 'Eliminar', role: 'delete' },
      { type: 'separator' },
      { label: 'Seleccionar Todo', role: 'selectAll' }
    ]
  }
]
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    icon: __dirname + './favicon.ico',
    webPreferences: {
      devTools: false
    }
  });

  const menu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menu);

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', () => {
  if (mainWindow === null)
    createWindow();
});