//Welcome! Feel free to remix and use the animation code in your project! No credits required! 
//(Credits are welcomed, though.)
//Presented by Tony T. aka MtnGck AppMaker

//UX 101 VER.1.1

//Global variables
//r,g,b: red, green, blue value of background.
//stateR, stateG, stateB: used in kolor() - basically whether to decrease or increase the color set.
//kj,kz,ks,kv,kc,kp,kd,kr,kk,ky: all the variable for timedLoops - named this way to prevent collision.
var r, g, b, stateR, stateG, stateB, revR, revG, revB, tmp, raydarPos;
var kj,kz,ks,kv,kc,kp,kd,kr,kk,ky;

var voice = ["Welcome to UX 101 - Here, I will guide you through what I learned about User Experience (UX) while programming using AppLab.\n\nClick 'View code' to check the animation code.","AppLab, by default, looks bad.\n\nThe less default it looks, the better.","Establish formalities - buttons that do the same thing should stay at the same place.","Avoid clutter. \n\nSensory overload is never desired.","Quite a lot can be achieved with the tools available, like this one!\n\nDoes it look cool?","Subtleties like Button vs. Image,\n jpg vs. png, \nand CSS setStyle() are really interesting!","TimedLoop can get laggy.\n\nBe considerate to the user. Don't stuck too much code into it.","According to the CIA, English is only spoken by ~5% of the world population.\n\nMaking an app accessable in language is important.","People hate autoplaying audios - It's unintended, annoying, and obnoxious.\n\nDon't do it.","Cloud record is not safe - People can hack it, steal it, and delete it.\n\nIt should not be used to store passwords.","All that animation need code.\n\nWhy not use GIF instead?","Applab (and Gamelab!) are accessable on mobile devices.\n\nThink about the potential - and how to make your app better for mobile users.","Loading asset takes time and bandwidth.\n\nBe sure to compress your images and sounds.","This is the end of UX 101.\nThank you for following me along.\n\nCheck out my other apps, or start over."];
r = 255,g = 200, b = 100;
stateR = stateG = stateB = tmp =kj=kz=ks=kv=kc=kp=kd=kr=kk=ky =raydarPos= 0;
kolor();
setText("text_area2", voice[0]);
//----------------------------------------


//This function sets a patterned random color to a back-element, and the reversed color to a front-element.
//to start, simply call kolor();
//to end, call stopTimedLoop(kj);
function kolor(){
if (kj == 0){
  kj = timedLoop(50, function(){
  if (r>0 && stateR == 0){
    r-=randomNumber(1,3);
  }else if (r < 256 && stateR == 1){
    r+=randomNumber(1,3);
  }else if(r <= 0){
    stateR = 1;
    r=1;
  } else if (r > 255){
    stateR = 0;
    r=255;
  }  if (g>0 && stateG == 0){
    g-=randomNumber(1,3);
  }else if (g < 256 && stateG == 1){
    g+=randomNumber(1,3);
  }else if(g <= 0){
    stateG = 1;
    g=1;
  } else if (g > 255){
    stateG = 0;
    g=255;
  }  if (b>0 && stateB == 0){
    b-=randomNumber(1,3);
  }else if (b < 256 && stateB == 1){
    b+=randomNumber(1,3);
  }else if(b <= 0){
    stateB = 1;
    b=1;
  } else if (b > 255){
    stateB = 0;
    b=255;
  }
  //back element
  setStyle("text_area1", "background: rgb("+r+","+g+","+b+")");
  revR = 255-r;
  revG = 255-g;
  revB = 255-b;
  //front element
  setStyle("text_area2", "color: rgb("+revR+","+revG+","+revB+")");
});
}
}
//----------------------------------------


