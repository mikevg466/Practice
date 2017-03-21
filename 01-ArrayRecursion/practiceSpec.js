/*
Jasmine template

describe("", function(){
  beforeEach(function(){});
  it("", function(){
    expect().toEqual();
  });
});
*/

/*NOTE: Don't use array.length to get the length, recurse through the array*/

var empty, one, two, three, four, eleven, varied, nullFilled;
empty = [];
one = [1];
two = [1,2];
three = [1,2,3];
four = [11,22,33,44];
eleven = [101, 202, 303, 404, 505, 6, 7, 8, 9, 10, 101];
varied = [[1, 2, 3],5,{name:"Mike",town:"Mt Laurel",state:"NJ"}, function(){console.log("Hello World!");}];
flatVaried = [1,5,{name:"Mike",town:"Mt Laurel",state:"NJ"}, function(){console.log("Hello World!");}];
nullFilled = [null, undefined];
multiTwo = [[1, 2], [3, 4], [5, 6, 7], [8, 9]];
multiThree = [[[1, 2], [3, 4], [5, 6]], [[7, 8], [9, 10]], [[11, 12], [13, 14]]];
multiRagged = [1, 2, [[4, 5], [[6, 7], [8, 9], 10]], [11, 12], 3];

describe("function countElements uses Recursive to count elements", function(){

  it("Works for an empty array", function(){
    expect(countElements(empty)).toEqual(0);
  });

  it("Works for different sized arrays", function(){
    expect(countElements(one)).toEqual(1);
    expect(countElements(two)).toEqual(2);
    expect(countElements(three)).toEqual(3);
    expect(countElements(four)).toEqual(4);
    expect(countElements(eleven)).toEqual(11);
  });

  it("Works for arrays with different object types", function(){
    expect(countElements(flatVaried)).toEqual(4);
    expect(countElements(nullFilled)).toEqual(2);
  });
});

describe("deepCountElements uses looping to count elements in multidim array", function(){

  it("Works for an empty array", function(){
    expect(deepCountElements(empty)).toEqual(0);
  });

  it("Works for one dimensional arrays", function(){
    expect(deepCountElements(one)).toEqual(1);
    expect(deepCountElements(two)).toEqual(2);
    expect(deepCountElements(three)).toEqual(3);
    expect(deepCountElements(four)).toEqual(4);
    expect(deepCountElements(eleven)).toEqual(11);
  });
  it("Works for one dimensional arrays with varied objects", function(){
    expect(deepCountElements(flatVaried)).toEqual(4);
    expect(deepCountElements(nullFilled)).toEqual(2);
  });

  it("Works for multidim arrays", function(){
    expect(deepCountElements(multiTwo)).toEqual(9);
    expect(deepCountElements(multiThree)).toEqual(14);
  });

  it("Works for multidim ragged arrays", function(){
    expect(deepCountElements(multiRagged)).toEqual(12);
  });

  it("Works for multidim arrays with different types of objects", function(){
    expect(deepCountElements(varied)).toEqual(6);
  });
});

describe("deepCountElementsRecurse uses recursion to count elements in multidim array", function(){

  it("Works for an empty array", function(){
    expect(deepCountElementsRecurse(empty)).toEqual(0);
  });

  it("Works for one dimensional arrays", function(){
    expect(deepCountElementsRecurse(one)).toEqual(1);
    expect(deepCountElementsRecurse(two)).toEqual(2);
    expect(deepCountElementsRecurse(three)).toEqual(3);
    expect(deepCountElementsRecurse(four)).toEqual(4);
    expect(deepCountElementsRecurse(eleven)).toEqual(11);
  });
  it("Works for one dimensional arrays with varied objects", function(){
    expect(deepCountElementsRecurse(flatVaried)).toEqual(4);
    expect(deepCountElementsRecurse(nullFilled)).toEqual(2);
  });

  it("Works for multidim arrays", function(){
    expect(deepCountElementsRecurse(multiTwo)).toEqual(9);
    expect(deepCountElementsRecurse(multiThree)).toEqual(14);
  });

  it("Works for multidim ragged arrays", function(){
    expect(deepCountElementsRecurse(multiRagged)).toEqual(12);
  });

  it("Works for multidim arrays with different types of objects", function(){
    expect(deepCountElementsRecurse(varied)).toEqual(6);
  });
});
