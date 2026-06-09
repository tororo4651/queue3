// ハンバーガーメニュー
//--------------------------------------------


// ハンバーガーボタンを trigger に格納
const trigger = document.getElementById('hamburger');
// ハンバーガーボタンのテキストを btnTxt に格納
const btnTxt = document.querySelector('.hamburger__txt');
// SPメニュー nav に格納
const nav = document.getElementById('spmenu');
// ヘッダーのブレイクポイントを point_header に格納
const point_header = window.matchMedia('screen and (min-width: 768px)');



// ハンバーガーメニューボタンがクリックされた時
trigger.addEventListener('click', function() {
  const expanded = trigger.getAttribute('aria-expanded');
  if (expanded === 'false') {
    openMenu();
  } else {
    closeMenu();
  }
});



function openMenu() { // メニューを開く操作
  trigger.setAttribute('aria-expanded', 'true');
  trigger.setAttribute('aria-label', 'メニューを閉じる');
  btnTxt.textContent = 'Close';
  nav.setAttribute('aria-hidden', 'false');
  nav.style.display = 'block';
}



function closeMenu() { // メニューを閉じる操作
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-label', 'メニューを開く');
  btnTxt.textContent = 'Menu';
  nav.setAttribute('aria-hidden', 'true');
  nav.style.display = 'none';
}



// ブレイクポイントをまたいだときの挙動
function checkBreakPoint() {
  if (point_header.matches) {
    closeMenu(); // ハンバーガーメニューをリセット
  }
}

point_header.addEventListener('change', checkBreakPoint);





// 簡易バリデーション
//--------------------------------------------

document.querySelectorAll('input, textarea, select').forEach(function(element) {
  element.addEventListener('change', function() {
    if (!element.checkValidity()) {
      element.closest('.input-field').classList.add('is-error');
      // そのフォームのエラーメッセージをスクリーンリーダー向けに表示
      element.closest('.input-field').querySelector('.error-text').setAttribute('aria-hidden', 'false');
    } else {
      element.closest('.input-field').classList.remove('is-error');
      // エラーメッセージをスクリーンリーダーから隠す
      element.closest('.input-field').querySelector('.error-text').setAttribute('aria-hidden', 'true');
    }
  });
});


const submitButton = document.getElementById('submit');

if (submitButton) {
  submitButton.addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(function(element) {
      if (!element.checkValidity()) {
        element.closest('.input-field').classList.add('is-error');
        // そのフォームのエラーメッセージをスクリーンリーダー向けに表示
        element.closest('.input-field').querySelector('.error-text').setAttribute('aria-hidden', 'false');
      } else {
        element.closest('.input-field').classList.remove('is-error');
        // エラーメッセージをスクリーンリーダーから隠す
        element.closest('.input-field').querySelector('.error-text').setAttribute('aria-hidden', 'true');
      }
    });
  });
}





/* タブ切り替え
--------------------------------*/
const tabs = document.querySelectorAll('[aria-controls^="panel"]');

if (tabs.length > 0) {
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      const self = e.currentTarget;
      const expanded = self.getAttribute('aria-expanded');
      const target = self.getAttribute('aria-controls');
      const targetElement = document.getElementById(target);

      if (expanded === 'false') {
        tabs.forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          t.setAttribute('aria-selected', 'false');
        });

        self.setAttribute('aria-expanded', 'true');
        self.setAttribute('aria-selected', 'true');

        document.querySelectorAll('[id]').forEach(element => {
          element.setAttribute('aria-hidden', 'true');
        });

        targetElement.setAttribute('aria-hidden', 'false');
      }

      e.preventDefault();
    });
  });
}
