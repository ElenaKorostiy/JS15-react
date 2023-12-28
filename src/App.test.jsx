test("check if 5 > 1", () => {
  // arrange
  const myVar = 5;
  const mySecondVar = 1;
  // act
  const isBigger = myVar > mySecondVar;
  // assert
  expect(isBigger).toBeTruthy();
});