var $keyboardWrapper = $('.virtual-keyboard'),
    $key = $keyboardWrapper.find("input"), //find by input word on the html document
    $key_delete = $('.delete'),
    $key_shift = $('.shift'),
    $outputField = $('.output input'),
    $currentValue = $outputField.val(),
    actionKeys = $('.delete,.shift')
    activeShiftClass = "shift-activated";

//handle keystrokes
function _keystroke(keycase) {
    $key.not(actionKeys).on('click', function(e) {
        e.preventDefault();
    
    //check for shift key for upper
    if($key_shift.hasClass(activeShiftClass)) {
        keycase = 'upper';
        $key_shift.removeClass(activeShiftClass);
    }else {
        keycase = 'lower';
    }
    
    //handle case
    if(keycase == 'upper'){
        var keyValue = $(this).val().toUpperCase(); //upper
    } else {
        var keyValue = $(this).val().toLowerCase(); //or lower
    }

    //grab current value

    var output = $('output input').val();
        $outputField.val(output + keyValue); //output handle with conditional event
        getCurrentVal();
        focusOutputField();
    });
    
} //key stroke

// delete

$key_delete.on('click', function(e) {
    e.preventDefault(); //stop current event.
    $outputField.val($currentValue.substr(0,$currentValue.length - 1)); //substr current value.
    getCurrentVal();
    focusOutputField();
});

//shift

$key_shift.on('click', function(e){
    e.preventDefault;
    $(this).toggleClass(activeShiftClass);
});

//grab current value of typed text
function getCurrentVal() {
    $currentValue = $outputField.val()
}

// focus for cursor hack
function focusOutputField() {
    $outputField.focus();
}

_keystroke("lower"); //init keystrokes