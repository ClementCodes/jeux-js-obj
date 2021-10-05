

class MusicPlayer
{

    constructor(format)
    {
        this.format = format;
     
    }

    play()
    {
        console.log("lecture en cours ");
    }
    getFormat()
    {
        return this.format
    }

    setFormat(new_format)
    {
        this.format = new_format
    }
}

let player = new MusicPlayer("mp3");
console.log(player.getFormat());
player.setFormat("mp3")


player.setFormat("M4a")
console.log(player.getFormat());
