Pre-processing
--------------

If all we are interested in is _current_ HPI values, then we really don't need to go through _all_ 1.9 million rows of the data. Regardless, even working with so much data is going to slow our process down. We would be wise to create a subset of the data to work with during development, at the very least. 

To do this, we are going to write a program that isn't really going to be part of our final program. This program is going to pre-process the data that our program will eventually be working on. This is very clever of us. 

Effectively what we want to do is to only use data from 2021. Further, it turns out that not all census tracts have HOLC grades, so we would be wise to filter those tracts out as well. Nor do we really need many of the other columns. We can pare down our data file quite a bit. 

Let's look at some code:

```javascript
let HPIValues;

function preload() {
  HPIValues = loadTable("HPI_AT_BDL_tract.csv","csv","header")
}

function setup() {
  let newTable = new p5.Table();
  for( const row of HPIValues.getRows() ) {
    if( row.getNum("year") === 2021 ) {
      newTable.addRow(row);
    }
  }
  saveTable(newTable, 'HPIValues2021.csv');  
}
```

This is about as simple as we can do, and it is quite effective. The result of this code is a file that is only 2.9MB (down from 90MB), which is a lot easier to manage. 

Let's take a look at the new things:

## `new p5.Table()`

Before, we were using `loadTable` to create the table, now we are creating an empty table using the `new` keyword. 

## `addRow`

Here, after making sure that the row we are looking at is a 2021 row, we add it to our new table. 

## `saveTable`

Now, we save the table using the given file name. After running this code, you should be prompted with a file to download. Which is great. 

This is all lovely, but let's go all the way on this. Let's do a few other things: 

* remove unnecessary columns
* remove rows that don't have HOLC data

## Remove unnecessary columns

We really only need the tract value the hpi value, so instead of adding the whole row to `newTable`, let's only add those two columns. This requires a bit of restructuring, but first, we should upload the file we just created and change our code to use the new, smaller file. 

```javascript
function preload() {
  HPIValues = loadTable("HPIValues2021.csv","csv","header")
}
```

Now, we can restructure and update our code as follows: 

```javascript
function setup() {
  let newTable = new p5.Table();
  newTable.addColumn("tract");
  newTable.addColumn("hpi");
  for( const row of HPIValues.getRows() ) {
    // no longer needed, since the new file already has
    //   only 2021 data. 
    // if( row.getNum("year") === 2021 ) {
    //   newTable.addRow(row);
    // }    
    let newRow = newTable.addRow();
    for( const column of newTable.columns ) {
      newRow.set(column, row.get(column));
    }
  }
  saveTable(newTable, 'HPIValues2021.csv');  
}
```

Here we made use of two p5 `p5.Table` functions. The first is the `addColumn`, which creates a named column in the table. we've used the same names for simplicity, but we could use different ones if we wanted. The second is `addRow`, which returns an empty row in the table. Next, we use the `p5.TableRow` function `set` to set a given column in that row with a particular value. The resulting file is now 1.3MB... almost 70 times smaller. But, we can do even better than that, but we'll have to get fancy. 