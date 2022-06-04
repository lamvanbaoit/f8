// "use strict";

// 1. IIFE - Immediately Invoked Function Expression
// Tên gọi cách khác Self-Invoking Function
//  Nội dung
// 1. IIFE trông như thế nào?
(function (message) {
    console.log(message)
})('hi')
// 2. Dùng dấu ; trước IIFE
let fullName = 'Lam Bao'
    ; (() => { // ko có dấu ; báo lỗi liền
        console.log(fullName)
    })()
// 3. IIFE là hàm "private"
let i = 0
    ; (function myCount() {
        i++
        console.log(i)
        if (i < 10)
            myCount() // gọi trong hàm thì xài được vì IIFE có hàm private
    })()
// Để myCount() nó sẽ báo lỗi ngay
// 4. Sử dụng IIFE khi nào?
// vì IIFE có tính private nên khi đặt tên trong hàm IIFE có trùng tên ở ngoài IIFE cũng ko báo lỗi 
// muốn nó chạy ngay 
// 5. Các cách tạo ra một IIFE kiến thức mở rộng
// ~ ! + - * % ^ & có thể dùng cách này thay cho ; mà ích ai dùng cách này
~function () {
    console.log('bao')
}()
// 6. Ví dụ sử dụng IIFE 
const app = (function () {
    // Private 
    const cars = []
    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        },
        show() {
            console.log(cars)
        }
    }
})()
app.show()
app.add('Bao')
app.show()

// 2. Scope - Phạm vi
// - Các loại phạm vi:
// - Global - Toàn cục
// - Code Block - Khối mã: let, const
{
    // code ở đây
}
// - Local scope - Hàm: var, function
function ham() {

}
// Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
// Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// Cách thức một biến được truy cập => nó sẽ tìm trong phạm vi gần nhất
// Khi nào một biến bị xóa khỏi bộ nhớ?
// - Biến toàn cầu?
// - Biến trong code block & trong hàm?
// - Biến trong hàm được tham chiếu bởi 1 hàm?

// 3. Closures
// Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
function createCounter() {
    let couter = 0
    function increase() {
        return ++couter
    }

    return increase
}

const couter1 = createCounter()

console.log(couter1())
console.log(couter1())
console.log(couter1())

// Ứng dụng:
// Viết code ngắn gọn hơn
// Biểu diễn, ứng dụng tính Private trong OOP
// Lưu ý:
// Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
// Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn

// 4. Hoisting
// Khi khai báo biến với 'var' khi được hoisting lên đầu khai báo phạm vi và được tạo giá trị mặt định là underfine
console.log(hoisting1)
var hoisting1 = 10
// Khi khai báo biến với 'let', 'const' khi được khi được hoisting lên đầu khai báo phạm vi, không được tạo giá trị và đưa vào 'Temporal Dead Zone'
// console.log(hoisting2)
// const hoisting2 = 10 

// 5. Strict mode
// Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẵn
// Cách sử dụng
// 1. Thêm "use strict"; và đầu file.js
// 2. Thêm "use strict"; vào ngay sau thẻ mở <script>
// 3. Thêm "use strict"; vào đầu phạm vi hàm 
// Báo lỗi
// Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
// Ví dụ 1:
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// const student = {
//     fullName: 'Lam Van Bao',
// }
// student.fullName = 'Dao Ngu Binh' // ko báo lỗi khi dùng "use strict"; vì Writable => true
// // Writable => true
// console.log(student); // kq là Dao Ngu Binh

// Ví dụ 2:
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// const student = Object.freeze( {
//     fullName: 'Lam Van Bao',
// })
// student.fullName = 'Dao Ngu Binh' // báo lỗi khi dùng "use strict"; vì Writable => false
// // Writable => flase
// console.log(student) // kq là Lam Van Bao vì dùng Writable => flase

