export default function missingInteger(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A === null) {
        return 1;
    }
    if (A.length === 1) {
        return Math.max(A[0] + 1, 1);
    }
    A = A.sort(function (a, b) {
        return a >= b;
    });
    if (A.length === 2) {
        if (A[0] === A[1]) {
            return Math.max(A[0] + 1, 1);
        }
        if (A[0] + 1 === A[1]) {
            return Math.max(A[1] + 1, 1);
        }
        return Math.max(A[0] + 1, 1);
    }
    //console.log("left array", A.slice(0, A.length - 1));
    var left = missingInteger(A.slice(0, A.length - 1));
    var right = missingInteger(A.slice(A.length - 1));
    //console.log ("left ", left, " right ", right);
    if (left + 1 === right) {
        return right;
    }
    return Math.min(left, right);
}

export function missingIntegerInteratif(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (A === null) {
        return 1;
    }
    A = A.sort(function (a, b) {
        return a >= b;
    });

    /*
    A = A.filter(function(a) {
        return a >= 0;
    });*/


    if (A.length === 1) {
        return Math.max(A[0] + 1, 1);
    }

    var smallestMissingInteger = Number.MAX_VALUE;

    for (var index = 0; index < A.length - 1; index++) {
        var nextMissingInteger = Number.MAX_VALUE;
        var currentValue = A[index];
        var nextValue = A[index + 1]
        if (currentValue + 1 < nextValue) {
            if (currentValue < 0) {
                if (nextValue > 1)
                {
                    nextMissingInteger = 1;
                }
                else if (nextValue === 1) {
                    nextMissingInteger = 2;
                }
            } else {
                nextMissingInteger = Math.max(currentValue + 1, 1);
            }
        }
        smallestMissingInteger = Math.min(smallestMissingInteger, nextMissingInteger);
    }

    if (smallestMissingInteger === Number.MAX_VALUE) {
        smallestMissingInteger = Math.max(A[A.length - 1] + 1);
    }
    return smallestMissingInteger;
}