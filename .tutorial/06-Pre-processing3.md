Pre-processing, Part 3
----------------------
_... and fixing a wee problem_

Since we are so very clever, what we could do is actually add this HPI value to our `JSON` objects, as opposed to working with two distinct data sources. And, since we are very, _very_ clever, we would then save the `JSON` as a file so we wouldn't have to do the pre-processing again. After all, that is why it is _pre_-processing. 

So, here is the gist: 

* make a new list for the tracts that both have HOLC data **and** HPI data
* go through each tract of the JSON file
* check to see if there is HOLC data for the tract
* check to see if there is HPI data for the tract
* if there is both data, add the HPI data to the tract
* add the tract to the list
* save the json

```javascript
let newTracts = [];
for( let tract of holcDataByTract ) {
  const hpiRow = HPIValues.findRow(tract.geoid20,"tract");
  if( hpiRow !== null && hpiRow.get("hpi") !== "" ) {
    tract.hpi = hpiRow.getNum("hpi");
    newTracts.push(tract);
  }
}
saveJSON(newTracts,"data.json")
```

At the end of it all, we should end up with a file called `data.json` that looks like this:

```json
[
  {
    "area_D": "16.800558",
    "area_A": "0",
    "area_B": ".77275753",
    "area_C": "23.279852",
    "class2_red": "Mainly C, some D",
    "area_total": "3487654.5",
    "class1_lbl": "Mainly C",
    "area_U": "59.146832",
    "class3_lbl": "Mainly C, some D, some B",
    "geoid20": "12031000101",
    "class2_lbl": "Mainly C, some D",
    "class2": "C-D",
    "class3": "C-D-B",
    "area_rated": "40.853168",
    "class1": "C",
    "hpi": 156.47
  },
  ...
```

The `preprocessing.js` file has a full-on preprocessing script included for going from the two original files to the `data.json` file we created over several steps. I've included the final `data.json` file for use in visualizing, but you should be thinking about how you might slice up the data in different ways to ask different questions. If you copied this into script.js and ran it, it would take a long time. 