$(".theTarget").skippr({
  // fade or slide
  transition : 'fade',
  // 変化時間(ms)
  speed : 1000,
  // easing
  easing : 'easeOutQuart',
  // block or bubble
  navType : 'block',
  // 子要素の種類 div or img
  childrenElementType : 'div',
  // 矢印の表示
  arrows : true,
  // 自動再生
  autoPlay : true,
  // スライド切り替え間隔(ms)
  autoPlayDuration : 5000,
  // キーボード矢印キーによる切り替え
  keyboardOnAlways : true,
  // 1枚目に戻る矢印の有無
  hidePrevious : false
});
