function test(){
  let color;
  color = elem.style.backgroundColor;
  
  if (color == "red") {
    color = "blue";
    alert(color);
  }
  
  if (color == "blue") {
    color = "red";
  }
}

