var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background(rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300)));
var color4 = "blue";
var eyeSize = randomNumber(1, 100);
var color1 = "grey";
fill(color1);
rect(100, 100, 200, 200);
var color2 = "purple";
fill(color2);
ellipse(150, 150, eyeSize);
ellipse(250, 150, 50, 50);
fill(rgb(randomNumber(1, 300), randomNumber(1, 300), randomNumber(1, 300)));
rect(100, 250, 50, 50);
ellipse(100, 250, 50, 50);
rect(150, 250, 50, 50);
rect(200, 250, 50, 50);
rect(250, 250, 50, 50);
ellipse(300, 250, 50, 50);
ellipse(150, 150, 25, 25);
ellipse(250, 150, 25, 25);
regularPolygon(200, 200, randomNumber(1, 10), 40);
fill(color4);
rect(50, 300, 300, 300);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
