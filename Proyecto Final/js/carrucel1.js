setInterval(carrusel1,3000);
        var imagen=1;

        function carrusel1(){
            if(imagen==1){
                document.getElementById("1").hidden=true;
                document.getElementById("2").hidden=false;
                imagen=2;
            }else if(imagen==2){
                document.getElementById("2").hidden=true;
                document.getElementById("3").hidden=false;
                imagen=3;
            }else if(imagen==3){
                document.getElementById("3").hidden=true;
                document.getElementById("4").hidden=false;
                imagen=4;
            }else if(imagen==4){
                document.getElementById("4").hidden=true;
                document.getElementById("5").hidden=false;
                imagen=5;
            }else if(imagen==5){
                document.getElementById("5").hidden=true;
                document.getElementById("6").hidden=false;
                imagen=6;
            }else if(imagen==6){
                document.getElementById("6").hidden=true;
                document.getElementById("1").hidden=false;
                imagen=1;
            }
        }