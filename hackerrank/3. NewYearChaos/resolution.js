function minimumBribes(queue) {
    let ans = 0;
    for (let i = queue.length - 1; i >= 0; i--) {

        // if the element bribes more than 2
        if (queue[i] > i + 3) {
            console.log("Too chaotic");
            return;
        }

        // arrays starts from 0 so we always have to subtract 1 in queue to find the original position
        const originalPos = queue[i] - 1;

        // looping from the originalPosition - 1 until the current position of the element
        for (let j = Math.max(0, originalPos - 1); j < i; j++) {
            // if exist a number greater increement
            if (queue[j] > queue[i]) ans++;
        }
    }
    console.log(ans);
}

ar = [2, 1, 5, 3, 4];
ar2 = [2, 5, 1, 3, 4];

ar3 = [5, 1, 2, 3, 7, 8, 6, 4];
ar4 = [1, 2, 5, 3, 7, 8, 6, 4];

minimumBribes(ar4);