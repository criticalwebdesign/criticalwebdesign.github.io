# export-google-sheets

## 1. Project setup

```bash
# Install code
cd export-google-sheets
# install nodemon globally
npm install -g nodemon
# install
npm i
# export
npm run start-dev
```

## 2. Check spreadsheet formatting

1. To prevent formatting errors, add an empty "placeholder" column at the end
1. The range should start with the column names

## 3. Publish your spreadsheet

1. Sheet > File > Share > Publish to Web
1. Under the Link tab, Choose specific tabs, Choose CSV, Click Publish
1. Published content & settings
    1. Choose either `Entire document` or a specific sheet
    1. Select `Automatically republish when changes are made`
	1. Choose CSV
    1. Click `Start publishing` (You may or may not need to Share as well)
1. Copy publish URL, e.g...
1. Add range to the end of the URL. The first row should be the header row, e.g. `&range=A2:J1000`


<!-- 
## Publish your spreadsheet (query-enabled)

This alternative method (to the easier one above) supports [query parameters](https://sites.google.com/view/metricrat-ai2/guides/use-gviz-to-get-and-query-google-sheet-data) and the [Google Charts Query Language](https://developers.google.com/chart/interactive/docs/querylanguage)

1. File > Share > Publish to the Web
1. Link
    1. Choose either `Entire document` or a specific sheet
    1. Choose `Comma-separated values (.csv)`
    1. Copy the URL and add a range like `A5:S200` where `A5` is the header row
 -->



