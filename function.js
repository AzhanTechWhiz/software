function func1(num) {
    num = num + 1;
    console.log(num);
    func2(num);
    console.log(num)
}
function func2(num) {
    num = num + 2;
    console.log(num);
    func3(num);
    console.log(num)
}
function func3(num) {
    num = num + 1;
    console.log(num);
}
func1(5);