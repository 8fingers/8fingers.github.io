//HTML Elements
var startScreen = document.getElementById("startScreen");
var startScreenCtx = startScreen.getContext("2d");
var endScreen = document.getElementById("endScreen");
var endScreenCtx = endScreen.getContext("2d");
var start = document.getElementById("start");
var stage = document.getElementById("stage");
var end = document.getElementById("end");
var floorLayer = document.getElementById("floor");
var floorLayerCtx = floorLayer.getContext("2d");
var playerLayer = document.getElementById("player");
var playerLayerCtx = playerLayer.getContext("2d");
var uiLayer = document.getElementById("ui");
var uiLayerCtx = uiLayer.getContext("2d");
var realTimeLayer = document.getElementById("realTime");
var realTimeLayerCtx = realTimeLayer.getContext("2d");

//Sound Function and Setup
var gameSound = function (src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.play = function(){
		this.sound.play();
	};
	this.stop = function(){
		this.sound.pause();
	};
};

//var backgroundMusic = new Audio('sfx/backgroundMusic.mp3');

var buttonSFX = new gameSound('sfx/button.wav');
var doorOpenSFX = new gameSound('sfx/doorOpen.wav');
var enemyDeathSFX = new gameSound('sfx/enemyDeath.wav');
var hurtSFX = new gameSound('sfx/hurt.wav');
var itemCollectSFX = new gameSound('sfx/itemCollect.wav');
var playerDeathSFX = new gameSound('sfx/playerDeath.wav');
var shotSFX = new gameSound('sfx/shot.wav');
var swordSFX = new gameSound('sfx/sword.wav');
var teleporterSFX = new gameSound('sfx/teleporter.wav');

//Room Images
var doorEastImage = new Image;
doorEastImage.src = "img/doorEast.png";
var doorNorthImage = new Image;
doorNorthImage.src = "img/doorNorth.png";
var doorSouthImage = new Image;
doorSouthImage.src = "img/doorSouth.png";
var doorWestImage = new Image;
doorWestImage.src = "img/doorWest.png";
var doorLockEastImage = new Image;
doorLockEastImage.src = "img/doorEastLock.png";
var doorLockWestImage = new Image;
doorLockWestImage.src = "img/doorWestLock.png";
var doorLockNorthImage = new Image;
doorLockNorthImage.src = "img/doorNorthLock.png";
var doorLockSouthImage = new Image;
doorLockSouthImage.src = "img/doorSouthLock.png";
var keyImage = new Image;
keyImage.src = "img/key.png";

var floorImage = new Image();
floorImage.src ="img/floor.png";
var teleportImage = new Image();
teleportImage.src = "img/teleport.png";
var wallImage = new Image();
wallImage.src ="img/wall.png";

//Trap Images
var fireballImage = new Image;
fireballImage.src = "img/fireball.png";
var fireUpImage = new Image;
fireUpImage.src = "img/fireUp.png";
var fireDownImage = new Image;
fireDownImage.src = "img/fireDown.png";
var fireLeftImage = new Image;
fireLeftImage.src = "img/fireLeft.png";
var fireRightImage = new Image;
fireRightImage.src = "img/fireRight.png";
var holeImage = new Image;
holeImage.src = "img/hole.png";
var spikeUpImage = new Image;
spikeUpImage.src = "img/spikeUp.png";
var spikeDownImage = new Image;
spikeDownImage.src = "img/spikeDown.png";

//fireSpin Trap
var fireSpinImage = new Image();
fireSpinImage.src = "img/fireSpin.png";

//UI Images
var clockImage = new Image();
clockImage.src = "img/clock.png";
var heartImage = new Image;
heartImage.src = "img/heart.png";

//Player Images
var playerUpImage = new Image();
playerUpImage.src = "img/playerUp.png";
var playerDownImage = new Image();
playerDownImage.src = "img/playerDown.png";
var playerLeftImage = new Image();
playerLeftImage.src = "img/playerLeft.png";
var playerRightImage = new Image();
playerRightImage.src = "img/playerRight.png";
var playerOuchImage = new Image();
playerOuchImage.src = "img/playerOuch.png";
//sword images for player
var swordUpImage = new Image;
swordUpImage.src = "img/swordUp.png";
var swordDownImage = new Image;
swordDownImage.src = "img/swordDown.png";
var swordLeftImage = new Image;
swordLeftImage.src = "img/swordLeft.png";
var swordRightImage = new Image;
swordRightImage.src = "img/swordRight.png";

//Enemy Images
//diagonal enemy
var dEnemyLeftImage = new Image();
dEnemyLeftImage.src = "img/dEnemyLeft.png";
var dEnemyRightImage = new Image();
dEnemyRightImage.src = "img/dEnemyRight.png";
//follow enemy
var fEnemyLeftImage = new Image();
fEnemyLeftImage.src = "img/fEnemyLeft.png";
var fEnemyRightImage = new Image();
fEnemyRightImage.src = "img/fEnemyRight.png";
//horizontal enemy
var hEnemyLeftImage = new Image();
hEnemyLeftImage.src = "img/hEnemyLeft.png";
var hEnemyRightImage = new Image();
hEnemyRightImage.src = "img/hEnemyRight.png";
//jump enemy
var jEnemyLeftImage = new Image();
jEnemyLeftImage.src = "img/jEnemyLeft.png";
var jEnemyRightImage = new Image();
jEnemyRightImage.src = "img/jEnemyRight.png";
//shot enemy
var sEnemyLeftImage = new Image();
sEnemyLeftImage.src = "img/sEnemyLeft.png";
var sEnemyRightImage = new Image();
sEnemyRightImage.src = "img/sEnemyRight.png";
//shot images for shot enemy
var shotUpImage = new Image;
shotUpImage.src = "img/shotUp.png";
var shotDownImage = new Image;
shotDownImage.src = "img/shotDown.png";
var shotLeftImage = new Image;
shotLeftImage.src = "img/shotLeft.png";
var shotRightImage = new Image;
shotRightImage.src = "img/shotRight.png";
//teleport enemy
var tEnemyLeftImage = new Image();
tEnemyLeftImage.src = "img/tEnemyLeft.png";
var tEnemyRightImage = new Image();
tEnemyRightImage.src = "img/tEnemyRight.png";
//vertical enemy
var vEnemyLeftImage = new Image();
vEnemyLeftImage.src = "img/vEnemyLeft.png";
var vEnemyRightImage = new Image();
vEnemyRightImage.src = "img/vEnemyRight.png";

//Start and End Screen Setup and Functions
startScreenCtx.font = "50px Courier New";
startScreenCtx.fillStyle = "darkgoldenrod";
startScreenCtx.textAlign = "center";
startScreenCtx.fillText("Dungeon Delver", startScreen.width/2, 200);
startScreenCtx.font = "bold 25px Courier New";
startScreenCtx.fillText("How deep will you get before the monsters get you?", startScreen.width/2, 530);
startScreenCtx.font = "20px Courier New";
startScreenCtx.fillText("Move using the Arrow Keys", startScreen.width/2, 620);
startScreenCtx.fillText("Attack using the Space Bar", startScreen.width/2, 650);
var timer;
var isTutorial=false;
var gameLoop;

function startButton(){
	start.style.visibility = "hidden";
	stage.style.visibility = "visible";
	gameLoop = setInterval(update, 16);
	DungeonGeneration(); //genrerate the dungeon
	curRoom= rooms[2][2];
	//backgroundMusic.play();
}

function tutorialButton()
{
	loadTutorial();
	start.style.visibility = "hidden";
	stage.style.visibility = "visible";
	
}

var tutorialLoop;

function loadTutorial()
{
	isTutorial = true;
	tutorialLoop = setInterval(update,16);
	floorLayerCtx.clearRect(0,0,750,750);
	playerLayerCtx.clearRect(0,0,750,750);
	clearDungeon();
	rooms[2][2] = new Room;
	console.log(rooms[2][2]);
	rooms[2][3] = new Room;
	rooms[2][4] = new Room;
	
	rooms[2][2].mapX = 2;
	rooms[2][2].mapY = 2;
	rooms[2][2].layout[12][24] = 12;
	rooms[2][2].update(tutorialMove.wallSpawns, tutorialMove.monsterSpawns, tutorialMove.holeSpawns, tutorialMove.spikeSpawns,tutorialMove.teleporters,tutorialMove.fireballSpawns, tutorialMove.fireSpawns);
	
	rooms[2][3].mapX = 3;
	rooms[2][3].mapY = 2;
	rooms[2][3].layout[12][24] = 12;
	rooms[2][3].layout[12][0] = 14;
	rooms[2][3].update(tutorialEnemy.wallSpawns, tutorialEnemy.monsterSpawns, tutorialEnemy.holeSpawns, tutorialEnemy.spikeSpawns,tutorialEnemy.teleporters,tutorialEnemy.fireballSpawns,tutorialEnemy.fireSpawns);
	
	rooms[2][4].mapX = 4;
	rooms[2][4].mapY = 2;
	rooms[2][4].layout[12][24] = 12;
	rooms[2][4].layout[12][0] = 14;
	rooms[2][4].update(tutorialAttack.wallSpawns, tutorialAttack.monsterSpawns, tutorialAttack.holeSpawns, tutorialAttack.spikeSpawns,tutorialAttack.teleporters,tutorialAttack.fireballSpawns,tutorialAttack.fireSpawns);
	curRoom=rooms[2][2];
	render();
	console.log("drawn Floor");
	
	

	uiLayerCtx.clearRect(0,0,750,750);
	uiLayerCtx.fillText("Move using the Arrow Keys", 100, 625);


	
}

