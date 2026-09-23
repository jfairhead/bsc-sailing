# Changelog

Version numbers are in `CONFIG.version` in `index.html` and `VERSION` in `sw.js`. Keep the two the same, and add a line here for every release. The version is shown at the bottom of the app, with more detail under **Support info**.

## 2.11.0 – 23 Sep 2026
- Replaced the race marks chart with the club's large-print version (clearer buoy icons and labels); the chart is now this printed image only — the live Google My Map and the toggle between them are removed.

## 2.10.0 – 20 Sep 2026
- GO SAIL: the P/S circle now sits on the right of the mark name; Club Line Gate and Finish never show a rounding side, since you sail through them rather than round them (the ordinary Race Courses list carries the same fix).
- The whole course now fits the screen with no scrolling — text size adjusts automatically to the number of marks and the screen's height, checked down to a 16-mark course on a small phone.
- Smaller course-code heading; the wind line is now "Wind: N–NNE · 11 kn", pulling today's live forecast wind speed for the course's start time (or the current hour if racing hasn't started); distance is dropped from this screen to save space.

## 2.9.1 – 20 Sep 2026
- GO SAIL: a day with no club racing now says "No club racing today" instead of a bare dash (BJRC racing, training-only, or weekly-session days still show the tide if there is one); a day with no data at all says "No tide data today" too, rather than leaving either box looking blank.

## 2.9.0 – 20 Sep 2026
- **GO SAIL**: a button on each course card opens a big, high-contrast, always-dark full-screen view for reading at the helm — course code, wind sector, distance, today's start time and high water, and the marks in order with a large P (red) or S (green) circle and abbreviated names (Ballast H, Northey P., CLG). Keeps the screen awake where the browser supports it.

## 2.8.0 – 20 Sep 2026
- Course cards now sort in logical order (A1-A6, AZ1-AZ6, B1-B6, ...) instead of alphabetically by wind sector; the wind-direction dropdown follows the same order.
- **Race Courses** and **Race Marks Map** are now two separate screens with no shared tab bar, each opening straight to its own content with the matching title.
- Removed the "Show days with no club racing" tick box (use the Racing filter instead) and the "Weekly sessions" tick box (Mirror sailing and Beach Club now always show, like everything else).
- The "Next on" card can be swiped left for the next upcoming event and right to go back, with a small "n of N upcoming" hint when there's more than one.

## 2.7.0 – 20 Sep 2026
- New **Cadets** filter chip (between Training and Events) — shows every day with cadet training, coaching or racing.
- "Weekly sessions" off now hides those Wednesdays completely, even with "Show days with no club racing" ticked; days with a real event (including on bank holidays) are unaffected.
- "Chart & course cards" is now two buttons on the home screen — **Race Courses** and **Race Marks Map** — each opening straight to that tab.
- The club roundel at the top now links to https://blackwatersailingclub.org.uk/.

## 2.6.0 – 20 Sep 2026
- Added **Chart & course cards**, from the header button.
  - **Chart:** the club's live "BSC Race Marks" Google My Map when online (an embedded iframe), or the printed chart (`chart-2026.jpg`, March 2026) when offline or on request, with a toggle between the two. A plain list of mark names underneath.
  - **Course cards:** all 96 printed courses (`courses-2026.csv`), filterable by wind direction sector and searchable by course code or mark name. Each shows its distance and its marks in order, with port/starboard rounding (and "round fully" where the card says so).

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
