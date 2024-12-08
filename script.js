// Select the canvas element and get its 2D rendering context
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas to cover the full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCartesianPlane();
}

// Function to draw the Cartesian plane
function drawCartesianPlane() {
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Set line styles
    ctx.strokeStyle = 'black'; // White color for the axes
    ctx.lineWidth = 2;

    // Draw X-axis (horizontal line)
    ctx.beginPath();
    ctx.moveTo(0, height / 2); // Start at the middle-left of the canvas
    ctx.lineTo(width, height / 2); // End at the middle-right of the canvas
    ctx.stroke();

    // Draw Y-axis (vertical line)
    ctx.beginPath();
    ctx.moveTo(width / 2, 0); // Start at the top-middle of the canvas
    ctx.lineTo(width / 2, height); // End at the bottom-middle of the canvas
    ctx.stroke();

    // Add labels to the axes
    ctx.fillStyle = 'black'; // Text color
    ctx.font = '20px Arial'; // Font style

    // X-axis labels
    ctx.textAlign = 'center';
    ctx.fillText('Lower Level of Importance', width / 4 - 140, height / 2 + 30); // Left-side label
    ctx.fillText('Higher Level of Importance', (3 * width) / 4 + 140, height / 2 + 30); // Right-side label

    // Y-axis labels
    // Y-axis labels
    // Top label (rotated)
    ctx.save(); // Save the canvas state
    ctx.translate(width / 2 - 10, height / 4 - 140); // Move to the text position
    ctx.rotate(-Math.PI / 2); // Rotate 90 degrees counterclockwise
    ctx.textAlign = 'center'; // Align text properly for rotation
    ctx.fillText('Short Term', 0, 0); // Draw the text at the new origin
    ctx.restore(); // Restore canvas state

    // Bottom label (rotated)
    ctx.save(); // Save the canvas state
    ctx.translate(width / 2 - 10, (3 * height) / 4 + 140); // Move to the text position
    ctx.rotate(-Math.PI / 2); // Rotate 90 degrees counterclockwise
    ctx.textAlign = 'center'; // Align text properly for rotation
    ctx.fillText('Long Term', 0, 0); // Draw the text at the new origin
    ctx.restore(); // Restore canvas state
}

// Adjust canvas size when the window is resized
window.addEventListener('resize', resizeCanvas);

// Initial setup
resizeCanvas();

// Open modal on button click
document.querySelectorAll('.transparent-button').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when 'X' is clicked
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

