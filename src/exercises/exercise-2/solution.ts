export function generateImage(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // You shoud push your rgba values to this imageDataArray
    const imageDataArray: number[] = [];

    const imageData = ctx.createImageData(imgWidth, imgHeight);

    // Your code goes here:
    for (let y = 0; y < imgHeight; y += 1) {
        for (let x = 0; x < imgWidth; x += 1) {
            let i = (y * imgWidth + x) * 4;
            imageDataArray[i + 0] = Math.floor(x * 256/imgWidth); // R
            imageDataArray[i + 1] = Math.floor(y * 256/imgHeight); // G
            imageDataArray[i + 2] = 0; // B
            imageDataArray[i + 3] = 255; // A
        }
    }

    // This is for your reference, to see how the imageData values are put in.
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = imageDataArray[i + 0]; // R value
        imageData.data[i + 1] = imageDataArray[i + 1]; // G value
        imageData.data[i + 2] = imageDataArray[i + 2]; // B value
        imageData.data[i + 3] = imageDataArray[i + 3]; // A value
    }

    ctx.putImageData(imageData, 0, 0);
}
