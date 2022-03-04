# Buy bus tickets
This page will search for available bus tickets.

## The app
This app will be SPA
### HTML
Header section with a form and inputs for search.

Dates carousel with prev and next 7 days navgation

Table of results for the search

### CSS
As shown in the image

### Logic
#### Basic
1. Price and Deprature can be ordered from low to high.

2. user can navigate up to 28 days.

3. when clicking on a date box the available tickets will be shown for this date.

4. the days carousel will have the minimum price shown

5. Drop down have all the cities availble in db.json file

#### Extra
5. Drop down contains only citiies that exist in db.json file.
for example:
consider the data
```json
[{
     "from": "new york",
     "to": "new jersey"
}, {
     "from": "new york",
     "to": "washington"
}]
```
**from** dropdown contains options for: **new york**

**to** dropdown contains options for: **new jersey** and **washington**

When clicking on Order link the seats will be updated and saved in memory (JavaScript variable), and if all the seats taken the order button will be disabled and the row will disabled.