//How the square-ish button worked:
//two buttons with slightly different color stacked upon each other, with a small height difference.
//Then just animates the thing.
//There are some program mechanic related codes here. You'll have to find and delete those in your own program. 
onEvent("start", "click", function( ) {
  if (kz == 0){
    playS("assets/start.mp3");
    tmp = 0;
    setTimeout(function(){fadeOutWithoutLimit("logo");},100);
    kz = timedLoop(50,function(){
	  if (tmp > 7){
	    fadeOut("start");
	    hideElement("button2");
	    setPosition("start", 110,370, 100,40);
	    goout("text_area2", true, voice[1]);
	    stopTimedLoop(kj);
	    stopTimedLoop(kz);
	   fadeInWithoutLimit("s1p1");
	   kz = 9;
	   setTimeout(function(){kz = 0},300);
setTimeout(function(){
      fadeInWithoutLimit("s1p2");
    }, 300);
    setTimeout(function(){
      fadeInWithoutLimit("s1p3");
    }, 600);
    setTimeout(function(){
      fadeInWithoutLimit("s1p4");
    }, 900);
	    transition("text_area1", 226, 236, 10, "text_area2");
	setTimeout(function(){
	  fadeIn("1to2");
	}, 1600);
	  }else{
	    tmp++;
	    if (tmp < 6){
	    setPosition("start", 110,370+tmp, 100,40);
	    }
	  }
	});
  }
});
//----------------------------------------


//How the text whoosh out:
// timedLoop, speed, after out of the screen, reset location from right end to left end, replace text.
// val is the element you want to woosh out. val2 is whether you want to immediately whoosh in after whoosh out
// val3 is the updated text string.
function goout(val, val2, val3){
  if (kp == 0){
  var speed = 1;
  var tmp = getXPosition(val);
  var y = getYPosition(val);
  kp = timedLoop(25, function(){
    if (tmp > 320){
      setPosition(val, -325, y, 320,170);
      if (val2){
        setText(val, val3);
        goin(val);
      }
      stopTimedLoop(kp);
      kp = 0;
    }else{
      tmp+=speed;
      speed++;
      setPosition(val, tmp, y, 320,170);
    }
  });
  }
}
//----------------------------------------


//How the text whoosh in:
//Reverse the above. Speed is now fast to slow.
//val is the element you want to whoosh in.
function goin(val){
  if (ks == 0){
  var speed = 25;
  var tmp = getXPosition(val);
  var y = getYPosition(val);
  ks = timedLoop(25, function(){
    if (tmp >=0){
      stopTimedLoop(ks);
      ks = 0;
    }else{
      tmp+=speed;
      speed--;
      setPosition(val, tmp, y, 320,170);
    }
  });
  }
}
//----------------------------------------


//change the opacity of an element in order to fade it out.
//val is the element name.
//Limit vs: noLimit:
//There can only be one instance of Limit running - perfect for transitioning usable buttons, to prevent bugs.
//However, it can get slow since every transition need ~0.25 second. By using NoLimit,
//unimportant Items can be transitioned faster. 
function fadeOut(val){
if (kv == 0){
    var tmp = 1.0;
  kv = timedLoop(25, function(){
    if (tmp < 0){
      hideElement(val);
      stopTimedLoop(kv);
      kv=0;
    }else{
      tmp-=0.1;
      setStyle(val, "opacity: "+tmp+";");
    }
  });
}
}
function fadeOutWithoutLimit(val){
    var tmp = 1.0;
  var kv = timedLoop(25, function(){
    if (tmp < 0){
      hideElement(val);
      stopTimedLoop(kv);
      kv=0;
    }else{
      tmp-=0.1;
      setStyle(val, "opacity: "+tmp+";");
    }
  });
}
//----------------------------------------


//change the opacity of an element in order to fade it in.
//val is the element name.
function fadeIn(val){
  if (kc ==0){
  var tmp = 0;
  kc = timedLoop(25, function(){
    if (tmp > 1){
      stopTimedLoop(kc);
      kc = 0;
    }else{
      showElement(val);
      tmp+=0.1;
      setStyle(val, "opacity: "+tmp+";");
    }
  });
  }
}
function fadeInWithoutLimit(val){
  var tmp = 0;
  var kc = timedLoop(25, function(){
    if (tmp > 1){
      stopTimedLoop(kc);
      kc = 0;
    }else{
      showElement(val);
      tmp+=0.1;
      setStyle(val, "opacity: "+tmp+";");
    }
  });
}
//----------------------------------------


