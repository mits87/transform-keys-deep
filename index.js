const transform = (input, callback) => {
    if (!input || typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(item => transform(item, callback));

    return Object.keys(input).reduce((acc, key) => {
        const val = input[key];
        acc[callback(key)] = (typeof val === 'object') ? transform(val, callback) : val;
        return acc;
    }, {});
};

exports.camelcaseKeysDeep = (obj) => transform(obj, (input) => {
  return input.replace(/.{1}/, input.charAt(0).toLowerCase())
    .replace(/(_\w)/g, (m) => m[1].toUpperCase());
});

exports.snakecaseKeysDeep = (obj) => transform(obj, (input) => {
  return input.split(/(?=[A-Z])/).join('_').toLowerCase();
});
