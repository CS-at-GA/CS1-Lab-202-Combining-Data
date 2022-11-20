The Data
--------

To answer the question of whether or not HOLC grades have an impact on current housing values we need several things: 

* [ ] HOLC data for a location
* [ ] housing value data for that same location

This, in my looking, proved to be somewhat difficult to locate. The HOLC data cuts across zip codes, which would be a convenient way to look up housing prices. 

Regardless of the details, this will be a problem we will often encounter with working with data: how can we different data to connect?

In this case, I was able to connect HOLC to a location, and housing prices to location using _Census Tracts_, the way that the US Census draws neighborhoods, essentially. From [Wikipedia](https://en.wikipedia.org/wiki/Census_tract#cite_note-4):

> In the U.S., census tracts are "designed to be relatively homogeneous units with respect to population characteristics, economic status, and living conditions" and "average about 4,000 inhabitants".
  
We are working with two different data files. The first data file contains all the census tracts for which there is HOLC data. Then, since a tract often cuts across multiple HOLC areas, the file also contains the "HOLC makeup" of that area to varying degrees of detail ("Mostly A," "Mostly B, some C", etc.). It also even provides the raw data used to make these classifications. 

* [X] HOLC data for a location

This data was found at [diversitydatakids.org](https://data.diversitydatakids.org/dataset/holc_census_tracts-home-owner-loan-corporation--holc--neighborhood-grades-for-us-census-tracts) which is 
> a comprehensive research program to monitor the state of wellbeing, diversity, opportunity and equity of U.S. children. The project is housed at the Institute for Child, Youth and Family Policy at the Heller School for Social Policy and Management at Brandeis University. The project is funded by the W.K. Kellogg Foundation and the Robert Wood Johnson Foundation. 

* [X] housing value data for that same location

The second data file is a list of census tracts along with what is called the [Housing Price Index](https://www.fhfa.gov/DataTools/Downloads/Pages/House-Price-Index.aspx) for that tract. The HPI is a metric that: 

> serves as a timely, accurate indicator of house price trends at various geographic levels. Because of the breadth of the sample, it provides more information than is available in other house price indexes. It also provides housing economists with an improved analytical tool that is useful for estimating changes in the rates of mortgage defaults, prepayments and housing affordability in specific geographic areas