import ExpressionNode from "./ExpressionNode";
import Token from "../Token";

export default class NumberNode extends ExpressionNode {
    number: Token;

    constructor(number: Token) {
        super();
        this.number = number;
    }
}
