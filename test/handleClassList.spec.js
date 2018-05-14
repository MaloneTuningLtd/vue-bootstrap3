import handler from '@/lib/handleClassList';

describe('handleClassList', () => {
  test('accepts an array of class names', () => {
    const list = ['a', 'big', 'fox'];
    const list2 = ['jumped', 'over', 'the', 'wall'];

    const result = handler(list, list2);
    
    expect(result).toEqual(list.concat(list2));
  });

  test('accepts a string of class names', () => {
    const list = ['a', 'big', 'fox'];
    const list2 = 'jumped over the wall';

    const result = handler(list, list2);

    expect(result).toEqual(list.concat(list2.split(' ')));
  });

  test('accepts a object of class names (key) and truthyness (value)', () => {
    const list = ['a', 'big', 'fox'];
    const list2 = { jumped: true, over: true, the: true, wall: true, no: false };

    const result = handler(list, list2);

    const l2 = Object.keys(list2).filter(key => (list2[key] === true));
    const expected = list.concat(l2);

    expect(result).toEqual(expected);
  });
});
