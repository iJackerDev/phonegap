var numbers = new Array(3);
var points = 0;
var time = 50;
var money = 0;
var buff_money = 0;
var cd ="";
function calc(){
    numbers[0] = Math.floor(Math.random()*20); 
    numbers[1] = Math.floor(Math.random()*20);
    numbers[2] = numbers[0] + numbers[1];
    
    $('#num1').text(numbers[0]);
    $('#num2').text(numbers[1]);
}
function check(){
    if($('#num_inp').val() == numbers[2]){
        $('#res').html('<span id="corr">&#x2714;</span>');
        points += 1;
        $('#points').text(points);
    }else{
        $('#res').html('<span id="wrong">&#x2718; (' + numbers[2] + ')</span>');
    }
    $('#num_inp').val('');
    if(time > 0){
        calc();    
    }
}
function reset(){
	points = 0;
	time = 50;
	money = 0;
	buff_money = 0;
	cd ="";
}
function countdown(){
    if(time > 0){
        time -= 1; 
        $('#time').text(time);
    }else if(time == 0){
        money = points*15;
        //buff_money = money + parseInt(localStorage.getItem('money'));
        var success = confirm("Sie haben "+points+" Punkte erreicht, das entspricht "+money+"$. Nochmals Spielen?");
        if(success){
        	reset();
        	calc();
        }
        localStorage.setItem("money",buff_money);
        $('.cur_money').text(attribute['money']);
        window.clearInterval(cd);
        $("#num_inp").prop('disabled', true); 
        time -= 1;   
    }   
}
$(document).ready(function(){
    cd = window.setInterval("countdown()", 1000);
    calc();
    $('#points').text(points);
    $('#enter').click(function(){
        check();
    })
});

   
