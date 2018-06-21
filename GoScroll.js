/**
*
* @Name : GoScroll.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2018-06-21
* @Released under : https://github.com/BaseMax/GoScroll/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/GoScroll
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @variable timeing
	*
	* @goal : Change Position of scroll
	*
	* @return int
	**/
	var timeing = 500;
	/**
	* @variable offset_default
	*
	* @goal : Default Offset for auto go-scroll to a element (element.height - offset)
	*
	* @type int
	**/
	var offset_default = 50;
	/**
	* @function change
	*
	* @goal : Change Position of scroll
	*
	* @return void
	**/
	var change=function(o,e,t)
	{
		var n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
			c = e - n,
			l = function(o)
			{
				var e = animate_easeInOut(o += 20, n, c, t);
				document.documentElement.scrollTop = e, document.body.scrollTop = e, o < t && setTimeout(function()
				{
					l(o)
				},20)
			};
		l(0)
	};
	/**
	* @function animate_easeInOut
	*
	* @goal : Sample Animation
	*
	* @return number
	**/
	var animate_easeInOut=function(o,e,t,n)
	{
		return (o /= n / 2) < 1 ? t / 2 * o * o + e : (o -= 1, -t / 2 * (o * (o - 2) - 1) + e)
	};
	/**
	* @function go_rand
	*
	* @goal : Begin from here and change scroll to $rand place offset
	*
	* @return void
	**/
	var go_rand=function(from)
	{
		//soon
	}
	/**
	* @function go_to
	*
	* @goal : Begin from here and change scroll to $e place offset
	*
	* @return void
	**/
	var go_to=function(from)
	{
		var time;
		var target_place = from.getAttribute("data-scroll-to");
		if(from.hasAttribute("data-scroll-offset"))
		{
			target_place=target_place-from.getAttribute("data-scroll-offset");
		}
		else
		{
			target_place=target_place-offset_default;
		}
		if(from.hasAttribute("data-scroll-time"))
		{
			time=from.getAttribute("data-scroll-time");
		}
		else
		{
			time=timeing;
		}
		change(document.body,target_place,time);
	};
	/**
	* @function go
	*
	* @goal : Begin from here and change scroll to a element
	*
	* @return void
	**/
	var go=function(from)
	{
		var time;
		var target_place = document.querySelector(from.getAttribute("data-scroll-go")).offsetTop;
		if(from.hasAttribute("data-scroll-offset"))
		{
			target_place=target_place-from.getAttribute("data-scroll-offset");
		}
		else
		{
			target_place=target_place-offset_default;
		}
		if(from.hasAttribute("data-scroll-time"))
		{
			time=from.getAttribute("data-scroll-time");
		}
		else
		{
			time=timeing;
		}
		change(document.body,target_place,time);
	};
	/**
	* @struct goscroll
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.goscroll=
	{
		offset:offset_default,
		go:go,
		goto:go_to,
	};
	/**
	* @struct onload
	*
	* @goal : set onclick and events after page load...
	*
	* @return void
	**/
	window.addEventListener("load",function()
	{
		var data_goscroll = document.querySelectorAll("[data-scroll-go]");
		data_goscroll.forEach(function(item)
		{
			if(item.onclick == null)//onclick not exists
			{
				item.onclick=function()
				{
					window.goscroll.go(this);
				}
			}
		});
		//////////////////////////////////////////////////////////////////
		var data_goscroll = document.querySelectorAll("[data-scroll-to]");
		data_goscroll.forEach(function(item)
		{
			if(item.onclick == null)//onclick not exists
			{
				item.onclick=function()
				{
					window.goscroll.goto(this);
				}
			}
		});
		//////////////////////////////////////////////////////////////////
	},false);
}(window,document));