//Floors

var tutorialMove={
	wallSpawns:[[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[18,11],[18,12],[18,13],[18,14],[18,15],[18,16],[18,17],[18,18],[18,19],[18,20],[18,21],[18,22],[18,23]],
	monsterSpawns: [],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [],
	buttons: [],
	teleporters: []
};

var tutorialEnemy={
	wallSpawns:[[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[18,11],[18,12],[18,13],[18,14],[18,15],[18,16],[18,17],[18,18],[18,19],[18,20],[18,21],[18,22],[18,23],
		[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[8,15],[8,16],[8,17],[8,18],[8,19],[8,20],[8,21],[8,22],[8,23],
		[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],
		[1,12],[2,12],[3,12],[4,12],[5,12],[6,12],[7,12],
		[1,18],[2,18],[3,18],[4,18],[5,18],[6,18],[7,18]],
	monsterSpawns: [[4,3],[10,3],[16,3],[22,3]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [],
	buttons: [],
	teleporters: []
};

var tutorialAttack={
	wallSpawns:[[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[18,11],[18,12],[18,13],[18,14],[18,15],[18,16],[18,17],[18,18],[18,19],[18,20],[18,21],[18,22],[18,23]],
	monsterSpawns: [[4,3],[10,3],[16,3],[22,3]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [],
	buttons: [],
	teleporters: []
};

var fireRoomOne ={
	wallSpawns: [[5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 9],[5, 10],[5, 11],[5, 12],[5, 13],[5, 14],[5, 15],[5, 16],[5, 17],[5, 21],[5, 22],[5, 23],
		[10, 1],[10, 2],[10, 3],[10, 7],[10, 8],[10, 9],[10, 10],[10, 11],[10, 12],[10, 13],[10, 14],[10, 15],[10, 16],[10, 17],[10, 18],[10, 19],[10, 20],[10, 21],[10, 22],[10, 23],
		[14, 1],[14, 2],[14, 3],[14, 4],[14, 5],[14, 6],[14, 7],[14, 8],[14, 9],[14, 10],[14, 11],[14, 12],[14, 13],[14, 14],[14, 15],[14, 16],[14, 17],[14, 21],[14, 22],[14, 23],
		[19, 1],[19, 2],[19, 3],[19, 7],[19, 8],[19, 9],[19, 10],[19, 11],[19, 12],[19, 13],[19, 14],[19, 15],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23]],
	monsterSpawns: [[4, 7],[4, 21],[5, 8],[5, 22],[6, 7],[6, 21],[18, 3],[18, 17],[19, 2],[19, 16],[20, 3],[20, 17]],
	fireSpawns: [[5, 9],[10, 15],[14, 9],[19, 15]],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [],
	buttons: [],
	teleporters: []
};

var fireRoomTwo ={
	wallSpawns:[[7, 6],[7, 18],[8, 6],[8, 18],[9, 6],[9, 18],[10, 6],[10, 18],[11, 6],[11, 18],
		[12, 6],[12, 7],[12, 8],[12, 9],[12, 10],[12, 11],[12, 12],[12, 13],[12, 14],[12, 15],[12, 16],[12, 17],[12, 18],
		[13, 6],[13, 18],[14, 6],[14, 18],[15, 6],[15, 18],[16, 6],[16, 18],[17, 6],[17, 18]],
	monsterSpawns: [[3, 9],[3, 15],[9, 7],[9, 17],[12, 5],[12, 9],[12, 15],[12, 19],[15, 7],[15, 17],[21, 9],[21, 15]],
	fireSpawns: [],
	fireballSpawns: [[6, 6, "up"],[19, 7, "right"],[5, 17, "left"],[18, 18, "down"]],
	holeSpawns: [],
	spikeSpawns: [],
	buttons: [],
	teleporters: []
};

var spikeRoomOne ={
	wallSpawns: [],
	monsterSpawns: [[2, 7],[3, 14],[3, 21],[7, 2],[12, 13],[16, 19],[17, 2],[22, 16]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [[3, 3],[3, 4],[3, 5],[3, 11],[3, 12],[3, 13],[3, 20],[3, 21],
		[4, 3],[4, 4],[4, 5],[4, 9],[4, 10],[4, 11],[4, 12],[4, 13],[4, 14],[4, 15],[4, 19],[4, 20],[4, 21],[4, 22],
		[5, 3],[5, 4],[5, 5],[5, 6],[5, 9],[5, 10],[5, 11],[5, 12],[5, 13],[5, 14],[5, 15],[5, 19],[5, 20],[5, 21],[5, 22],
		[6, 5],[6, 6],[6, 13],[6, 14],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],
		[7, 13],[7, 14],[7, 17],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],
		[8, 4],[8, 5],[8, 6],[8, 7],[8, 8],[8, 9],[8, 10],[8, 17],[8, 18],[8, 19],[8, 20],[8, 21],
		[9, 4],[9, 5],[9, 6],[9, 7],[9, 8],[9, 9],[9, 10],[9, 18],[9, 19],[9, 20],[9, 21],
		[10, 4],[10, 5],[10, 6],[10, 7],[10, 8],[10, 9],[10, 10],[10, 13],[10, 14],[10, 19],[10, 20],
		[11, 4],[11, 5],[11, 6],[11, 7],[11, 8],[11, 9],[11, 10],[11, 13],[11, 14],[11, 15],
		[12, 4],[12, 5],[12, 6],[12, 7],[12, 8],[12, 9],[12, 10],[12, 14],[12, 15],
		[13, 18],[13, 19],[13, 20],
		[14, 7],[14, 8],[14, 8],[14, 17],[14, 18],[14, 19],[14, 20],
		[15, 7],[15, 8],[15, 9],[15,10],[15, 11],[15, 12],[15, 15],[15, 16],[15, 17],[15, 18],[15, 19],[15, 20],
		[16, 3],[16, 4],[16, 7],[16, 8],[16, 9],[16, 10],[16, 11],[16, 12],[16, 15],[16, 16],[16, 17],[16, 18],
		[17, 2],[17, 3],[17, 4],[17, 7],[17, 8],[17, 9],[17, 10],[17, 11],[17, 12],[17, 15],[17, 16],[17, 17],
		[18, 2],[18, 3],[18, 7],[18, 8],[18, 9],[18, 20],[18, 21],
		[19, 20],[19, 21],
		[20, 5],[20, 6],[20, 7],[20, 8],[20, 9],[20, 10],[20, 11],[20, 12],[20, 13],[20, 14],[20, 15],[20, 18],[20, 19],[20, 20],[20, 21],
		[21, 5],[21, 6],[21, 7],[21, 8],[21, 9],[21, 10],[21, 11],[21, 12],[21, 13],[21, 14],[21, 15],[21, 18],[21, 19],[21, 20],[21, 21],
		[22, 18],[22, 19],[22, 20],[22, 21]],
	buttons: [],
	teleporters: []
};

var spikeRoomTwo ={
	wallSpawns:[[1, 1],[1, 2],[1, 3],[1, 4],[1, 5],[1, 6],[1, 7],[1, 8],[1, 9],[1, 10],[1, 14],[1, 15],[1, 16],[1, 17],[1, 18],[1, 19],[1, 20],[1, 21],[1, 22],[1, 23],
		[2, 1],[2, 2],[2, 3],[2, 4],[2, 5],[2, 6],[2, 7],[2, 8],[2, 9],[2, 10],[2, 14],[2, 15],[2, 16],[2, 17],[2, 18],[2, 19],[2, 20],[2, 21],[2, 22],[2, 23],
		[3, 1],[3, 2],[3, 3],[3, 4],[3, 5],[3, 6],[3, 7],[3, 8],[3, 9],[3, 10],[3, 14],[3, 15],[3, 16],[3, 17],[3, 18],[3, 19],[3, 20],[3, 21],[3, 22],[3, 23],
		[4, 1],[4, 2],[4, 3],[4, 4],[4, 5],[4, 6],[4, 7],[4, 8],[4, 9],[4, 15],[4, 16],[4, 17],[4, 18],[4, 19],[4, 20],[4, 21],[4, 22],[4, 23],
		[5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 16],[5, 17],[5, 18],[5, 19],[5, 20],[5, 21],[5, 22],[5, 23],
		[6, 1],[6, 2],[6, 3],[6, 4],[6, 5],[6, 6],[6, 7],[6, 17],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],[6, 23],
		[7, 1],[7, 2],[7, 3],[7, 4],[7, 5],[7, 6],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],[7, 23],
		[8, 1],[8, 2],[8, 3],[8, 4],[8, 5],[8, 19],[8, 20],[8, 21],[8, 22],[8, 23],
		[9, 1],[9, 2],[9, 3],[9, 4],[9, 20],[9, 21],[9, 22],[9, 23],
		[10, 1],[10, 2],[10, 3],[10, 21],[10, 22],[10, 23],
		[14, 1],[14, 2],[14, 3],[14, 21],[14, 22],[14, 23],
		[15, 1],[15, 2],[15, 3],[15, 4],[15, 20],[15, 21],[15, 22],[15, 23],
		[16, 1],[16, 2],[16, 3],[16, 4],[16, 5],[16, 19],[16, 20],[16, 21],[16, 22],[16, 23],
		[17, 1],[17, 2],[17, 3],[17, 4],[17, 5],[17, 6],[17, 18],[17, 19],[17, 20],[17, 21],[17, 22],[17, 23],
		[18, 1],[18, 2],[18, 3],[18, 4],[18, 5],[18, 6],[18, 7],[18, 17],[18, 18],[18, 19],[18, 20],[18, 21],[18, 22],[18, 23],
		[19, 1],[19, 2],[19, 3],[19, 4],[19, 5],[19, 6],[19, 7],[19, 8],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23],
		[20, 1],[20, 2],[20, 3],[20, 4],[20, 5],[20, 6],[20, 7],[20, 8],[20, 9],[20, 15],[20, 16],[20, 17],[20, 18],[20, 19],[20, 20],[20, 21],[20, 22],[20, 23],
		[21, 1],[21, 2],[21, 3],[21, 4],[21, 5],[21, 6],[21, 7],[21, 8],[21, 9],[21, 10],[21, 14],[21, 15],[21,16],[21, 17],[21, 18],[21, 19],[21, 20],[21, 21],[21, 22],[21, 23],
		[22, 1],[22, 2],[22, 3],[22, 4],[22, 5],[22, 6],[22, 7],[22, 8],[22, 9],[22, 10],[22, 14],[22, 15],[22, 16],[22, 17],[22, 18],[22, 19],[22, 20],[22, 21],[22, 22],[22, 23],
		[23, 1],[23, 2],[23, 3],[23, 4],[23, 5],[23, 6],[23, 7],[23, 8],[23, 9],[23, 10],[23, 14],[23, 15],[23, 16],[23, 17],[23, 18],[23, 19],[23, 20],[23, 21],[23, 22],[23, 23]],
	monsterSpawns: [[6, 10],[6, 14],[10, 6],[10, 18],[14, 6],[14, 18],[18, 10],[18, 14]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [],
	spikeSpawns: [[7, 12],
		[8, 11],[8, 12],[8, 13],
		[9, 10],[9, 11],[9, 12],[9, 13],[9, 14],
		[10, 9],[10, 10],[10, 11],[10, 12],[10, 13],[10, 14],[10, 15],
		[11, 8],[11, 9],[11, 10],[11, 11],[11, 12],[11, 13],[11, 14],[11, 15],[11, 16],
		[12, 7],[12, 8],[12, 9],[12, 10],[12, 11],[12, 12],[12, 13],[12, 14],[12, 15],[12, 16],[12, 17],
		[13, 8],[13, 9],[13, 10],[13, 11],[13, 12],[13, 13],[13, 14],[13, 15],[13, 16],
		[14, 9],[14, 10],[14, 11],[14, 12],[14, 13],[14, 14],[14, 15],
		[15, 10],[15, 11],[15, 12],[15, 13],[15, 14],
		[16, 11],[16, 12],[16, 13],
		[17, 12]],
	buttons: [],
	teleporters: []
};

var holeRoomOne ={
	wallSpawns: [],
	monsterSpawns: [[2, 5],[2, 15],[2, 20],[3, 8],[3, 11],[4, 18],[5, 9],[5, 13],[5, 21],[6, 16],
		[7, 2],[7, 11],[7, 19],[9, 13],[9, 22],[10, 3],[10, 18],[11, 6],[12, 16],[13, 20],
		[14, 4],[14, 17],[15, 7],[15, 22],[17, 2],[17, 11],[17, 20],[18, 5],[19, 9],[19, 22],
		[20, 3],[20, 13],[21, 7],[21, 17],[22, 10],[22, 15]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [[1, 1],[1, 2],[2, 1],[2, 2],[3, 2],[3, 3],[4, 2],[4, 3],[4, 4],[4, 5],[5, 4],[5, 5],[6, 5],[6, 6],[7, 5],[7, 6],
		[7, 7],[7, 8],[8, 7],[8, 8],[9, 8],[9, 9],[10, 8],[10, 9],[10, 10],[10, 11],[11, 10],[11, 11],[12, 11],[12, 12],[13, 11],[13, 12],
		[13, 13],[13, 14],[14, 13],[14, 14],[15, 14],[15, 15],[16, 14],[16, 15],[16, 16],[16, 17],[17, 16],[17, 17],[18, 17],[18, 18],[19, 17],[19, 18],
		[19, 19],[19, 20],[20, 19],[20, 20],[21, 20],[21, 21],[22, 20],[22, 21],[22, 22],[22, 23],[23, 22],[23, 23]],
	spikeSpawns: [],
	buttons: [],
	teleporters:[[9, 15],[15, 9]]
};

var holeRoomTwo ={
	wallSpawns:[[9, 12],[12, 9],[12, 15],[15, 12]],
	monsterSpawns: [[3, 10],[6, 14],[10, 6],[10, 21],[14, 3],[14, 18],[18, 10],[21, 14]],
	fireSpawns: [],
	fireballSpawns: [],
	holeSpawns: [[1, 1],[1, 2],[1, 3],[1, 4],[1, 5],[1, 6],[1, 7],[1, 8],[1, 16],[1, 17],[1, 18],[1, 19],[1, 20],[1, 21],[1, 22],[1, 23],
		[2, 1],[2, 2],[2, 3],[2, 4],[2, 5],[2, 6],[2, 7],[2, 8],[2, 16],[2, 17],[2, 18],[2, 19],[2, 20],[2, 21],[2, 22],[2, 23],
		[3, 1],[3, 2],[3, 3],[3, 4],[3, 5],[3, 6],[3, 7],[3, 8],[3, 16],[3, 17],[3, 18],[3, 19],[3, 20],[3, 21],[3, 22],[3, 23],
		[4, 1],[4, 2],[4, 3],[4, 4],[4, 5],[4, 6],[4, 7],[4, 8],[4, 16],[4, 17],[4, 18],[4, 19],[4, 20],[4, 21],[4, 22],[4, 23],
		[5, 1],[5, 2],[5, 3],[5, 4],[5, 5],[5, 6],[5, 7],[5, 8],[5, 16],[5, 17],[5, 18],[5, 19],[5, 20],[5, 21],[5, 22],[5, 23],
		[6, 1],[6, 2],[6, 3],[6, 4],[6, 5],[6, 6],[6, 7],[6, 8],[6, 16],[6, 17],[6, 18],[6, 19],[6, 20],[6, 21],[6, 22],[6, 23],
		[7, 1],[7, 2],[7, 3],[7, 4],[7, 5],[7, 6],[7, 7],[7, 8],[7, 16],[7, 17],[7, 18],[7, 19],[7, 20],[7, 21],[7, 22],[7, 23],
		[8, 1],[8, 2],[8, 3],[8, 4],[8, 5],[8, 6],[8, 7],[8, 8],[8, 16],[8, 17],[8, 18],[8, 19],[8, 20],[8, 21],[8, 22],[8, 23],
		[16, 1],[16, 2],[16, 3],[16, 4],[16, 5],[16, 6],[16, 7],[16, 8],[16, 16],[16, 17],[16, 18],[16, 19],[16, 20],[16, 21],[16, 22],[16, 23],
		[17, 1],[17, 2],[17, 3],[17, 4],[17, 5],[17, 6],[17, 7],[17, 8],[17, 16],[17, 17],[17, 18],[17, 19],[17, 20],[17, 21],[17, 22],[17, 23],
		[18, 1],[18, 2],[18, 3],[18, 4],[18, 5],[18, 6],[18, 7],[18, 8],[18, 16],[18, 17],[18, 18],[18, 19],[18, 20],[18, 21],[18, 22],[18, 23],
		[19, 1],[19, 2],[19, 3],[19, 4],[19, 5],[19, 6],[19, 7],[19, 8],[19, 16],[19, 17],[19, 18],[19, 19],[19, 20],[19, 21],[19, 22],[19, 23],
		[20, 1],[20, 2],[20, 3],[20, 4],[20, 5],[20, 6],[20, 7],[20, 8],[20, 16],[20, 17],[20, 18],[20, 19],[20, 20],[20, 21],[20, 22],[20, 23],
		[21, 1],[21, 2],[21, 3],[21, 4],[21, 5],[21, 6],[21, 7],[21, 8],[21, 16],[21, 17],[21, 18],[21, 19],[21, 20],[21, 21],[21, 22],[21, 23],
		[22, 1],[22, 2],[22, 3],[22, 4],[22, 5],[22, 6],[22, 7],[22, 8],[22, 16],[22, 17],[22, 18],[22, 19],[22, 20],[22, 21],[22, 22],[22, 23],
		[23, 1],[23, 2],[23, 3],[23, 4],[23, 5],[23, 6],[23, 7],[23, 8],[23, 16],[23, 17],[23, 18],[23, 19],[23, 20],[23, 21],[23, 22],[23, 23]],
	spikeSpawns: [],
	buttons: [[12, 12]],
	teleporters: []
};

//,spikeRoomThree, spikeRoomFour, spikeRoomFive, spikeRoomSix, wallRoomOne, wallRoomTwo, wallRoomThree, wallRoomFour
roomList = [fireRoomOne, fireRoomTwo, spikeRoomOne, spikeRoomTwo, holeRoomOne, holeRoomTwo];

//Movement Variables
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

/*/Time Variables
var minutes = 5;
var seconds = 0;
var timeout = false;*/

//UI Font Setup
uiLayerCtx.font = "bold 30px Courier New";
uiLayerCtx.fillStyle = "white";
//uiLayerCtx.fillText(minutes+":"+seconds, 655, 0);

//Player Variables and Functions
var player = {
	img: playerDownImage,
	sword: swordDownImage,
	xPos: 12,
	yPos: 1,
	direction: "down",
	health: 5,
	maxHealth: 10,
	ouchTime: 0,
	animTime: 0,
	hasKey: false
};

function playerHurt(){
	player.health --;
	player.ouchTime = 10;
	player.img = playerOuchImage;
	if (player.health == 0){
		playerDeathSFX.play();
	}
	else{
		hurtSFX.play();
	}
}

//Item Variables and Function
var item = function(image, x, y){
	this.img = image;
	this.xPos = x;
	this.yPos = y;
};

function itemDrop(x,y){
	itemRandom = Math.floor(Math.random()*10)%5;
	if (itemRandom == 0){
		curRoom.items.push(new item(heartImage,x,y));
	}
	/*else if (itemRandom == 1){
		items.push(new item(clockImage,x,y));
	}*/
}

function pickUp(){
	for (var i = 0; i < curRoom.items.length; i++){
		if (curRoom.items[i].xPos == player.xPos && curRoom.items[i].yPos == player.yPos){
			itemCollectSFX.play();
			if (curRoom.items[i].img == clockImage){
				if (minutes < 99){
					minutes ++;
				}
			}
			else if (curRoom.items[i].img == heartImage){
				if (player.health < player.maxHealth){
					player.health ++
				}
			}
			else if (curRoom.items[i].img == keyImage)
			{
				player.hasKey = true;
			}
			curRoom.items.splice(i,1);
		}
	}
}

//Enemy Variables and Functions
var diagonalEnemy = function() {
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;
	this.img = dEnemyLeftImage;
	this.direction = "leftUp";
	this.dirs = ["leftUp", "leftDown", "rightUp", "rightDown"];
	this.health = 1;
	this.hasKey = false;

	this.moveEnemy = function(){
		this.direction = this.dirs[Math.floor(Math.random()*4)];
		switch (this.direction){
			case "leftUp":
				this.img = dEnemyLeftImage;
				collision = collisionCheck(this.x-1, this.y-1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y-1][this.x-1] == 1){
					this.x --;
					this.y --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x ++;
						this.y ++;
						playerHurt();
						collision = false;
					}
				}
				break;
			case "leftDown":
				this.img = dEnemyLeftImage;
				collision = collisionCheck(this.x-1, this.y+1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y+1][this.x-1] == 1){
					this.x --;
					this.y ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x ++;
						this.y --;
						playerHurt();
						collision = false;
					}
				}
				break;
			case "rightUp":
				this.img = dEnemyRightImage;
				collision = collisionCheck(this.x+1, this.y-1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y-1][this.x+1] == 1){
					this.x ++;
					this.y --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x --;
						this.y ++;
						playerHurt();
						collision = false;
					}
				}
				break;
			case "rightDown":
				this.img = dEnemyRightImage;
				collision = collisionCheck(this.x+1, this.y+1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y+1][this.x+1] == 1){
					this.x ++;
					this.y ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x --;
						this.y --;
						playerHurt();
						collision = false;
					}
				}
				break;
		}
	};
};

