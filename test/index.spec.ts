// tslint:disable: only-arrow-functions
import { expect } from 'chai';
import { meter_reads } from '../src/meter';

describe('Index module', function() {
  describe('expected behavior', function() {
    it('should return hello world', function() {
      expect(meter_reads(null, null)).to.equal('Hello World');
    });
  });
});
