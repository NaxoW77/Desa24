var col=0;
var gs=0;
function Change(page, panel){
    Check();
    window.location.href = "#"
    var pageIndex = []
    
    if(page==4){
        gs=1
    }else{
        gs=0
    }

    if(panel){
        openNav();
    }
    for(var x = 1; x<=17;x++){
        if(document.getElementById(`S${x}`)){
            pageIndex.push(`S${x}`)
        }else{
            break;
        }
    }
    document.getElementsByClassName("IDiv")[0].classList.add("Trs")
    setTimeout(function(){
        document.getElementsByClassName("IDiv")[0].classList.remove("Trs")
        for(var y = 0; y<pageIndex.length;y++){
            document.getElementById(pageIndex[y]).style.display = "none";
        }
        if(!document.getElementById(`S${page}`)){
            page=1
            
        }
        document.getElementById(`S${page}`).style.display="block";
    },250)
    
    
    
    

    if(gs==0){
    document.getElementsByClassName("background-image")[0].style.filter = `grayscale(0)`
    document.getElementById("If").setAttribute("onclick", "Change(4)")
    document.getElementById("If").setAttribute("src", "Medios/img/if.png")
    }else{
        document.getElementsByClassName("background-image")[0].style.filter = "grayscale(100)"
        document.getElementById("If").setAttribute("onclick", "Change(1)")
        document.getElementById("If").setAttribute("src", "Medios/img/In.png")
    }
    return(`Cambiando a página ${page}...`)
}
