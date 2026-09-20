# Changelog

Version numbers are in `CONFIG.version` in `index.html` and `VERSION` in `sw.js`. Keep the two the same, and add a line here for every release. The version is shown at the bottom of the app, with more detail under **Support info**.

## 2.4.0 – 20 Sep 2026
- Renamed to **BSC Sailing Calendar** (home-screen name **BSC Calendar**).
- **Add to calendar**: save one day, or every day currently shown (respecting My fleets, month, chips and search), as an `.ics` file. Entries carry a stable ID so importing again updates them.

## 2.3.0 – 20 Sep 2026
- New app icon and header logo: the Blackwater Sailing Club roundel (`icon-*.png`, `apple-touch-icon.png` and `logo.png`).

## 2.2.0 – 20 Sep 2026
- Pick more than one fleet under **My fleets**, with a **Reset** button. Old single-fleet choices carry over.
- Version and **Support info** at the bottom of the app.
- The service worker's saved copy is named after the version, so each release replaces the old one.

## 2.1.0 – 20 Sep 2026
- One data file per season (`programme-2026.csv`, `programme-2027.csv`, ...), with season buttons and an automatic switch to the next season once one has finished.
- `?check` on the address lists problems in the data.
- Tide columns can be left blank.

## 2.0.0 – 20 Sep 2026
- Rebuilt around the normalised data in `programme.csv`: races in start order by fleet, events, training, Start TBC, Grand Prix weekends and estimated tides marked with ≈.
- My fleet filter, weekly sessions tick box and search suggestions built from the data.

## 1.x – Sep 2026
- 1.0: first version, list of days with start times, races and high water, installable on a phone.
- 1.1: tap a day for details, search suggestions and quick filters.
- 1.2: weather forecast (temperature, wind, gusts and direction).
- 1.3: first app icons (club burgee, then a drawn shield).
