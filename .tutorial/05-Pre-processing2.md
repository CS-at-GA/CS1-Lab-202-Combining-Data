Pre-processing, Part 2
----------------------

We could do even better by filtering out all the rows that _don't_ have HOLC data, but in order to do that, we'll need to go through the HOLC data, determine which tracts are there, and then go back through the HPIValues filtering out any tracts that aren't. It sounds complicated, but it isn't. It also is a lot of work, but only for the computer. 

## Determining the tracts we have

To do this, we have to go through the `JSON` file. Luckily, the data is automatically loaded for us, unfortunately, something kind of quirky has happened to it on the way in, and rather it being an array of objects, it is an object whose keys are the indicies of the array. We can easily fix this like so: `holcDataByTract = Object.values(holcDataByTract);`

Now, we basically need to go through every tract and add the tract id (`geoid20`) to a list.

```javascript
let ids = [];
for( let tract of holcDataByTract ) {
  ids.push(tract.geoid20);
}
```

## Filtering out the tracts we don't have

Now, after we make our new table and start going through the current table we check `tract` against every value in the `ids` list (we will use `includes` to do this), and add rows to the new table appropriately. Then, we save the new table as we are already doing.

You'll see we're back to adding the whole row, since it is now all the data we want.

```javascript
let newTable = new p5.Table();
newTable.addColumn("tract");
newTable.addColumn("hpi");  
for( const row of HPIValues.getRows() ) {
  if( ids.includes( row.get('tract') ) ) {
    newTable.addRow(row)
  }
  // if( row.get("year") in yearTables ) {
  //   yearTables[row.get("year")].addRow(row);
  // } else {
  //   console.log( row.get("year"))
  //   const newTable = new p5.Table();
  //   for( const column of HPIValues.columns )
  //   newTable.addColumn(column);
  //   newTable.addRow(row);
  //   yearTables[row.get("year")] = newTable;
  // }
}
saveTable(newTable, 'HPIValues2021.csv');
```

This new file is 144KB... 625 times smaller than the original file.