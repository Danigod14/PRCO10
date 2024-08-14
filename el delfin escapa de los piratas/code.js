

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ba95970d-d77d-4931-acbf-7813703ac34a","8ea39eba-9033-4c61-a47a-44c61dc729f1"],"propsByKey":{"ba95970d-d77d-4931-acbf-7813703ac34a":{"name":"delfin","sourceUrl":"assets/api/v1/animation-library/gamelab/2V1zTI7zphvwUlfGJj0UL.3p4OAvzUnL/category_animals/cuteanimals_dolphin.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2V1zTI7zphvwUlfGJj0UL.3p4OAvzUnL","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2V1zTI7zphvwUlfGJj0UL.3p4OAvzUnL/category_animals/cuteanimals_dolphin.png"},"8ea39eba-9033-4c61-a47a-44c61dc729f1":{"name":"barco","sourceUrl":"assets/api/v1/animation-library/gamelab/Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q/category_vehicles/ship_03.png","frameSize":{"x":376,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q/category_vehicles/ship_03.png"}}};
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

var life = 3;
var barco1, barco2, barco3,barco4;
var boundary1, boundary2;
var delfin;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  delfin = createSprite(25,180,13,13);
  delfin.shapeColor = "green";
  delfin.setAnimation("delfin");
  delfin.scale = 0.1;
  
  barco1 = createSprite(100,130,10,10);
  barco1.shapeColor = "red";
  barco1.setAnimation("barco");
  barco1.scale = 0.07;
  
  barco2 = createSprite(215,130,10,10);
  barco2.shapeColor = "red";
  barco2.setAnimation("barco");
  barco2.scale = 0.07;
  
  barco3 = createSprite(165,250,10,10);
  barco3.shapeColor = "red";
  barco3.setAnimation("barco");
  barco3.scale = 0.07;
  
  barco4 = createSprite(270,250,10,10);
  barco4.shapeColor = "red";
  barco4.setAnimation("barco");
  barco4.scale = 0.07;
 
//Agrega velocidad para hacer que el barco se mueva.

 barco1.velocityY =8;
 barco2.velocityY =8;
 barco3.velocityY =-8;
 barco4.velocityY =-8;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
 barco1.bounceOff(boundary1);
 barco1.bounceOff(boundary2);
 barco2.bounceOff(boundary1);
 barco2.bounceOff(boundary2);
 barco3.bounceOff(boundary1);
 barco3.bounceOff(boundary2);
 barco4.bounceOff(boundary1);
 barco4.bounceOff(boundary2);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if(keyDown("left")){
  delfin.x = delfin.x - 10;
  }
  if(keyDown("RIGHT")){
  delfin.x = delfin.x + 10;
  }
  if(keyDown("up")){
  delfin.y = delfin.y -10; 
  }
  if(keyDown("down")){
  delfin.y = delfin.y+ 10; 
}
//Agregar la condición de reducir la vida de Sam si toca el carro.
  if(delfin.isTouching(barco1)|| delfin.isTouching(barco2)||delfin.isTouching(barco3)||delfin.isTouching(barco4)){
  life=life- 1;
  delfin.x =20;
  delfin.y =190;
}
  if(life==0){
 barco1.velocityY=0;
 barco2.velocityY=0;
 barco3.velocityY=0; 
 barco4.velocityY=0;
fill("red")
textSize(25);
text("GAME OVER",120,50);

    
}

 drawSprites();
}

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
