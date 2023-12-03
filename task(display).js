// i fetch the Tasks from localStorage to display them
var todolist3Data = localStorage.getItem('todolist4');
var todolist3Array = JSON.parse(todolist3Data);
 var Newtask=todolist3Array? JSON.parse(localStorage.getItem('todolist4')) : [] ;
var NEWtaskupadteL=Newtask.filter((x)=>{ return x.genre==='important'; })   
var NEWtaskupadteR=Newtask.filter((x)=>{ return x.genre==='notimportant'; }) 
 var Newtask=NEWtaskupadteL.concat(NEWtaskupadteR)
 var see=JSON.parse(localStorage.getItem('see'));

var close=document.getElementById('close');
close.addEventListener("click", function() {
  var el=document.querySelector(".editbackground");
  document.body.style.overflow = 'auto';
     el.classList.add('editbackgroundnone');		
     el.classList.remove('editbackground');               
                    });    
//  let us fetch the url and get the categorie so that we filter by categorie                            
 var url = window.location.href;
// Extract the query string
var queryString = url.split('?')[1];
// Parse the query string
var params = new URLSearchParams(queryString);
// Access individual parameters
var param1 = params.get('categorie');
 
//  filter the task by category  
  if(param1==='Workplace'){
    display= Newtask.filter((x)=>{
    return x.categorie==='Workplace';
  
  })   
  }
 
  else if(param1==='Home'){
    display= Newtask.filter((x)=>{
    return x.categorie==='Home';
  })   

  }
  else if(param1==='Health'){
    display= Newtask.filter((x)=>{
    return x.categorie==='Health';
  })   
  }
  else if(param1==='Family'){
    display= Newtask.filter((x)=>{
    return x.categorie==='Family';
  })   
  }
 
  else if(param1==='Education'){
    display= Newtask.filter((x)=>{
    return x.categorie==='Education';
  })   
  }
      else if(!param1){
         display=Newtask
      }
 
//   function to display the tasks on load
 
         window.onload = function () { 
          if(display.length>0) {
            display.map.call(display, function (x,index) {
         var link = document.createElement('h3');
         var link2 = document.createElement('span');
         var link3 = document.createElement('div');
         link3.classList.add('task')
                    var check = document.createElement("input");
                    if(x.genre==='important'){
                     check.checked = true;
                     link3.classList.add('succes') ;
                    }
                    check.type= 'radio';
                    link.textContent = x.taske;
                    var nameoftask=link.textContent
                    check.addEventListener("click", function() {
                      if (x.genre==='important'){
                         makeunimportant(index,nameoftask)
                       
                      }
                  else{
                    
                    makeimportant(index,nameoftask);
                  }

                    });
                    // Buttons icons for delete ,complete and edit
                    var trashButton = document.createElement("img");
                    trashButton.src = 'delete.PNG';
                    trashButton.width = 39; 
                    trashButton.height = 47; 
                    trashButton.addEventListener("click", function() {
                    handleDelete(index,nameoftask);
                    });
                    var completeButton = document.createElement("img");
                    completeButton.src = 'complete.PNG';
                    completeButton.addEventListener("click", function() {
                    handlecomplete(index,nameoftask);
                    });
                   var editButton = document.createElement("img");
                   editButton.src = 'edi.PNG'; 
                   editButton.addEventListener("click", function() {
                    handleedit(index,nameoftask);
                    });
                    
  // Append the tasks and buttons to the element link created
        document.getElementById('mytask').appendChild(link3)
        link3.appendChild(link);
        link3.appendChild(link2);
        link2.appendChild(check);
        link2.appendChild(trashButton);
        link2.appendChild(completeButton);
        link2.appendChild(editButton);  
        if(x.status!=='notcompleted'){
          link.classList.add('strickethrough')
         }
    });
          } 
    //display when there is no task      
          else{ 
              var link3 = document.createElement('div');
               document.getElementById('mytask').appendChild(link3)
               var link = document.createElement('h3');
               link.classList.add('notask')
                link.textContent='No task'
                link3.classList.add('task')
                link3.appendChild(link);
        
          }
        
}
// shift from username page to the page of the app 
const removeusername=()=>{  
var name=document.getElementById('name').value
 localStorage.setItem('name',JSON.stringify(name))
} 
var user= JSON.parse(localStorage.getItem('name'))  

if(user) {
 var eli=document.querySelector(".noticenone1");
eli.classList.add('view'); 
eli.classList.remove('noticenone1');
var elia=document.querySelector('.username');
elia.classList.add('noticenone1')
var user= JSON.parse(localStorage.getItem('name'))
var head=document.createElement('h1')
head.classList.add('initiale')
var myArray = user.split('');
var initials=myArray[0]+myArray[1]
head.textContent=initials
eli.appendChild(head)
}