JSON
----

The file contianing the HOLC grades mapped to census tracts is what is called a `JSON` file. `JSON` stands for JavaScript Object Notation, and, indeed looks like the JavaScript objects we've been using. Here is a look at the first part of the file:

```JSON
[
    {
        "area_D": "42.94025", 
        "area_A": "0", 
        "area_B": "4.2614512", 
        "area_C": "26.091967", 
        "class2_red": "Mainly D, some C", 
        "area_total": "7549580.5", 
        "class1_lbl": "Mainly D", 
        "area_U": "26.706331", 
        "class3_lbl": "Mainly D, some C, some B", 
        "geoid20": "01073000100", 
        "class2_lbl": "Mainly D, some C", 
        "class2": "D-C", 
        "class3": "D-C-B", 
        "area_rated": "73.293671", 
        "class1": "D"
    }, 
    {
        "area_D": "94.236259", 
        "area_A": "0", 
        "area_B": "0", 
        ...
```

You can see that the file starts with a square bracket, indicated a list, and then the items in that list are objects-- key-value pairs. Each key is a string and, in this file, each value is also a string. Each pair is separated by a comma, as is each object in the list. It is a convenient way to store data, and most languages (not just JavaScript!) have a way to read these files easily. p5 provides us with a `loadJSON` function that ends up loading the file into a variable directly. This allows us[^1]
to access the elements just as though they were objects in an array. 

The `JSON` format also is conveneint in that it is human-readable[^2]. It is easy for us to see the various parts of an object. For instance, we can see that the key, `class1` is the HOLC grade. We can also see that the `area_X` keys indicate how much of the tract falls within the given HOLC grade. The most important feature here, is the `geoid20` key, which is the census tract.

<!--Footnotes-->
[^1]: After a minor manipulation
[^2]: Assuming someone was sensible in their key-naming