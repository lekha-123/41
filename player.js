class Player {
    constructor() {
        this.index = null;
        this.xPos=0;
        this.distance = 0;
        this.name = null;
    }
    getplayercount() {
        var playercountdata = database.ref("/playerCount");
        playercountdata.on("value",(data)=> {
            playerCount = data.val();
        });
    }
    updatecount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    updatend()
    {
        var datand=("players/player")+this.index;
        database.ref(datand).set({
            name:this.name,
            distance:this.distance,
            xPos:this.xPos
        });
    }

    //static function called by class itself instead of objects 
    static getplayerdetails()
    {
        var allplayerinfo=database.ref("/players");
        allplayerinfo.on("value",(data)=>{
            allplayers=data.val();
        })
    }
}