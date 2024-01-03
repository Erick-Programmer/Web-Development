/* */

//object querySelector
var svgElement = document.querySelector('svg'); //MOUSE
var maskedElement = document.querySelector('#mask-circle'); //ATUALIZADO
var circleFeedback = document.querySelector('#circle-shadow'); //ATUALIZADO
var svgPoint = svgElement.createSVGPoint(); //criando ponto (0,0) svg coordenada.

//move mouse function define for obj svg
//axis parameters define 
function cursorPoint(e, svg) {
    svgPoint.x = e.clientX; 
    svgPoint.y = e.clientY; 
    return svgPoint.matrixTransform(svg.getScreenCTM().inverse()); 
}
//refresh axis x and y for objects with move mouse

function update(svgCoords) {
    maskedElement.setAttribute('cx', svgCoords.x);
    maskedElement.setAttribute('cy', svgCoords.y);
    circleFeedback.setAttribute('cx', svgCoords.x);
    circleFeedback.setAttribute('cy', svgCoords.y);
}

//windows constructor work with move mouse event in function
window.addEventListener('mousemove', function(e) {
    update(cursorPoint(e, svgElement));
}, false);

//document receive touch finger event
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if(touch) {
        update(cursorPoint(touch, svgElement));
    }
}, false);
