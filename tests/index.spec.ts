import { containsPII } from '../src';

describe('containsPII', () => {
  it('should exists', () => {
    expect(containsPII).toBeDefined();
  });

  it('should detect if a text contains an email address', () => {
    expect(containsPII('my email is toto@toto.com')).toBeTruthy();
  });

  it('should detect if a text contains an ipv4 address', () => {
    expect(containsPII('my ip is 192.168.1.1')).toBeTruthy();
  });

  it('should detect if a text contains an ipv6 address', () => {
    expect(containsPII('my ip is ::1')).toBeTruthy();
  });
});
