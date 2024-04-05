
function customRender(reactElement, container){
    // const element = document.createElement(reactElement.type)
    // element.innerText = reactElement.children
    // element.setAttribute("href", reactElement.props.href)
    // element.setAttribute("target", reactElement.props.target)
    // container.appendChild(element)



    const element = document.createElement(reactElement.type)
    element.innerText = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        element.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(element)
}

const reactElement ={
    type:"a",
    props:{
        href : "google.com",
        target : "_blank"
    },
    children : "click here to go google"
}


const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)