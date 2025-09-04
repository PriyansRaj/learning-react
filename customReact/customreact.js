function customRender(reactElement,container){
    // const domELemenet = document.createElement(reactElement.type);
    // domELemenet.innerHTML = reactElement.children;
    // domELemenet.setAttribute("href", reactElement.props.href);
    // domELemenet.setAttribute("target",reactElement.props.target);
    // container.appendChild(domELemenet);
    const domELement = document.createElement(reactElement.type);
    domELement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === "children") continue;
        domELement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domELement)
}
const reactElement = {
    type: 'a',
    props: {
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}
const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer)