import rootScope from './root-scope';


describe('root-scope', () => {
  'use strict';

  it('should define name', () => {
    expect(rootScope.name).toBe('kotsbp');
  });

  it('should define version', () => {
    expect(rootScope.version).toBe('0.0.0');
  });
});
