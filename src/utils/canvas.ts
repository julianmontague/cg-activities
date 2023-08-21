export function setupStage(): HTMLCanvasElement {
    const containerNode = document.createElement('div');
    containerNode.classList.add('.card');
    const canvasNode = document.createElement('canvas');
    canvasNode.width = 512;
    canvasNode.height = 512;
    canvasNode.classList.add('.stage');
    containerNode.appendChild(canvasNode);

    document.querySelector('body').appendChild(containerNode);

    return canvasNode;
}