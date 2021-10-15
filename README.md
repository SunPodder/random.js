# random.js
Javascript Library for getting Random Values (Numbers, Colors)

### Add CDN:
```
<script src="https://unpkg.com/@sunpodder/random@1.0.0/random.js" ></script>
```
Or
### Install from NPM:
```
npm install --save @sunpodder/random
```

## Get Random Number
Get Random number between 0 to 1<br>
```
Random() 
//Random Number between 0 to 1
```

Get a Random Number from 0 to a specific range<br>
```
Random(50) 
//Random Number between 0 to 50
```

Get a Random Number in a specific range<br>
```
Random(20, 40) 
//Random Number between 20 to 40
```

Get a Random number without decimals<br>
```
Random(50, true)
//Random Number between 0 to 50 without decimals
```

Get a Random Number in a specified range without decimals
```
Random(20, 50, true)
//Random Number between 20 to 50 without decimals
```

## Get Random Color
Get Random RGBA Color<br>
```
RandomColor()
//red 0 to 255
//green 0 to 255
//blue 0 to 255
//alpha 1
```

Get Random Color in a specified maximum range<br>
```
RandomColor(100, 200, 100, 0.5)
//red 0 to 100
//green 0 to 200
//blue 0 to 100
//alpha 0 to 0.5
```

Get Random Color in a specified minmum and maximum range<br>
```
RandomColor([100, 200], [50, 150], [50, 200], [0.4, 0.8])
//red 100 to 200
//green 50 to 150
//blue 50 to 200
//alpha 0.4 to 0.8
```

## Randomize/Shuffle an array
```
var array = [1,2,3,4,5]
Randomize(array)
\\will return a new shuffled array
```
