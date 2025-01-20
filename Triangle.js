class Triangle {
    consturctor() {
        this.type = "triangle";
        this.position = [0.0, 0.0, 0.0];
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.size = 10.0;
    }

    render() {
        var xy = this.position;
        var rgba = this.color;
        var size = this.size;
        
        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        
        // Pass the size of a point to u_Size variable
        gl.uniform1f(u_Size, size);
        
        // Draw
        var d = this.size/200.0;
        drawTriangle( [xy[0]-d, xy[1]-d, xy[0]+d, xy[1]-d, xy[0], xy[1]+d] );
        }

    drawRoy() {
        let black = [0.0, 0.0, 0.0, 1.0];
        let darkGray = [0.22, 0.18, 0.17, 1.0];
        let gray = [0.28, 0.28, 0.28, 1.0];
        let white = [1.0, 1.0, 1.0, 1.0];
        let pink = [0.84, 0.61, 0.64, 1.0];
        let brown = [0.86, 0.58, 0.38, 1.0];
        let ivory = [0.93, 0.92, 0.92, 1.0];
        let blue = [0.16, 0.33, 0.80, 1.0];
        var xy = this.position;
        var rgba = gray;
        var size = this.size;
        var d = 0.05;

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawBigSquare(0.05, 0, 4);
        drawBigSquare(-0.25, 0, 4);
        drawSquare(0.05, -0.05);
        drawSquare(-0.1, -0.05);
        drawBigSquare(0.15, 0.2, 2);
        drawBigSquare(-0.25, 0.2, 2);
        drawBigSquare(0.15, 0.35, 3);
        drawBigSquare(-0.3, 0.35, 3);
        drawRect(0.3, 0.35, 3, 'v');
        drawRect(-0.35, 0.35, 3, 'v');
        drawRect(0.1, 0.35, 2, 'v');
        drawRect(-0.15, 0.35, 2, 'v');
        drawRect(0.15, 0.3, 3, 'h');
        drawRect(-0.3, 0.3, 3, 'h');
        drawRect(0.2, 0.5, 2, 'h');
        drawRect(-0.3, 0.5, 2, 'h');
        drawRightTriangle(0.15, 0.35, 'rt');
        drawRightTriangle(0.15, 0.45, 'rb');
        drawRightTriangle(0.2, 0.5, 'rb');
        drawRightTriangle(0.25, 0.55, 'rb');
        drawRightTriangle(0.25, 0.55, 'lb');
        drawRightTriangle(0.3, 0.5, 'lb');
        drawRightTriangle(0.25, 0.25, 'lb');
        drawRightTriangle(-0.15, 0.45, 'lb');
        drawRightTriangle(-0.2, 0.5, 'lb');
        drawRightTriangle(-0.25, 0.55, 'lb');
        drawRightTriangle(-0.25, 0.55, 'rb');
        drawRightTriangle(-0.3, 0.5, 'rb');
        drawRightTriangle(-0.25, 0.25, 'rb');
        drawRightTriangle(0.1, 0.2, 'rb');
        drawRightTriangle(0.15, 0.25, 'rb');
        drawRightTriangle(-0.1, 0.2, 'lb');
        drawRightTriangle(-0.15, 0.25, 'lb');
        drawRightTriangle(0.25, 0.15, 'lb');
        drawRightTriangle(0.25, 0.15, 'lt');
        drawRightTriangle(0.25, 0.05, 'lb');
        drawRightTriangle(-0.25, 0.15, 'rb');
        drawRightTriangle(-0.25, 0.15, 'rt');
        drawRightTriangle(-0.25, 0.05, 'rb');
        drawRightTriangle(-0.15, 0.35, 'lt');

        rgba = brown;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawSquare(-0.15, 0.2);
        drawSquare(0.1, 0.2);
        drawBigSquare(0.15, -0.05, 2);
        drawBigSquare(-0.25, -0.05, 2);
        drawRightTriangle(0.25, 0.05, 'rb');
        drawRightTriangle(0.25, 0.05, 'lt');
        drawRightTriangle(-0.25, 0.05, 'lb');
        drawRightTriangle(-0.25, 0.05, 'rt');

        rgba = white;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniform1f(u_Size, size);
        drawBigSquare(-0.05, 0.05, 2);
        drawBigSquare(-0.05, 0.15, 2);
        drawBigSquare(-0.05, 0.25, 2);
        drawRect(0.05, 0.25, 2, 'v');
        drawRect(-0.1, 0.25, 2, 'v');
        drawRightTriangle(0.1, 0.3, 'lt');
        drawRightTriangle(0.05, 0.25, 'lt');
        drawRightTriangle(0.1, 0.3, 'lb');
        drawRightTriangle(-0.1, 0.3, 'rt');
        drawRightTriangle(-0.05, 0.25, 'rt');
        drawRightTriangle(-0.1, 0.3, 'rb');

        rgba = ivory;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawRect(-0.2, -0.1, 8, 'h');
        drawRect(-0.15, -0.15, 6, 'h');
        drawRect(-0.05, -0.2, 2, 'h');
        drawRightTriangle(-0.05, -0.15, 'rt');
        drawRightTriangle(0.05, -0.15, 'lt');

        rgba = pink;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawRhombus(0.25, 0.45, 1);
        drawRhombus(0.2, 0.4, 1);
        drawRhombus(-0.2, 0.4);
        drawRhombus(-0.25, 0.45);
        drawRightTriangle(-0.25, 0.35, 'lb');
        drawRightTriangle(0.25, 0.35, 'rb');
        drawBigSquare(-0.05, -0.15, 2);

        rgba = black;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawBigSquare(-0.05, -0.05, 2);
        drawBigSquare(0.1, 0.05, 2);
        drawBigSquare(-0.15, 0.05, 2);
        drawSquare(0.05, -0.1);
        drawSquare(0.1, -0.05);
        drawSquare(-0.1, -0.1);
        drawSquare(-0.15, -0.05);

        rgba = white;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawSquare(-0.15, 0.1);
        drawSquare(0.1, 0.1);
        drawRightTriangle(0.1, -0.05, 'lt');
        drawRightTriangle(0.05, -0.1, 'lt');
        drawRightTriangle(-0.1, -0.05, 'rt');
        drawRightTriangle(-0.05, -0.1, 'rt');

        rgba = darkGray;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawSquare(0.15, 0.05);
        drawSquare(-0.1, 0.05);

        rgba = blue;
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        drawRect(-0.25, -0.5, 5, 'v');
        drawRect(-0.15, -0.5, 2, 'v');
        drawRect(-0.05, -0.45, 3, 'v');
        drawRect(0.05, -0.45, 3, 'v');
        drawRect(0.15, -0.35, 2, 'v');
        drawRect(0.25, -0.5, 5, 'v');
        drawSquare(-0.2, -0.3);
        drawSquare(-0.15, -0.35);
        drawSquare(0.0, -0.3);
        drawSquare(0.0, -0.5);
        drawRightTriangle(-0.15, -0.4, 'rb');
        drawRightTriangle(0.0, -0.3, 'rb');
        drawRightTriangle(0.0, -0.45, 'rt');
        drawRightTriangle(0.05, -0.3, 'lb');
        drawRightTriangle(0.05, -0.45, 'lt');
        drawRightTriangle(0.2, -0.35, 'lb');
        drawRightTriangle(0.25, -0.35, 'rt');
        
    }
}

