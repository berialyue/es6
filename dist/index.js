'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// const a = "berialyue"


// var i = 1;
// for(let i = 0;i<10;i++){
//   console.log(`循环体中${i}`)
// }

// console.log(`循环体外${i}`)

// let [a,[b,c],d] = [1,[3,4],5]
// let[foo='true']=['false']
var _boo$foo = { boo: 'yueduming', foo: 'berialyue' },
    foo = _boo$foo.foo,
    boo = _boo$foo.boo;

var bar = void 0;
var _bar = { bar: "123" };
bar = _bar.bar;

var _berial = 'berial',
    _berial2 = _slicedToArray(_berial, 6),
    a = _berial2[0],
    b = _berial2[1],
    c = _berial2[2],
    d = _berial2[3],
    e = _berial2[4],
    f = _berial2[5];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(foo + boo);
console.log(bar);
