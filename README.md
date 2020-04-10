## Build kiosk

Run `npm run build` and launch `index.html` in fullsreen/kiosk mode in Chrome.

Launching the file`launch-kiosk.bat` on a PC by double clicking on the file will automatically launch the kiosk in Chrome with fullscreen mode.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Build deployment

```
npm run build:electron
```

## How to view a 1920 x 1080 kiosk on a smaller screen using Google Chrome 

· Launch site in Google Chrome browser on desktop

· Right click on website and select ‘Inspect’

· A window frame will appear either on the right or the bottom of your browser. Click the second icon on the top of the window frame. It looks like a smartphone in front of a tablet. This is the ‘Toggle device’ icon.

· Another toolbar will appear on the top. Click the first dropdown menu and select ‘Edit…’

· In the window frame click ‘Add custom device…’

· Name the device ‘1920 x 1080’

· For width put in ‘1920’

· For height put in ‘1080’

· Select ‘Desktop (touch)’ in the dropdown

· Click ‘Save’

· On the top toolbar select the first dropdown again and click ‘1920 x 1080’.

· Make sure the other dropdown menu is set to ‘Fit to screen’. This will change your browser to a size that will make it easier to view on desktop while still maintaining the correct ratio. 
