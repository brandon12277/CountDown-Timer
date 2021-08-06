var seconds=0,hours=0,minutes=0,days=0;
intialcondition=()=>{
    $(".days_tens").html("0");
    $(".days_units").html("0");
    $(".hours_tens").html("0");
    $(".hours_units").html("0");
    $(".minutes_tens").html("0");
    $(".minutes_units").html("0");
    $(".seconds_tens").html("0");
    $(".seconds_units").html("0");
};
$(document).ready(intialcondition);
var start=false;changesecond=true;changeminutes=true;changehours=true;changedays=true;
window.addEventListener("keyup",function(keypress){
    if(keypress.key=="Enter"){
        start=true;
        if(checktimer()==true){
            starttimer();
           
        }
        
      }
    if(keypress.key=="s" && changesecond==true){
        changedays==true;
        changesecond=false;
        changeminutes=true;
        changehours=true;
        window.addEventListener("mousewheel",function(event){
            if(start!=true && changeminutes==true && changehours==true && changedays==true){
                if(event.wheelDelta>0){
                    if(seconds!=59)seconds++;
                 }
                 else{
                    if(seconds!=0)seconds--;
                 }
                 setdivs(seconds,minutes,hours,days);
            }
           
       });
    }
    if(keypress.key=="m"  && changeminutes==true){
        changeminutes=false;
        changedays=true;
        changesecond=true;
        changehours=true;
        window.addEventListener("mousewheel",function(event){
            if(start!=true && changesecond==true && changehours==true  && changedays==true){
            if(event.wheelDelta>0){
               if(minutes!=59)minutes++;
            }
            else{
               if(minutes!=0)minutes--;
            }
            setdivs(seconds,minutes,hours,days);
        }
       });
    }
    if(keypress.key=="h"  && changehours==true){
        changedays=true;
        changesecond=true;
        changeminutes=true;
        changehours=false;
        window.addEventListener("mousewheel",function(event){
            if(start!=true && changesecond==true && changeminutes==true && changedays==true){
            if(event.wheelDelta>0){
               if(hours!=24)hours++;
            }
            else{
               if(hours!=0)hours--;
            }
            setdivs(seconds,minutes,hours,days);
        }
       });
    }
       if(keypress.key=="d"  && changedays==true){
        changesecond=true;
        changeminutes=true;
        changedays=false;
        changehours=true;
        window.addEventListener("mousewheel",function(event){
            if(start!=true && changesecond==true && changeminutes==true && changehours==true){
            if(event.wheelDelta>0){
               if(days!=99)days++;
            }
            else{
               if(days!=0)days--;
            }
            setdivs(seconds,minutes,hours,days);
        
        }
    });
    
}
});


function checktimer(){
    seconds=$(".seconds").children().text();
    minutes=$(".minutes").children().text();
    hours=$(".hours").children().text();
    days=$(".days").children().text();
    if(seconds>59){
       alert("ERROR");
        return false;
    }
    if((minutes==60 && seconds>0)){
        alert("ERROR");
         return false;
     }
     else if(minutes>60){
        alert("ERROR");
        return false;
     }
     if((hours==24 && seconds>0) || (hours==24 && minutes>0)){
        alert("ERROR");
         return false;
     }
     else if(hours>24){
        alert("ERROR");
        return false;
     }
     if((days==99 && seconds>0) || (days==99 && minutes>0)||(days==99 && hours>0)){
        alert("ERROR");
         return false;
     }
     else if(days>99){
        alert("ERROR");
        return false;
     }
        return true;
}

function starttimer(){
   var id=setInterval(frame,1000);
  function frame(){
    if(seconds!=0)seconds--;
        else if(minutes!=0){
            minutes--;
            seconds=59;}
        else if(hours!=0){
            hours--;
            minutes=59;
            seconds=59;
        }
        else if(days!=0){
            days--;
            hours=23;
            minutes=59;
            seconds=59;}
        if(seconds==0 && minutes==0  && days==0 && hours==0){clearInterval(id); start=false;}
       setdivs(seconds,minutes,hours,days);
  }
}


function isnotdigit(evt){
   var ch=String.fromCharCode(evt.which);
   if(!/[0-9]/.test(ch))
     evt.preventDefault();
}
function setdivs(seconds,minutes,hours,days){
    $(".seconds_tens").text(parseInt(seconds/10));
    $(".seconds_units").text(parseInt(seconds%10));
    $(".days_tens").html(parseInt(days/10));
    $(".days_units").html(parseInt(days%10));
    $(".hours_tens").html(parseInt(hours/10));
    $(".hours_units").html(parseInt(hours%10));
    $(".minutes_tens").html(parseInt(minutes/10));
    $(".minutes_units").html(parseInt(minutes%10));
}