// Ví dụ 3:
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// const student = {}
// Object.defineProperty(student, 'fullName', {
//     value: 'Lam Van Bao',
//     writable: true // thì kq là Dao Ngu Binh // nếu ko khai báo mặt định Writable => flase
// })
// student.fullName = 'Dao Ngu Binh' // báo lỗi khi dùng "use strict"; vì Writable => false
// // Writable => flase
// console.log(student) // kq là Lam Van Bao vì dùng Writable => flase

// Báo lỗi khi hàm có tham số trùng tên
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// function sum(a,a) { // báo lỗi trùng tên biến
//     return a + a
// }
// console.log(sum(6,9)) 
// Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// {
//     {
//         function sum(a,b) {
//             return a+b
//         }
//     }
// }
// console.log(sum(9,6)) // nếu để "use strict"; thì báo lỗi vì nó ngoài phạm vi code block
// Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm" của ngôn ngữ
// Công dụng
// 1. Tránh "quên" từ khóa khai báo biến
// 2. Tránh trùng tên biến lẫn tới lỗi logic
// 3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

// 6. This keyword 
// Từ khóa this trong Javascript đề cập đên đối tượng mà nó thuộc về.
// Đặc tính
// 1. Trong một phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu.)
// const iPhone7 = {
//     // Thuộc tính - Property
//     name: 'iPhone7',
//     color: 'Red',

//     // Phương thức - Method
//     takePhoto() {
//         console.log(this)
//     },
//     objChild: {
//         name: 'Child Object',
//         methodChild() {
//             console.log(this)
//         }
//     }
// }

// iPhone7.takePhoto()
// iPhone7.objChild.methodChild()

// 2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global 
// console.log(this)
// Lưu ý
// + this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// function Car(name, color) {
//     this.name = name
//     this.color = color

//     this.run = function() {
//         console.log(this)
//     }
// }
// Car.prototype.fly = function() {
//     console.log(this)
// }   

// const porsche = new Car('Lam', 'Black')
// console.log(porsche)
// console.log(porsche.run())
// console.log(porsche.fly())
// + this trong một hàm là underfine khi ở strict mode
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// function test() {
//     console.log(this)
// }
// test()
// arrow function ko có this nên nó sẽ lấy phạm vi bên ngoài cho dù để "use strict"; nó cũng ko có undefine
// "use strict"; // để cái này lên đầu file do làm ví dụ nên không để đầu file
// const test = () => {
//     console.log(this)
// }
// test()
// + Các phương thức bind(), call(), app() có thể tham chiếu this tới đối tượng khác

// 7. Bind method
this.firstName = 'Bao'
this.lastName = 'Lam'

