import handler from '@/lib/handleListeners';

describe('handleListeners', () => {
  test('ignores the listener arg list if it\'s invalid', () => {
    const result = handler(['no']);

    expect(result).toEqual({
      on: expect.any(Object),
    });
  });

  test('merges all event handlers', () => {
    const result = handler(
      {
        click: function () {},
        submit: function () {},
      },
      {
        cancel: function () {},
        deny: function () {},
      },
      [
        'no',
      ]
  );

    expect(result).toEqual({
      on: {
        click: expect.any(Function),
        submit: expect.any(Function),
        cancel: expect.any(Function),
        deny: expect.any(Function),
      },
    });
  });
});
