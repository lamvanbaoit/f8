// 1. Let, const

// + Điểm khác giữa Var với (Let, Const) : đó là Phạm vi truy cập
{
    var course = 'HTML'
    let course1 = 'CSS'
    const course2 = 'javascript'
    {
        console.log(course);
        console.log(course1); // nằm trong block sẽ không bị lỗi
        console.log(course2); // nằm trong block sẽ không bị lỗi
    }
}

console.log(course);
// console.log(course1); // sẽ bị lỗi vì nó nằm ngoài block
// console.log(course2); // sẽ bị lỗi vì nó nằm ngoài block

// + Điểm khác giữa Var với (Let, Const) : đó là Hoisting(kéo lên trên) 
a = 1;
var a; 
console.log(a); // vì nó có Hoisting nên nó sẽ không bị lỗi
// b = 2;
// let b; 
// console.log(b); // vì nó có Hoisting nên nó sẽ không bị lỗi
// c = 3;
// const c; 
// console.log(c); // vì nó ko có Hoisting nên nó sẽ bị lỗi


// + Điểm khác giữa Const với (Var, Let) : đó là Assignment(gán lại)
var a1 = 1;
a1 = 100
console.log(a1);
let b1 = 1;
b1 = 100
console.log(b1);
// const c1 = 1;
// c1 = 100
// console.log(c1); // Nó sẽ bị lỗi vì nó sẽ không gán lại được chỉ có var và let mới gán lại được
const d = {
    name: 'HTML'
};

d.name = 'CSS'
console.log(d.name); // Nó không bị lỗi vì nó thay đổi thuộc tính chứ không phải gán

// => Code thuần: Var
// => Có sử dụng thư viện Babel: Let vs Const
// + Const: khi định nghĩa biến và không gán lại biến đó thì dùng Const
// + Let: khi định nghĩa biến và gán lại biến đó thì dùng Let

// 2. Template Literals
const templateString = `Line1
Line2
Line3`
console.log(templateString);
// 3. Multi-line String
const multilineString = 'Line1'
+ ' Line2'
+ ' Line3'
console.log(multilineString);
// 4. Arrow function

// cách viết có return 
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2,2));

// cách viết ko có return
const add = (a, b) => a + b; // Điều này chỉ hoạt động nếu hàm chỉ có một câu lệnh.
console.log(add(2,2));

// cách viết có return object
const sub = (a, b) => {
    return {
        a: a,
        b: b
    }
}
console.log(sub(2,2));

// cách viết return object ngắn gọn hơn
const tru = (a, b) => ({a: a, b: b })
console.log(tru(2,2));

// cách viết khi có một tham số
const logger1 = (log) => console.log(log);
logger1('Message1...')

// cách viết có một tham số ta có thể bỏ dấu () đi
const logger2 = log => console.log(log);
logger2('Message2...')

// điểm khác thứ nhất nhau giữa function với arrow function
const context = {
    name: 'HTML',
    getName: function() {
        return this.name // sẽ in ra kết quả
    }
}
console.log('function',context.getName());

const arrowfunction = {
    age: '18',
    getName: () => {
        return this.age // điểm khác của arrow function nó sẽ không in ra kết quả mà là undefined
    }
}
console.log('arrow function',arrowfunction.getName());

// điểm khác nhau thứ hai giữa function với arrow function
const context1 = function(name,price) {
    this.name = name;
    this.price = price;
}
const kq = new context1('Java',1000)
console.log(kq);

// sữa thành arrow function nó sẽ lỗi là 'context2 is not a constructor'
// const context2 = (name,price) => {
//     this.name = name;
//     this.price = price;
// }
// const kq2 = new context2('HTML-CSS',1000)
// console.log(kq2);

// 5. Classes
// cách viết thường
const Test1 = function(name,age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.age
    }
}

// cách viết gọn hơn
class Test2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.age
    }
}

const aTest1 = new Test1('Bao', 18);
const aTest2 = new Test2('Bao', 20);
console.log(aTest1);
console.log(aTest1.getName());
console.log(aTest2);
console.log(aTest2.getName());

// 6. Default parameter values
// giá trị sẽ mặc định nếu không truyền tham số thứ 2 vào
function log(log, type = 'log') {
    console[type](log);
}
log('Message...')
log('Message...','warn')
log('Message...','error')
// 7. Enhanced object literals
    // 1. Định nghĩa key: value cho object
    // 2. Định nghĩa method cho object
    // 3. Định nghĩa key cho object dưới dạng biến
