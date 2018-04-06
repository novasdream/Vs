# Vs
Vue Visualisation Package with d3.


## Installation
```javascript
npm i -S GopherJ/Vs
```


## Lists

- `d3SankeyCircular`
- `d3Bar`
- `d3Line`
- `d3Pie`
- `d3Timelion`


## Usage

`main.js`
```
import Vs from 'Vs';

Vue.use(Vs);
```

`template`
```vue
// I write options, margin and just to show the value by default, If you dont need to change it, just omit!

// pie or dongnut
<d3-pie :data="data" :options="{
    innerRadius: 20,
    cornerRadius: 10,
    padAngle: 0.01,
    arcTitle: d => d.data.value,
    arcLabel: d => d.data.key
}" width="100%" height="400px" :margin="{
    left: 30,
    top: 30,
    right: 30,
    bottom: 30
}"></d3-pie>

// line
<d3-line :data="data" :options="{
    stroke: 'rgb(188, 82, 188)',
    strokeWidth: 2,
    fontSize: 14,
    circleRadius: 5,
    circleColor: 'rgb(188, 82, 188)',
    circleTitle: d => d.value,
    curve: 'curveCardinal'
}" width="100%" height="400px" :margin="{
    left: 30,
    top: 30,
    right: 30,
    bottom: 30
}"></d3-line>

// horizontal bar
<d3-bar :data="data" :options="{
    fill: 'rgb(110, 173, 193)',
    stroke: 'rgb(110, 173, 193)',
    fontSize: 14,
    isVertical: false,
    barTitle : d => d.value
}" width="100%" height="400px" :margin="{
    left: 30,
    top: 30,
    right: 30,
    bottom: 30
}"></d3-bar>

// vertical bar
<d3-bar :data="data" :options="{
    fill: 'rgb(110, 173, 193)',
    stroke: 'rgb(110, 173, 193)',
    fontSize: 14,
    isVertical: true,
    barTitle : d => d.value
}" width="100%" height="400px" :margin="{
    left: 60,
    top: 30,
    right: 30,
    bottom: 30
}"></d3-bar>

// sankey
<d3-sankey-circular :nodes="nodes" :links="links" :options="{
    nodeWidth : 20,
    nodeText : 'font-size: .8rem; font-weight: 600;',
    circularLinkGap : 4,
    circularLinkColor : 'red',
    linkColor : 'black',
    arrowLength : 10,
    gapLength : 150,
    arrowHeadSize : 4
}" width="100%" height="400px" :nodeTitle="d => `${d.name}\n${d.value}`" :linkTitle="d => `${d.source.name} → ${d.target.name}\n${d.value}`"></d3-sankey-circular>

// timelion, need to use with other wrapper
<d3-timelion :data="data" :options="{
    fill: 'rgb(110, 173, 193)',
    stroke: 'rgb(110, 173, 193)',
    fontSize: 14,
    labelY: 'count'
}" :margin="{
    left: 30,
    top: 30,
    right: 30,
    bottom: 30
}"></d3-timelion>
```






