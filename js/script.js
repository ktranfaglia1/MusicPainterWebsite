/* Author: Kyle Tranfaglia 
   This file handles the back to top hover button
   Last Updated: 04/24/24
*/
// Listen for and handle the scroll event
window.onscroll = function scrollFunction() {
    // Check if the scroll position is greater than 250 pixels from the top
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector(".hovering_button").classList.add("show");  // Add the "show" class to the hovering button
    } else {
        document.querySelector(".hovering_button").classList.remove("show");  // Remove the "show" class from the hovering button
    }
}

// Listens for a click event on the hovering button
document.querySelector('.hovering_button').addEventListener('click', function() {
    // When the hovering button is clicked, smoothly scroll the page back to the top
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});