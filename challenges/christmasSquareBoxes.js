// https://app.codesignal.com/challenge/uhEJTTKzo6qMwTawf
const christmasSquareBoxes = boxes => {
    let nums = {};
    for (let box of boxes) {
        nums[box] ? nums[box]++ : nums[box] = 1;
    }
    return Math.max(...Object.values(nums));
}
