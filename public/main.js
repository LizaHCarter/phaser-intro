var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
  game.load.image('future', '/img/remember-me.jpg');
  game.load.image('pig', '/img/pigchampagne.png');
  game.load.image('face', '/img/kris-jovo.jpg');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}

var s2;

function create(){
  var s1 = game.add.sprite(20, 30, 'future');
  s2 = game.add.sprite(50, 70, 'pig');
  s2.anchor.set(0.5);
  var s3 = game.add.sprite(100, 0, 'face');
  s3.scale.setTo(.5);
  s2.scale.setTo(2);

  game.physics.enable(s2, Phaser.Physics.ARCADE);

  s2.body.velocity.x=150;
  s2.body.velocity.y=150;

  var text = "- phaser -\n with a sprinkle of \n pixi dust.";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  game.add.text(game.world.centerX-300, 0, text, style);

  var tween = game.add.tween(s3);
  tween.to({x: 600}, 1000);
  tween.start();

  var bot = game.add.sprite(200, 200, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);
  var tweenBot = game.add.tween(bot);
  tweenBot.to({x: 600}, 1000);
  tweenBot.start();
}
function update(){
  //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceToPointer(s2, game.input.activePointer) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToPointer(s2, 300);
    }
    else
    {
        //  Otherwise turn off velocity because we're close enough to the pointer
        //s2.body.velocity.set(0);
    }

}
