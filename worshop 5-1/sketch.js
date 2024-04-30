let table;
let pizza, noodles, nuggets, applejuice;

function preload(){
  table = loadTable('foods.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  

}

function weekLables(){
  for (x = 0; x < table. getRowCount(); x++) {
    let row = table. getRow(x);
    let day = row.get("Day");
    fill(0);
    text(day, 30 + x * 60, 350);
  }
}

function showPizza(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countPizza = row.get("Pizza");
    for (y = 0; y < countPizza; y++){
      
    fill(255, 100, 30);
    rect(30 + x * 60, 320, 30 , -countPizza * 40);

  }
  }
}

function draw() {
  background(220);
  weekLables();
  showPizza();
  text('Day', 250, 374);

  
}
