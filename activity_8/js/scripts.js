//utility funcs
function get(element){
    return document.getElementById(element);
}

//app funcs
function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');
    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    title.value = "";
    text.value = "";
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    var title = get('edit-title-text')
        ,text = get('edit-content-text')
        ,content = get('display-content')
        ,titleMsg = get('edit-title-message')
        ,textMsg = get('edit-content-message');

    if(title.value === ""){
        titleMsg.textContent = "You must provide a title!";
        return;
    }
    titleMsg.textContent = "";
    
    if(text.value === ""){
        textMsg.textContent = "Post cannot be empty!";
        return;
    }
    textMsg.textContent = "";

    //create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    //add elems
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

//event handlers
window.addEventListener('load', function(){
    var newButton = get('new-button')
        ,cancelButton = get('cancel-button')
        ,saveButton = get('save-button');
    
    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);

});