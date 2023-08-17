var noOfDrums=document.querySelectorAll(".drum").length;
for( var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var selectedButton=this.innerHTML;
        switch(selectedButton){
            case "w":
                this.style.color="white";
                audio1=new Audio("sounds/crack.mp3");
                audio1.play();
                break;
            case "a":
                this.style.color="white";
                audio2=new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
            case "s":
                this.style.color="white";
                audio3=new Audio("sounds/snare.mp3");
                audio3.play();
                break;
            case "d":
                this.style.color="white";
                audio4=new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
            case "j":
                this.style.color="white";
                audio5=new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
            case "k":
                this.style.color="white";
                audio6=new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;

            case "l":
                this.style.color="white";
                audio7=new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
            default:
                console.log("no such button exists");
                       }
                    });


    }