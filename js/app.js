var button = document.getElementById('button');
console.log(button);
button.addEventListener('click',submit);
function submit(e) {
  console.log("hiciste click");
  var parent = document.querySelector('.container');
  var text = document.getElementsByTagName('textarea')[0].value;
  var newCommit = document.createElement('div');
  newCommit.textContent=text;
  var firstBrother = document.querySelector('.first-brother');
//  parent.insertBefore(newCommit,firstBrother);
parent.appendChild(newCommit);

}
