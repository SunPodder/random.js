# random-js
Javascript Library for getting Random Values (Numbers, Colors)

### Get Random Number
Get Random number between 0 to 1<br>
`Random() //Random Number between 0 to 1`

Get a Random Number from 0 to a specific range<br>
`Random(50) //Random Number between 0 to 50`

Get a Random Number in a specific range<br>
`Random(20, 40) //Random Number between 20 to 40`

Get a Random number without decimals<br>
`Random(50, true) //Random Number between 0 to 50 without decimals`

### Get Random Color
Get Random RGBA Color<br>
`RandomColor()`<br>
`//red 0 to 255`<br>
`//green 0 to 255`<br>
`//blue 0 to 255`<br>
`//alpha 1`

Get Random Color in a specified maximum range<br>
`RandomColor(100, 200, 100, 0.5)`<br>
`//red 0 to 100`<br>
`//green 0 to 200`<br>
`//blue 0 to 100`<br>
`//alpha 0 to 0.5`

Get Random Color in a specified minmum and maximum range<br>
`RandomColor([100, 200], [50, 150], [50, 200], [0.4, 0.8])`<br>
`//red 100 to 200`<br>
`//green 50 to 150`<br>
`//blue 50 to 200`<br>
`//alpha 0.4 to 0.8`
