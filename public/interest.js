function calculate () {

  //The values are from the input box in the html file.
  //Whatever is input, the values will be stored in these variables.
  var amount = $('#amount').val();
  var tip_percent = $('#tip_percent').val();
  var tiptPercent = tip_percent/100;
  var total = Number(amount) + (Number(amount) *  Number(tipPercent));

  //Rounding the value to two decimal places
  $('#total').val(total.toFixed(2));

  return false;
}

$('#calculator').submit(calculate);