function drawTriangle(vertices) {
    var n = 3; // The number of vertices

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);

    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);

    // Draw
    gl.drawArrays(gl.TRIANGLES, 0, n);
}


function drawRightTriangle(x, y, shape) {
    // The variable shape defines the shape of a right triangle
    // based on where the right angle is located
    // lt = left top
    // rt = right top
    // lb = left bottom
    // rb = right bottom
    var d = 0.05;
    if (shape == 'lt') {
        drawTriangle([x, y, x+d, y, x, y-d]);
    } else if (shape == 'rt') {
        drawTriangle([x, y, x-d, y, x, y-d]);
    } else if (shape == 'lb') {
        drawTriangle([x, y, x+d, y, x, y+d]);
    } else {
        drawTriangle([x, y, x-d, y, x, y+d]);
    }
    
}
function drawSquare(x, y) {
    let d = 0.05;
    let vertices1 = [x, y, x+d, y+d, x, y+d];
    let vertices2 = [x, y, x+d, y+d, x+d, y];
    drawTriangle(vertices1);
    drawTriangle(vertices2);
}

function drawBigSquare(x, y, n) {
    var startingX = x;
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            drawSquare(x, y);
            x += 0.05;
        }
        y += 0.05;
        x = startingX;
    }
}

function drawRect(x, y, n, d) {
    if (d == 'v') {
        for(var i = 0; i < n; i++) {
            drawSquare(x, y);
            y += 0.05;
        }
    } else {
        for(var i = 0; i < n; i++) {
            drawSquare(x, y);
            x += 0.05;
        }
    }
}

function drawRhombus(x, y) {
    drawRightTriangle(x, y, 'rb');
    drawRightTriangle(x, y, 'lb');
    drawRightTriangle(x, y, 'rt');
    drawRightTriangle(x, y, 'lt');
}