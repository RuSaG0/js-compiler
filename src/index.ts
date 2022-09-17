import Lexer from "./Lexer";

const code =
    `
    сумма РАВНО 5 МИНУС 9;
    суммадва РАВНО 0 МИНУС 6;
    КОНСОЛЬ сумма;
    КОНСОЛЬ суммадва;
    КОНСОЛЬ сумма МИНУС суммадва ПЛЮС ( 5 ПЛЮС 3 );
    `

const lexer = new Lexer(code);
lexer.lexAnalysis();
// console.log(lexer.tokenList)
