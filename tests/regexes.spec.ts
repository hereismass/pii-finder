import { containsPII } from '../src';

describe('containsPII', () => {
  it('should exists', () => {
    expect(containsPII).toBeDefined();
  });

  it('should detect if a text contains an email address', () => {
    expect(containsPII('my email is toto@toto.com')).toBeTruthy();
  });
});
