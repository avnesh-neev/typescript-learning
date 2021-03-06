// "One of TypeScript's core principles is that type-checking focuses on the 'shape' that values have. This is sometimes called "duck typing" or "structural subtyping". In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project."
// "The easiest way to see how interfaces work is to start with a simple example:"
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel1(myObj);

function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);
// "The interface 'LabelledValue' is a name we can now use to describe the requirement in the previous example. It still represents having a single property called 'label' that is of type string. Notice we didn't have to explicitly say that the object we pass to 'printLabel' implements this interface like we might have to in other languages. Here, it's only the shape that matters. If the object we pass to the function meets the requirements listed, then it's allowed.
// It's worth pointing out that the type-checker does not require that these properties come in any sort of order, only that the properties the interface requires are present and have the required type." 
//# sourceMappingURL=OurFirstInterface.js.map