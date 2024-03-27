 let salamBtn = document.querySelector('button');
salamBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of Student');
    salamBtn.textContent = 'Roll No. 1:' + name;
}