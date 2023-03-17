const givenName = prompt("İsim giriniz: ");

let nameField = document.querySelector("#myName");



setInterval(() => {
    let date = new Date();
    let tarihField = document.querySelector("#myClock")
    let dayName;
    switch(date.getDay()) {
        case 1:
            dayName = "Pazartesi";
            break;
        case 2:
            dayName = "Salı";
            break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
    }
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let amPm = h >= 12 ? "pm" : "am";
    tarihField.innerHTML = `${h}:${m}:${s}${amPm} ${dayName}`
    nameField.innerHTML = givenName.toUpperCase();
})
// tarihField.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${dayName}`
