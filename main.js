const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')

// global reference keeps window open
let win

function createWindow () {
  win = new BrowserWindow({width: 800, height:600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  // dereference window object

  win.on('closed', () => {
    win = null
  })

}

// starts application
app.on('ready', createWindow)

// quit when all windows closed
app.on('window-all-closed', () =>{
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// recreate app when windows closed
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
