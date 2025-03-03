function getTextValueById(id){
    const element = document.getElementById(id).innerText;
    const elementConvert = parseInt(element);
    return elementConvert;
    
}


function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
    return formattedTime;
}


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


