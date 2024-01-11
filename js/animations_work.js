setTimeout(() => {
    const textHidden = document.querySelector('.text_div');
    console.log(textHidden);
    textHidden.style.animationPlayState = 'running';
}, 6000);

let css=document.getElementById('css');
let html = document.getElementById('html');
let react =document.getElementById('number');
let py = document.getElementById('Python')
let js = document.getElementById('javascript');
let node=document.getElementById('node_js');
let cpp= document.getElementById('C++');
let sql = document.getElementById('sql');







console.log(js);


function show_percent(element,percent,time_elm)
{
    let counter_inc=0;
     percent=Number.parseInt(percent);
     time_elm=Number.parseInt(time_elm);
     const interval = setInterval(() => {
        if (counter_inc == percent) {
            clearInterval(interval); 
        } else {
            console.log('function is running');
            counter_inc += 1;
            element.innerHTML = counter_inc + '%';
        }
    }, time_elm);
}


function view_page(page_link){
   window.open(page_link,'_blank');
}

function view_code(code_link){
    window.open(code_link,'_blank');
}
let load_prct = ()=>{
  
    show_percent(js,60,30);
    show_percent(css,85,30);
    show_percent(html,95,30);
    show_percent(react,10,30);
    show_percent(py,80,30);
    show_percent(cpp,80,30);
    show_percent(node,50,30);
    show_percent(sql,95,30);
}




load_prct();








