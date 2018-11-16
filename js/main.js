$(document).ready(function(){
    alert("Bienvenido, arrastra el cuadrito"+
        " hacia las metas una vez alcanzadas"+
        " serás de vuelto al punto de inicio"+
        " si acumulas 4 puntos ganarás."+
        " Ojo: no puedes pasar por fuera del recuadro"+
        " ni por las barreras negras.");
        
    var cont = 0;

      $("#player").draggable();
      $("#goal4").droppable({
          drop:function(event, ui){
              $("#player").css("top","551px");
              $("#player").css("left","350px");
              $("#goal4").css("background-color","blue");
              cont =cont +1;
              win();
          }
      });
      $("#goal3").droppable({
        drop:function(event, ui){
            $("#player").css("top","551px");
              $("#player").css("left","350px");
            $("#goal3").css("background-color","red");
            cont = cont + 1;
            win();
        }
    });
    $("#goal2").droppable({
        drop:function(event, ui){
            $("#player").css("top","551px");
            $("#player").css("left","350px");
            $("#goal2").css("background-color","green");
            cont=cont+1;
            win()
        }
    });
    $("#goal1").droppable({
        drop:function(event, ui){
            $("#player").css("top","551px");
              $("#player").css("left","350px");
            $("#goal1").css("background-color","yellow");
            cont=cont+1;
            win();           
        }
    });
    $("#container").droppable({
        drop:function(event, ui){
            $("#player").css("top","551px");
            $("#player").css("left","350px");
        },
        out: function(event, ui){
            alert("hey no hagas trampas");
            $("#player").css("top","551px");
            $("#player").css("left","350px");
            
        }
        
    });
    
    $("#wall4").droppable({
        over: function(event, iu){
            notify();
        }
    });
    $("#wall3").droppable({
        over: function(event, iu){
            notify();
        }
    });
    $("#wall2").droppable({
        over: function(event, iu){
            notify();
        }
    });
    $("#wall1").droppable({
        over: function(event, iu){
            notify();
        }
    });

    
    function win (){
        if(cont == 4){
            alert("has ganado!! felicidades");
            cont =0;
            $("#player").css("top","551px");
            $("#player").css("left","350px");
            $("#goal4").css("background-color","white");
            $("#goal3").css("background-color","white");
            $("#goal2").css("background-color","white");
            $("#goal1").css("background-color","white");
    
        }
    }
    function notify(){
        alert("has perdido! pero puedes volverlo a intentar. puntos "+cont);
        cont = 0;
        $("#player").css("top","551px");
        $("#player").css("left","350px");
        $("#goal4").css("background-color","white");
        $("#goal3").css("background-color","white");
        $("#goal2").css("background-color","white");
        $("#goal1").css("background-color","white");

    }
    
    
    
    
    


    
});