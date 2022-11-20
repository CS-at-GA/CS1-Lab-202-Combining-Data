let holcDataByTract;
let HPIValues;

function preload() {
  holcDataByTract = loadJSON("HOLC_2020_census_tracts/HOLC_2020_census_tracts.json");
  HPIValues = loadTable("HPI_AT_BDL_tract.csv","csv","header")
}

function setup() {
  holcDataByTract = Object.values(holcDataByTract);

  let newTracts = [];
  for( let tract of holcDataByTract ) {
    // go through every tract
    // look to see if there is HPI data for the given tract and that it is for the required year
    // add the hpi value
    // add the tract
    const hpiRow = HPIValues.findRow(tract.geoid20,"tract");
    if( hpiRow !== null && 
      hpiRow.get("hpi") !== "" &&
      hpiRow.getNum("year") === 2021 ) {
      tract.hpi = hpiRow.getNum("hpi");
      newTracts.push(tract);
    }
  }
  saveJSON( newTracts,"data.json")

  noLoop();
}