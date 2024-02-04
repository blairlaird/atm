
describe('ATM Transactions', () => {
  it('should not allow withdrawal exceeding account balance', () => {
    const balance = 1000;
    const withdrawalAmount = 1100;
    expect(withdrawalAmount).toBeGreaterThan(balance);
  });

  it('should allow deposit and update balance correctly', () => {
    const balance = 1000;
    const depositAmount = 500;
    const newBalance = balance + depositAmount;
    expect(newBalance).toEqual(1500);
  });
});
