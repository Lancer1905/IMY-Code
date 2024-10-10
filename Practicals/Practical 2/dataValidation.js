// Pieter Venter u23896257
const checkDate = (cDate) => {
    try {   
        const date = new Date(cDate);

        if (date.getMonth() == 7){//should be 9 mb
            if (date.getDate() > 9 && date.getDate() <= 21){
                return true;
            } else return false;
        } else return false;

    } catch {
        console.log("Data given is not a date");
    }
}

const checkName = (cName) => {
    if (cName.indexOf('!') > -1) return false;
    if (cName.indexOf('@') > -1) return false;
    if (cName.indexOf('#') > -1) return false;
    if (cName.indexOf('$') > -1) return false;
    if (cName.indexOf('%') > -1) return false;
    if (cName.indexOf('^') > -1) return false;
    if (cName.indexOf('&') > -1) return false;
    if (cName.indexOf('*') > -1) return false;

    return true;
}

exports.checkDate = checkDate;
exports.checkName = checkName;