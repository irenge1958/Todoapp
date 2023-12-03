//  Function to handle the task added 
    const handlesubmit=()=>{  
      var task=document.getElementById('task').value
      var category=document.getElementById('category').value;
      var elements={taske:task,categorie:category,status:'notcompleted',genre:'notimportant'}
      var taskupadte=[...Newtask]
      taskupadte.push(elements)
      localStorage.setItem('todolist4',JSON.stringify(taskupadte))
      
      
    
    }
 // Function to handle the pop up for edit   
    const handleedit=(index,nameoftask)=>{

        var el=document.querySelector(".editbackgroundnone");
           el.classList.remove('editbackgroundnone');		
           el.classList.add('editbackground'); 
           localStorage.setItem('element',JSON.stringify(index))
           localStorage.setItem('element1',JSON.stringify(nameoftask))
        // bring always the user to the top so that he can see the pop up cleary   
           window.scrollTo({
            top: 0,
            behavior: 'smooth', // You can use 'auto' for instant scrolling
          });
          document.body.style.overflow = 'hidden';
      }
// to handle the submit of the edit pop up,getting the index or the name of task from the localStorage
      const handledit2=()=>{
        var edit=[...Newtask];
        var elementedit= JSON.parse(localStorage.getItem('element'));
        var elementedit1= JSON.parse(localStorage.getItem('element1'));
     
        var task=document.getElementById('newtask').value
            var category=document.getElementById('newcategory').value;
            if (!param1){

                edit[elementedit].taske=task ? task : edit[elementedit].taske
        edit[elementedit].categorie=category ? category : edit[elementedit].categorie
             }
            if (param1){
              edit = Newtask.map(item => {
       if (item.taske === elementedit1) {
         // Create a new object with the modified genre property
         var one=task ? task : item.taske
         var two=category ? category : item.categorie
         return { ...item, taske:one,categorie:two };
       }
       return item;
     });
            }
        
            localStorage.setItem('todolist4',JSON.stringify(edit))
            window.location.reload();
      }
// function to make the important or not important
        const makeimportant=(index,nameoftask)=>{
        
        var important=[...Newtask];
        if (!param1){
           important[index].genre='important';
        }
       if (param1){
         important = Newtask.map(item => {
      if (item.taske === nameoftask) {
    // Create a new object with the modified genre property
         return { ...item, genre: 'important' };
          }
         return item;
             });
       }
            localStorage.setItem('todolist4',JSON.stringify(important))
            window.location.reload();
         
      }
      const makeunimportant=(index,nameoftask)=>{
              
              var important=[...Newtask];
              if (!param1){
           important[index].genre='notimportant';
        }
            if (param1){
         important = Newtask.map(item => {
  if (item.taske === nameoftask) {
    // Create a new object with the modified genre property
    return { ...item, genre: 'notimportant' };
  }
  return item;
});}
                  localStorage.setItem('todolist4',JSON.stringify(important))
                  window.location.reload();   
            } 

//  function to delete the task
   const handleDelete=(index,nameoftask)=>{
    var deletee=[...Newtask];
    if (!param1){
        deletee.splice(index,1);
     }
     if (param1){
        deletee = Newtask.filter((item) => {
       return item.taske !== nameoftask
    });}
      localStorage.setItem('todolist4',JSON.stringify(deletee))
      window.location.reload();
}
// function to complete the task
const handlecomplete=(index,nameoftask)=>{
  var complete=[...Newtask];
  if (!param1){
    complete[index].status='completed'
 }
 if (param1){
    complete = Newtask.map(item => {
if (item.taske === nameoftask) {

return { ...item, status: 'completed' };
}
return item;
});}
      localStorage.setItem('todolist4',JSON.stringify(complete))
      window.location.reload();
}


