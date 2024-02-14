var state = 0;
function openNav(){
    if(state==0){
    var nav=document.getElementById("Nav");

    nav.style.animation = "Down 0.5s"
    nav.style.top= "53px"
    document.getElementById("if2").setAttribute("src","Medios/img/tl2.png")
    setTimeout(function(){
    },750)
    
    state=1;
    }else{
        var nav=document.getElementById("Nav");
        document.getElementById("if2").setAttribute("src","Medios/img/tl.png")
        nav.style.animation = "Up 0.8s"
        nav.style.top= "-150px"
        state=0;
    }
}