const marksEnglish =parseInt(prompt('Enter marks of English '));
const marksHindi =parseInt(prompt('Enter marks of Hindi '));;
const marksMaths =parseInt(prompt('Enter marks of Maths '));;
const marksScience =parseInt(prompt('Enter marks of Science '));;
const marksSst=parseInt(prompt('Enter marks of Sst '));;
var sumOfSubjects = 0;
var averageMarks =0;
var percentage =0;
var grade;

var gradeImg, ABImg, CDImg, EFImg;

function setup() {
  createCanvas(800,400);

ABImg = loadImage("gradeAB.webp")
CDImg = loadImage("gradeCD.webp")
EFImg = loadImage("gradeEF.webp")

}

function draw() {
  background(193,204,137);  

  text("x:"+mouseX+" y:"+mouseY, mouseX, mouseY);
 
 sumOfSubjects = (marksEnglish + marksHindi + marksMaths + marksScience + marksSst);
 averageMarks = ((sumOfSubjects)/5);
 percentage = ((sumOfSubjects/500)*100);

 textSize(26);
 text("Total marks scored="+ sumOfSubjects, 255,70);

 textSize(26);
 text("Average marks="+ averageMarks, 265,110);

 textSize(26);
 text("Your percentage="+ percentage, 265,150);


if(percentage>90){

text("grade is A", 325, 190);
gradeImg = createSprite(380,300)
gradeImg.addImage(ABImg)
gradeImg.scale = 0.3;



}
else if(percentage>80 && percentage<90){

  text("grade is B", 325, 190);
  gradeImg = createSprite(380,300)
  gradeImg.addImage(ABImg)
  gradeImg.scale = 0.3;



}
else if(percentage>70 && percentage<80){

  text("grade is C", 325, 190);
  gradeImg = createSprite(380,280)
  gradeImg.addImage(CDImg)
  gradeImg.scale = 0.3;

  

}
else if(percentage>60 && percentage<70){

  text("grade is D", 325, 190);
  gradeImg = createSprite(380,280)
  gradeImg.addImage(CDImg)
  gradeImg.scale = 0.3;

  

}
else if(percentage>50 && percentage<60){

  text("grade is E", 325, 190)
  gradeImg = createSprite(380,280)
  gradeImg.addImage(EFImg)
  gradeImg.scale = 0.3;

  
}
else{

  text("grade is F", 325, 190);
  gradeImg = createSprite(380,280)
  gradeImg.addImage(EFImg)
  gradeImg.scale = 0.3;
}

  drawSprites();
}