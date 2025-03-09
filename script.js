document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const creditsButton = document.getElementById("credits-button");
    const solutionCanvas = document.getElementById("solution-canvas");
    const ctx = solutionCanvas.getContext("2d");
    const mazeContainer = document.getElementById("maze-container");


    let basketballImg = new Image();
    basketballImg.src = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png";
    let imageLoaded = false;

    let hoopImg = new Image();
    hoopImg.src = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basketball_hoop.svg";
    let hoopLoaded = false;

    basketballImg.onload = function () {
        imageLoaded = true;
    };

    hoopImg.onload = function () {
        hoopLoaded = true;
    };


    const path = [
        { x: 234, y: 2 }, { x: 234, y: 10 }, { x: 250, y: 10 }, { x: 250, y: 26 },
        { x: 266, y: 26 }, { x: 266, y: 42 }, { x: 282, y: 42 }, { x: 282, y: 74 },
        { x: 266, y: 74 }, { x: 266, y: 90 }, { x: 234, y: 90 }, { x: 234, y: 74 },
        { x: 154, y: 74 }, { x: 154, y: 42 }, { x: 122, y: 42 }, { x: 122, y: 106 },
        { x: 138, y: 106 }, { x: 138, y: 154 }, { x: 170, y: 154 }, { x: 170, y: 186 },
        { x: 186, y: 186 }, { x: 186, y: 170 }, { x: 250, y: 170 }, { x: 250, y: 218 },
        { x: 234, y: 218 }, { x: 234, y: 250 }, { x: 202, y: 250 }, { x: 202, y: 234 },
        { x: 186, y: 234 }, { x: 186, y: 250 }, { x: 170, y: 250 }, { x: 170, y: 266 },
        { x: 202, y: 266 }, { x: 202, y: 298 }, { x: 186, y: 298 }, { x: 186, y: 314 },
        { x: 170, y: 314 }, { x: 170, y: 330 }, { x: 186, y: 330 }, { x: 186, y: 346 },
        { x: 154, y: 346 }, { x: 154, y: 394 }, { x: 138, y: 394 }, { x: 138, y: 330 },
        { x: 122, y: 330 }, { x: 122, y: 346 }, { x: 90, y: 346 }, { x: 90, y: 362 },
        { x: 58, y: 362 }, { x: 58, y: 346 }, { x: 42, y: 346 }, { x: 42, y: 330 },
        { x: 58, y: 330 }, { x: 58, y: 314 }, { x: 42, y: 314 }, { x: 42, y: 298 },
        { x: 10, y: 298 }, { x: 10, y: 314 }, { x: 26, y: 314 }, { x: 26, y: 346 },
        { x: 10, y: 346 }, { x: 10, y: 426 }, { x: 26, y: 426 }, { x: 26, y: 442 },
        { x: 42, y: 442 }, { x: 42, y: 458 }, { x: 26, y: 458 }, { x: 26, y: 474 },
        { x: 58, y: 474 }, { x: 58, y: 442 }, { x: 74, y: 442 }, { x: 74, y: 410 },
        { x: 106, y: 410 }, { x: 106, y: 394 }, { x: 122, y: 394 }, { x: 122, y: 410 },
        { x: 154, y: 410 }, { x: 154, y: 426 }, { x: 138, y: 426 }, { x: 138, y: 458 },
        { x: 122, y: 458 }, { x: 122, y: 474 }, { x: 186, y: 474 }, { x: 186, y: 458 },
        { x: 202, y: 458 }, { x: 202, y: 426 }, { x: 234, y: 426 }, { x: 234, y: 442 },
        { x: 218, y: 442 }, { x: 218, y: 474 }, { x: 234, y: 474 }, { x: 234, y: 458 },
        { x: 250, y: 458 }, { x: 250, y: 442 }, { x: 266, y: 442 }, { x: 266, y: 474 },
        { x: 250, y: 474 }, { x: 250, y: 482 }, { x: 250, y: 492 }, { x: 250, y: 502 }
    ];
    
    
    creditsButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh
        Swal.fire({
            title: "Credits",
            html: `<div style='text-align: left; font-size: 16px;font-family: "Times New Roman", serif !important; padding: 10px;'>
                    <p><strong>Dijak: </strong> <span style='color: "#FF6723";'>Aljaž Jurjavčič</span></p>
                    <p><strong>Mentor: </strong> <span style='color: "#FF6723";'>Boštjan Vouk</span></p>
                    <p><strong>Razred: </strong> <span style='color: "#FF6723";'>4. Rb</span></p>
                    </div>`,
            icon: "info",
            iconColor: "#FF6723", // Change icon color to selected color
            confirmButtonColor: "#FF6723", // Change confirm button color
            confirmButtonText: "OK",
            background: "#222",
            color: "#fff", // Text color stays the same (white)
            backdrop: false,
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button'
            }

            
        });
    });

    document.getElementById('info-button').addEventListener("click", function () {
        Swal.fire({
            title: "Informations",
            html: `<div style='text-align: left; font-size: 16px; font-family: "Times New Roman", serif !important; padding: 10px'>
                    <p><strong>Basketball Maze:</strong></p>
                    <p>This is a fun and interactive maze game where the goal is to help the basketball navigate the maze.</p>
                    <p>Enjoy the challenge and try to reach the end as quickly as possible!</p>
                    </div>`,
            icon: "info",
            iconColor: "#FF6723", // Change icon color to selected color
            confirmButtonText: "OK",
            confirmButtonColor: "#FF6723",
            background: "#222",
            color: "#fff",
            backdrop: false,
            customClass: {
                popup: 'custom-swal-popup',
                confirmButton: 'custom-swal-button'
            }
        });
    });
    
    


    let animationRunning = false;
    let currentIndex = 0;
    let progress = 0;
    const speed = 1.4;
    let pathColor = "#FF6723";

    function drawPath() {
        ctx.clearRect(0, 0, solutionCanvas.width, solutionCanvas.height);
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i <= currentIndex; i++) {
            ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.strokeStyle = pathColor;
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    

    function moveBall() {
        if (!animationRunning) return;
    
        // Move the ball along the path
        const start = path[currentIndex];
        const end = path[currentIndex + 1];
    
        let dx = end.x - start.x;
        let dy = end.y - start.y;
        let segmentLength = Math.sqrt(dx * dx + dy * dy);
    
        let stepX = (dx / segmentLength) * speed;
        let stepY = (dy / segmentLength) * speed;
    
        progress += speed / segmentLength;
    
        if (progress >= 1) {
            progress = 0;
            currentIndex++;
        }
    
        if (currentIndex >= path.length - 1) {
            animationRunning = false;
            return;
        }
    
        // Calculate the position of the ball
        let x = start.x + dx * progress;
        let y = start.y + dy * progress;
    
        // Clear only the part where the ball will move next (not the entire canvas)
        ctx.clearRect(0, 0, solutionCanvas.width, solutionCanvas.height);
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
    
        // Redraw the path up until the current ball position
        for (let i = 1; i <= currentIndex; i++) {
            ctx.lineTo(path[i].x, path[i].y);
        }
    
        ctx.strokeStyle = pathColor;
        ctx.lineWidth = 3;
        ctx.stroke();
    
        // Redraw the ball at the new position
        ctx.drawImage(basketballImg, x - 10, y - 10, 17, 17);
    
        // Recursively call the next frame
        requestAnimationFrame(moveBall);
    }



    function animateBounceToStart() {
        let startX = path[path.length - 1].x; // Start bounce at end of path
        let startY = path[path.length - 1].y;
        let ballX = startX;
        let ballY = startY;
        let bounces = 4;
        let bounceHeight = 100;
        let duration = 300;
    
        function animateBounce() {
            if (bounces <= 0) {
                animateFall();
                return;
            }
    
            let start = performance.now();
    
            function step(timestamp) {
                let progress = (timestamp - start) / duration;
                if (progress > 1) progress = 1;
    
                ballY = startY - Math.abs(Math.sin(progress * Math.PI) * bounceHeight);
    
                ctx.clearRect(0, 0, solutionCanvas.width, solutionCanvas.height);
                drawPath();
                ctx.drawImage(basketballImg, ballX - 10, ballY - 10, 17, 17);
    
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    bounces--;
                    bounceHeight /= 1.8;
                    startY = ballY;
                    requestAnimationFrame(animateBounce);
                }
            }
    
            requestAnimationFrame(step);
        }
    
        function animateFall() {
            let fallStart = performance.now();
            let startY = ballY;
            let endY = path[0].y - 10;
            let endX = path[0].x;
            let fallDuration = 500;
    
            function step(timestamp) {
                let progress = (timestamp - fallStart) / fallDuration;
                if (progress > 1) progress = 1;
    
                ballX = startX + (endX - startX) * progress;
                ballY = startY + (endY - startY) * progress;
    
                ctx.clearRect(0, 0, solutionCanvas.width, solutionCanvas.height);
                drawPath();
                ctx.drawImage(basketballImg, ballX - 10, ballY - 10, 17, 17);
    
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    moveBall();
                }
            }
    
            requestAnimationFrame(step);
        }
    
        animateBounce();
    }
    

    startButton.addEventListener("click", function () {
        if (!animationRunning && imageLoaded) {
            animationRunning = true;
            animateBounceToStart();
        }
    });

    resetButton.addEventListener("click", function () {
        animationRunning = false;
        currentIndex = 0;
        progress = 0;
        drawPath();
        resetBallAnimation();
    });

    
});



