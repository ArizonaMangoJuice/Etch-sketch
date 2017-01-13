$(document).ready(function() {
    //this function inserts the div into the container 
    function divInsert() {
        for (var i = 0; i < counterPlus; i++) {
            $(".container").append(grid);
        }
    }
    var grid = '<div class="grid"></div>';
    var counterPlus = 2000;
    // adds 1 everytime you click the plus sign
    $("#add").click(function() {
        counterPlus = counterPlus + 100;
        $("#number").text(counterPlus);
    });
    //subtratcs 1 everytime you click the minus sign
    $("#sub").click(function() {
        counterPlus = counterPlus - 100;
        $("#number").text(counterPlus);
        // resets the counterPlus back to zero if it reaches -1
        if (counterPlus == -100) {
            counterPlus = 0;
            $("#number").text(counterPlus);
        }
    });

    //this connects the button with the numbers
    $("#create").click(function() {
        $(".container").append(divInsert);
        $(".grid").on("mouseover", function() {
            $(this).addClass("dark");
        });
    });
    //this will reset your blocks
    $("#reset").click(function() {
        $(".container").empty();
    });

});