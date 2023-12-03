//  Function to handle the task added 
    const handlesubmit=()=>{  
      var task=document.getElementById('task').value
      var category=document.getElementById('category').value;
      var elements={taske:task,categorie:category,status:'notcompleted',genre:'notimportant'}
      
      var taskupadte=[...Newtask]
     
      taskupadte.push(elements)
      localStorage.setItem('todolist4',JSON.stringify(taskupadte))
      
  
    }