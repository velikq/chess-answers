// ==UserScript==
// @name     Unnamed Script from velikq
// @version  2
// @namespace https://школа.шахматышколе.рф/s/ClassLesson/Task
// @match     https://xn--80atdl2c.xn--80aaptfdq4ay2af9a.xn--p1ai/s/ClassLesson/Task*
// ==/UserScript==

(function() {
  let answer1 = document.getElementById('task-tip-block');

  if(answer1) answer1.style.display = 'block';

  let answer2 = document.getElementById('nextButton').nextElementSibling.text.match(/\'[0-9]+.*\|.*[0-9]+\'/)[0];

  if(answer2){
    answer2 = answer2.replace(/\|/gi, '<br>');
    
    answer2 = 'Ответы:<br>'+answer2;

    let answerWindow = document.createElement('div');

    answerWindow.innerHTML = answer2;
    answerWindow.id = 'meme2020';
    answerWindow.style.position = 'absolute';
    answerWindow.style.top = '20%';
    answerWindow.style.left = '10%';
    answerWindow.style.backgroundColor = '#ffffff';
    answerWindow.style.zIndex = '9999';
    answerWindow.style.fontSize = '2em';
    answerWindow.style.border = '2px solid black';
    answerWindow.style.padding = '4px';
    answerWindow.setAttribute('onclick', 'if(confirm(\'точна? закрываем?\'))this.remove()');

    document.getElementById('leftcol').appendChild(answerWindow);
  }

  let fuckingButton = document.getElementById('check');

  if(fuckingButton) fuckingButton.style.width = '100%';
})();
