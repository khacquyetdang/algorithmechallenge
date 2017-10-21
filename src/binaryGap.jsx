// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

export default function binaryGap(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    //return 0;
    var binaryNumber = dec2bin(N);
    const  findGap = (index, aBinaryNumber, target) => {
        var gapIndex = index;
        while (gapIndex + 1 < aBinaryNumber.length && aBinaryNumber[gapIndex + 1] === target)
        {
            gapIndex++;
        }
        if (gapIndex < aBinaryNumber.length){
            return { response : true, gapIndexEnd : gapIndex + 1, gapIndexStart : index, target : target } 
        }
        return { response : false, gapIndexEnd : gapIndex + 1, gapIndexStart : index, target : target }         
    };
    var start = 0;
    var resultInterVal = [];
    while (start < binaryNumber.length)
    {
        var gapInterval = findGap(start, binaryNumber, binaryNumber[start]);
        start = gapInterval.gapIndexEnd;
        resultInterVal.push(gapInterval);   
    }

    var maxZeroSequence = resultInterVal.reduce(function(maxZeroSequence, gapInterval)
    {
        if (gapInterval.target === "0") {
            if (gapInterval.gapIndexStart > 0 && gapInterval.gapIndexEnd < binaryNumber.length
            )
            {
                var zeroSequenceLength = gapInterval.gapIndexEnd - gapInterval.gapIndexStart;
                if (maxZeroSequence < zeroSequenceLength)
                {
                    maxZeroSequence = zeroSequenceLength;
                }
            }

        }
        return maxZeroSequence;
    }, 0);
    return maxZeroSequence;
}