const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

const OnInput = (e) => {
    console.log(e.target.value);
    const resize = e.target.value +'px';
    refs.span.style.fontSize = resize;

}

refs.input.addEventListener('input', OnInput)