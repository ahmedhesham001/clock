let hrs = document.getElementById("hours"),
    mins = document.getElementById("min"),
    secs = document.getElementById("sec");
    setInterval(() => {
        let currDate =new Date();
        hrs.innerHTML = currDate.getHours();
        mins.innerHTML = currDate.getMinutes();
        secs.innerHTML = currDate.getSeconds();},1000);