module.exports = function solveEquation(equation) {
 var a, b, c, d, x1, x2, posb, solutions = [];
 equation = equation.replace(/ /g,"");
 a = equation.substring(0, equation.indexOf("*"));
 posb = equation.indexOf("x^2")+3;
 b = equation.substring (posb, equation.indexOf("*",posb));
 c = equation.substring ((equation.indexOf("x",posb))+1);
 d = b*b - 4*a*c;
 x1 = Math.round((-b + Math.sqrt(d))/(2*a));
 x2 = Math.round((-b - Math.sqrt(d))/(2*a));
  if (x1>x2){
   solutions.push (x2, x1);
   }
   else{
   solutions.push (x1, x2);
   }
  return solutions;// your implementation
}
