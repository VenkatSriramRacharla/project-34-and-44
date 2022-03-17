function setup(){
  createCanvas(1250,550)

  login = createInput("").attribute("placeholder", "Enter your name");
  login.style('color', 'black')
  login.position(615, 282, 20, 20)

  button = createButton("SUBMIT")
  button.style('background-color', 'orange')
  button.style('font-size', '26px')
  button.style('color', 'white')
  button.position(550, 350, 40, 40)

}

function draw () {
  background("cyan")
  
  push()
  textSize(115)
  fill("black")
  textStyle(BOLD)
  text("Test Your Knowledge", 50, 175)
  pop()
  
  fill("black")
  textSize(25)
  text("Enter Your Name: ", 400, 300)

  button.mousePressed(()=>{
    name1 = login.value()
    if(name1 === ""){
      text("TYPE YOUR NAME!", 800,400)
      return false
    }

    else{
      login.mouseClicked(logic)
    }
  })
  
}

function logic(){
  background("cyan")
  login.hide()
  button.hide()
  user = login.value()
  greeting = createElement("h1")
  greeting.html("Hello " + user + "!")
  greeting.position(625, 275)
}