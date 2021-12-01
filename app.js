// hambarger = document(クラス名)：クラス名から要素を選択する
const hambarger = document.querySelector('.menu');
const link = document.querySelector('.link');
const link_li = document.querySelector('.link li');

// addEventListener(イベント名)ハンバーガーメニューに対してイベントをつける
hambarger.addEventListener('click',()=>{
    // toggle('クラス名'):クラス名があれば削除・なければ追加する
    link.classList.toggle('open');

})