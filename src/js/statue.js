function solution(A) {
    let totalRays = 0;

    const quadrants = {
        1: [],
        2: [],
        3: [],
        4: [],
    }

    A.forEach(({ x, y }) => {
        let quadrant = null;
        // quadrant 1:  x && y
        if (x > 0 && y > 0) {
            quadrant = 1;
        }
        // quadrant 2: -x && y
        else if (x < 0 && y > 0) {
            quadrant = 2;
        }
        // quadrant 3: -x && -y
        else if (x < 0 && y < 0) {
            quadrant = 3;
        }
        // quadrant 4:  x && -y
        else if (x > 0 && y < 0) {
            quadrant = 4;
        }

        quadrants[quadrant].push({ x, y });
    })

    for (key in quadrants) {
        const quadrant = quadrants[key];

        // if only one or no statues in length we add it to total rays
        if (quadrant.length <= 1) {
            totalRays += quadrant.length;
        }
        // else there are multiple statues and we can figure out least amount of rays necessary
        else {
            totalRays += filterQuad(quadrant);
        }
    }

    return totalRays;
}

/**
 * @returns {number}
 */
function filterQuad(quad) {
    let rays = quad.length;

    for (let slow = 0; slow < quad.length; slow += 1) {
        let slowStatue = quad[slow];

        for (let fast = 1; fast < quad.length; fast += 1) {
            let fastStatue = quad[fast];

            const isFactorial = checkFactorial(slowStatue, fastStatue);

            if (isFactorial) {
                quad.splice(fast, 1);
                rays -= 1;
                fast -= 1;
            }
        }
    }

    return rays;
}

/**
 * @returns {boolean}
 */
function checkFactorial(statue1, statue2) {
    const isXMultiple = (((statue1.x / statue2.x) * statue2.x) === statue2.x)
    const isYMultiple = (((statue1.y / statue2.y) * statue2.y) === statue2.y)

    return isXMultiple && isYMultiple;
}
