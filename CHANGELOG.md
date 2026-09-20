# Changelog

Version numbers are in `CONFIG.version` in `index.html` and `VERSION` in `sw.js`. Keep the two the same, and add a line here for every release. The version is shown at the bottom of the app, with more detail under **Support info**.

## 2.5.1 – 20 Sep 2026
- Days with no BSC fleet racing now say "No club racing" (day summary, Next on card, day detail and the tick box), because BJRC may still be racing that day.

## 2.5.0 – 20 Sep 2026
- BJRC events count as racing (not BSC club racing): they show as "BJRC: race" on the day, the Racing filter includes them, and a BJRC-only day says "No club racing".
- Day summaries and day details list racing as "fleet: series" with no start-order numbers. The day detail heading is "Racing by Fleet".
- Day detail: removed "In x days", moved the title next to Close, listed open meetings before cruiser weekends and non-club events (such as BJRC), and put the high water time and height as large numbers at the top of the Tide section.
- "Weather Forecast" now shows just the forecast and a link to the source, and says "No forecast available" for dates too far ahead.
- "Add N days to calendar" moved to the bottom of the results.
- "Next on" moves to the next event once a day's first start was more than 8 hours ago.

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
