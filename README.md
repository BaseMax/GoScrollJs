# GoScroll
Tiny and Powerful Library for change place of the scroll and focus on element.

[![Coverage Status](https://coveralls.io/repos/github/BaseMax/GoScroll/badge.svg?branch=master)](https://coveralls.io/github/BaseMax/GoScroll?branch=master)



## Arguments : 


| Argument Name  | Goal |
| ------------- | ------------- | 
| data-scroll-go  	| Go to a element  |     
| data-scroll-offset  | Set Custom Offset (default : 50)  |
| data-scroll-time  | Set Custom Time (default : 500)  |           
| data-scroll-to  | Go to a position (pixel)  |    


## Samples :

To view the full details, run the example.html file.

#### data-scroll-go :
```
<button data-scroll-go="#id_name">Go</button>
<button data-scroll-go=".class_name">Go</button>
<button data-scroll-offset="150" data-scroll-go=".class_name">Go</button>
<button data-scroll-time="5000" data-scroll-go=".class_name">Go</button>
```
#### data-scroll-to :
```
<button data-scroll-to="280">Go</button>
```
#### onclick :
```
<button data-scroll-go="span.class_name" onclick="goscroll.go(this)">
<button data-scroll-to="480" onclick="goscroll.goto(this)">
```

