var romanNumerals = function(number) {

  if (number >= 4000) { return false;}

  var output = [];
  var currentValue = number;

  while (currentValue > 0) {
    if (currentValue >= 1000) {
      currentValue -=1000;
      output.push('M');
      continue;
    }

    if (currentValue >= 500) {
      currentValue -=500;
      output.push('D');
      continue;
    }

    if (currentValue >= 100) {
      currentValue -=100;
      output.push('C');
      continue;
    }

    if (currentValue >= 50) {
      currentValue -=50;
      output.push('L');
      continue;
    }

    if (currentValue >= 10) {
      currentValue -=10;
      output.push('X');
      continue;
    }

    if (currentValue >= 5) {
      currentValue -= 5;
      output.push('V');
      continue;
    }

    if (currentValue > 0) {
      currentValue --;
      output.push('I');
      continue;
    }
  }

  var unformatted = output.join('');
  var formatted7 = unformatted.replace('MMMM','MMMCM');
  var formatted6 = formatted7.replace('DCCCC','CM');
  var formatted5 = formatted6.replace('CCCC','CD');
  var formatted4 = formatted5.replace('XXXX','XL');
  var formatted3 = formatted4.replace('LXL','XC');
  var formatted2 = formatted3.replace('VIIII', "IX");
  var formatted  = formatted2.replace('IIII', "IV");

  return formatted;
};
