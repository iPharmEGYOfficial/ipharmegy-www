const core = require('@ipharmegy/core');
const identity = core.moduleIdentity.www;
const brand = core.brand;

console.log('iPharmEGY Module Loaded');
console.log(identity);
console.log(brand);
console.log(core.designSystem.tokens.colors);
