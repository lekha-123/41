class Game {
    constructor() {}
    getstate() {
        var statedata = database.ref("gameState");
        statedata.on("value", function (data) {
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playercountdata = await database.ref("playerCount").once("value");
            if (playercountdata.exists()) {
                playerCount = playercountdata.val();
                player.getplayercount()


            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage("car1", car1img)
        car2 = createSprite(300, 200);
        car2.addImage("car2", car2img)
        car3 = createSprite(500, 200);
        car3.addImage("car3", car3img)
        car4 = createSprite(700, 200);
        car4.addImage("car4", car4img)
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        textSize(40);
        text("distance:" + player.distance, 10, 10)
        Player.getplayerdetails();

        if (allplayers !== undefined) {
            background(rgb(198, 135, 103));
            image(trackimg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            var x = 175;
            var y;
            var index = 0;
            // var display_position=130;
            for (var plr in allplayers) {
                index = index + 1;
                x = 200 + (index * 200) + allplayers[plr].xPos
                y = displayHeight - allplayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                textAlign(CENTER);
                textSize(30);
                text(allplayers[plr].name, cars[index - 1].x, cars[index - 1].y + 75)
                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y

                }

            }

        }

        if (player.distance < 2150) {
            if (keyIsDown(38) && player.index !== null) {
                yval += 0.9
                if (keyIsDown(37)) {
                    xval -= 0.2;
                }
                if (keyIsDown(39)) {
                    xval += 0.2;
                }
            } else if (keyIsDown(38) && yval > 0 && player.index !== null) {
                yval -= 0.1;
                xval *= 0.9
            } else {
                yval *= 0.985;
                xval *= 0.985;
            }
        }
      
        if (player.distance > 3860) {
            gamestate = 2;
        }

        player.distance += yval;
        yval *= 0.98;
        player.xPos += xval;
        xval *= 0.985;
        player.updatend();
        drawSprites();
    }



    end() {
        console.log("game ended ");
    }


}