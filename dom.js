// // examine the document object
// //console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// document.title = "Title Changed"
// console.log(document.title);

// getElementsById
 var headertitle = document.getElementById('header-title');
// console.log(headertitle);
// headertitle.innerHTML = '<h3>hello world</h3>'
//  var header = document.getElementById('main-header');
//  header.style.borderBottom = 'solid 3px black';
headertitle.style.border = 'solid 3px black';
var title = document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';