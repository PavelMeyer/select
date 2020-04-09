window.addEventListener('load', () => {
    const select = document.querySelector('.select');
    select.classList.add('close');

    select.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log(event.target);
        select.classList.toggle('close');
    });

    const selectedOption = document.createElement('div');
    selectedOption.classList.add('selected-option');

    const optionsWrapper = document.createElement('div');
    optionsWrapper.classList.add('options-wrapper');

    select.appendChild(selectedOption);

    select.appendChild(optionsWrapper);


    for (let i = 0; i < 3000; i++) {
        const option = document.createElement('div');

        option.classList.add('option');
        option.setAttribute('data-value', i);
        option.innerText = i;
        optionsWrapper.appendChild(option);
    }

    optionsWrapper.addEventListener('click', ev => {
        if (!ev.target.classList.contains('option')) {
            return;
        }

        const value = ev.target.dataset.value;

        selectedOption.innerText = value;
    });

    const options = Array.from(optionsWrapper.childNodes);

    selectedOption.innerText = options[0].innerText;

    let topOffset = select.getBoundingClientRect().height;


    optionsWrapper.setAttribute('style', 'top:' + (topOffset + 5) + 'px');

    window.addEventListener('click', () => {
        debugger;
        select.classList.add('close');
    })


});
