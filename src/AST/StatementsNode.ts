import ExpressionNode from "./ExpressionNode";

export default class StatementsNode extends ExpressionNode{
    codeString: ExpressionNode[] = [];

    addNode(node: ExpressionNode) {
        this.codeString.push(node)
    }
}
