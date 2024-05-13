//what actually react does:


function customRender(reactElement, container){

    //creating a HTML tag with attributes and innerHTML from scratch based on react Element
    // should emulate :      < a href="https://google.com" >Click me to visit google </a>

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children

    //attributes of a tag:
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    

    for ( const prop in reactElement.props){
        if (prop==='children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    //Like Render in React, we can append this tag with the container i.e. root of doucment
    container.appendChild(domElement)


}


const reactElement = {
    // < a href="https://google.com" >Click me to visit google </a>
    type: 'a',
    props: {
        href :'https://google.com',
        target: '_blank'
    },

    children: 'Click me to visit google'
}
// < reactElement />

const mainContainer=document.querySelector('#root')
//The root component is selected to render in React




customRender(reactElement, mainContainer);
//render : adding reactElment in mainContainer(root)