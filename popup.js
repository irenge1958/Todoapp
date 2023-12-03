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
  //  let give a notice of use to the user the first time he adds a task
 if (Newtask.length===1 && !see){
    var eli=document.querySelector(".noticenone");
       eli.classList.remove('noticenone');               
         eli.classList.add('notice');  
    }
    // script to handlepop
    const handlepop=()=>{
        var eli=document.querySelector(".notice");
     eli.classList.remove('notice');               
       eli.classList.add('noticenone');
       localStorage.setItem('see',JSON.stringify('see'))
      } 
// pop up for settings   
var set=document.getElementById('set')
head.addEventListener('click',function(){
  setting()
})
set.addEventListener("click", function() {
setting()
});


function setting(){
  
  const paramsDiv = document.createElement('div');
  paramsDiv.className = 'param';
  
  // Create the parameter div
  const parameterDiv = document.createElement('div');
  parameterDiv.className = 'parameter';

function updateBackgroundHeight() {
 
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // You can use 'auto' for instant scrolling
  });
  document.body.style.overflow = 'hidden';
}
updateBackgroundHeight() 
  // Create the close button
  const closeButton = document.createElement('span');
  closeButton.className = 'closee';
  closeButton.textContent = '+';
  closeButton.style.cssText = "position:absolute;right:13;font-size:30px;transform:rotate(45deg);font-weight: bolder;cursor:pointer";
   closeButton.addEventListener('click',function(){
    paramsDiv.className = 'params';
    document.body.style.overflow = 'auto';
   })
  // Create the h1 element for user information
  const userInfoHeading = document.createElement('h1');
  userInfoHeading.textContent = 'Info about user';

  // Create the first paragraph for user information
  const userInfoParagraph = document.createElement('p');
  var name= JSON.parse(localStorage.getItem('name'));
  userInfoParagraph.textContent=`User Name: ${name}` 

  const userInfoParagraph1 = document.createElement('p');
  var todo= JSON.parse(localStorage.getItem('todolist4'));

    var numberoft=todo?todo.length:0
 
  userInfoParagraph1.textContent=`Number of Task: ${numberoft}`
  // Create the second paragraph for user information
  const userInfoParagraph2 = document.createElement('p');
  var numberoft11=todo?.filter((x)=>{
    return x.status==='completed'
  })
  var numberoft1=numberoft11?numberoft11.length:0
 
 userInfoParagraph2.textContent=`Number of Task completed: ${numberoft1}`
  // Create the third paragraph for user information
  const userInfoParagraph3 = document.createElement('p');
  var numberoft112=todo?.filter((x)=>{
    return x.genre==='important'
  })
  var numberoft12=numberoft112?numberoft112.length:0
 
 userInfoParagraph3.textContent=`Number of important Tasks: ${numberoft12}`
  // Create the hr element
  const hrElement = document.createElement('hr');

  // Create the h1 element for settings
  const settingsHeading = document.createElement('h1');
  settingsHeading.textContent = 'Settings';

  // Create the form element
  const settingsForm = document.createElement('form');
  settingsForm.style.display = 'block';

  // Create the select element for background color change
  const bgColorSelect = document.createElement('select');
  const colorOptions = ['brown', 'gray', 'cadetblue', 'default'];

  const defaultOption = document.createElement('option');
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = 'change bg-color';
  bgColorSelect.appendChild(defaultOption);

  for (const color of colorOptions) {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    bgColorSelect.appendChild(option);
  }
  bgColorSelect.addEventListener('change',function(){
    var couleur= bgColorSelect.value;
      localStorage.setItem('color',JSON.stringify(couleur))
       var mybgcolor=JSON.parse(localStorage.getItem('color'))==='default'?'#1f1e1e':JSON.parse(localStorage.getItem('color'));  
  document.body.style.backgroundColor=mybgcolor
    })
               
 
  // Create line breaks
  const lineBreak1 = document.createElement('br');
  const lineBreak2 = document.createElement('br');

  // Create the input element for a new name
  const newNameInput = document.createElement('input');
  newNameInput.type = 'text';
  newNameInput.placeholder = 'new name';
  newNameInput.required = true;
  // Create the button element
  const okButton = document.createElement('button');
  okButton.type = 'submit';
  okButton.textContent = 'ok';
  okButton.style.marginLeft='10px'
  // Append elements to the form
  settingsForm.appendChild(bgColorSelect);
  settingsForm.appendChild(lineBreak1);
  settingsForm.appendChild(lineBreak2);
  settingsForm.appendChild(newNameInput);
  settingsForm.appendChild(okButton);
  settingsForm.addEventListener('submit',function(){
    localStorage.setItem('name',JSON.stringify(newNameInput.value))
  })
  // Create the paragraph for "see again the notice of user"
  const noticeParagraph = document.createElement('p');
  noticeParagraph.style.color = 'blue';
  noticeParagraph.textContent = 'See again the notice of use';
  noticeParagraph.style.cursor='pointer'
  noticeParagraph.addEventListener('click',function(){
    var eli=document.querySelector(".noticenone");
   eli.classList.remove('noticenone');               
     eli.classList.add('notice'); 
     paramsDiv.className = 'params';

  })
  // Append all elements to the parameter div
  parameterDiv.appendChild(closeButton);
  parameterDiv.appendChild(userInfoHeading);
  parameterDiv.appendChild(userInfoParagraph);
  parameterDiv.appendChild(userInfoParagraph1);
  parameterDiv.appendChild(userInfoParagraph2);
  parameterDiv.appendChild(userInfoParagraph3);
  parameterDiv.appendChild(hrElement);
  parameterDiv.appendChild(settingsHeading);
  parameterDiv.appendChild(settingsForm);
  parameterDiv.appendChild(noticeParagraph);

  // Append the parameter div to the main container div
  paramsDiv.appendChild(parameterDiv);

  // Append the main container div to the body
  document.body.appendChild(paramsDiv);             
                    }


document.body.style.backgroundColor=JSON.parse(localStorage.getItem('color'))==='default'?'#1f1e1e':JSON.parse(localStorage.getItem('color'))             
