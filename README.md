# BSC Sailing Programme 2026

A phone-friendly view of the BSC 2026 sailing programme. It shows the start time, races and high water for every day of the season, and a weather forecast for days in the next 16.

**Open it here:** https://jfairhead.github.io/bsc-sailing/

This is an unofficial version made from the printed programme. Race lists may contain mistakes, and the club can change dates, so check the club website and newsletters for updates.

## Set it up as an app

You don't need an app store. Open the link above, then add it to your home screen. It gets its own icon and opens full-screen, like an app.

### iPhone or iPad

1. Open https://jfairhead.github.io/bsc-sailing/ in **Safari**.
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add**.

The BSC Sailing icon appears on your home screen.

### Android

1. Open https://jfairhead.github.io/bsc-sailing/ in **Chrome**.
2. Tap the **⋮** menu in the top right.
3. Tap **Install app** (or **Add to Home screen** if you don't see that).
4. Tap **Install** or **Add**.

### Laptop or desktop (Chrome or Edge)

Open the link and click the install icon at the right-hand end of the address bar. Or open the browser menu and choose **Install** or **Save and share**, then **Install page as app**.

## Good to know

- **Offline:** the programme opens without a signal, using the last copy saved on your device. The weather forecast needs an internet connection.
- **Updates:** when a new version is published, close the app fully and reopen it. You may need to do that twice.
- **Wrong icon:** if you see a plain letter or screenshot instead of the sailboat, remove the shortcut and add it again. Phones save the icon at the moment you add it.
- **Weather:** temperatures are in °C and wind is in knots, for Heybridge Basin. The arrow shows where the wind is heading, and the letters show where it comes from.
- **Forecast range:** forecasts only cover the next 16 days and are less reliable further ahead.

## For whoever maintains it

The app is a single static page, hosted free on GitHub Pages.

| File | What it does |
| --- | --- |
| `index.html` | The whole app. The programme data is the `DATA` list near the top of the script. |
| `manifest.webmanifest` | Name, colours and icons, so phones can install it. |
| `sw.js` | Lets it open offline. It always tries the internet first, so updates appear straight away. |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | The app icon. |

To update it, upload a changed file to this repo with the same name, using **Add file**, then **Upload files**, and commit. The site refreshes in a minute or two.

Weather data is from [Open-Meteo.com](https://open-meteo.com/).