//Smoothly transition target's color to te specified value.
//val is the element name, red, green, blue, pretty self-explanatory.
//back is the text area - it will be set to the reverse of the RGB above.
function transition(target,red,green,blue,back){
if (kd == 0){
    var difR = red-r;
  var difG = green-g;
  var difB = blue-b;
  var curR = r;
  var curG = g;
  var curB = b;
  kd = timedLoop(8, function(){
    if (curR!=red){
      if (difR > 0){
        curR++;
      }else{
        curR--;
      }
    }if (curG!=green){
      if (difG > 0){
        curG++;
      }else{
        curG--;
      }
    }if (curB!=blue){
      if (difB > 0){
        curB++;
      }else{
        curB--;
      }
    }
    var revR = 255-curR;
    var revG = 255-curG;
    var revB = 255-curB;
    setStyle(target, "background: rgb("+curR+","+curG+","+curB+")");
    setStyle(back, "color: rgb("+revR+","+revG+","+revB+")");
    if (curR == red && curG == green && curB == blue){
      r = curR;
      g = curG;
      b = curB;
      stopTimedLoop(kd);
      kd=0;
    }
  });
}
}
//----------------------------------------


//Documentation available in MtnGck Functions - https://studio.code.org/projects/applab/cmIE4-PfObBGcywyWD15bZF-Icnp2ZncGEAhnnyBUbU
function showE(value){
  for (var i = 0; i < value.length; i++){
    showElement(value[i]);
}}
function hideE(value){
  for (var i = 0; i < value.length; i++){
    hideElement(value[i]);
}}
var sound = true;
function playS(name){
  if (sound){
    playSound(name);
}}
//----------------------------------------


//Radar Animation. Basically rotating an image and trigger appear/disappear at certain angle.
function startRadar(){
      kr = timedLoop(20, function(){
      raydarPos += 1.0;
      //this is the degeee
      var rCap = raydarPos%360.0;
      setStyle("s4p2", "transform: rotate("+rCap+"deg);");
      //here are the specific angles
      switch(rCap){
        case 330:
        playS("assets/scan.mp3");
        showElement("s4p3");
        fadeOutSlow("s4p3");
        break;
        case 178:
        playS("assets/scan.mp3");
        showElement("s4p4");
        fadeOutSlow("s4p4");
        break;
        case 182:
        playS("assets/scan.mp3");
        showElement("s4p5");
        fadeOutSlow("s4p5");
        break;
        case 282:
        playS("assets/scan.mp3");
        showElement("s4p6");
        fadeOutSlow("s4p6");
        break;
      }
    });
}
//----------------------------------------


//Just a modified version of fadeOut which have slower animation.
function fadeOutSlow(val){
  var tmp = 1.0;
  var kv = timedLoop(90, function(){
    if (tmp < 0){
      hideElement(val);
      stopTimedLoop(kv);
      kv=0;
    }else{
      tmp-=0.05;
      setStyle(val, "opacity: "+tmp+";");
    }
  });
}
//----------------------------------------


//Just a version of goout & goin that are slower to loop - make it looks laggy.
function gooutLag(val, val2, val3){
  if (kp == 0){
  var speed = 1;
  var tmp = getXPosition(val);
  var y = getYPosition(val);
  kp = timedLoop(50, function(){
    if (tmp > 320){
      setPosition(val, -325, y, 320,170);
      if (val2){
        setText(val, val3);
        goinLag(val);
      }
      stopTimedLoop(kp);
      kp = 0;
    }else{
      tmp+=speed;
      speed++;
      setPosition(val, tmp, y, 320,170);
    }
  });
  }
}
function goinLag(val){
  if (ks == 0){
  var speed = 25;
  var tmp = getXPosition(val);
  var y = getYPosition(val);
  ks = timedLoop(75, function(){
    if (tmp >=0){
      stopTimedLoop(ks);
      ks = 0;
    }else{
      tmp+=speed;
      speed--;
      setPosition(val, tmp, y, 320,170);
    }
  });
  }
}
//----------------------------------------


