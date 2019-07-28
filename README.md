# GoScroll

## GoScrollJs

Tiny and Powerful Library for change place of the scroll and focus on element.

![GoScroll.min.js File Size](https://img.shields.io/badge/Compressed%20Size-1.4%20KB-blue.svg) ![GoScroll.min.js Validation Code](https://img.shields.io/badge/Validation%20Code-No%20Error-green.svg)

## Features 

  - Fast
  - Compact
  - No dependencies
  - With animation and effects


## Arguments 

| Argument Name  | Goal |
| -------------- | ---- | 
| data-scroll-go  	| Go to a element  |     
| data-scroll-offset  | Set Custom Offset (default : 50)  |
| data-scroll-time  | Set Custom Time (default : 500)  |           
| data-scroll-to  | Go to a position (pixel)  |    


## Samples

To view the full details, run the [Example.html](https://github.com/BaseMax/GoScrollJs/blob/master/Example.html) file.

#### `data-scroll-go`
```
<button data-scroll-go="#id_name">Go</button>
<button data-scroll-go=".class_name">Go</button>
```
#### `data-scroll-offset`
```
<button data-scroll-offset="150" data-scroll-go=".class_name">Go</button>
```
#### `data-scroll-time`
```
<button data-scroll-time="5000" data-scroll-go=".class_name">Go</button>
```
#### `data-scroll-to`
```
<button data-scroll-to="280">Go</button>
```
#### `onclick`
```
<button data-scroll-go="span.class_name" onclick="goscroll.go(this)">
<button data-scroll-to="480" onclick="goscroll.goto(this)">
```


# License

GoScroll is licensed under the [GNU General Public License](https://github.com/BaseMax/GoScrollJs/blob/master/LICENSE).
