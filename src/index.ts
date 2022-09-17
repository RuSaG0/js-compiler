import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    сумма = 5 - 9;
    суммадва = 0 - 6;
    КОНСОЛЬ сумма;
    КОНСОЛЬ суммадва;
    КОНСОЛЬ сумма - суммадва + 5;
    `

const lexer = new Lexer(code);
lexer.lexAnalysis();

const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);