var followEnemy = function() {
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;
	this.img = fEnemyLeftImage;
	this.health = 1;
	this.hasKey = false;
	this.xDis = 1;
	this.yDis = 1;

	this.moveEnemy = function(){
		this.xDis = this.x-player.xPos;
		this.yDis = this.y-player.yPos;
		if ((Math.abs(this.xDis) == 0 && Math.abs(this.yDis) == 1) || (Math.abs(this.xDis) == 1 && Math.abs(this.yDis) == 0)){
			if(this.xDis > 0){
				this.img = fEnemyLeftImage;
				this.x --;
				collision = collisionCheck(player.xPos, player.yPos);
				if (collision){
					this.x ++;
					playerHurt();
					collision = false;
				}
			}
			else if(this.xDis < 0){
				this.img = fEnemyRightImage;
				this.x ++;
				collision = collisionCheck(player.xPos, player.yPos);
				if (collision){
					this.x --;
					playerHurt();
					collision = false;
				}
			}
			else if(this.yDis > 0){
				this.y --;
				collision = collisionCheck(player.xPos, player.yPos);
				if (collision){
					this.y ++;
					playerHurt();
					collision = false;
				}
			}
			else if(this.yDis < 0){
				this.y ++;
				collision = collisionCheck(player.xPos, player.yPos);
				if (collision){
					this.y --;
					playerHurt();
					collision = false;
				}
			}
		}
		else if (Math.abs(this.xDis) > Math.abs(this.yDis) || Math.abs(this.xDis) == Math.abs(this.yDis)){
			if(this.xDis > 0){
				this.img = fEnemyLeftImage;
				collision = collisionCheck(this.x-1, this.y);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y][this.x-1] != 0 &&curRoom.layout[this.y][this.x-1] != 2){
					this.x --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x ++;
						playerHurt();
						collision = false;
					}
				}
			}
			if(this.xDis < 0){
				this.img = fEnemyRightImage;
				collision = collisionCheck(this.x+1, this.y);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y][this.x+1] != 0&& curRoom.layout[this.y][this.x+1] != 2){
					this.x ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x --;
						playerHurt();
						collision = false;
					}
				}
			}
		}
		else if (Math.abs(this.xDis) < Math.abs(this.yDis)){
			if(this.yDis > 0){
				collision = collisionCheck(this.x, this.y-1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y-1][this.x] != 0 && curRoom.layout[this.y-1][this.x] != 2){
					this.y --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.y ++;
						playerHurt();
						collision = false;
					}
				}
			}
			if(this.yDis < 0){
				collision = collisionCheck(this.x, this.y+1);
				if (collision){
					collision = false;
				}
				else if (curRoom.layout[this.y+1][this.x] != 0 && curRoom.layout[this.y+1][this.x] != 2){
					this.y ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.y --;
						playerHurt();
						collision = false;
					}
				}
			}
		}
	}
};