const teacher = {
    firstName: 'Dao',
    lastName: 'Binh',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(teacher.getFullName()) // Dao Binh

const student = {
    firstName: 'Bao',
    lastName: 'Binh',
}

// method tạo bên trong object và gán qua biến khác và biến này ko thông qua đối tượng nó sẽ lấy global mà ở đây là this.firstName = 'Bao', this.lastName = 'Lam'
// this trong trường hợp này là global
const getTeacher = teacher.getFullName
console.log(getTeacher()) // Bao Lam

// this trong trường hợp này là teacher vì dùng bind(teacher) để gán buộc cho this
const getThis = teacher.getFullName.bind(teacher) // Dao Binh
console.log(getThis())

const getStudent = teacher.getFullName.bind(student) // Bao Binh
console.log(getStudent())

// 8. Call method
// 9. Apply method
// 10. Catching, throwing errors
// 11. Promise 
// 12. Async function, await
// 13. Value types & Reference types (Tham trị và Tham chiếu)
// 1. Value types (Primitive data types)
// - String 
// - Number
// - Boolean
// - BigInt 
// - Symbol
// - underfine
// - null

// Ví dụ 1:
var a1 = 1
var b1 = a1
a1 = 2
console.log(b1) // output: 1

// Với let a = 1 : Tạo ra biến a, cấp một ô nhớ, lưu 1 vào ô nhớ
// Biến        Giá trị     Ô nhớ
// a           1           1
// Với let b = a : Tạo ra biến b, cấp một ô nhớ khác, sao chép giá trị của a (là 1) và ô nhớ mới
// Biến        Giá trị     Ô nhớ
// a           1           1
// b           1           1
// Với a = 2 : Sửa giá trị trong ô nhớ của a thành 2
// Biến        Giá trị     Ô nhớ
// a           2           2
// b           1           1
// Như ví dụ trên, a và b được cấp 2 ô nhớ khác nhau nên việc sửa a = 2 không ảnh
// hưởng tới ô nhớ của biến b. Nên kết quả cuối cùng console.log(b) vẫn là 1.

// 2. Reference types (Non-primitive data types) 
// - Object 
// - Array 
// - function

// Ví dụ 2:
const a2 = {
    name: 'Mercedes'
}
const b2 = a2
a2.name = 'BMW'
console.log(a2) // output: BMW

// Với const a = {name: 'Mercedes'} : Tạo ra biến a, cấp một ô nhớ, lưu {name: 'Mercedes'} vào ô nhớ, trả về địa chỉ đã lưu và gán cho biến a
// Biến     Giá trị     Địa chỉ      ô nhớ
// a        <#001>      #001         {name: 'Mercedes'}
// Với const b = a : Tạo ra biến b, trỏ biến b tới cùng địa chỉ ô nhớ của biến a
// Biến     Giá trị     Địa chỉ      ô nhớ
// a        <#001>      #001         {name: 'Mercedes'}
// b        <#001>      #001         
// Với a.name = 'BMW' : Sửa giá trị của key name trong ô nhớ thành 'BMW'
// Biến     Giá trị     Địa chỉ      ô nhớ
// a        <#001>      #001         {name: 'BMW'}
// b        <#001>         
// Kết quả cuối cùng console.log(b.name) là 'BMW'. Vì b và a được trở cùng tới một ô
// nhớ nên việc sửa đổi giá trị của object thông qua biến a và b là như nhau. 

// Ví dụ 3:
// let a = {
//     name: 'Mercedes'
// }
// a = {
//     name: 'BMW',
//     mode: 'i8'
// }
// console.log(a); // {name: "BMW", mode: "i8"}

// Biến     Giá trị     Địa chỉ      ô nhớ
// a        <#002>      #001         {name: 'Mercedes'}
//                      #002         {name: 'BMW', mode: 'i8'}
// Mỗi khi tạo ra một object mới với cú pháp {} thì sẽ có một ô nhớ mới được sử dụng.

// Data types with function
// - Value types
function thamtri(a, b) {
    a = 0
    b = 0
    // hiểu ngầm
    // let a = c
    // let b = d
    console.log(a, b) // output: 0,0
}
const c = 1
const d = 2
thamtri(c, d)
console.log(c, d) // output: 1,1

// - Reference types
// ví dụ 1 
function thamchieu(obj) {
    // hiểu ngầm
    // let obj = a3
    obj.name = 'Bình'
    console.log(obj) // output: Bình
}

const a3 = {
    name: 'Bao'
}
thamchieu(a3)
console.log(a3) // output: Bình

// ví dụ 2
function create(obj) {
    // nếu muốn in ra 2 kết quả khác nhau thì tạo ra vùng nhớ mới console.log(car) // output: BMW
    // obj = JSON.parse(JSON.stringify(obj))

    // hiểu ngầm
    // let obj = car
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}
const newCarr = create(car)
console.log(car) // output: Mercedes
console.log(newCarr) // output: Mercedes

// ví dụ 3
const a4 = {
    name: 'Bao'
}
const a5 = {
    name: 'Bao'
}
console.log(a4 === a5) // output: false bởi vì lúc này 2 địa chỉ vùng nhớ khác nhau

// ví dụ 3
const a6 = {
    name: 'Bao'
}
const a7 = a6
console.log(a7 === a6) // output: true bởi vì lúc này cùng 1 địa chỉ vùng nhớ 