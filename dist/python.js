(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
})(this, (function (CodeMirror) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var CodeMirror__namespace = /*#__PURE__*/_interopNamespace(CodeMirror);

  var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^print(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, [0, /^(?![\{\}])/, /^[^]/], /^(?![\{\}])./, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=|\:\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=(?!\=))/, [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], /^(?:\*|\*\*)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 9, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[24], -1,
     3, "atom", e[26], -1,
     3, "atom", e[27], -1,
     3, "keyword", e[32], -1,
     3, "builtin", e[30], -1,
     3, "builtin", e[7], -1,
     3, "operator", e[31], -1,
     3, "operator", e[23], -1,
     3, "number", e[25], -1,
     2, 53, -1, {"name":"string","token":"string"},
     1, 55, -1,
     3, "variable", e[10], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     "\\", 7,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 8,
     0, -1],
    ["\n", 6],
    ["\n", 6],
    [3, "keyword", e[0], 10,
     3, "keyword", e[1], 10,
     3, "keyword", e[2], 16,
     3, "keyword", e[3], 16,
     3, "keyword", e[4], 20,
     3, "keyword", e[5], 30,
     3, "keyword", e[6], 40,
     1, 67, -1,
     2, 80, 42, {"name":"Annotation","token":"meta"},
     3, "builtin", e[7], 46,
     1, 88, 48],
    [1, 6, 11],
    [1, 120, 12],
    [1, 6, 13],
    [":", 14],
    [1, 6, 15],
    [1, 127, -1],
    [1, 6, 17],
    [":", 18],
    [1, 6, 19],
    [1, 127, -1],
    [1, 6, 21],
    [1, 133, 22],
    [1, 6, 23],
    [3, "keyword", e[8], 24],
    [1, 6, 25],
    [1, 120, 26],
    [1, 6, 27],
    [":", 28],
    [1, 6, 29],
    [1, 127, -1],
    [1, 6, 31],
    [1, 120, 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [3, "keyword", e[9], 36,
     0, 33],
    [":", 37],
    [1, 6, 38],
    [1, 6, 39],
    [3, "def", e[10], 33],
    [1, 127, -1],
    [1, 6, 41],
    [1, 67, -1],
    [1, 6, 43],
    [2, 141, 44, {"name":"ArgList"},
     0, 44],
    [1, 6, 45],
    ["\n", -1],
    [1, 6, 47],
    [2, 141, -1, {"name":"ArgList"},
     1, 120, -1],
    [1, 6, 49],
    [";", 50,
     "\n", -1],
    [1, 6, 51],
    [1, 88, 52,
     0, 52],
    [1, 6, 49],
    [/^[uUrRbB]+(?=[\'\"])/, 54,
     1, 146, -1],
    [1, 146, -1],
    [3, "string", /^[uUrR]*[fF][uUrR]*(?=[\'\"])/, 56],
    [3, "string", "'''", 57,
     3, "string", "\"\"\"", 58,
     3, "string", "'", 59,
     3, "string", "\"", 60],
    [/^(?!\'\'\')/, 61,
     3, "string", "{{", 57,
     3, "string", "}}", 57,
     1, 155, 57,
     3, "string", "'''", -1],
    [/^(?!\"\"\")/, 62,
     3, "string", "{{", 58,
     3, "string", "}}", 58,
     1, 155, 58,
     3, "string", "\"\"\"", -1],
    [3, "string", "\\", 63,
     /^(?!\')/, 64,
     3, "string", "{{", 59,
     3, "string", "}}", 59,
     1, 155, 59,
     3, "string", "'", -1],
    [3, "string", "\\", 65,
     /^(?!\")/, 66,
     3, "string", "{{", 60,
     3, "string", "}}", 60,
     1, 155, 60,
     3, "string", "\"", -1],
    [3, "string", e[11], 57],
    [3, "string", e[11], 58],
    [3, "string", e[11], 59],
    [3, "string", e[12], 59],
    [3, "string", e[11], 60],
    [3, "string", e[12], 60],
    [3, "keyword", e[13], 68,
     3, "keyword", e[14], 74,
     3, "keyword", e[15], 78],
    [1, 6, 69],
    [1, 163, 70],
    [1, 6, 71],
    [":", 72],
    [1, 6, 73],
    [1, 127, -1],
    [1, 6, 75],
    [3, "def", e[10], 76],
    [1, 6, 77],
    [2, 177, -1, {"name":"FuncDef"}],
    [1, 6, 79],
    [2, 186, -1, {"name":"ClassDef"}],
    ["@", 81],
    [1, 6, 82],
    [e[10], 83],
    [1, 6, 84],
    [".", 85,
     0, -1],
    [1, 6, 86],
    [e[10], 87],
    [1, 6, 84],
    [3, "keyword", e[16], -1,
     3, "keyword", e[17], 89,
     3, "keyword", e[18], 91,
     3, "keyword", e[19], 93,
     3, "keyword", e[20], 99,
     3, "keyword", e[21], 101,
     3, "keyword", e[22], 109,
     [5, 193], 111,
     1, 120, -1],
    [1, 6, 90],
    [1, 120, -1],
    [1, 6, 92],
    [1, 120, -1,
     0, -1],
    [1, 6, 94],
    [1, 120, 95,
     0, 95],
    [1, 6, 96],
    [3, "keyword", e[21], 97,
     0, -1],
    [1, 6, 98],
    [1, 120, -1],
    [1, 6, 100],
    [1, 196, -1],
    [1, 6, 102],
    [".", 103,
     [6, 210], 104,
     3, "keyword", e[20], 105],
    [1, 6, 102],
    [1, 120, 106],
    [1, 6, 107],
    [1, 6, 108],
    ["*", -1,
     2, 211, -1, {"name":"FromImportList"},
     1, 218, -1],
    [3, "keyword", e[20], 105],
    [1, 6, 110],
    [1, 232, -1],
    [1, 238, 112],
    [1, 6, 113],
    [":", 114,
     0, 115],
    [1, 6, 116],
    [1, 6, 117],
    [1, 120, 115],
    [3, "operator", "=", 118,
     0, -1],
    [1, 6, 119],
    [1, 120, -1],
    [3, "operator", e[23], 121,
     3, "keyword", e[24], 121,
     1, 239, 122],
    [1, 6, 120],
    [1, 6, 123],
    [1, 249, 124,
     3, "keyword", e[8], 125,
     ",", 125,
     0, -1],
    [1, 6, 123],
    [1, 6, 126],
    [1, 260, 124],
    [1, 88, 128,
     2, 267, -1, {"name":"indentedBody"}],
    [1, 6, 129],
    [";", 130,
     "\n", -1],
    [1, 6, 131],
    [1, 88, 132,
     0, 132],
    [1, 6, 129],
    [[5, 273], 134,
     1, 276, 135],
    [1, 238, 135],
    [1, 6, 136],
    [",", 137,
     0, -1],
    [1, 6, 138],
    [[5, 273], 139,
     1, 276, 140,
     0, 140],
    [1, 238, 140],
    [1, 6, 136],
    ["(", 142],
    [1, 6, 143],
    [1, 281, 144,
     0, 144],
    [1, 6, 145],
    [")", -1],
    ["'''", 147,
     "\"\"\"", 149,
     "'", 151,
     "\"", 153],
    ["\\", 148,
     [0, /^(?!\'\'\')/, /^[^]/], 147,
     "'''", -1],
    [/^[^]/, 147],
    ["\\", 150,
     [0, /^(?!\"\"\")/, /^[^]/], 149,
     "\"\"\"", -1],
    [/^[^]/, 149],
    ["\\", 152,
     /^(?!\')./, 151,
     "'", -1],
    [/^[^]/, 151],
    ["\\", 154,
     /^(?!\")./, 153,
     "\"", -1],
    [/^[^]/, 153],
    [3, "operator", "{", 156],
    [1, 120, 157,
     0, 157],
    [3, "operator", "=", 158,
     0, 158],
    [3, "operator", "!", 159,
     0, 160],
    [3, "keyword", /^(?:(?![\:\} \t]).)*/, 160],
    [3, "operator", ":", 161,
     0, 162],
    [3, "string", e[12], 161,
     1, 155, 161,
     0, 162],
    [3, "operator", "}", -1],
    [1, 260, 164],
    [1, 6, 165],
    [3, "keyword", e[9], 166,
     0, 168],
    [1, 6, 167],
    [3, "def", e[10], 168,
     2, 293, 168, {"name":"ParenPattern"},
     2, 298, 168, {"name":"BracketPattern"}],
    [1, 6, 169],
    [",", 170,
     0, -1],
    [1, 6, 171],
    [1, 260, 172,
     0, 173],
    [1, 6, 174],
    [1, 6, 169],
    [3, "keyword", e[9], 175,
     0, 173],
    [1, 6, 176],
    [3, "def", e[10], 173,
     2, 293, 173, {"name":"ParenPattern"},
     2, 298, 173, {"name":"BracketPattern"}],
    [2, 303, 178, {"name":"ParamList"}],
    [1, 6, 179],
    ["->", 180,
     0, 182],
    [1, 6, 181],
    [1, 120, 182],
    [1, 6, 183],
    [":", 184],
    [1, 6, 185],
    [1, 127, -1],
    [3, "type def", e[10], 187],
    [1, 6, 188],
    [2, 141, 189, {"name":"ArgList"},
     0, 189],
    [1, 6, 190],
    [":", 191],
    [1, 6, 192],
    [1, 127, -1],
    [1, 238, 194],
    [1, 6, 195],
    [/^[\=\:]/, -1],
    [1, 260, 197],
    [1, 6, 198],
    [3, "keyword", e[9], 199,
     0, 201],
    [1, 6, 200],
    [3, "def", e[10], 201],
    [1, 6, 202],
    [",", 203,
     0, -1],
    [1, 6, 204],
    [1, 260, 205,
     0, 206],
    [1, 6, 207],
    [1, 6, 202],
    [3, "keyword", e[9], 208,
     0, 206],
    [1, 6, 209],
    [3, "def", e[10], 206],
    [3, "keyword", e[20], -1],
    ["(", 212],
    [1, 6, 213],
    [1, 218, 214,
     0, 214],
    [1, 6, 215],
    [/^\,?/, 216],
    [1, 6, 217],
    [")", -1],
    [e[10], 219],
    [1, 6, 220],
    [3, "keyword", e[9], 221,
     0, 223],
    [1, 6, 222],
    [3, "def", e[10], 223],
    [1, 6, 224],
    [",", 225,
     0, -1],
    [1, 6, 226],
    [e[10], 227,
     0, 228],
    [1, 6, 229],
    [1, 6, 224],
    [3, "keyword", e[9], 230,
     0, 228],
    [1, 6, 231],
    [3, "def", e[10], 228],
    [3, "variable", e[10], 233],
    [1, 6, 234],
    [",", 235,
     0, -1],
    [1, 6, 236],
    [3, "variable", e[10], 237,
     0, 237],
    [1, 6, 234],
    [1, 308, -1],
    [2, 316, -1, {"name":"ParenExpr"},
     2, 321, -1, {"name":"ArrayLiteral"},
     2, 326, -1, {"name":"ObjectLiteral"},
     3, "number", e[25], -1,
     0, 240,
     3, "operator", "...", -1,
     3, "atom", e[26], -1,
     3, "atom", e[27], -1,
     3, "keyword", e[28], 243,
     3, "keyword", e[29], 247,
     3, "builtin", e[30], -1,
     3, "variable callee", e[33], -1,
     3, "variable", e[10], -1],
    [2, 53, 241, {"name":"string","token":"string"},
     1, 55, 241],
    [1, 6, 242],
    [0, 240,
     0, -1],
    [1, 6, 244],
    [3, "keyword", e[21], 245,
     1, 120, -1,
     0, -1],
    [1, 6, 246],
    [1, 120, -1],
    [1, 6, 248],
    [2, 333, -1, {"name":"LambdaDef"}],
    [3, "operator", e[31], 250,
     3, "keyword", e[32], 250,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 252,
     3, "keyword", e[0], 254],
    [1, 6, 251],
    [1, 120, -1],
    [1, 6, 253],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 255],
    [1, 120, 256],
    [1, 6, 257],
    [3, "keyword", e[2], 258,
     0, -1],
    [1, 6, 259],
    [1, 120, -1],
    [3, "operator", e[23], 261,
     3, "keyword", e[24], 261,
     1, 239, 262],
    [1, 6, 260],
    [1, 6, 263],
    [1, 343, 264,
     3, "keyword", e[8], 265,
     0, -1],
    [1, 6, 263],
    [1, 6, 266],
    [1, 120, 264],
    ["\n", 268],
    [/^[ \t]/, 268,
     3, "comment", /^\#.*/, 268,
     "\n", 268,
     0, 269],
    [[0, [7, "stillIndented"], [6, 354]], 270,
     [0, [7, "stillIndented"], /^(?=return|pass)/], 272,
     0, -1],
    [2, 9, 271, {"name":"Statement"}],
    [/^[ \t]/, 271,
     3, "comment", /^\#.*/, 271,
     "\n", 271,
     0, 269],
    [2, 9, -1, {"name":"Statement"}],
    [1, 238, 274],
    [1, 6, 275],
    [3, "keyword", e[8], -1],
    [3, "operator", e[23], 277,
     3, "keyword", e[24], 277,
     1, 239, 278],
    [1, 6, 276],
    [1, 6, 279],
    [1, 355, 280,
     0, -1],
    [1, 6, 279],
    [3, "variable-2", e[35], 282,
     3, "operator", "**", 283,
     3, "meta", e[34], 284,
     0, 283],
    [1, 6, 285],
    [1, 6, 286],
    [1, 6, 287],
    [1, 343, 288,
     0, 289],
    [1, 260, 289],
    ["=", 283],
    [1, 6, 285],
    [1, 6, 290],
    [",", 291,
     1, 366, -1,
     0, -1],
    [1, 6, 292],
    [1, 378, -1,
     0, -1],
    ["(", 294],
    [1, 6, 295],
    [1, 238, 296],
    [1, 6, 297],
    [")", -1],
    ["[", 299],
    [1, 6, 300],
    [1, 238, 301],
    [1, 6, 302],
    ["]", -1],
    ["(", 304],
    [1, 6, 305],
    [1, 392, 306,
     0, 306],
    [1, 6, 307],
    [")", -1],
    [[6, 418], 309,
     2, 293, 310, {"name":"ParenPattern"},
     2, 298, 310, {"name":"BracketPattern"}],
    [3, "def", e[10], 310],
    [1, 6, 311],
    [",", 312,
     0, -1],
    [1, 6, 313],
    [[6, 418], 314,
     2, 293, 315, {"name":"ParenPattern"},
     2, 298, 315, {"name":"BracketPattern"},
     0, 315],
    [3, "def", e[10], 315],
    [1, 6, 311],
    ["(", 317],
    [1, 6, 318],
    [1, 419, 319,
     0, 319],
    [1, 6, 320],
    [")", -1],
    ["[", 322],
    [1, 6, 323],
    [1, 419, 324,
     0, 324],
    [1, 6, 325],
    ["]", -1],
    ["{", 327],
    [1, 6, 328],
    [1, 427, 329,
     0, 331],
    [1, 6, 330],
    [1, 366, 331,
     0, 331],
    [1, 6, 332],
    ["}", -1],
    [1, 433, 334,
     0, 334],
    [1, 6, 335],
    [":", 336],
    [1, 6, 337],
    [1, 260, -1],
    ["[", 339],
    [1, 6, 340],
    [1, 451, 341],
    [1, 6, 342],
    ["]", -1],
    [3, "operator", e[31], 344,
     3, "keyword", e[32], 344,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 346,
     3, "keyword", e[0], 348],
    [1, 6, 345],
    [1, 260, -1],
    [1, 6, 347],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 349],
    [1, 260, 350],
    [1, 6, 351],
    [3, "keyword", e[2], 352,
     0, -1],
    [1, 6, 353],
    [1, 260, -1],
    [3, "keyword", /^(?:return|pass)(?![a-zA-Z¡-￿_0-9_])/, -1],
    [3, "operator", e[31], 356,
     3, "keyword", e[32], 356,
     2, 141, -1, {"name":"ArgList"},
     2, 338, -1, {"name":"Subscript"},
     ".", 358,
     3, "keyword", e[0], 360],
    [1, 6, 357],
    [1, 276, -1],
    [1, 6, 359],
    [3, "property callee", e[33], -1,
     3, "property", e[10], -1],
    [1, 6, 361],
    [1, 276, 362],
    [1, 6, 363],
    [3, "keyword", e[2], 364,
     0, -1],
    [1, 6, 365],
    [1, 276, -1],
    [3, "keyword", e[6], 367,
     0, 367],
    [1, 6, 368],
    [3, "keyword", e[4], 369],
    [1, 6, 370],
    [[5, 273], 371,
     1, 276, 372],
    [1, 238, 372],
    [1, 6, 373],
    [3, "keyword", e[8], 374],
    [1, 6, 375],
    [1, 120, 376],
    [1, 6, 377],
    [1, 366, -1,
     1, 485, -1,
     0, -1],
    [3, "operator", "**", 379,
     3, "meta", e[34], 380,
     0, 379],
    [1, 6, 381],
    [1, 6, 382],
    [1, 260, 383],
    ["=", 379],
    [1, 6, 384],
    [",", 385,
     0, -1],
    [1, 6, 386],
    [3, "operator", "**", 387,
     3, "meta", e[34], 388,
     0, 387,
     0, 389],
    [1, 6, 390],
    [1, 6, 391],
    [1, 6, 384],
    [1, 260, 389],
    ["=", 387],
    [2, 490, 393, {"name":"op","token":"operator"},
     0, 393],
    [1, 6, 394],
    [3, "atom", e[27], 395,
     3, "def", e[10], 395],
    [1, 6, 396],
    [":", 397,
     0, 398],
    [1, 6, 399],
    [1, 6, 400],
    [1, 260, 398],
    [3, "operator", "=", 401,
     0, 403],
    [1, 6, 402],
    [1, 260, 403],
    [1, 6, 404],
    [",", 405,
     0, -1],
    [1, 6, 406],
    [2, 490, 407, {"name":"op","token":"operator"},
     0, 407,
     0, 408],
    [1, 6, 409],
    [1, 6, 404],
    [3, "atom", e[27], 410,
     3, "def", e[10], 410],
    [1, 6, 411],
    [":", 412,
     0, 413],
    [1, 6, 414],
    [1, 6, 415],
    [1, 260, 413],
    [3, "operator", "=", 416,
     0, 408],
    [1, 6, 417],
    [1, 260, 408],
    [3, "keyword", e[8], -1],
    [3, "variable-2", e[35], 420,
     1, 260, 423],
    [1, 6, 421],
    [1, 343, 422,
     0, 423],
    [1, 6, 421],
    [1, 6, 424],
    [",", 425,
     1, 366, -1,
     0, -1],
    [1, 6, 426],
    [1, 493, -1,
     0, -1],
    [2, 499, 428, {"name":"DictProp"}],
    [1, 6, 429],
    [",", 430,
     0, -1],
    [1, 6, 431],
    [2, 499, 432, {"name":"DictProp"},
     0, 432],
    [1, 6, 429],
    [3, "operator", e[36], 434,
     0, 434],
    [1, 6, 435],
    [3, "def", e[10], 436],
    [1, 6, 437],
    [3, "operator", "=", 438,
     0, 440],
    [1, 6, 439],
    [1, 260, 440],
    [1, 6, 441],
    [",", 442,
     0, -1],
    [1, 6, 443],
    [3, "operator", e[36], 444,
     0, 444,
     0, 445],
    [1, 6, 446],
    [1, 6, 441],
    [3, "def", e[10], 447],
    [1, 6, 448],
    [3, "operator", "=", 449,
     0, 445],
    [1, 6, 450],
    [1, 260, 445],
    [1, 260, 452,
     ":", 453],
    [1, 6, 454],
    [1, 6, 455],
    [":", 456,
     0, 466],
    [1, 260, 457,
     0, 457],
    [1, 6, 458],
    [1, 6, 459],
    [1, 260, 460,
     0, 460],
    [":", 461,
     0, 466],
    [1, 6, 462],
    [1, 6, 463],
    [":", 464,
     0, 466],
    [1, 260, 466,
     0, 466],
    [1, 6, 465],
    [1, 260, 466,
     0, 466],
    [1, 6, 467],
    [",", 468,
     0, -1],
    [1, 6, 469],
    [1, 260, 470,
     ":", 471,
     0, 472],
    [1, 6, 473],
    [1, 6, 474],
    [1, 6, 467],
    [":", 475,
     0, 472],
    [1, 260, 476,
     0, 476],
    [1, 6, 477],
    [1, 6, 478],
    [1, 260, 479,
     0, 479],
    [":", 480,
     0, 472],
    [1, 6, 481],
    [1, 6, 482],
    [":", 483,
     0, 472],
    [1, 260, 472,
     0, 472],
    [1, 6, 484],
    [1, 260, 472,
     0, 472],
    [3, "keyword", e[0], 486],
    [1, 6, 487],
    [1, 120, 488],
    [1, 6, 489],
    [1, 366, -1,
     1, 485, -1,
     0, -1],
    ["*", 491],
    [1, 6, 492],
    [/^\*?/, -1],
    [1, 260, 494],
    [1, 6, 495],
    [",", 496,
     0, -1],
    [1, 6, 497],
    [1, 260, 498,
     0, 498],
    [1, 6, 495],
    [3, "operator", "**", 500,
     1, 260, 502],
    [1, 6, 501],
    [1, 260, -1],
    [1, 6, 503],
    [":", 504,
     0, -1],
    [1, 6, 505],
    [1, 260, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "FromImportList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "Subscript", "DictProp", "ParenPattern", "BracketPattern"];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s+for\s+(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]", BracketPattern: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")", ParenPattern: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror__namespace.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror__namespace.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack != ")" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror__namespace.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function pythonMarkLocals(token, stream, state) {
    var marked = markLocals(token, scopes, stream, state);
    if (token == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
      else if (marked == "def local") { marked = "variable-2"; }
    }
    return marked
  }

  var PythonMode = /*@__PURE__*/(function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror__namespace.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  // ` also gets autoclosed since it's often used in comments/docstrings.
  PythonMode.prototype.closeBrackets = {triples: "'\"", pairs: "()[]{}''\"\"``",};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror__namespace.defineMode("google-python", function (conf) { return new PythonMode(conf); });

}));
