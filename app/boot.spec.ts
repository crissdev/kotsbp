import * as boot from './boot';


describe('boot', () => {
  'use strict';

  it('should define run method', () => {
    expect(boot.run).toBeDefined();
  });

});
