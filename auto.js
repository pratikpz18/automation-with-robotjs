var robot = require("robotjs");

console.log(robot.getMousePos())
robot.setMouseDelay(300);
setTimeout(FileExplorer,1800)
function FileExplorer(){
	robot.moveMouseSmooth(158,843);
	robot.mouseClick();
	robot.typeString("File Explorer");
	robot.keyTap("enter");
	setTimeout(search,2000)
}

function search(){
	setTimeout(()=>{
		robot.moveMouseSmooth(938,197);
		robot.mouseClick();
		robot.setMouseDelay(500);
		robot.typeString("pratik web");
		robot.keyTap("enter");
	},1000);
	setTimeout(openchrome,3000)
}

function openchrome(){
	setTimeout(()=>{
		robot.moveMouseSmooth(810,843);
		robot.mouseClick();
		robot.moveMouseSmooth(268,18);
		robot.mouseClick();
		robot.setMouseDelay(200);
		robot.typeString("web whatsapp");
		robot.keyTap("enter");
	},600)
	setTimeout(()=>{
		robot.moveMouseSmooth(226,375);
		robot.mouseClick();
		robot.moveMouseSmooth(506,18);
		robot.mouseClick();
		robot.typeString("youtube");
		robot.keyTap("enter");
	},600)
	setTimeout(()=>{
		robot.moveMouseSmooth(756,18);
		robot.mouseClick();
		robot.typeString("github");
		robot.keyTap("enter");
	},600)
	setTimeout(()=>{
		robot.moveMouseSmooth(986,18);
		robot.mouseClick();
		robot.moveMouseSmooth(777,530);
		robot.mouseClick();
		robot.setMouseDelay(1500);
		robot.moveMouseSmooth(685,423);
		robot.mouseClick();
	},600)
}
