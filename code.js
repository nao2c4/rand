/**
 * 
 * @param {String[]} lst
 */
const genRandom = lst => {
  const size = lst.length;
  let arr = Array();
  for (let i = 0; i < size; ++i) {
    arr.push(lst[rand(size)])
  }
  let text = document.querySelector('#text');
  const str = arr.join(' ')
  text.value = str;
  if (str === lst.join(' ')) {
    alert('Clear!');
  }
};

/**
 * 
 * @param {Number} maxNum 
 * @return {Number}
 */
const rand = maxNum => {
  return Math.floor(Math.random() * maxNum);
};

// クリック処理追加する
const initialize = () => {
  let button = document.querySelector('#button');
  button.addEventListener('click', evnet => genRandom(['THEE', 'MICHELLE', 'GUN', 'ELEPHANT']));
};

// 読み込み完了処理
window.onload = () => {
  initialize();
};