//Greensock's TweenMax and TimelineMax
function moveImg(){
  var tl = new TimelineMax();

  tl.set(".brandImg", { opacity: 0, scale: 0.5, top: 270 })
    .to(".brandImg", 1, { opacity: 1, scale: 1, ease: Power2.easeOut })
    .to(".brandImg", 4, { opacity: 1, scale: 1})
    .to(".brandImg", 1, { top: 100, ease: Power2.easeOut });

  return tl;
}

function staggerAssets() {
  var tl = new TimelineMax();
  
  var assets = [".hr", "h1", "h3", "footer"];
  tl.staggerFromTo(assets, 1, {
    opacity: 0,
  }, {
    opacity: 1, y: -20, ease: Power2.easeOut
  }, 0.2);

  tl.delay(-0.62);

  return tl;
}

var master = new TimelineMax();
  master.add(moveImg());
  master.add(staggerAssets());