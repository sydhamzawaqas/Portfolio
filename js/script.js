const hoverImage = document.getElementById('hover-image');
const imageContainer = document.querySelector('.image-container');
let notification=document.getElementById('notification')


function show_notification(){
 notification.children[1].textContent='Will be deployed later';
 console.log(notification.children[1].textContent)
  notification.style.display='flex'
  setTimeout(() => {
    notification.style.display='none'
  }, 2000);
}


const rotationSpeed = 0.2;

imageContainer.addEventListener('mousemove', (e) => {
    const offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
    const offsetY = e.clientY - imageContainer.getBoundingClientRect().top;

    const centerX = imageContainer.clientWidth / 2;
    const centerY = imageContainer.clientHeight / 2;

    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

   
    hoverImage.style.transform = `rotate(${angle * rotationSpeed}deg)`;
});

imageContainer.addEventListener('mouseleave', () => {
    hoverImage.style.transform = 'rotate(0deg)';
});


function show_nav(){
    let nav_container=document.getElementById('items_container');
    
    if(nav_container.style.display === 'flex')
    {
        nav_container.style.display = 'none';
        nav_container.classList.remove('items_show');

    }
    else
    {
    nav_container.style.display='flex';
    nav_container.classList.add('items_show');
    }
}



function change_color(div,upper_div,last_div_upper){
  if(lastclickdiv !==null){
        lastclickdiv.classList.remove("select")
        last_upper_div.style.color='grey';
        
  }

  div.classList.add('select');
   
  last_div_upper.textContent="";
  upper_div.style.color='#00ccff';
  lastclickdiv = div;
  last_upper_div=upper_div;
 
  console.log(last_child_content)
}



let divs = document.querySelectorAll('.div1');

divs.forEach((index)=>{
  index.addEventListener('click',()=>{
      let first_chlid = index.firstElementChild;
      let last_child = index.lastElementChild;
    //   last_child_content = last_child.textContent;

      
      

      console.log(first_chlid);
      if(lastclickdiv !== index)
      {
        console.log("if");
        change_color(index,first_chlid,last_child);
        
      }

 

  })

  var lastchild = index.lastElementChild;

  lastchild.addEventListener("click", function (event) {
    index.removeEventListener;
});
   

})

function submitData() {
  var name = document.getElementById('name_div').innerText.trim();
  var email = document.getElementById('email_div').innerText.trim();
  var contact = document.getElementById('contact_div').innerText.trim();
  var message = document.getElementById('message_div').innerText.trim();

 console.log("hahah");
  var xhr = new XMLHttpRequest();
  var url = '/Php/ProcessForm.php'; 
  var params = 'name=' + name + '&email=' + email + '&contact=' + contact + '&message=' + message;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // Response from PHP script
          console.log(xhr.responseText);
          // Add further handling or feedback if needed
      }
  };

  xhr.send(params);
}

let lastclickdiv = null;
let last_upper_div = null;
let last_child_content = null;
let last_div = null

function sendEmail() {
  Email.send({
      Host: "smtp.gmail.com",
      Username: "testinghamza09@gmail.com",
      Password: "House167",
      To: 'testinghamza09@gmail.com',
      From: "testinghamza09@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
  })
      .then(function (message) {
          alert("mail sent successfully")
      });
    }
async function submit_data(){
    let name_a = document.getElementById('name_div').textContent.trim();
    let email = document.getElementById('email_div').textContent.trim();
    let contact = document.getElementById('contact_div').textContent.trim();
    let message = document.getElementById('message_div').textContent.trim();
    
    
    let notifi_children=notification.children[1];
    
    
    console.log(name_a,email,contact,message);
   
    if((name_a==="Name")||(email=="Email")||(contact=="contact")||(message=="Message")&&(name_a==="")||(email=="")||(contact=="")||(message==""))
    {
      notifi_children.textContent="Please Fiil the all fields"
     // notification.classList.add('block');
     notification.style.display='flex';
 
     setTimeout(() => {
         notification.style.display='none';
     }, 2020);
    }
 
    else{
        
      notifi_children.textContent="Submitted Completed";
         notification.style.display='flex';
          //sendEmail();

         setTimeout(() => {
          notification.style.display='none';
      }, 2020);
    }
 
 }
 




