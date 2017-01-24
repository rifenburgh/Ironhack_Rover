var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      if (rover.position[0] > 10) {
        rover.position[0] = 0
      } else if (rover.position[0] < 0) {
        rover.position[0] = 10
      } else {
        break;
      }
    case 'E':
      rover.position[1]++
      if (rover.position[1] > 10) {
        rover.position[1] = 0
      } else if (rover.position[1] < 0) {
        rover.position[1] = 10
      } else {
        break;
      }
    case 'S':
      rover.position[0]--
        if (rover.position[0] > 10) {
          rover.position[0] = 0
        } else if (rover.position[0] < 0) {
          rover.position[0] = 10
        } else {
          break;
        }
    case 'W':
      rover.position[1]--
      if (rover.position[1] > 10) {
        rover.position[1] = 0
      } else if (rover.position[1] < 0) {
        rover.position[1] = 10
      } else {
        break;
      }
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  console.log(rover.direction);
//  document.getElementByClassName("loc").innerHTML = (rover.position[0] + ", " + rover.position[1]);
//  document.g("loc").innerHTML = "Hello World";

}

  function goBack(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[0]--
        if (rover.position[0] > 10) {
          rover.position[0] = 0
        } else if (rover.position[0] < 0) {
          rover.position[0] = 10
        } else {
          break;
        }
      case 'E':
        rover.position[1]--
        if (rover.position[1] > 10) {
          rover.position[1] = 0
        } else if (rover.position[1] < 0) {
          rover.position[1] = 10
        } else {
          break;
        }
      case 'S':
        rover.position[0]++
        if (rover.position[0] > 10) {
          rover.position[0] = 0
        } else if (rover.position[0] < 0) {
          rover.position[0] = 10
        } else {
          break;
        }
      case 'W':
        rover.position[1]++
        if (rover.position[1] > 10) {
          rover.position[1] = 0
        } else if (rover.position[1] < 0) {
          rover.position[1] = 10
        } else {
          break;
        }
    };
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    console.log(rover.direction);
}

    function goRight(rover) {
      switch(rover.direction) {
        case 'N':
          rover.direction = 'E'
          break;
        case 'E':
          rover.direction = 'S'
          break;
        case 'S':
          rover.direction = 'W'
          break;
        case 'W':
          rover.direction = 'N'
          break;
      };
      console.log(rover.direction);
}

      function goLeft(rover) {
        switch(rover.direction) {
          case 'N':
            rover.direction = 'W'
            break;
          case 'E':
            rover.direction = 'N'
            break;
          case 'S':
            rover.direction = 'E'
            break;
          case 'W':
            rover.direction = 'S'
            break;
        };
        console.log(rover.direction);
      }


function instructions() {
  var instruct = prompt("Command (f, b, l, r)?")
  switch(instruct){
    case 'f':
      goForward(myRover);
      instructions();
    case 'b':
      goBack(myRover);
      instructions();
    case 'r':
      goRight(myRover);
      instructions();
    case 'l':
      goLeft(myRover);
      instructions();
      case 'w':
        goForward(myRover);
        instructions();
      case 's':
        goBack(myRover);
        instructions();
      case 'd':
        goRight(myRover);
        instructions();
      case 'a':
        goLeft(myRover);
        instructions();
    case 'q':

      break;
  };
}



instructions();
