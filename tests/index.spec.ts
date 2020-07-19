import { containsPII, anonymizePII } from '../src';

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

describe('anonymizePII', () => {
  it('should exists', () => {
    expect(anonymizePII).toBeDefined();
  });

  it('should replace email addresses in a text', () => {
    expect(
      anonymizePII(
        'my email is toto@toto.com, and I will send an email to tata@tata.com'
      )
    ).toBe('my email is ***email***, and I will send an email to ***email***');
  });

  it('should replace ipv4 addresses in a text', () => {
    expect(anonymizePII('my ip is 192.168.1.1, and I use 8.8.8.8 as DNS')).toBe(
      'my ip is ***ip address***, and I use ***ip address*** as DNS'
    );
  });

  it('should replace email addresses in a text', () => {
    expect(
      anonymizePII('my ip is ::1, and I use 2001:4860:4860::8888 as DNS')
    ).toBe('my ip is ***ip address***, and I use ***ip address*** as DNS');
  });

  it('should replace multiple PII in a text', () => {
    expect(
      anonymizePII(
        'my email is toto@toto.com, and I use 2001:4860:4860::8888 as DNS'
      )
    ).toBe('my email is ***email***, and I use ***ip address*** as DNS');
  });
});
