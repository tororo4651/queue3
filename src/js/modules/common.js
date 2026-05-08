/* 共通 */



/* グローバルナビゲーションの開閉 */

const gNavBtn = document.querySelector('.gNavBtn');
const gNavBtnText = document.querySelector('.gNavBtn__text');
const gNav = document.querySelector('.gNav');

gNavBtn.addEventListener('click', (e) => {
  document.documentElement.classList.toggle('is-gNavOpen');

  if (gNavBtnText.textContent === 'Menu') {
    gNavBtnText.innerText = 'Close';
  } else {
    gNavBtnText.innerHTML = 'Menu';
  }
}, false);


const minWidth768 = window.matchMedia('(min-width: 768px)');

minWidth768.addEventListener('change', (e) => {
  if (e.matches) {
    document.documentElement.classList.remove('is-gNavOpen');

    gNavBtnText.innerText = "Menu";
  }
}, false);




/* Viewer */

const pdViewerImage = document.querySelector('.procuctDivision__viewerImage');

const pdThumbnailImages = document.querySelectorAll('.productDivision__thumbnailImage');

pdThumbnailImages.forEach((pdThumbnailImage) => {
  pdThumbnailImage.addEventListener('click', function(e) {
    console.log(e.target.src);

    pdViewerImage.src = e.target.src;

    if (document.querySelector('.is-current')) {
      document.querySelector('.is-current').classList.remove('is-current');
    }

    e.target.classList.add('is-current');
  }, false);
});




/* FAQ */

// const faqQuestions = document.querySelectorAll('.faqList__question');


// 他の Answer を閉じない

// faqQuestions.forEach((faqQuestion, index, array) => {
//   faqQuestion.addEventListener('click', function(e) {
    // if (this.nextElementSibling.style.maxHeight) {
    //   this.nextElementSibling.style.maxHeight = null;
    // } else {
    //   this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
    // }

//     this.classList.toggle('is-open');
//   }, false);
// });


// for (let i = 0; i < faqQuestions.length; i++) {
//   faqQuestions[i].addEventListener('click', function(e) {
//     this.classList.toggle('is-open');
//   }, false);
// }



// 他の Answer を閉じる

const faqQuestions = document.querySelectorAll('.faqList__question');
const faqAnswers = document.querySelectorAll('.faqList__answer');


// faqQuestions.forEach((faqQuestion) => {
//   faqQuestion.addEventListener('click', function(e) {

//     faqQuestions.forEach((faqQuestion) => {
//       faqQuestion.classList.remove('is-open');
//     });

//     this.classList.toggle('is-open');

//     if (this.classList.contains('is-open')) {
//       this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
//     } else {
//       this.nextElementSibling.style.maxHeight = null;
//     }

//     faqQuestions.forEach((faqQuestion) => {
//       if (!faqQuestion.classList.contains('is-open')) {
//         faqQuestion.nextElementSibling.style.maxHeight = null;
//       }
//     });


    // or


    // faqQuestions.forEach((faqQuestion) => {
    //   faqQuestion.classList.remove('is-open');
    // });

    // if (this.nextElementSibling.style.maxHeight) {
    //   this.classList.remove('is-open');
    //   this.nextElementSibling.style.maxHeight = null;
    // } else {
    //   this.classList.add('is-open');
    //   this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
    // }

    // faqQuestions.forEach((faqQuestion) => {
    //   if (!faqQuestion.classList.contains('is-open')) {
    //     faqQuestion.nextElementSibling.style.maxHeight = null;
    //   }
    // });

    // faqAnswers.forEach((faqAnswer) => {
    //   if (!faqAnswer.previousElementSibling.classList.contains('is-open')) {
    //     faqAnswer.style.maxHeight = null;
    //   }
    // });
//   }, false);
// });








// const test = document.querySelector('.test');
// test.style.color = 'plum';
// test.style.fontSize = '50px';




// ES Modules

// 変数
// export const text1 = 'おはよう。';

// 関数（あいさつ）
// export const greet = (name) => {
//   console.log(`こんにちは。
// ${name}さん。`);
// };


// normal export

// export { text1, greet };



// default export

// const text2 = 'こんにちは。';

// export default text2;




// jQuery

// import $ from 'jquery';

// $('.test').css({
//   color: 'blue',
//   fontSize: 30,
//   'margin-top': '50px',
//   paddingLeft: 30
// });
