const button = document.querySelector('.btn');

button.addEventListener('click' , addForms);

function addButton(){
    const form = document.createElement('form');
    form.classList.add('con')
    const input =document.createElement('input');
    const input2 =document.createElement('input');
    const input3 =document.createElement('input');
    input.style.marginBottom='30px';
    input2.style.marginBottom='30px';
    input3.style.marginBottom='30px';
    input.setAttribute('type' ,'text');
    input.setAttribute('placeholder' ,'name.....');
    input2.setAttribute('type' ,'text');
    input2.setAttribute('placeholder' ,'address.....');
    input2.classList.add('form-input');
    input3.setAttribute('type' ,'text');
    input3.setAttribute('placeholder' ,'email.....');
    input3.classList.add('form-input');
    const h1 = document.createElement('h1');
    h1.innerText='fill';
    input.classList.add('form-input');
    form.appendChild(h1);
    form.appendChild(input);
    form.appendChild(input2);
    form.appendChild(input3),
    document.body.appendChild(form);


}

function addForms(){
    addButton();
    addButton();
    addButton();
    button.remove();
}





