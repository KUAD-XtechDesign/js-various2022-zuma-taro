$(function(){

  $("#intro p").hide().fadeIn(1000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,300);//0.3秒後backAnime実行
    setTimeout(personAnime,2000);//2秒後personAnime実行
    setTimeout(carAnime,2000);//2秒後carAnime実行
    setTimeout(foodAnime,3000);//3秒後foodAnime実行
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function personAnime(){
    $("#person").addClass("anime")
  }

  function carAnime(){
    $("#car").addClass("anime")
  }

  function foodAnime(){
    $("#food").addClass("anime")
  }

//猫ボタンを押すと
$("#oasis1_button").on("click",function(){
  //猫音源を鳴らす
  audio('oasis1')

  $("#content").text("Dyou know what I mean")
});

//ドアボタンを押すと
$("#oasis2_button").on("click",function(){
  //ドア音源を鳴らす
  audio('oasis2')

console.log('click')

  $("#content").text("Rock roll star")
});

$("#oasis3_button").on("click",function(){
  //ドア音源を鳴らす
  audio('oasis3_audio')

  $("#content").text("Supersonic")
});

})


function audio(animal) {

document.getElementById(animal+'_audio').play(); //クリックしたら音を再生

}