HPI
---

The HPI information is located in a file innocously called `HPI_AT_BDL_tract.csv`. **I strongly recommend that you do not open this file**. The file is ~90MB, and can potentially cause some issues when you try and open it (even Excel has some difficulties with it). Here are the first few rows of the nearly _1.9 million_ of them:

```csv
tract,state_abbr,year,annual_change,hpi,hpi1990,hpi2000
1001020100,AL,1998,,100,,100.82
1001020100,AL,1999,-5.5999999,94.400002,,95.18
1001020100,AL,2000,5.0599999,99.18,,100
1001020100,AL,2001,7.0799999,106.21,,107.08
1001020100,AL,2002,7.1100001,113.76,,114.7
1001020100,AL,2003,-1.75,111.77,,112.69
1001020100,AL,2004,4.0700002,116.32,,117.27
1001020100,AL,2005,10,127.94,,129
1001020100,AL,2006,5.0599999,134.42,,135.53
1001020100,AL,2007,12.93,151.8,,153.05
1001020100,AL,2008,-3.55,146.39999,,147.61
1001020100,AL,2009,-.1,146.25999,,147.46001
1001020100,AL,2010,-9.4499998,132.44,,133.53
1001020100,AL,2011,-6.25,124.17,,125.19
1001020100,AL,2012,6.9200001,132.75999,,133.85001
1001020100,AL,2013,-2.5799999,129.34,,130.39999
1001020100,AL,2014,-3.29,125.09,,126.12
1001020100,AL,2015,3.3199999,129.24001,,130.31
1001020100,AL,2016,4.6900001,135.31,,136.42
1001020100,AL,2017,-1.21,133.67,,134.77
1001020100,AL,2018,-7.3000002,123.9,,124.92
1001020100,AL,2019,12.82,139.78,,140.92999
1001020100,AL,2020,8.4799995,151.64,,152.88
1001020100,AL,2021,10.12,166.98,,168.35001
```

As you can see, there aren't too many columns here, but there are 23 rows per tract, representing the annual historical data for a given tract going back to 1998. We are going to talk about how to deal with this momentarily, but it is important to note that the `tract` column should match the `geoid20` column from the JSON file and that the `hpi` column is the value we are looking for. 