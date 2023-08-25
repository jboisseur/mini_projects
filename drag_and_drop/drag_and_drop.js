function drag(event) {
    /* 
        Function called by ondragstart attribute on draggable div
        Specifies what data should be dragged with dataTransfer.setData() method 
    */
    event.dataTransfer.setData("text/html", event.target.id);
}

function allowDrop(event) {
    /* 
        Function called by ondragover attribute on container
        Overrides default handling and allow dropping of data or elements in this container
    */
    event.preventDefault();
}

function drop(event) {
    /* 
        Function called by ondrop attribute on container
        Overrides default handling (which is open as link) 
        Gets dragged data with dataTransfer.getData() method
        Adds a node at the end of parent's children elements
    */
    event.preventDefault();
    let data = event.dataTransfer.getData("text/html");
    event.target.appendChild(document.getElementById(data));
}

function stop(event) {
    /* 
        Function called by ondrop attribute on draggable div
        Stops propagation of preventing default inherited by container 
    */
   event.stopPropagation();
}

  