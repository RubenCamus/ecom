import { PasswordValidators } from './password-validators';

describe('PasswordValidators', () => {
  it('should create an instance', () => {
    const directive = new PasswordValidators();
    expect(directive).toBeTruthy();
  });
});