var name1 = 'Python';
var price1 = 1000;

// cách viết thông thường
var coursePy1 = {
    name1: name1,
    price1: price1,
    getName: function() {
        return name1;
    }
}
console.log(coursePy1);

// cách viết Enhanced object literals
var coursePy2 = {
    name1, // Định nghĩa key: value cho object
    price1, // Định nghĩa key: value cho object
    getName() {
        return name1; // Định nghĩa method cho object
    }
}
console.log(coursePy2);

// Định nghĩa key cho object dưới dạng biến
var filename = 'new-name';
var fileprice = 'new-price';

var coursePy3 = {
    [filename]: name1,
    [fileprice]: price1,
}
console.log(coursePy3);

// 8. Destructuring
var array = ['HTML', 'CSS', 'javascript']
// cách thường
// var a = array[0]
// var b = array[1]
// var c = array[2]
// console.log(a,b,c);

// cách Destructuring
var [a,b,c] = array;
console.log(a,b,c);
var [a,c] = array;
console.log(a,c);

// cách Destructuring đối với object
var fileCourses = {
    course: 'HTML',
    age: 18,
}
var {course,age} = fileCourses
console.log(course,age);

// mở rộng
var fileTest = {
    course: 'Python5',
    age: 20,
    children: {
        course: 'Java5',
    }
}
var {course: parentName, children: {course}} = fileTest
var {course: parentName, children: {course: children}} = fileTest
console.log(parentName,course);
console.log(parentName,children);

// 9. Rest parameter (...)
var array1 = ['HTML5', 'CSS', 'javascript', 'Pyhton']
// cái '...tenbien' gọi là rest parameter
var [a,b, ...rest] = array1;
console.log(a,b)
console.log(rest)

var fileCourses1 = {
    course: 'CSS',
    age: 20,
    address: 'HCM'
}
// cái '...tenbien' gọi là rest parameter đối với object
var {course, ...rest} = fileCourses1
console.log(course);
console.log(rest);

// rest parameter trong function
function stt(a,b,...rest) {
    console.log(rest);
}
stt(1,2,3,4,5,6,7);

// rest parameter trong function với biến là object
function object({name, ...rest}) {
    console.log(name);
    console.log(rest);
}
object({
    name: 'HTML',
    age: 20,
    address: 'HCM',
});

// rest parameter trong function với biến là array
function arraya([a, ...rest]) {
    console.log(a);
    console.log(rest);
}
arraya(['HTML', 'CSS1', 'Javascript']);

// 10. Spread (...)
// nối hai mảng lại bằng Spread
var arrayb = ['HTML1', 'CSS1', 'Javascript'];
var arrayc = ['HTML2', 'CSS2', 'Javascript'];
var arrayd = [...arrayb, ...arrayc]
console.log(arrayd);

// nối hai object lại bằng Spread
var objectb = {
    a: 1,
    b: 2
}
var objectc = {
    a1: 'Bao',
    b1: 'Lam'
}
var objectd = {
    ...objectb,
    ...objectc
}
console.log(objectd);

var spread = ['HTMLe', 'CSSe', 'Javascript'];
// cái này gọi là rest parameter
function arrayabc(...rest) {
    for (var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
}
// cái này gọi là Spread
arrayabc(...spread)

// 11. Tagged template literal
function highlight([first,...laygiatriconlai], ...value) {
    console.log(first);
    console.log(laygiatriconlai);
    console.log(value);
    return value.reduce(
        (accumulate,currentValue) => [...accumulate, `<span>${currentValue}</span>`, laygiatriconlai.shift()],
        [first]
    ).join("");
}

var course = 'HTML-CSS'
var brand = 'F8'

var html = highlight`Học lập trình ${course} tại ${brand} !` 
console.log(html);

// 12. Modules: Import / Export
// file Import
// import logger from './logger.js';
// console.log(logger);

// file Export
// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';
// function logger(log, type = 'TYPE_LOG') {
//     console[type](log);
// }
// export default logger;

// 13. Optional chaining (?.)
const obj = {
    name: 'Lam',
    cat1: {
        name1: 'Bao1', 
        cat2: {
            name2: 'Bao2',
            // cat3: {
            //     name3: 'Bao3'
            // } 
        }
    }
}

if(obj?.cat1?.cat2?.cat3) {
    console.log(obj.cat1.cat2.cat3.name3); // nó ko in ra và ko báo lỗi vì đã dùng ?.
}