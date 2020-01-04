const { camelcaseKeysDeep, snakecaseKeysDeep } = require('./index');

describe('index.js', () => {
  describe('camelcaseKeysDeep', () => {
    const MOCKED_OBJECT = {
      key_one: 1,
      keyTwo: 2,
      Key_three_deep: [
        {
          keyDeep_one: 'one',
          key_deepTwo: 'two',
        },
      ],
    };

    it('should transform deeply object keys from snakecase to camelcase', () => {
      expect(camelcaseKeysDeep(MOCKED_OBJECT)).toEqual({
        keyOne: 1,
        keyTwo: 2,
        keyThreeDeep: [
          {
            keyDeepOne: 'one',
            keyDeepTwo: 'two',
          },
        ],
      })
    });
  });

  describe('snakecaseKeysDeep', () => {
    const MOCKED_OBJECT = {
      keyOne: 1,
      keyTwo: 2,
      keyThreeDeep: [
        {
          keyDeep: 'one',
          KeyDeepTwo: 'two',
        },
      ],
    };

    it('should transform deeply object keys from camelcase to snakecase', () => {
      expect(snakecaseKeysDeep(MOCKED_OBJECT)).toEqual({
        key_one: 1,
        key_two: 2,
        key_three_deep: [
          {
            key_deep: 'one',
            key_deep_two: 'two',
          },
        ],
      })
    });
  });
});
