 let form = document.forms.roman;
 form.decNumber.oninput = calculate;


 function calculate() {

     let num = form.decNumber.value; 
     if (num < 4000) {



         let arr = [];
         num = num.toString();
         arr = num.split("");

         let result = [];
         switch (arr.length) {
             case arr.length = 4:

                 result.push(leftRight(arr[0], "M"));
                 result.push(leftRight(arr[1], "C", "D", "M"));
                 result.push(leftRight(arr[2], "X", "L", "C"));
                 result.push(leftRight(arr[3], "I", "V", "X"));
                 break;
             case arr.length = 3:
                 result.push(leftRight(arr[0], "C", "D", "M"));
                 result.push(leftRight(arr[1], "X", "L", "C"));
                 result.push(leftRight(arr[2], "I", "V", "X"));
                 break;
             case arr.length = 2:
                 result.push(leftRight(arr[0], "X", "L", "C"));
                 result.push(leftRight(arr[1], "I", "V", "X"));
                 break;
             case arr.length = 1:
                 result.push(leftRight(arr[0], "I", "V", "X"));
                 break;

         }
         let number = [];
         result = result.flat();
         result = result.join("");

         document.getElementById("romanNumber").innerHTML = result;
     } else {
         document.getElementById("romanNumber").innerHTML = "введите число меньше 4000";

     }
 }
 calculate();

 function leftRight(dig, small, regular, big) {
     let str = [];

     if (dig < 5 && dig >= 1 && dig != 4) {
         for (let i = 0; i < dig; i++) {
             str.push(small);

         }
     }

     if (dig == 4) {

         str.push(small);

         str.push(regular);
     }
     if (dig == 5) {

         str.push(regular);
     }

     if (dig > 5 && dig < 9) {
         str.push(regular);
         for (let i = 0; i < dig - 5; i++) {
             str.push(small);
         }
     }

     if (dig == 9) {
         str.push(small);
         str.push(big);
     }
     return str;
 };
