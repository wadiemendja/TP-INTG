const items = document.querySelectorAll('.item');

items.forEach((element) => {
    element.addEventListener('click', (event) => {
        // getting data type admin / student / teacher
        const dataType = event.target.dataset;
        console.log(dataType)
        location.href = "/login?" + dataType.type;
    });
});