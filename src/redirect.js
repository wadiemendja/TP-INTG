const items = document.querySelectorAll('.item');
console.log(items)
items.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        const dataType = event.target.dataset;
        console.log(dataType);
    });
});