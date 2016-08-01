var Title = "Title";
var Menu = "Menu";
var Play ="Play";
var GameOver = "GameOver";
 

var GameState = Title;


function SwitchState()
{
    switch(GameState)
        {
            case Title:
                walk.visible = false;
                titleScreen.addEventListener("click", function(event) {
                    //GameState = Play; 
                })
                };
                break;
                
            case Menu:

                break;
                
            case Play:
                walk.visible = true;
                titleScreen.visble = false;
                if (gameTimer > 20)
                {
                    GameState = GameOver; 
                }
                break;
            
            case GameOver:

                break;
        }
}

function()