var jumpEnemy = function() {
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;
	this.img = jEnemyLeftImage;
	this.health = 1;
	this.hasKey = false;
	this.dirs = ["up", "down", "left", "right", "leftUp", "leftDown", "rightUp", "rightDown"];
	this.direction = this.dirs[Math.floor(Math.random()*8)];
	this.move = true;

	this.moveEnemy = function() {
		if (this.move) {
			this.move = false;
			this.direction = this.dirs[Math.floor(Math.random() * 8)];
			switch (this.direction) {
				case "up":
					collision = collisionCheck(this.x, this.y - 2);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y - 2][this.x] == 1) {
						this.y -= 2;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.y += 2;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "down":
					collision = collisionCheck(this.x, this.y + 2);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y + 2][this.x] == 1) {
						this.y += 2;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.y -= 2;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "left":
					this.img = jEnemyLeftImage;
					collision = collisionCheck(this.x - 2, this.y);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y][this.x - 2] == 1) {
						this.x -= 2;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x += 2;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "right":
					this.img = jEnemyRightImage;
					collision = collisionCheck(this.x + 2, this.y);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y][this.x + 2] == 1) {
						this.x += 2;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x -= 2;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "leftUp":
					this.img = jEnemyLeftImage;
					collision = collisionCheck(this.x - 1, this.y - 1);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y - 1][this.x - 1] == 1) {
						this.x--;
						this.y--;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x++;
							this.y++;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "leftDown":
					this.img = jEnemyLeftImage;
					collision = collisionCheck(this.x - 1, this.y + 1);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y + 1][this.x - 1] == 1) {
						this.x--;
						this.y++;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x++;
							this.y--;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "rightUp":
					this.img = jEnemyRightImage;
					collision = collisionCheck(this.x + 1, this.y + 1);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y + 1][this.x + 1] == 1) {
						this.x++;
						this.y++;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x--;
							this.y--;
							playerHurt();
							collision = false;
						}
					}
					break;
				case "rightDown":
					this.img = jEnemyRightImage;
					collision = collisionCheck(this.x + 1, this.y - 1);
					if (collision) {
						collision = false;
					}
					else if (curRoom.layout[this.y - 1][this.x + 1] == 1) {
						this.x++;
						this.y--;
						collision = collisionCheck(player.xPos, player.yPos);
						if (collision) {
							this.x--;
							this.y++;
							playerHurt();
							collision = false;
						}
					}
					break;
			}
		}
		else {
			this.move = true;
		}
	}
};

