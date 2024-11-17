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
    ctx.strokeStyle = 'white'; // White color for the axes
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
    ctx.fillStyle = 'white'; // Text color
    ctx.font = '20px Arial'; // Font style

    // X-axis labels
    ctx.textAlign = 'center';
    ctx.fillText('Lower Level of Importance', width / 4 - 140, height / 2 + 30); // Left-side label
    ctx.fillText('Higher Level of Importance', (3 * width) / 4 + 140, height / 2 + 30); // Right-side label

    // Y-axis labels
    ctx.textAlign = 'right';
    ctx.fillText('Long Term', width / 2 - 10, height / 4 - 140); // Top label
    ctx.fillText('Short Term', width / 2 - 10, (3 * height) / 4 + 140); // Bottom label
}

// Adjust canvas size when the window is resized
window.addEventListener('resize', resizeCanvas);

// Initial setup
resizeCanvas();
