
// const soundx = document.getElementById("soundwav");
//     soundx.play();

setInterval(f2, 1000);
function f2(){
    const i=0;
    const livetime= new Date();
    const liveSec=livetime.getSeconds();
    const liveMin=livetime.getMinutes();
    const liveHr=livetime.getHours();

    const Secpos=liveSec*6;
    const Minpos=liveMin*6;
    const Hrpos=liveHr*30+(30/60)*liveMin;    
    document.getElementById("secstick").style.transform = "rotate("+Secpos+"deg)";
    document.getElementById("minstick").style.transform = "rotate("+Minpos+"deg)";
    document.getElementById("hrstick").style.transform = "rotate("+Hrpos+"deg)";
    document.getElementById("dot1").style.transform = "rotate("+Secpos+"deg)";
    
    const audio = new Audio("watch.wav");
    audio.play();


    console.log(liveHr+":"+liveMin+":"+liveSec);
    console.log(Secpos);
}