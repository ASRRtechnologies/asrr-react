export  function getScrollPosition(name, props){
    let element = document.getElementById(name);
    let elementPos = element.getBoundingClientRect().top;
    let elementHeight = element.offsetHeight;
    props.position({elementPos:elementPos, elementHeight:elementHeight}, name);
};
