// date.js
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
    return formattedTime;
}
