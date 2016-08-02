var Start = "Start";
var Title = "Title";
var Menu = "Menu";
var Play ="Play";
var GameOver = "GameOver";
 

var GameState = Start;


function SwitchState()
{
    switch(GameState)
        {
            case Start:
                walk.visible = false;
                //GameState = Title;
                break;
            case Title:               
                titleScreen.addEventListener("click", function(event) {
                    levelFrame.visible = true;
                    backgroundScreen.visible = true;
                    walk.visible = true;
                    titleScreen.visble = false;
                    GameState = Menu; 
                });
                break;
                
            case Menu:
                levelFrame.addEventListener("click", function(event) {
                    levelFrame.visble = false;
                    GameState = Play; 
                });            
                break;
                
            case Play:

//                if (gameTimer > 20)
//                {
//                    backgroundScreen.visible = false;
//                    GameState = GameOver; 
//                }
                break;
            
            case GameOver:
                
                break;
        }
}

