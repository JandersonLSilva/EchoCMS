function getDateActual(){
    const date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear());

    let today = `${day}/${month}/${year}`
    return today;
}
module.exports = getDateActual;