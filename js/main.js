//this game will have only 1 state
var GameState = {
    //load the game assets before the game starts
    preload: function() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('arrow', 'assets/images/arrow.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep3.png');
      
    },
    //executed after everything is loaded
    create: function() {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Juego centrado en pantalla
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        // tamanio de pantalla seteado automatico
        this.scale.setScreenSize(true);
      
        //create a sprite for the background
        this.background = this.game.add.sprite(0, 0, 'background');
        
        // pollo al center of the world
        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
        
        // ancla del pollo place a sprite by it's center, not the top-left corner
        this.chicken.anchor.setTo(0.5, 0.5); // or just this.chicken.anchor.setTo(0.5)

        // pollo input de usuario
        this.chicken.inputEnabled = true;
        this.chicken.input.pixelPerfectClick = true;
        this.chicken.events.onInputDown.add(this.animateAnimal, this);

        // flecha izquierda
        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = {direction: -1};

        // flecha izquierda input de usuario
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
    
        // flecha derecha
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customParams = {direction: 1};

        // flecha derecha input de usuario
        this.rightArrow.inputEnabled = true;
        this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

  
    },
    //this is executed multiple times per second
    update: function() {
    },
    switchAnimal: function(sprite, event) {
        console.log('move animal');
    },
    animateAnimal: function(sprite, event) {
        console.log('animate animal');
    }

  };
  
  //initiate the Phaser framework
  var game = new Phaser.Game(640, 360, Phaser.AUTO);
  
  game.state.add('GameState', GameState);
  game.state.start('GameState');