var $num1;
var $num2;
var $action;
var $continous_action;
var $sum;

function collect_number(num){
	//first input
	if (!$num1 && !$action && !$num2){
		$num1 = num
		$( "input" ).val( $num1 );
	}
	//first input (multiple digits)
	else if (($num1 && $num1 != $sum) && !$action && !$num2){
		$num1 = $num1 + num;
		$( "input" ).val( $num1 ); 
	}
	//second input
	else if ($num1 && $action && !$num2){
		$num2 = num
		$( "input" ).val( $num2 ); 
	}
	//second input (multiple digits)
	else if (($num1 && $num1 != $sum)  && $action && $num2){
		$num2 = $num2 + num;
		$( "input" ).val( $num2 ); 
	}
	//third+ input
	else if ($num1 == $sum && $continous_action && !$num2){
		$num2 = parseFloat($num2) + parseFloat(num);
		$( "input" ).val( $num2 ); 
	}
	//third+ input (multiple digits)
	else if ($num1 == $sum && $continous_action && $num2){
		$num2 = $num2 + num;
		$( "input" ).val( $num2 );
	}
}

//records action for calulation
function collect_action(action){
	if ($num1 && $num2){
		equals();
		$continous_action = action;
	}
	else{
		$action = action;
		$( "input" ).val( $action );
	}
}

//routes to action that is needed
function equals(){
	if ($action){
		switch ($action) {
		    case '+':
		        $sum = parseFloat($num1) + parseFloat($num2);
		        break;
		    case '-':
		        $sum = $num1 - $num2;;
		        break;
		    case 'x':
		        $sum = $num1 * $num2;;
		        break;
		    case '/':
		        $sum = $num1 / $num2;;
		        break;
		}
	}
	else if ($continous_action){
		switch ($continous_action) {
		    case '+':
		        $sum = parseFloat($num1) + parseFloat($num2);
		        break;
		    case '-':
		        $sum = $num1 - $num2;;
		        break;
		    case 'x':
		        $sum = $num1 * $num2;;
		        break;
		    case '/':
		        $sum = $num1 / $num2;;
		        break;
		}
	}
	$( "input" ).val( $sum ); 
	legacy($sum);
}

//continues calculation
function legacy($sum){
	$num1 = $sum;
	$num2 = 0;
	$action = null
}

//resets everything
function reset(){
	$num1 = null;
	$num2 = null;
	$action = null;
	$continous_action = null;
	$sum = null;
	$( "input" ).val( " " );
}

//converts numbers between negative and positive
function interpolate(){
	var value = $( "input" ).val();
	value = value * -1;
	$( "input" ).val(value);
	if ($continous_action){
		$continous_action ? $num2 = value : $num1 = value;
	}
	else{
		$action ? $num2 = value : $num1 = value;
	}
}