//Text animation for hacking script
//Add a letter from text to textTemp every 150ms.
function textLoop(){
  var text = "Applab.storage...";
  var textTemp = "";
  var position = 0;
  var kh = timedLoop(150,function(){
    textTemp+=text[position];
    position++;
    setText("s8p1",textTemp);
    if (position > 16){
      stopTimedLoop(kh);
    }
  });
}
//----------------------------------------


//The first GIF comparison - switch image every 0.2s
var frame = 0;
function startAnimationOne(){
  if (kk == 0){
    kk = timedLoop(200, function(){
      setImageURL("s9p2", "assets/f"+frame+".jpg");
      frame++;
      if (frame == 4){
        frame = 0;
      }
    });
  }
}
//----------------------------------------


//Second animation - the chrome button. rotate, border radius, border width - we got it all.
var width = 1;
var radius = 1;
var rotation = 0;
function startAnimationTwo(){
  if (ky == 0){
    ky = timedLoop(25, function(){
      rotation++;
      var rCap = rotation%360.0;
      setStyle("s9p4", "transform: rotate("+rCap+"deg);");
      var rot = rCap%90;
      //This part could be better with a switch table - bah...
      if (rot > 88 || rot < 2){
        radius = 24;
        width = 22;
      }else if (rot > 86 || rot < 4){
        radius = 23;
        width = 21;
      }else if (rot > 84 || rot < 6){
        radius = 22;
        width = 20;
      }else if (rot > 82 || rot < 8){
        radius = 21;
        width = 19;
      }else if (rot > 80 || rot < 10){
        radius = 20;
        width = 18;
      }else if (rot > 78 || rot < 12){
        radius = 19;
        width = 17;
      }else if (rot > 76 || rot < 14){
        radius = 18;
        width = 16;
      }else if (rot > 74 || rot < 16){
        radius = 17;
        width = 15;
      }else if (rot > 72 || rot < 18){
        radius = 16;
        width = 14;
      }else if (rot > 70 || rot < 20){
        radius = 15;
        width = 13;
      }else if (rot > 68 || rot < 22){
        radius = 14;
        width = 12;
      }else if (rot > 66 || rot < 24){
        width = 11;
        radius = 13;
      }else if (rot > 64 || rot < 26){
        width = 10;
        radius = 12;
      }else if (rot > 62 || rot < 28){
        width = 9;
        radius = 11;
      }else if (rot > 60 || rot < 30){
        width = 8;
        radius = 10;
      }else if (rot > 58 || rot < 32){
        width = 7;
        radius = 9;
      }else if (rot > 56 || rot < 34){
        width = 6;
        radius = 8;
      }else if (rot > 54 || rot < 36){
        width = 5;
        radius = 7;
      }else if (rot > 52 || rot < 38){
        width = 4;
        radius = 6;
      }else if (rot > 50 || rot < 40){
        width = 3;
        radius = 5;
      }else if (rot > 48 || rot < 42){
        width = 2;
        radius = 4;
      }else if (rot > 46 || rot < 44){
        width = 1;
        radius = 3;
      }else{
        width = 0;
        radius = 2;
      }
      setStyle("s9p4","border-radius: "+radius+"px");
      setStyle("s9p4","border-width: "+width+"px");
    });
  }
}
//----------------------------------------



