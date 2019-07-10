import sameValue from 'src/same-value-x';

/* eslint-disable-next-line compat/compat */
const hasSymbols = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const itHasSymbols = hasSymbols ? it : xit;

describe('sameValue', function() {
  it('sameValue a function', function() {
    expect.assertions(1);
    expect(typeof sameValue).toBe('function');
  });

  it('works with primitives', function() {
    expect.assertions(7);
    expect(sameValue()).toBe(true, 'two absent args are the same');
    expect(sameValue(undefined)).toBe(true, 'undefined & one absent arg are the same');
    expect(sameValue(undefined, undefined)).toBe(true, 'undefined sameValue undefined');
    expect(sameValue(null, null)).toBe(true, 'null sameValue null');
    expect(sameValue(true, true)).toBe(true, 'true sameValue true');
    expect(sameValue(false, false)).toBe(true, 'false sameValue false');
    expect(sameValue(true, false)).toBe(false, 'true sameValue not false');
  });

  it('works with NaN', function() {
    expect.assertions(1);
    expect(sameValue(NaN, NaN)).toBe(true, 'NaN sameValue NaN');
  });

  it('differentiates zeroes', function() {
    expect.assertions(3);
    expect(sameValue(0, 0)).toBe(true, '+0 sameValue +0');
    expect(sameValue(-0, -0)).toBe(true, '-0 sameValue -0');
    expect(sameValue(0, -0)).toBe(false, '+0 sameValue not -0');
  });

  it('nonzero numbers', function() {
    expect.assertions(4);
    expect(sameValue(Infinity, Infinity)).toBe(true, 'infinity sameValue infinity');
    expect(sameValue(-Infinity, -Infinity)).toBe(true, 'infinity sameValue infinity');
    expect(sameValue(42, 42)).toBe(true, '42 sameValue 42');
    expect(sameValue(42, -42)).toBe(false, '42 sameValue not -42');
  });

  it('strings', function() {
    expect.assertions(3);
    expect(sameValue('', '')).toBe(true, 'empty string sameValue empty string');
    expect(sameValue('foo', 'foo')).toBe(true, 'string sameValue string');
    expect(sameValue('foo', 'bar')).toBe(false, 'string sameValue not different string');
  });

  it('objects', function() {
    expect.assertions(2);
    const obj = {};
    expect(sameValue(obj, obj)).toBe(true, 'object sameValue same object');
    expect(sameValue(obj, {})).toBe(false, 'object sameValue not different object');
  });

  itHasSymbols('Symbols', function() {
    expect.assertions(3);
    /* eslint-disable-next-line compat/compat */
    expect(sameValue(Symbol.iterator, Symbol.iterator)).toBe(true, 'Symbol.iterator sameValue itself');
    /* eslint-disable-next-line compat/compat */
    expect(sameValue(Symbol(''), Symbol(''))).toBe(false, 'different Symbols are not equal');
    /* eslint-disable-next-line compat/compat */
    expect(sameValue(Symbol.iterator, Object(Symbol.iterator))).toBe(false, 'Symbol.iterator sameValue not boxed form of itself');
  });
});
