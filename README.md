# BSC Sailing Calendar

A phone-friendly sailing calendar for Blackwater Sailing Club (BSC), built from the club's season programme: races in start order, events, training, high water and a weather forecast for every day.

**Open it here:** https://jfairhead.github.io/bsc-sailing/

This is an unofficial version made from the printed programme. Check the club website and newsletters for updates.

## Using it

- **My fleets:** pick one or more fleets to see only their races. Tap a fleet again to remove it, or tap **Reset** (or **All fleets**) to go back to everything. The red number is the start order (1 = first to start), and your choice is remembered on your device.
- **Tap a day** for the full details: races in start order, events, training, high water and tide height, and the forecast.
- **Search** for a race or event, or tap the search box for quick filters such as "This weekend".
- **Add to calendar:** tap a day, then **Add this day to calendar**, or use **Add N days to calendar** above the list to add everything currently shown (so filter by fleet, month or search first). It saves an `.ics` file that opens in your phone's Calendar. Races are one entry per day at the first start; training with a start TBC is added as an all-day entry. The programme has no finish times, so timed entries last 3 hours unless a time range is given (change `CONFIG.defaultMinutes` to alter this). Adding the same file again updates the entries rather than duplicating them. There is no live subscription feed: each download is a snapshot, so download again after the data changes.
- **Start TBC** means the coach or instructor sets the start time.
- **≈** before a time or height means the tide isn't printed in the programme and is estimated.
- **Season buttons** (2026, 2027 and so on) appear at the top when there is more than one season. The app opens on the current season and moves to the next one automatically once the current one has finished.

## Set it up as an app

Open the link, then add it to your home screen. It appears as **BSC Calendar** with the club icon and opens full-screen, like an app.

- **iPhone or iPad:** open the link in **Safari**, tap **Share**, then **Add to Home Screen**, then **Add**.
- **Android:** open it in **Chrome**, tap the **⋮** menu, then **Install app** (or **Add to home screen**).
- **Laptop (Chrome or Edge):** click the install icon at the right-hand end of the address bar.

It opens without a signal using the last copy saved on your device. The forecast needs an internet connection. If you see an old icon or name, remove the shortcut and add it again.

## Adding a new season (2027 and beyond)

Each season is one file named **`programme-YEAR.csv`**, for example `programme-2027.csv`. The app looks for the files for last year, this year and the next two years, so there is nothing to register and no code to change.

1. Prepare the season's data in the format below. `programme-2026.csv` is a worked example, and `programme-template.csv` shows the column headings with a few sample rows. A spreadsheet (Google Sheets or Excel) is the easiest place to edit.
2. Export it as CSV and name it `programme-YEAR.csv`.
3. Upload it to this repo (GitHub: **Add file**, then **Upload files**). Leave the earlier seasons in place.
4. Wait a minute or two, then close and reopen the app. The new season appears as a button, and becomes the default once the previous season has finished.

To check a file before you rely on it, open the app with `?check` on the end of the address (for example `https://jfairhead.github.io/bsc-sailing/?check`). It lists problems such as dates in the wrong format, start times that aren't `HH:MM` or `TBC`, racing rows with no start time, and days with no tide.

If you still have the older single `programme.csv` in the repo it keeps working: it's treated as the season for the year of its dates, unless a `programme-YEAR.csv` covers that year. You can delete it once `programme-2026.csv` is there.

### The columns

Each row is one date plus one fleet (or one event or training item with no fleet). The tide and start time repeat on every row for the day. Tide columns can be left blank; the app then just hides the tide.

| Column | What it holds |
| --- | --- |
| Date | `YYYY-MM-DD` |
| High water, Tide height (m) | Time as `HH:MM` and height in metres |
| Tide source | `Programme`, or `Estimated` for tides not printed in the programme |
| Start time | `HH:MM`, `TBC` (set by the coach or instructor), or blank |
| Fleet | The fleet name, exactly as spelled elsewhere in the file (Fast / Fireball, Medium, Wayfarer, Sprite, Short course, Fridays, Mirror, Cruiser). Blank for events and training. The fleet buttons come from these names, so a new fleet just works |
| Race start order | 1 to 9, the order fleets start in. Only on racing rows |
| Event | A club-wide event (Regatta, Evening race, BJRC Blackwater Cup, Cadet week, Mirror sailing, No racing and so on) |
| Training | Cadet training, Cadet coaching, Adult RYA, or "[Fleet] training" |
| GP weekend | `TRUE` on Grand Prix weekend dates, otherwise `FALSE` |
| Race / series, Race no(s) | The trophy or series for a fleet-specific race, and its race numbers such as `1&2` |
| Detail | Extra information, such as a start location |

An event that covers several fleets has one row per fleet, all with the same Event. Extra columns (such as Issue) are ignored, and the rows can be in any order.

Weekly sessions (Mirror sailing and Beach Club) are named in `CONFIG.weekly` near the top of `index.html`, so they can be switched off with the **Weekly sessions** tick box. If a future season uses different names for these, change that list.

## Version and support

The version number is at the bottom of the app. Tap **Support info** there for the app version, the seasons loaded (with the date each data file was last updated), whether the offline copy is active and which saved copy is in use. That is usually enough to work out whether someone is seeing an old version. Add `?check` to the address for a data check. `CHANGELOG.md` lists what changed in each version.

To release a new version: change `CONFIG.version` and `CONFIG.released` in `index.html`, change `VERSION` in `sw.js` to match, and add a line to `CHANGELOG.md`.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The app. Settings, including the forecast location, are in `CONFIG` at the top of the script. |
| `programme-2026.csv`, `programme-2027.csv`, ... | One programme file per season. |
| `programme-template.csv` | Column headings and sample rows for a new season. It is not loaded by the app. |
| `manifest.webmanifest` | Name, colours and icons, so phones can install it. |
| `sw.js` | Lets it open offline. It always tries the internet first, so updates appear straight away. |
| `CHANGELOG.md` | What changed in each version. |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | The app icon (the club roundel on white). |
| `logo.png` | The club roundel shown next to the title. If it is missing the page just leaves it out. |

Weather data is from [Open-Meteo.com](https://open-meteo.com/).
