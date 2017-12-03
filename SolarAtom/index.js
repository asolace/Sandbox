// 'use strict';
//
// var SPHERE_CLASS = function SPHERE_CLASS(c) {
//   return 'class="sphere ' + (c || '') + '"';
// };
// var SYSTEM_CLASS = function SYSTEM_CLASS(c) {
//   return 'class="system ' + (c || '') + '"';
// };
// var ORBIT_CLASS = function ORBIT_CLASS(c) {
//   return 'class="orbit ' + (c || '') + '"';
// };
//
// function orbitTemplate(object) {
//   var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
//
//   var heading = 'h' + depth;
//   var list = depth % 2 ? 'ul' : 'ol';
//   var style = 'style="color: ' + (object[0].color || '#BDC5C7') + '"';
//   return '\n    <' + heading + ' ' + style + ' ' + SPHERE_CLASS() + '>' + object[0].name + '</' + heading + '>\n    ' + (object[1] ? '\n      <' + list + ' ' + SYSTEM_CLASS() + '>\n        ' + object[1].reduce(function (a, child) {
//     return a + ('\n          <li ' + ORBIT_CLASS() + '>' + orbitTemplate(child, depth + 1) + '</li>\n        ');
//   }, '') + '\n      </' + list + '>\n    ' : '') + '\n  ';
// }
//
// function solarSystemData() {
//   return [{ name: 'Sun', color: '#FDE528' }, [[{ name: 'Mercury', color: '#C1B4AC' }], [{ name: 'Venus', color: '#F2D299' }], [{ name: 'Earth', color: '#05f' }, [[{ name: 'Moon', color: '' }]]], [{ name: 'Mars', color: '#E67E5A' }, [[{ name: 'Phobos', color: '' }], [{ name: 'Deimos', color: '' }]]], [{ name: 'Jupiter', color: '#C5AA96' }, [[{ name: 'Io', color: '' }], [{ name: 'Europa', color: '' }], [{ name: 'Ganymede', color: '' }], [{ name: 'Callisto', color: '' }]]], [{ name: 'Saturn', color: '#AF9D8E' }, [[{ name: 'Mimas', color: '' }], [{ name: 'Enceladus', color: '' }], [{ name: 'Tethys', color: '' }], [{ name: 'Dione', color: '' }], [{ name: 'Rhea', color: '' }], [{ name: 'Titan', color: '' }], [{ name: 'Iapetus', color: '' }]]], [{ name: 'Uranus', color: '#C2E8EA' }, [[{ name: 'Miranda', color: '' }], [{ name: 'Ariel', color: '' }], [{ name: 'Umbriel', color: '' }], [{ name: 'Titania', color: '' }], [{ name: 'Oberon', color: '' }]]], [{ name: 'Neptune', color: '#5C92F0' }, [[{ name: 'Triton', color: '' }]]]]];
// }
//
// document.querySelector('.scene').innerHTML = '\n    <ul ' + SYSTEM_CLASS() + '>\n      <li ' + ORBIT_CLASS('top-most-orbit') + '>\n        ' + orbitTemplate(solarSystemData()) + '\n      </li>\n    </ul>\n  ';

$(function() {
  $('.btn').click(function(){
     $(this).toggleClass('send')
  })
});








// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){

  var textareas = document.querySelectorAll('.expanding'),

      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },

      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };

  // IE7 support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }

    textareas = getElementsByClass('expanding');
  }

  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }

})();
