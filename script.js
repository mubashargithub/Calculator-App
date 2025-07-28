let element = {
    inputbox : document.getElementById('inputbox'),
    AC : document.getElementById('AC'),
    DEL : document.getElementById('DEL'),
    Modulus : document.getElementById('modulus'),
    Divide : document.getElementById('divide'),
    Seven : document.getElementById('seven'),
    Eight : document.getElementById('eight'),
    Nine : document.getElementById('nine'),
    Multiply : document.getElementById('multiply'),
    Four : document.getElementById('four'),
    Five : document.getElementById('five'),
    Six : document.getElementById('six'),
    Minus : document.getElementById('minus'),
    One : document.getElementById('one'),
    Two : document.getElementById('two'),
    Three : document.getElementById('three'),
    Plus : document.getElementById('plus'),
    Zero : document.getElementById('zero'),
    DblZero : document.getElementById('dblzero'),
    Dot : document.getElementById('dot'),
    Equal : document.getElementById('equal'),
}

element.AC.addEventListener('click',()=>{
    element.inputbox.value = '';
})

element.DEL.addEventListener('click',()=>{
    const string1 =  element.inputbox.value;
    resultstring = string1.slice(0,-1);
    element.inputbox.value = resultstring;
})


element.Modulus.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'%';
    element.inputbox.value = result_str;
})

element.Divide.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'/';
    element.inputbox.value = result_str;
})

element.Seven.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'7';
    element.inputbox.value = result_str;
})

element.Eight.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'8';
    element.inputbox.value = result_str;
})

element.Nine.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'9';
    element.inputbox.value = result_str;
})

element.Multiply.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'x';
    element.inputbox.value = result_str;
})

element.Four.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'4';
    element.inputbox.value = result_str;
})

element.Five.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'5';
    element.inputbox.value = result_str;
})

element.Six.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'6';
    element.inputbox.value = result_str;
})

element.Minus.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'-';
    element.inputbox.value = result_str;
})

element.One.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'1';
    element.inputbox.value = result_str;
})

element.Two.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'2';
    element.inputbox.value = result_str;
})

element.Three.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'3';
    element.inputbox.value = result_str;
})

element.Plus.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'+';
    element.inputbox.value = result_str;
})

element.Zero.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'0';
    element.inputbox.value = result_str;
})

element.DblZero.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'00';
    element.inputbox.value = result_str;
})

element.Dot.addEventListener('click',()=>{
    const str1 = element.inputbox.value;
    const result_str = str1+'.';
    element.inputbox.value = result_str;
})

element.Equal.addEventListener('click',()=>{
    try{
        const str1 = element.inputbox.value;
        const str = str1.replace(/x/g, "*");
        const result_str = eval(str);
        element.inputbox.value = result_str;
        // throw new error("Syntax Error");
    }catch(error){
        element.inputbox.value = "Syntax Error";
    }
    
})






// element.inputbox.addEventListener("input", function() {
//   // Move scroll position to the end (right side)
//   this.scrollLeft = this.scrollWidth;
  
//   // Optional: Keep cursor at the end
//   this.setSelectionRange(this.value.length, this.value.length);
// });
