


const myRoot = document.getElementById('root');

const title = document.createElement('h1');
title.innerText = 'todolist';
title.className = 'title';
myRoot.append(title);

const mySubscribe = document.createElement('div');
mySubscribe.className = 'subscribe';
myRoot.append(mySubscribe);

const myInput = document.createElement('input');
myInput.id = 'myInput';
myInput.placeholder = "what needs to be done?";
mySubscribe.append(myInput);

const myAdd = document.createElement('span');
myAdd.className = 'addBtn';
myAdd.innerText = '+';
mySubscribe.append(myAdd);

const myContent = document.createElement('div');
myContent.className = 'myItems';
myRoot.append(myContent);

myAdd.addEventListener('click', () => {
    if (myInput.value !== '') {
        const item = document.createElement('div');
        item.className = 'item';
        myContent.append(item);

        const left = document.createElement('div');
        left.className = 'left';
        item.append(left);

        const checkBox = document.createElement('input');
        checkBox.className = 'checkbox';
        checkBox.type = 'checkbox';
        left.append(checkBox);

        const text = document.createElement('div');
        text.innerText = myInput.value;
        text.className = 'text';
        left.append(text);

        const myDelete = document.createElement('div');
        myDelete.className = 'delete';
        myDelete.innerHTML = '&#10005';
        item.append(myDelete);

        myDelete.addEventListener('click', () => {
            item.remove();
        });

        checkBox.addEventListener('click', () => {
            text.classList.toggle('text--through');
        })

    }


});





