//----------------------------------------
//End of code sharing. Feel free to read below but chances are that you are on your own.
//Transitions
var through = 0;
onEvent("1to2", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
  setTimeout(function(){hideElement("text_area5");},400);
	fadeOut("1to2");
	fadeOutWithoutLimit("s1p1");
setTimeout(function(){
      fadeOutWithoutLimit("s1p2");
    }, 300);
    setTimeout(function(){
      fadeOutWithoutLimit("s1p3");
    }, 600);
    setTimeout(function(){
      fadeOutWithoutLimit("s1p4");
    }, 900);
	goout("text_area2", true, voice[2]);
	transition("text_area1", 173, 216, 230, "text_area2");
	setTimeout(function(){fadeInWithoutLimit("s2p1");}, 1200);
	setTimeout(function(){fadeInWithoutLimit("2to3");}, 1500);
});
onEvent("2to3", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area6");
  setTimeout(function(){hideElement("text_area6");},800);
  setTimeout(function(){fadeOut("2to3")}, 400);
	fadeOut("s2p1");
	goout("text_area2", true, voice[3]);
	transition("text_area1", 194, 232, 18, "text_area2");
	setTimeout(function(){fadeInWithoutLimit("s3p1")}, 1500);
	setTimeout(function(){fadeInWithoutLimit("s3p2")}, 1550);
	setTimeout(function(){fadeInWithoutLimit("s3p3")}, 1600);
	setTimeout(function(){fadeInWithoutLimit("s3p4")}, 1650);
	setTimeout(function(){fadeInWithoutLimit("s3p5")}, 1700);
	setTimeout(function(){fadeInWithoutLimit("s3p6")}, 1750);
	setTimeout(function(){fadeInWithoutLimit("s3p7")}, 1800);
	setTimeout(function(){fadeInWithoutLimit("s3p8")}, 1850);
	setTimeout(function(){fadeInWithoutLimit("s3p9")}, 1900);
	setTimeout(function(){fadeInWithoutLimit("s3p10")}, 1950);
	setTimeout(function(){fadeInWithoutLimit("s3p11")}, 2000);
	setTimeout(function(){fadeInWithoutLimit("s3p13")}, 2050);
	setTimeout(function(){fadeInWithoutLimit("s3p14")}, 2100);
	setTimeout(function(){fadeInWithoutLimit("s3p15")}, 2150);
	setTimeout(function(){fadeInWithoutLimit("3to4")}, 2250);
});
onEvent("3to4", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("3to4");
	setTimeout(function(){hideElement("text_area5");},400);
  setTimeout(function(){fadeOutWithoutLimit("s3p1")}, 50);
	setTimeout(function(){fadeOutWithoutLimit("s3p2")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("s3p3")}, 150);
	setTimeout(function(){fadeOutWithoutLimit("s3p4")}, 200);
	setTimeout(function(){fadeOutWithoutLimit("s3p5")}, 250);
	setTimeout(function(){fadeOutWithoutLimit("s3p6")}, 300);
	setTimeout(function(){fadeOutWithoutLimit("s3p7")}, 350);
	setTimeout(function(){fadeOutWithoutLimit("s3p8")}, 400);
	setTimeout(function(){fadeOutWithoutLimit("s3p9")}, 450);
	setTimeout(function(){fadeOutWithoutLimit("s3p10")}, 500);
	setTimeout(function(){fadeOutWithoutLimit("s3p11")}, 550);
	setTimeout(function(){fadeOutWithoutLimit("s3p13")}, 600);
	setTimeout(function(){fadeOutWithoutLimit("s3p14")}, 650);
	setTimeout(function(){fadeOutWithoutLimit("s3p15")}, 700);
	startRadar();
	setTimeout(function(){fadeInWithoutLimit("s4p1")},800);
	setTimeout(function(){fadeInWithoutLimit("s4p2")},1000);
	goout("text_area2", true, voice[4]);
	transition("text_area1", 145, 245, 173, "text_area2");
	setTimeout(function(){fadeIn("4to5")}, 1800);
});
onEvent("4to5", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("4to5");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeOutWithoutLimit("s4p1")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("s4p2")}, 200);
  setTimeout(function(){fadeInWithoutLimit("s5p1")},300);
  setTimeout(function(){fadeInWithoutLimit("s5p2")},350);
  setTimeout(function(){fadeInWithoutLimit("s5p3")},400);
  setTimeout(function(){fadeInWithoutLimit("s5p4")},450);
  setTimeout(function(){fadeInWithoutLimit("s5p5")},500);
	setTimeout(function(){stopTimedLoop(kr)}, 650);
	goout("text_area2", true, voice[5]);
	transition("text_area1", 217, 208, 222, "text_area2");
	setTimeout(function(){fadeIn("5to6")}, 1800);
});
onEvent("5to6", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("5to6");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeOutWithoutLimit("s5p1")}, 250);
	setTimeout(function(){fadeOutWithoutLimit("s5p2")}, 300);
	setTimeout(function(){fadeOutWithoutLimit("s5p3")}, 350);
	setTimeout(function(){fadeOutWithoutLimit("s5p4")}, 450);
	setTimeout(function(){fadeOutWithoutLimit("s5p5")}, 500);
	gooutLag("text_area2", true, voice[6]);
	transition("text_area1", 8, 72, 135, "text_area2");
	setTimeout(function(){fadeIn("6to7")}, 3000);
});
onEvent("6to7", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("6to7");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeInWithoutLimit("s6p1")}, 500);
	goout("text_area2", true, voice[7]);
	transition("text_area1", 123, 211, 137, "text_area2");
	setTimeout(function(){fadeIn("7to8")}, 1800);
	curLang = 0;
	setText("s6p1","English");
});
onEvent("7to8", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("7to8");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeOutWithoutLimit("s6p1")}, 150);
	if (sound){
	setTimeout(function(){fadeInWithoutLimit("s7p1")}, 500); 
	}else{
	setTimeout(function(){fadeInWithoutLimit("s7p2")}, 500);
	}
	goout("text_area2", true, voice[8]);
	transition("text_area1", 252, 168, 15, "text_area2");
	setTimeout(function(){fadeIn("8to9")}, 1800);
});
onEvent("8to9", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("8to9");
	setTimeout(function(){hideElement("text_area5");},400);
	if (sound){
	setTimeout(function(){fadeOutWithoutLimit("s7p1")}, 200); 
	}else{
	setTimeout(function(){fadeOutWithoutLimit("s7p2")}, 200);
	}
	setTimeout(function(){fadeInWithoutLimit("s8p1")}, 500);
	setTimeout(function(){fadeInWithoutLimit("s8p2")}, 800);
	setText("s8p1","");
	setTimeout(function(){textLoop()}, 800);
	goout("text_area2", true, voice[9]);
	transition("text_area1", 39, 47, 69, "text_area2");
	setTimeout(function(){fadeIn("9to10")}, 1800);
});
onEvent("9to10", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("9to10");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeOutWithoutLimit("s8p2")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("s8p1")}, 200);
	setTimeout(function(){fadeInWithoutLimit("s9p1")}, 350);
	setTimeout(function(){fadeInWithoutLimit("s9p2")}, 500);
	setTimeout(function(){fadeInWithoutLimit("s9p3")}, 650);
	setTimeout(function(){fadeInWithoutLimit("s9p4")}, 800);
	setTimeout(function(){fadeInWithoutLimit("s9p5")}, 950);
	startAnimationOne();
	startAnimationTwo();
	goout("text_area2", true, voice[10]);
	transition("text_area1", 25, 255, 179, "text_area2");
	setTimeout(function(){fadeIn("10to11")}, 1800);
});
onEvent("10to11", "click", function( ) {
  playS("assets/click.mp3");
  showElement("text_area5");
	fadeOut("10to11");
	setTimeout(function(){hideElement("text_area5");},400);
	setTimeout(function(){fadeOutWithoutLimit("s9p1")}, 150);
	setTimeout(function(){fadeOutWithoutLimit("s9p2")}, 200);
	setTimeout(function(){fadeOutWithoutLimit("s9p3");stopTimedLoop(kk);kk=0;}, 250);
	setTimeout(function(){fadeOutWithoutLimit("s9p4")}, 300);
	setTimeout(function(){fadeOutWithoutLimit("s9p5");stopTimedLoop(ky);ky=0;}, 350);
	setTimeout(function(){fadeInWithoutLimit("s10p1")}, 450);
	setTimeout(function(){fadeInWithoutLimit("s10p2")}, 550);
	setTimeout(function(){fadeInWithoutLimit("s10p3")}, 650);
	goout("text_area2", true, voice[11]);
	transition("text_area1", 109, 33, 60, "text_area2");
	setTimeout(function(){fadeIn("11to12")}, 1800);
});
onEvent("11to12", "click", function( ) {
  playS("assets/click.mp3");
  showE(["text_area5","text_area7"]);
	fadeOut("11to12");
	setTimeout(function(){fadeOutWithoutLimit("s10p1")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("s10p2")}, 200);
	setTimeout(function(){fadeOutWithoutLimit("s10p3")}, 300);
	setTimeout(function(){hideElement("text_area5");},400);
	goout("text_area2", true, voice[12]);
	transition("text_area1", 131, 16, 9, "text_area2");
	setTimeout(function(){fadeInWithoutLimit("12to13");}, 1900);
	setTimeout(function(){fadeInWithoutLimit("s99p1")}, 1600);
	setTimeout(function(){fadeInWithoutLimit("s99p2")}, 1650);
	setTimeout(function(){fadeInWithoutLimit("s99p3")}, 1700);
	setTimeout(function(){fadeInWithoutLimit("s99p4")}, 1750);
	setTimeout(function(){fadeInWithoutLimit("s99p5")}, 1800);
});
onEvent("12to13", "click", function( ) {
  playS("assets/click.mp3");
  showE(["text_area5","text_area7"]);
	fadeOut("12to13");
	setTimeout(function(){fadeOutWithoutLimit("s99p1")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("s99p2")}, 200);
	setTimeout(function(){fadeOutWithoutLimit("s99p3")}, 300);
	setTimeout(function(){fadeOutWithoutLimit("s99p4")}, 400);
	setTimeout(function(){fadeOutWithoutLimit("s99p5")}, 500);
	setTimeout(function(){hideElement("text_area5");},600);
	goout("text_area2", true, voice[13]);
	transition("text_area1", 237, 186, 163, "text_area2");
	setTimeout(function(){fadeInWithoutLimit("13to1");fadeInWithoutLimit("apphub")}, 1800);
	through++;
	if (through > 3){
	  setTimeout(function(){fadeInWithoutLimit("post")}, 1600); 
	}else{
	  setTimeout(function(){fadeInWithoutLimit("cert1")}, 1600);
	  setTimeout(function(){fadeInWithoutLimit("cert2")}, 1650);
	  setTimeout(function(){fadeInWithoutLimit("cert3")}, 1700);
	}
});
onEvent("13to1", "click", function( ) {
  playS("assets/trig.mp3");
	showElement("text_area5");
	fadeOut("13to1");
	fadeOutWithoutLimit("apphub");
	fadeOutWithoutLimit("post");
	setTimeout(function(){hideElement("text_area5");},400);
	goout("text_area2", true, voice[0]);
	kj = 0;
	kolor();
	setTimeout(function(){fadeOutWithoutLimit("cert3")}, 100);
	setTimeout(function(){fadeOutWithoutLimit("cert2")}, 150);
	setTimeout(function(){fadeOutWithoutLimit("cert1")}, 200);
	setTimeout(function(){
	  fadeInWithoutLimit("logo");
	  setTimeout(function(){fadeIn("start");},200);
	  showElement("button2");
	  hideElement("text_area7");
	}, 1600);
});
//Cert date
var date = new Date();
var month = date.getMonth();
month++;
var day = date.getDate();
var year = date.getFullYear();
setText("cert3", month+"/"+day+"/"+year);
//Link redirects
setStyle("s1p2", "text-shadow: 0 0 10px lime");
setStyle("s1p2", "background: linear-gradient(#84ff00, #55b01a);");
onEvent("s5p5", "click", function( ) {
  playS("assets/click.mp3");
	open("https://www.w3schools.com/css/");
});
onEvent("s8p2", "click", function( ) {
  playS("assets/click.mp3");
	open("https://www.howtogeek.com/434930/why-are-companies-still-storing-passwords-in-plain-text/");
});
//Language switch part
var curLang = 0;
var langs = ["español","français","português","Русский","Bahasa Indonesia","العربية","हिन्दी","中文","😀😆🏊‍♀🍔🏗","English"];
var translation = ["Según la CIA, solo el 5% de la población mundial habla inglés. \n\nEs importante hacer que una aplicación sea accesible en el idioma.","Selon la CIA, l'anglais n'est parlé que par environ 5% de la population mondiale. \n\nIl est important de rendre une application accessible dans la langue.","De acordo com a CIA, o inglês é falado por apenas cerca de 5% da população mundial.\n\nTer um aplicativo acessível no idioma é importante.","По данным ЦРУ, на английском говорят только ~ 5% населения мира.\n\nВажно сделать приложение доступным на разных языках.","Menurut CIA, bahasa Inggris hanya digunakan oleh ~ 5% populasi dunia.\n\nMembuat aplikasi dapat diakses dalam bahasa itu penting.","وفقًا لوكالة المخابرات المركزية الأمريكية (CIA) ، لا يتحدث الإنجليزية سوى حوالي 5٪ من سكان العالم.\n\n من المهم جعل تطبيق يمكن الوصول إليه باللغة.","सीआईए के अनुसार, दुनिया की आबादी के केवल ~5% द्वारा अंग्रेजी बोली जाती है।\n\nकिसी ऐप को भाषा में एक्सेस करने योग्य बनाना महत्वपूर्ण है।","根据中央情报局（CIA）的数据，世界上只有5％的人说英语。\n\n使用可访问语言的应用程序很重要。","🎇 ▪️ 🏌 🕦 ♊️ 👵 ✡ 🔗 👤 🍧 🖨 💾 💵 😔 🌴 🆖 🌵 🏟 📫 😇 💪 🎙 ⛱ 😍 🚾 👸 📽 🎠 🔳 👱 🍌 ♐️ 9️⃣ 🛰 👊 🏎 🛎 🖋 🍿 🔖 🍘 🔜 💜 🆚 🔤 🔚 ❔ 🗞 🎩 🚛 🤘 🗒 🏋 🚲 🐗 🐳 😐 🔕 👗 🏴 ⚙ 🚱 📊 🎾 👁 📂 🍖 ↘️ 🏹 🎽","According to the CIA, English is only spoken by ~5% of the world population.\n\nMaking an app accessable in language is important."];
onEvent("s6p1", "click", function( ) {
  showElement("text_area7");
	fadeOutWithoutLimit("s6p1");
	fadeOutWithoutLimit("text_area2");
	curLang++;
	if (curLang > 9){
	  curLang = 0;
	}
	setTimeout(function(){hideElement("text_area7");},450);
	setTimeout(function(){fadeInWithoutLimit("s6p1");fadeInWithoutLimit("text_area2");},400);
	setTimeout(function(){setText("s6p1",langs[curLang]);setText("text_area2",translation[curLang])},400);
});
//Sound switches
onEvent("s7p1", "click", function( ) {
  showElement("text_area7");
	fadeOutWithoutLimit("s7p1");
	setTimeout(function(){hideElement("text_area7");},300);
	setTimeout(function(){fadeInWithoutLimit("s7p2")},500);
  sound = false;
});
onEvent("s7p2", "click", function( ) {
	showElement("text_area7");
	fadeOutWithoutLimit("s7p2");
	setTimeout(function(){hideElement("text_area7");},300);
	setTimeout(function(){fadeInWithoutLimit("s7p1")},500);
  sound = true;
  playS("assets/click.mp3");
});
//The small clicker game
var score = 0;
var isProcess = 0;
onEvent("s10p3", "click", function( ) {
if (isProcess == 0){
  isProcess = 1;
  fadeOut("s10p3");
	score++;
	setText("s10p2", score);
	var posx = randomNumber(10, 250);
	var posy = randomNumber(150,320);
	setTimeout(function(){setPosition("s10p3",posx,posy,60,60);fadeInWithoutLimit("s10p3");isProcess = 0;},300);
}});