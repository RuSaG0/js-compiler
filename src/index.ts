import Lexer from "./Lexer";
import Parser from "./Parser";

const code =
    `
    x = 5 - 9;
    y = 0 - 6;
    LOG x;
    LOG y;
    LOG x - y + 5;
    `

const lexer = new Lexer(code);
lexer.lexAnalysis();


const parser = new Parser(lexer.tokenList);

const rootNode = parser.parseCode();

parser.run(rootNode);