var horizontalEnemy = function() {
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;
	this.img = hEnemyLeftImage;
	this.direction = "left";
	this.health = 1;
	this.hasKey = false;

	this.moveEnemy = function(){
		switch (this.direction){
			case "left":
				collision = collisionCheck(this.x-1, this.y);
				if (collision){
					this.direction = "right";
					this.img = hEnemyRightImage;
					collision = false;
				}
				else if (curRoom.layout[this.y][this.x-1] == 1){
					this.x --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x ++;
						playerHurt();
						collision = false;
					}
				}
				else{
					this.direction = "right";
					this.img = hEnemyRightImage;
				}
				break;
			case "right":
				collision = collisionCheck(this.x+1, this.y);
				if (collision){
					this.direction = "left";
					this.img = hEnemyLeftImage;
					collision = false;
				}
				else if (curRoom.layout[this.y][this.x+1] == 1){
					this.x ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.x --;
						playerHurt();
						collision = false;
					}
				}
				else{
					this.direction = "left";
					this.img = hEnemyLeftImage;
				}
				break;
		}
	};
};

var verticalEnemy = function() {
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;
	this.img = vEnemyRightImage;
	this.direction = "up";
	this.health = 1;
	this.hasKey = false;

	this.moveEnemy = function(){
		switch (this.direction){
			case "up":
				collision = collisionCheck(this.x, this.y-1);
				if (collision){
					this.direction = "down";
					this.img = vEnemyLeftImage;
					collision = false;
				}
				else if (curRoom.layout[this.y-1][this.x] == 1){
					this.y --;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.y ++;
						playerHurt();
						collision = false;
					}
				}
				else{
					this.direction = "down";
					this.img = vEnemyLeftImage;
				}
				break;
			case "down":
				collision = collisionCheck(this.x, this.y+1);
				if (collision){
					this.direction = "up";
					this.img = vEnemyRightImage;
					collision = false;
				}
				else if (curRoom.layout[this.y+1][this.x] == 1){
					this.y ++;
					collision = collisionCheck(player.xPos, player.yPos);
					if (collision){
						this.y --;
						playerHurt();
						collision = false;
					}

				}
				else{
					this.direction = "up";
					this.img = vEnemyRightImage;
				}
				break;
		}
	};
};

//Trap Functions
var fireball = function(xPos, yPos, dir, shot) {
	this.x = xPos;
	this.y = yPos;
	this.startX = xPos;
	this.startY = yPos;
	this.width = 30;
	this.height = 30;
	this.dir = dir;
	this.shot = shot;
	if (this.shot){
		switch (this.dir){
			case "up":
				this.img = shotUpImage;
				break;
			case "down":
				this.img = shotDownImage;
				break;
			case "left":
				this.img = shotLeftImage;
				break;
			case "right":
				this.img = shotRightImage;
				break;
		}
	}
	else{
		switch (this.dir){
			case "up":
				this.img = fireUpImage;
				break;
			case "down":
				this.img = fireDownImage;
				break;
			case "left":
				this.img = fireLeftImage;
				break;
			case "right":
				this.img = fireRightImage;
				break;
		}
	}

	this.moveFireball = function(){
		switch (this.dir){
			case "up":
				if (this.y > 1){
					this.y --;
				}
				else if (shot == false){
					this.y = this.startY;
				}
				collision = this.collide();
				if (collision){
					collision = false;
					playerHurt();
				}
				break;
			case "down":
				if (this.y < 23){
					this.y ++;
				}
				else if (shot == false){
					this.y = this.startY;
				}
				collision = this.collide();
				if (collision){
					collision = false;
					playerHurt();
				}
				break;
			case "left":
				if (this.x > 1){
					this.x --;
				}
				else if (shot == false){
					this.x = this.startX;
				}
				collision = this.collide();
				if (collision){
					collision = false;
					playerHurt();
				}
				break;
			case "right":
				if (this.x < 23){
					this.x ++;
				}
				else if (shot == false){
					this.x = this.startX;
				}
				collision = this.collide();
				if (collision){
					collision = false;
					playerHurt();
				}
				break;
		}
	
	};

	this.collide = function(){
		col = false;
		if (this.x == player.xPos && this.y ==player.yPos ){
			col = true
		};
		return col;
	};
};

