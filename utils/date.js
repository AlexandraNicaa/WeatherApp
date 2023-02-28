function getDayOfTheWeek(utc){
    // pornind de la unix date, l-am inmultit cu 1000 pt a crea data
const date = new Date(utc * 1000);

date.getDay();
const day = date.getDay();

switch(day){
    case 0:
        return "Duminică";
    case 1: 
        return "Luni";
    case 2:
        return "Marti";
    case 3:
        return "Miercuri";
    case 4:
        return "Joi";
    case 5:
        return "Vineri";
    case 6:
        return "Sâmbată";
}
}

function getHour(utc) {
    const date = new Date(utc * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`
}