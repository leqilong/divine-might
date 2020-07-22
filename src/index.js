import Phaser from "phaser";
import skyImg from "./assets/sky.png";
import platformImg from "./assets/platform.png";
import starImg from "./assets/star.png";
import bombImg from "./assets/bomb.png";
import dudeSprite from "./assets/dude.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('sky', skyImg);
  this.load.image('ground', platformImg);
  this.load.image('star', starImg);
  this.load.image('bomb', bombImg);
  this.load.image('dude', dudeSprite, { frameWidth: 32, frameHeight: 48});
}

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');
  // this.tweens.add({
  //   targets: logo,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });
}