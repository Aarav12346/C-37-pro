var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  console.log(database);
  quiz = new Quiz();
//call the start() method inside the quiz class
//quiz.getState();
quiz.start();
}


function draw(){
  background("pink");

}
