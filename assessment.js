'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
]

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
      return;
    }
    // 画面の初期化
    resultDivision.innerText = '';
    

    // 結果の表示
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivision.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

    // X投稿ボタン
    tweetDivision.innerText = '';
    const anchor =  document.createElement('a');
    const hrefvalue = 'https://twitter.com/intent/tweet?button_hashtag='+ encodeURIComponent('あなたのいいところ')+'&ref_src=twsrc%5Etfw';
    
    anchor.setAttribute('href',hrefvalue);
    anchor.setAttribute('class', "twitter-hashtag-button");
    anchor.setAttribute('data-text',result);
    anchor.innerText = '#あなたのいいところを投稿する';

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src',"https://platform.twitter.com/widgets.js");
    tweetDivision.appendChild(script);

    console.log(assessment(userName));
    //const result = assessment(userName);
  }
);

userNameInput.addEventListener(
  'keydown',
  ( event ) => {
    if ( event.code === 'Enter' ){
      assessmentButton.dispatchEvent(new Event('click'));
    }
  }
)

/** 
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 　診断結果
 */
function assessment(userName){
  // TODO 診断処理を実装する
  let sumOfCharCode =0;
  for (let i=0; i<userName.length; i++){
    sumOfCharCode = sumOfCharCode +userName.charCodeAt(i);
  }

  const index = sumOfCharCode% answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###',userName);
  return result;
}

function test(){
  console.log('テスト');
  console.log('太郎のテスト開始');

  console.log(assessment('太郎'));
  console.assert(assessment('太郎')===
  '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。','試験NG');
  
  console.log('太郎のテスト終了');


  console.log('次郎のテスト開始');

  console.log(assessment('次郎'));
  console.assert(assessment('次郎')===
  '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。','試験NG');
  
  console.log('次郎のテスト終了');

  console.assert(assessment('太郎') === assessment('太郎'));
}

// test();


