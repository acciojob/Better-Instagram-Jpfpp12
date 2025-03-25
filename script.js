//your code here
// Get all draggable image elements
const images = document.querySelectorAll('.image');

// Store the element being dragged
let draggedElement = null;

// Add event listeners for drag events
images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

// Function to handle dragstart event
function dragStart(e) {
  draggedElement = e.target; // The element being dragged
  e.dataTransfer.setData('text', draggedElement.innerText); // Store the content of the dragged element
  setTimeout(() => {
    draggedElement.style.opacity = '0.5'; // Reduce opacity for visual feedback
  }, 0);
}

// Function to allow dropping by preventing the default action
function dragOver(e) {
  e.preventDefault();
}

// Function to highlight the target div when the dragged element enters it
function dragEnter(e) {
  e.preventDefault();
  e.target.style.border = '2px dashed #00c3ff'; // Highlight the div with a border
}

// Function to remove the highlight when the dragged element leaves the target
function dragLeave(e) {
  e.target.style.border = ''; // Remove the border when leaving
}

// Function to handle the drop action
function drop(e) {
  e.preventDefault();
  if (draggedElement !== e.target) {
    // Swap the positions of the dragged element and the target element
    const draggedText = draggedElement.innerText;
    const targetText = e.target.innerText;
    
    draggedElement.innerText = targetText;
    e.target.innerText = draggedText;
  }

  e.target.style.border = ''; // Reset the border after the drop
}

// Function to reset the opacity and highlight when the drag ends
function dragEnd(e) {
  draggedElement.style.opacity = ''; // Reset opacity
}
