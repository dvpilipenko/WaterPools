const calculateWaterAmount = require('./calculateWaterAmount');

test('when landscape is [5,2,3,4,5,4,0,3,1] should return 9', () => {
    expect(calculateWaterAmount([5,2,3,4,5,4,0,3,1])).toBe(9)
});

test('when landscape is [5,5,5,5] should return 0', () => {
    expect(calculateWaterAmount([5,5,5,5])).toBe(0)
});

test('when landscape is [5,5,4,5] should return 1', () => {
    expect(calculateWaterAmount([5,5,4,5])).toBe(1)
});

test('when landscape is [32000,0,0,32000] should return 64000', () => {
    expect(calculateWaterAmount([32000,0,0,32000])).toBe(64000)
});

test('when landscape is [32000, 0, 0, n..., n*32000 = 32000] should return 1023936000', () => {
    const arr = new Array(32000)
    arr.fill(0)
    arr[0] = 32000
    arr[31999] = 32000
    expect(calculateWaterAmount(arr)).toBe(1023936000)
});

test('when landscape contain value more than 32000 should return "Incorrect landscape"', () => {
    expect(calculateWaterAmount([5,2,3,4,5,32001,0,3,1])).toBe("Incorrect landscape")
});

test('when landscape contain value less than 0 should return "Incorrect landscape"', () => {
    expect(calculateWaterAmount([5,2,3,4,5,-1,0,3,1])).toBe("Incorrect landscape")
});

test('when landscape length more than 32000 should return "Incorrect landscape"', () => {
    const arr = new Array(32001)
    arr.fill(5)
    expect(calculateWaterAmount(arr)).toBe("Incorrect landscape")
});