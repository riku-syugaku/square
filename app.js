const question = [
     '「11」の２乗',
     '「12」の２乗',
     '「13」の２乗',
     '「14」の２乗',
     '「15」の２乗',
     '「16」の２乗',
     '「17」の２乗',
     '「18」の２乗',
     '「19」の２乗',
     '「20」の２乗',
   ];
   const kotae = [
    121,144,169,196,225,256,289,324,361,400,   
   ];
   
//    var select = document.getElementById('genre');
   
//   function butotnClick(){location.reload();}

 // let button = document.getElementById('reset');
//   button.onclick = butotnClick;
 //  btn.addEventListener('click', function() { reset = document.getElementById('reset');location.reload();});
   

alert("スタート！");
   const questionLength = question.length;
   let questionIndex = 0;
   const kotaeLength = kotae.length;
   let kotaeIndex = 0;
   const setupQuiz = () => {
   document.getElementById('js-question').textContent = question[questionIndex];
   }
   setupQuiz();
   let years = document.getElementById('years');
   var btn = document.getElementById('kakunin');
   btn.addEventListener('click', function() {
   target = document.getElementById("output");
              textBox = document.getElementById("id_textBox1");
              //target.innerText = textBox.value;
    if(textBox.value == kotae[kotaeIndex])
    {
         alert("Good👍");
    textBox.value = " ";
    questionIndex++;
    kotaeIndex++;
    setupQuiz();
    }
    else{
    alert("こたえは「"+kotae[kotaeIndex] +"」です。");
    textBox.value = " ";
    questionIndex = 0;
    kotaeIndex = 0;
    setupQuiz();
    }
 
    if(questionIndex < 10){
         setupQuiz();
           }else{
           alert('コンプリート！');
    location.reload();
         }
 },false);
   



//    select.onchange = function(){
   
//      if( this.value === "sel"){
//        location.reload();
//      }
   
//      // 1-10の問題
//      if(this.value === "1-10"){
//          alert(this.value+"スタート！");
//      const questionLength = question.length;
//      let questionIndex = 0;
//      const kotaeLength = kotae.length;
//      let kotaeIndex = 0;
//      const setupQuiz = () => {
//      document.getElementById('js-question').textContent = question[questionIndex];
//      }
//      setupQuiz();
//      let years = document.getElementById('years');
//      var btn = document.getElementById('kakunin');
//      btn.addEventListener('click', function() {
//      target = document.getElementById("output");
//                 textBox = document.getElementById("id_textBox1");
//                 target.innerText = textBox.value;
//       if(textBox.value == kotae[kotaeIndex])
//       {
//            alert("Good!");
//       textBox.value = " ";
//       questionIndex++;
//       kotaeIndex++;
//       setupQuiz();
//       }
//       else{
//       alert("こたえは"+ kotae[kotaeIndex] +"です。");
//       textBox.value = " ";
//       questionIndex = 0;
//       kotaeIndex = 0;
//       setupQuiz();
//       }
   
//       if(questionIndex < 10){
//            setupQuiz();
//              }else{
//              alert('コンプリート！');
//       location.reload();
//            }
//    },false);}
   
   
//    // 11-20の問題
//    if(this.value === "11-20"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 10;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 10;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("残念！こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 10;
//     kotaeIndex = 10;
//     setupQuiz();
//     }
   
//     if(questionIndex < 20){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
   
//    // 21-30の問題
//    if(this.value === "21-30"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 20;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 20;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 20;
//     kotaeIndex = 20;
//     setupQuiz();
//     }
   
//     if(questionIndex < 30){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 31-40の問題
//    if(this.value === "31-40"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 30;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 30;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 30;
//     kotaeIndex = 30;
//     setupQuiz();
//     }
   
//     if(questionIndex < 40){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 41-50の問題
//    if(this.value === "41-50"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 40;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 40;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 40;
//     kotaeIndex = 40;
//     setupQuiz();
//     }
   
//     if(questionIndex < 50){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 51-60の問題
//    if(this.value === "51-60"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 50;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 50;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 50;
//     kotaeIndex = 50;
//     setupQuiz();
//     }
   
//     if(questionIndex < 60){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
   
//    // 61-70の問題
//    if(this.value === "61-70"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 60;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 60;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 60;
//     kotaeIndex = 60;
//     setupQuiz();
//     }
   
//     if(questionIndex < 70){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 71-80の問題
//    if(this.value === "71-80"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 70;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 70;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 70;
//     kotaeIndex = 70;
//     setupQuiz();
//     }
   
//     if(questionIndex < 80){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 81-90の問題
//    if(this.value === "81-90"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 80;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 80;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 80;
//     kotaeIndex = 80;
//     setupQuiz();
//     }
   
//     if(questionIndex < 90){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
//    // 91-100の問題
//    if(this.value === "91-100"){
//            alert(this.value+"スタート！");
//    const questionLength = question.length;
//    let questionIndex = 90;
//    const kotaeLength = kotae.length;
//    let kotaeIndex = 90;
//    const setupQuiz = () => {
//    document.getElementById('js-question').textContent = question[questionIndex];
//    }
//    setupQuiz();
//    let years = document.getElementById('years');
//    var btn = document.getElementById('kakunin');
//    btn.addEventListener('click', function() {
//    target = document.getElementById("output");
//               textBox = document.getElementById("id_textBox1");
//               target.innerText = textBox.value;
//     if(textBox.value == kotae[kotaeIndex])
//     {alert("Good!");
//     textBox.value = " ";
//     questionIndex++;
//     kotaeIndex++;
//     setupQuiz();
//     }
//     else{
//     alert("こたえは"+ kotae[kotaeIndex] +"です。");
//     textBox.value = " ";
//     questionIndex = 90;
//     kotaeIndex = 90;
//     setupQuiz();
//     }
   
//     if(questionIndex < 100){
//          setupQuiz();
//            }else{
//            alert('コンプリート！');
//     location.reload();
//          }
//    },false);}
   
   
   
   
   
   
   
//    }