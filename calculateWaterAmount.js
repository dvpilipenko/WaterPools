const ERROR_MESSAGE = "Incorrect landscape"
const MAX_COUNT = 32000

function calculateWaterAmount(landscape) {
    if (landscape.length > MAX_COUNT) {
        return ERROR_MESSAGE
    }

    for (let land of landscape) {
        if (!Number.isFinite(land) || land < 0 || land > MAX_COUNT) {
            return ERROR_MESSAGE
        }
    }

    let maxLeft = landscape[0]
    let maxRight = landscape[landscape.length - 1]

    let left = 1;
    let right = landscape.length - 2
    let result = 0

    while (left <= right) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, landscape[left])
            result += maxLeft - landscape[left]
            left += 1
        } else {
            maxRight = Math.max(maxRight, landscape[right])
            result += maxRight - landscape[right]
            right -= 1
        }
    }

    return result
}

module.exports = calculateWaterAmount