//Room Variables and Functions
var Room = function(yLoc, xLoc) {
	this.layout = [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
	this.width = 750;
	this.height = 750;
	this.mapX = xLoc;
	this.mapY = yLoc;
	this.enemies = [];
	this.fireballs = [];
	this.items = [];
	this.doorNorth = false;
	this.doorSouth = false;
	this.doorEast = false;
	this.doorWest = false;

	this.addWalls = function(walls){
		for (var i=0;i<walls.length;i++){
			this.layout[walls[i][0]][walls[i][1]] = 0;
		}
	};
	this.addEnemies = function(spawnList){
		for (var i = 0; i < spawnList.length; i++) {
			randomEnemy = Math.floor(Math.random()*5);
			switch (randomEnemy) {
				case 0:
					this.enemies.push(new diagonalEnemy());
					this.enemies[i].x = spawnList[i][0];
					this.enemies[i].y = spawnList[i][1];
					break;
				case 1:
					this.enemies.push(new followEnemy());
					this.enemies[i].x = spawnList[i][0];
					this.enemies[i].y = spawnList[i][1];
					break;
				case 2:
					this.enemies.push(new jumpEnemy());
					this.enemies[i].x = spawnList[i][0];
					this.enemies[i].y = spawnList[i][1];
					break;
				case 3:
					this.enemies.push(new horizontalEnemy());
					this.enemies[i].x = spawnList[i][0];
					this.enemies[i].y = spawnList[i][1];
					break;
				case 4:
					this.enemies.push(new verticalEnemy());
					this.enemies[i].x = spawnList[i][0];
					this.enemies[i].y = spawnList[i][1];
					break;
			}
		}
	};
	this.addHoles = function(holes){
		for (var i=0;i<holes.length;i++){
			this.layout[holes[i][0]][holes[i][1]] = 2;
		}
	};
	this.addSpikes = function(spikes){
		for (var i=0;i<spikes.length;i++){
			this.layout[spikes[i][0]][spikes[i][1]] = 3;
		}
	};
	this.addTeleporters = function(teleporters){
		for (var i=0;i<teleporters.length;i++){
			this.layout[teleporters[i][0]][teleporters[i][1]] = 4;
		}
	};
	this.addFireballs = function(fireballList){
		for(var i=0;i<fireballList.length;i++){
			this.fireballs.push(new fireball(fireballList[i][0],fireballList[i][1],fireballList[i][2],false));
		}
	};
		
	this.addFires = function(fires){
		for (var i=0;i<fires.length;i++){
			this.layout[fires[i][0]][fires[i][1]] = 6;
		}
	};
	
	
	this.update = function(walls, spawnList, holes, spikes, teleporters, fireballList, fires){
		this.addWalls(walls);
		this.addEnemies(spawnList);
		this.addHoles(holes);
		this.addSpikes(spikes);
		this.addTeleporters(teleporters);
		this.addFireballs(fireballList);
		this.addFires(fires);
	};
};

//Other Variables
var tileX = 30;
var tileY = 30;
var randomEnemy = 0;
var ranRoomX;
var ranRoomY;

var rooms = [[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]]; //5x5 room layout
	


var curRoom = rooms[2][2];
function clearDungeon()
{
	for(var i = 0; i<5;i++)
	{
		for (var j = 0; j<5;j++)
		{
			rooms[i][j] = 0; 
		}
	}
}

function newNode (locNS,locEW) //Recursively populate the rooms array with layouts and add doors to next rooms with 50% chance of any door being there
{
	rooms[locNS][locEW] = new Room;
	rooms[locNS][locEW].mapY = locNS;
	rooms[locNS][locEW].mapX=locEW;
	var randomRoom = Math.floor(Math.random()*6);
	rooms[locNS][locEW].update(roomList[randomRoom].wallSpawns, roomList[randomRoom].monsterSpawns, roomList[randomRoom].holeSpawns, roomList[randomRoom].spikeSpawns,roomList[randomRoom].teleporters,roomList[randomRoom].fireballSpawns, roomList[randomRoom].fireSpawns);
	
	var hasDoor = Math.floor(Math.random()*100)%4 ;
	if (hasDoor ==0 || (rooms[locNS][locEW].mapY ==2 && rooms[locNS][locEW].mapX ==2))
	{
		if(locNS !=0)
		{
			rooms[locNS][locEW].layout[0][12] = 11;
			rooms[locNS][locEW].doorNorth = true;
			if(rooms[locNS-1][locEW] == 0)
			{
				newNode(locNS-1,locEW);
				rooms[locNS-1][locEW].layout[24][12] = 13;
				rooms[locNS-1][locEW].doorSouth = true;
			}
		}
	}
	
	var hasDoor = Math.floor(Math.random()*100) %4;
	if (hasDoor ==0 || (rooms[locNS][locEW].mapY ==2 && rooms[locNS][locEW].mapX ==2))
	{
		if(locNS !=4)
		{
			rooms[locNS][locEW].layout[24][12] = 13;
			rooms[locNS][locEW].doorSouth = true;
			if(rooms[locNS+1][locEW] == 0)
			{
				newNode(locNS+1,locEW);
				rooms[locNS+1][locEW].layout[0][12] = 11;
				rooms[locNS+1][locEW].doorNorth = true;
			}
		}
	}
	
	var hasDoor = Math.floor(Math.random()*100) %4;
	if (hasDoor||(rooms[locNS][locEW].mapY ==2 && rooms[locNS][locEW].mapX ==2))
	{
		if(locEW !=4)
		{
			rooms[locNS][locEW].layout[12][24] = 12;
			rooms[locNS][locEW].doorEast=true;
			if(rooms[locNS][locEW+1] == 0)
			{
				newNode(locNS,locEW+1);
				rooms[locNS][locEW+1].layout[12][0] = 14;
				rooms[locNS][locEW+1].doorWest = true;
			}
		}
	}
	
	var hasDoor = Math.floor(Math.random()*100) %4;
	if (hasDoor||(rooms[locNS][locEW].mapY ==2 && rooms[locNS][locEW].mapX ==2))
	{
		if(locEW !=0)
		{
			rooms[locNS][locEW].layout[12][0] = 14;
			rooms[locNS][locEW].doorWest = true;
			if(rooms[locNS][locEW-1] == 0)
			{
				newNode(locNS,locEW-1);
				rooms[locNS][locEW-1].layout[12][24] = 12;
				rooms[locNS][locEW-1].doorEast = true;
			}
		}
	}
	
};

function DungeonGeneration() 
{
	newNode(2,2);
	rooms[2][1].layout[12][24]=12; //place right door in left room #hotfix
	rooms[2][2].doorEast = true;
	rooms[2][2].doorWest = true;
	rooms[2][2].doorNorth = true;
	rooms[2][2].doorSouth = true;
	
	//give random enemy the key for that floor
	ranRoomX = Math.floor(Math.random()*5);
	ranRoomY = Math.floor(Math.random()*5);
	while(rooms[ranRoomY][ranRoomX]==0)
	{
		ranRoomX = Math.floor(Math.random()*5);
		ranRoomY = Math.floor(Math.random()*5);
	}
	rooms[ranRoomY][ranRoomX].enemies[Math.floor(Math.random()*rooms[ranRoomY][ranRoomX].enemies.length)].hasKey = true;
	
	var placedLockedDoor = false; // start of picing a random room for the locked door
	while(placedLockedDoor == false)
	{
		ranRoomX = Math.floor(Math.random()*5);
		ranRoomY = Math.floor(Math.random()*5);
		if (rooms[ranRoomY][ranRoomX] !=0)
		{
			if(rooms[ranRoomY][ranRoomX].doorNorth ==false)
			{
				rooms[ranRoomY][ranRoomX].layout[0][12] = 21;
				placedLockedDoor=true;
			}
			
			else if(rooms[ranRoomY][ranRoomX].doorSouth ==false)
			{
				rooms[ranRoomY][ranRoomX].layout[24][12] = 23;
				placedLockedDoor=true;
			}
			else if(rooms[ranRoomY][ranRoomX].doorEast ==false)
			{
				rooms[ranRoomY][ranRoomX].layout[12][24] = 22;
				placedLockedDoor=true;
			}
			else if(rooms[ranRoomY][ranRoomX].doorWest ==false)
			{
				rooms[ranRoomY][ranRoomX].layout[12][0] = 24;
				placedLockedDoor=true;
			}
		}
	}
	
	
};

/*for (var i = 0; i < 3; i++){
	for (var j = 0; j <3; j++){
		randomRoom = Math.floor(Math.random()*6);
		console.log(randomRoom);
		rooms[i][j].update(roomList[randomRoom].wallSpawns, roomList[randomRoom].monsterSpawns, roomList[randomRoom].holeSpawns, roomList[randomRoom].spikeSpawns, roomList[randomRoom].teleporters, roomList[randomRoom].fireballSpawns);
	}
}*/
var floor = 1;
var collision = false;
var enemyMove = false;
var curSpikeImg = spikeUpImage;
var spikeShift = 100;
var fireballMoveTime = 10;
var itemRandom = randomRoom = Math.floor(Math.random()*10);
var countTick = 0;
var teleported = false;

//Event Listeners
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

//Key Press Functions
function onKeyDown(e){
	switch(e.keyCode){
		case 38: //up
			upPressed = true;
			player.img = playerUpImage;
			player.direction = "up";
			player.sword = swordUpImage;
			break;
		case 40: //down
			downPressed = true;
			player.img = playerDownImage;
			player.direction = "down";
			player.sword = swordDownImage;
			break;
		case 37: //left
			leftPressed = true;
			player.img = playerLeftImage;
			player.direction = "left";
			player.sword = swordLeftImage;
			break;
		case 39: //right
			rightPressed = true;
			player.img = playerRightImage;
			player.direction = "right";
			player.sword = swordRightImage;
			break;
		case 32: //space
			spacePressed = true;
			break;
	}
	attack();
	movePlayer();
}

function onKeyUp(e){
	switch(e.keyCode){
		case 38: //up
			upPressed = false;
			break;
		case 40: //down
			downPressed = false;
			break;
		case 37: //left
			leftPressed = false;
			break;
		case 39: //right
			rightPressed = false;
			break;
		case 32: //space
			spacePressed = false;
			break;
	}
}

//Movement Functions
function movePlayer(){
	if (upPressed && curRoom.layout[player.yPos-1][player.xPos] !=0)
	{
		if(curRoom.layout[player.yPos-1][player.xPos] == 11){
			curRoom = rooms[curRoom.mapY-1][curRoom.mapX];
			player.xPos = 12;
			player.yPos = 23;
		}
		
		
		else if(curRoom.layout[player.yPos-1][player.xPos] == 21&&player.hasKey == true){
			clearDungeon();
			floor++
			curRoom = rooms[2][2];
			DungeonGeneration();
			console.log("generate new floor");
		}
		
		else if (curRoom.layout[player.yPos-1][player.xPos] == 2){
			console.log("walk in hole");
			var rotate = setInterval(playerRotate,16);
		}//copy this for all directions below fall into hole anim
		else if (curRoom.layout[player.yPos-1][player.xPos] == 4) {
			for (var i = 0; i < 25; i++) {
				for (var j = 0; j < 25; j++) {
					switch (curRoom.layout[i][j]) {
						case 4:
							if (j != player.xPos && i != player.yPos && teleported == false) {
								player.xPos = j;
								player.yPos = i;
								teleported = true;
							}
							teleporterSFX.play();
							break;
						default:
							break;
					}
				}
			}
			teleported = false;
		}
		else{
			collision = collisionCheck(player.xPos, player.yPos-1);
			if (collision){
				collision = false;
			}
			else{
				player.yPos --;
				pickUp();
				enemyMove = true;
				if (curSpikeImg == spikeUpImage){
					if (curRoom.layout[player.yPos][player.xPos] == 3){
						playerHurt();
					}
				};
			}
		}
	}
	if (downPressed && curRoom.layout[player.yPos+1][player.xPos] !=0)
	{
		if(curRoom.layout[player.yPos+1][player.xPos] == 13){
			curRoom = rooms[curRoom.mapY+1][curRoom.mapX];
			player.xPos = 12;
			player.yPos = 1;
		}
		
		else if(curRoom.layout[player.yPos+1][player.xPos] == 23&&player.hasKey == true){
			clearDungeon();
			floor++;
			curRoom = rooms[2][2];
			DungeonGeneration();
			console.log("generate new floor");
		}
		else if (curRoom.layout[player.yPos+1][player.xPos] == 2){
			console.log("walk in hole");
			var rotate = setInterval(playerRotate,16);
		}//copy this for all directions below fall into hole anim
		
		else if (curRoom.layout[player.yPos+1][player.xPos] == 4) {
			for (var i = 0; i < 25; i++) {
				for (var j = 0; j < 25; j++) {
					switch (curRoom.layout[i][j]) {
						case 4:
							if (j != player.xPos && i != player.yPos && teleported == false) {
								player.xPos = j;
								player.yPos = i;
								teleported = true;
							}
							teleporterSFX.play();
							break;
						default:
							break;
					}
				}
			}
			teleported = false;
		}
		else {
			collision = collisionCheck(player.xPos, player.yPos+1);
			if (collision){
				collision = false;
			}
			else{
				player.yPos ++;
				pickUp();
				enemyMove = true;
				if (curSpikeImg == spikeUpImage){
					if (curRoom.layout[player.yPos][player.xPos] == 3){
						playerHurt();
					}
				};
			}
		}
	}
	if (leftPressed && curRoom.layout[player.yPos][player.xPos-1] !=0)
	{
		if(curRoom.layout[player.yPos][player.xPos-1] == 14){
			curRoom = rooms[curRoom.mapY][curRoom.mapX-1];
			player.xPos = 23;
			player.yPos = 12;
		}
		
		else if(curRoom.layout[player.yPos][player.xPos-1] == 24&&player.hasKey == true){
			clearDungeon();
			floor++;
			curRoom = rooms[2][2];
			DungeonGeneration();
			console.log("generate new floor");
		}
			else if (curRoom.layout[player.yPos][player.xPos-1] == 2){
				console.log("walk in hole");
			var rotate = setInterval(playerRotate,16);
		}//copy this for all directions below fall into hole anim
		
		else if (curRoom.layout[player.yPos][player.xPos-1] == 4) {
			for (var i = 0; i < 25; i++) {
				for (var j = 0; j < 25; j++) {
					switch (curRoom.layout[i][j]) {
						case 4:
							if (j != player.xPos && i != player.yPos && teleported == false) {
								player.xPos = j;
								player.yPos = i;
								teleported = true;
							}
							teleporterSFX.play();
							break;
						default:
							break;
					}
				}
			}
			teleported = false;
		}
		else {
			collision = collisionCheck(player.xPos-1, player.yPos);
			if (collision){
				collision = false;
			}
			else{
				player.xPos --;
				pickUp();
				enemyMove = true;
				if (curSpikeImg == spikeUpImage){
					if (curRoom.layout[player.yPos][player.xPos] == 3){
						playerHurt();
					}
				};
			}
		}
	}
	if (rightPressed && curRoom.layout[player.yPos][player.xPos+1] !=0)
		{
		if(curRoom.layout[player.yPos][player.xPos+1] == 12){
			
			if (isTutorial == true && curRoom.mapX == 4)
			{
				isTutorial = false;
				uiLayerCtx.clearRect(0,0,750,750);
				start.style.visibility = "visible";
				stage.style.visibility = "hidden";
				clearDungeon();
				DungeonGeneration();
				clearInterval(tutorialLoop);
				curRoom = rooms[3][2];
				
			}
			curRoom = rooms[curRoom.mapY][curRoom.mapX+1];
			player.xPos = 1;
			player.yPos = 12;
		}
		
		else if(curRoom.layout[player.yPos][player.xPos+1] == 22&&player.hasKey == true){
			clearDungeon();
			floor++;
			curRoom = rooms[2][2];
			DungeonGeneration();
			console.log("generate new floor");
		}
		else if (curRoom.layout[player.yPos][player.xPos+1] == 2){
			console.log("walk in hole");
			var rotate = setInterval(playerRotate,16);
		}//copy this for all directions below fall into hole anim
		
		else if (curRoom.layout[player.yPos][player.xPos+1] == 4) {
			for (var i = 0; i < 25; i++) {
				for (var j = 0; j < 25; j++) {
					switch (curRoom.layout[i][j]) {
						case 4:
							if (j != player.xPos && i != player.yPos && teleported == false) {
								player.xPos = j;
								player.yPos = i;
								teleported = true;
							}
							teleporterSFX.play();
							break;
						default:
							break;
					}
				}
			}
			teleported = false;
		}
		else {
			collision = collisionCheck(player.xPos+1, player.yPos);
			if (collision){
				collision = false;
			}
			else{
				player.xPos++;
				pickUp();
				enemyMove = true;
				if (curSpikeImg == spikeUpImage){
					if (curRoom.layout[player.yPos][player.xPos] == 3){
						playerHurt();
					}
				};
			}
		}
	}
	//Response to Movement
	if (enemyMove) {
		for (var i = 0; i < curRoom.enemies.length; i++) {
			curRoom.enemies[i].moveEnemy();
		}
		enemyMove = false;
	}
}

//Collision Detection
function collisionCheck(xLoc, yLoc){
	var col = false;
	for (var i = 0; i < curRoom.enemies.length; i++) {
		if (curRoom.enemies[i].x == xLoc && curRoom.enemies[i].y == yLoc){
			col = true;
		}
	};
	return col;
}

//Attack
function attack(){
	if (spacePressed){
		player.animTime = 10;
		swordSFX.play();
		switch(player.direction){
			case "up":
				for (var i = 0; i < curRoom.enemies.length; i++) {
					if (curRoom.enemies[i].x == player.xPos && curRoom.enemies[i].y == player.yPos-1){
						curRoom.enemies[i].health --;
						if (curRoom.enemies[i].health == 0){
							enemyDeathSFX.play();
							if (curRoom.enemies[i].hasKey){
								curRoom.items.pus(new item(keyImage,curRoom.enemies[i].x,curRoom.enemies[i].y));
							}
							else 
							{
							itemDrop(curRoom.enemies[i].x,curRoom.enemies[i].y);
							}
							curRoom.enemies.splice(i,1);
						}
					}
				};
				break;
			case "down":
				for (var i = 0; i < curRoom.enemies.length; i++) {
					if (curRoom.enemies[i].x == player.xPos && curRoom.enemies[i].y == player.yPos+1){
						curRoom.enemies[i].health --;
						if (curRoom.enemies[i].health == 0){
							enemyDeathSFX.play();
							if (curRoom.enemies[i].hasKey){
								curRoom.items.pus(new item(keyImage,curRoom.enemies[i].x,curRoom.enemies[i].y));
							}
							else 
							{
							itemDrop(curRoom.enemies[i].x,curRoom.enemies[i].y);
							}
							curRoom.enemies.splice(i,1);
						}
					}
				};
				break;
			case "left":
				for (var i = 0; i < curRoom.enemies.length; i++) {
					if (curRoom.enemies[i].x == player.xPos-1 && curRoom.enemies[i].y == player.yPos){
						curRoom.enemies[i].health --;
						if (curRoom.enemies[i].health == 0){
							enemyDeathSFX.play();
							if (curRoom.enemies[i].hasKey){
								curRoom.items.pus(new item(keyImage,curRoom.enemies[i].x,curRoom.enemies[i].y));
							}
							else 
							{
							itemDrop(curRoom.enemies[i].x,curRoom.enemies[i].y);
							}
							curRoom.enemies.splice(i,1);
						}
					}
				};
				break;
			case "right":
				for (var i = 0; i < curRoom.enemies.length; i++) {
					if (curRoom.enemies[i].x == player.xPos+1 && curRoom.enemies[i].y == player.yPos){
						curRoom.enemies[i].health --;
						if (curRoom.enemies[i].health == 0){
							enemyDeathSFX.play();
							if (curRoom.enemies[i].hasKey){
								curRoom.items.pus(new item(keyImage,curRoom.enemies[i].x,curRoom.enemies[i].y));
							}
							else 
							{
							itemDrop(curRoom.enemies[i].x,curRoom.enemies[i].y);
							}
							curRoom.enemies.splice(i,1);
						}
					}
				};
				break;
		}
		enemyMove = true;
	}
}

//Draw Floor
function drawFloors()
{
	for (var i=0;i<25;i++) {
		for (var j=0;j<25;j++) {
			switch(curRoom.layout[i][j]){
				case 0:
					floorLayerCtx.drawImage(wallImage,j*tileX,i*tileY);
					break;
				case 1:
					floorLayerCtx.drawImage(floorImage,j*tileX,i*tileY);
					break;
				case 2:
					floorLayerCtx.drawImage(holeImage,j*tileX,i*tileY);
					break;
				case 3:
					floorLayerCtx.drawImage(curSpikeImg,j*tileX,i*tileY);
					break;
				case 4:
					floorLayerCtx.drawImage(teleportImage,j*tileX,i*tileY);
					break;
				case 6:
					floorLayerCtx.drawImage(wallImage,j*tileX,i*tileY);
					//realTimeLayerCtx.drawImage(fireSpinImage,j*tileX,(i-3)*tileY);
					break;
				case 11:
					floorLayerCtx.drawImage(doorNorthImage,j*tileX,i*tileY);
					break;
				case 12:
					floorLayerCtx.drawImage(doorEastImage,j*tileX,i*tileY);
					break;
				case 13:
					floorLayerCtx.drawImage(doorSouthImage,j*tileX,i*tileY);
					break;
				case 14:
					floorLayerCtx.drawImage(doorWestImage,j*tileX,i*tileY);
					break;
				case 21:
					floorLayerCtx.drawImage(doorLockNorthImage,j*tileX,i*tileY);
					break;
				case 22:
					floorLayerCtx.drawImage(doorLockEastImage,j*tileX,i*tileY);
					break;
				case 23:
					floorLayerCtx.drawImage(doorLockSouthImage,j*tileX,i*tileY);
					break;
				case 24:
					floorLayerCtx.drawImage(doorLockWestImage,j*tileX,i*tileY);
					break;
			}
		}
	}
}

//UI Functions (Traps included in UI functions)
/*function tick(){
	if (seconds > 0){
		seconds --;
	}
	else if (seconds == 0 && minutes != 0){
		minutes --;
		seconds = 59;
	}
	else if (minutes == 0 && seconds == 0){
		timeout = true;
	}
}*/

//Game Loop
function update(){
	//Attack Animation
	if (player.animTime > 0){
		player.animTime --;
	}
	//Hurt Animation
	if (player.ouchTime > 0){
		player.ouchTime --;
	}
	else {
		switch (player.direction) {
			case "up":
				player.img = playerUpImage;
				break;
			case "down":
				player.img = playerDownImage;
				break;
			case "left":
				player.img = playerLeftImage;
				break;
			case "right":
				player.img = playerRightImage;
				break;
		}
	}
	/*if(isTutorial == false)
	{
		if (countTick == 63){
			tick();
			countTick = 0;
		}
		else{
			countTick ++;
		}
	}*/
	
	
	spikeUpdate();
	fireballUpdate();
	fireUpdate();
	render();
}
var degree = 0;
//Trap Functions
function fireUpdate(){
	/*realTimeLayerCtx.clearRect(0,0,750,750);
	drawRotated(fireSpinImage, realTimeLayerCtx);
	if(degree <360)
		degree++;
	else
		degree = 0;*/
}

var degree = 0;
function playerRotate()
{
	drawRotated(playerOuchImage, playerLayerCtx);
	if(degree <360)
		degree+=10;
	else
		degree = 0;
}

function drawRotated(image, context) {//realTimeLayerCtx.drawImage(fireSpinImage,j*tileX,(i-3)*tileY);
	
	context.save();
	context.translate(tileX, tileY);
	context.rotate(degree*Math.PI / 180);
	context.drawImage(image, -image.width/2, -image.height/2);
	context.restore();
}
		


function fireballUpdate(){
	if (fireballMoveTime > 0){
		fireballMoveTime --;
	}
	else if (fireballMoveTime == 0){
		for (var i = 0; i < curRoom.fireballs.length; i++){
			curRoom.fireballs[i].moveFireball();
		}
		fireballMoveTime = 15;
	}
}

function spikeUpdate(){
	if (spikeShift > 0){
		spikeShift --;
	}
	else if (spikeShift == 0){
		if (curSpikeImg == spikeUpImage){
			curSpikeImg = spikeDownImage;
		}
		else if (curSpikeImg == spikeDownImage){
			curSpikeImg = spikeUpImage;
		}
		spikeShift = 70;
		if (curSpikeImg == spikeUpImage){
			if (curRoom.layout[player.yPos][player.xPos] == 3){
				playerHurt();
			}
		};
	}
}

//Render
function render(){
	floorLayerCtx.clearRect(0,0,750,750);
	playerLayerCtx.clearRect(0,0,750,750);
	uiLayerCtx.clearRect(0,0,750,750);
	drawFloors();
	if(isTutorial==true)
	{
		
		if (curRoom.mapX == 2)
		{
			uiLayerCtx.fillText("Move using the Arrow Keys", 100, 625);
			console.log("write text");
		}
		else if (curRoom.mapX == 3)
		{
			uiLayerCtx.fillText("See How Enemies Move When You Do", 100, 625);
			console.log("Enemy room check");
		}
		else if (curRoom.mapX == 4)
		{
			uiLayerCtx.fillText("Ohh No they escaped.", 220, 625);
			uiLayerCtx.fillText("Use Space bar to swing your Sword.", 100, 655);
		}
	}
	if (player.health > 0){ //&& timeout === false){
		for (var i = 0; i < player.health; i++){
			playerLayerCtx.drawImage(heartImage,720-(i*tileX),0);
		}
		playerLayerCtx.drawImage(player.img,player.xPos*tileX,player.yPos*tileY);
		if (player.animTime > 0){
			switch (player.direction){
				case "up":
					playerLayerCtx.drawImage(player.sword,player.xPos*tileX,(player.yPos-1)*tileY);
					break;
				case "down":
					playerLayerCtx.drawImage(player.sword,player.xPos*tileX,(player.yPos+1)*tileY);
					break;
				case "left":
					playerLayerCtx.drawImage(player.sword,(player.xPos-1)*tileX,player.yPos*tileY);
					break;
				case "right":
					playerLayerCtx.drawImage(player.sword,(player.xPos+1)*tileX,player.yPos*tileY);
					break;
			}
		}
		for (var i = 0; i < curRoom.items.length; i++){
			playerLayerCtx.drawImage(curRoom.items[i].img, curRoom.items[i].xPos*tileX, curRoom.items[i].yPos*tileY);
		}
		for (var i = 0; i < curRoom.fireballs.length; i++){
			playerLayerCtx.drawImage(curRoom.fireballs[i].img, curRoom.fireballs[i].x*tileX, curRoom.fireballs[i].y*tileY);
		}
		
		for (var i = 0; i < curRoom.enemies.length; i++){
			playerLayerCtx.drawImage(curRoom.enemies[i].img,curRoom.enemies[i].x*tileX,curRoom.enemies[i].y*tileY);
		}
		
		if (player.hasKey)
		{
			playerLayerCtx.drawImage(keyImage,720,720);
		}
		uiLayerCtx.fillText("Floor "+floor, 0, 744);
		/*if (seconds < 10){
			uiLayerCtx.fillText(minutes+":0"+seconds, 0, 24);
		}
		else{
			uiLayerCtx.fillText(minutes+":"+seconds, 0, 24);
		}*/
	}
	else{
		stage.style.visibility = "hidden";
		end.style.visibility = "visible";
		endScreenCtx.font = "50px Courier New";
		endScreenCtx.fillStyle = "darkgoldenrod";
		endScreenCtx.textAlign = "center";
		endScreenCtx.fillText("GAME OVER", endScreen.width/2, 300);
		endScreenCtx.font = "25px Courier New";
		endScreenCtx.fillText("You reached floor "+floor, endScreen.width/2, 500);
		clearInterval(gameLoop);
		clearInterval(timer);
	}
}
