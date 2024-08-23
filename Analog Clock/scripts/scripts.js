let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;   // 360 degrees / 12 hours = 30 degrees per hour
    let mm = day.getMinutes() * 6;  // 360 degrees / 60 minutes = 6 degrees per minute
    let ss = day.getSeconds() * 6;  // 360 degrees / 60 seconds = 6 degrees per second

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Add mm/12 to move the hour hand gradually
    mn.style.transform = `rotateZ(${mm}deg)`; // Rotate the minute hand
    sc.style.transform = `rotateZ(${ss}deg)`; // Rotate the second hand

            //digital clock
        let hours=document.getElementById('hour');
        let minutes=document.getElementById('minutes');
        let seconds=document.getElementById('seconds');
        let ampm=document.getElementById('ampm');

        let h=new Date().getHours();
        let m=new Date().getMinutes();
        let s=new Date().getSeconds();

        let am =h>=12?"PM":"AM";
        //convert 24hr clock to 12hr clock
        if(h>12){
            h=h-12;
        }

        // add zero before single digit numbers
        h=(h<10) ?"0"+h:h
        m=(m<10) ?"0"+m:m
        s=(s<10) ?"0"+s:s

        hours.innerHTML=h;
        minutes.innerHTML=m;
        seconds.innerHTML=s;
        ampm.innerHTML=am;


}, 1000); // Update the clock every 1 second (1000 ms)





