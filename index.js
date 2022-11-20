function shout(string) {
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(shout(string));
}
function logWhisper(string){
    console.log(whisper(string));
}
function sayHiToHeadphonedRoommate(string){
    switch(string){
        case "hello":
            return "I can't hear you!";
            case "HELLO":
                return "YES INDEED!";
                case "Let's have dinner together!":
                    return "I would love to!";
    }
}
