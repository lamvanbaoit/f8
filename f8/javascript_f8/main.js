/*
    Cách 1: Internal (sử dụng nội bộ)
    Cách 2: External (sử dụng file .js bên ngoài)
*/

/*
    // Một số hàm built-in
    // 1. Alert // in ra hộp thoại(dialog) thông báo trên trình duyệt có nút OK
        alert('thông báo trên trình duyệt')
    // 2. Console // in ra thông báo ở Console
        console.log('1 dòng log')
        console.warn('in ra cảnh báo')
        console.error('in ra báo lỗi')
    // 3. Confirm // in ra hộp thoại(dialog) thông báo trên trình duyệt có nút OK or Cancel
        confirm('Bạn đủ 18 tuổi chưa!!')
    // 4. Prompt // in ra hộp thoại(dialog) thông báo trên trình duyệt có nút OK or Cancel và yêu cầu điền thông tin vào
        prompt('Bạn bao nhiêu tuổi')
    // 5. Set timeout // sau bao nhiêu giây(s) sẽ in ra thông báo
        setTimeout(function() {
            console.log('Thông báo sau 1s chỉ chạy 1 lần ' + Math.random())
            alert('Thông báo sau 1s chỉ chạy 1 lần')
        }, 1000)
    // 6. Set interval // cách bao nhiều giây(s) sẽ in ra thông báo
        setInterval(() => {
            console.log('Thông báo cách 1s chạy 1 lần ' + Math.random())
            alert('Thông báo cách 1s chạy 1 lần')
        }, 1000)
    // Built-in function nghĩa là hàm cài sẵn, chức năng lập sẵn. 
    // Hiểu đơn giản là những hàm được tích hợp sẵn trong ngôn ngữ lập trình.
*/

/*
    Toán tử số học - Arithmetic (+,-,*,/(chia lấy nguyên),%(chia lấy dư),**(lũy thừa),++(tăng 1 giá trị số),--(giảm 1 giá trị số))
    Toán tử gán - Assignment (=,+=,-=,*=,/=,%=,**=)
    Toán tử so sánh - Comparison (==,!=,>,<,>=,<=) (===,!==) (? gọi là toán tử bậc 3)
    Toán tử logic - Logical (&& , ||, !)
    Toán tử chuỗi - String operator (dùng dấu + để nối chuỗi)
    Boolean - Kiểu dữ liệu true false
*/

/*
    // ++a Prefix(Tiền tố) a++ Postfix(Hậu tố)
    var a = 6 
    // B1: + 1 cho a, a = a + 1 => a = 7
    // B2: Trả về a sau khi được +1
    var output = ++a 
    console.log(output)  // 7
    console.log(a)  // 7

    var a = 6 
    // B1: 'a copy', 'a copy' = 6 
    // B2: + 1 cho a, a = a + 1 => a = 7
    // B3: Trả về 'a copy'
    var output = a++ 
    console.log(output)  // 6
    console.log(a)  // 7

    // Ví dụ: 
    var number = 10
    var a = ++number * 3 - number-- * 2 // (10+1) * 3 - (11) * 2 = 33 - 22 = 11
    var b = number++ * 2 - --number * 3 // (10) * 2 - (11-1) * 3 = 20 - 30 = -10
    console.log(a)
    console.log(b)
*/    

/*
    - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
    - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
    Trong Javascript có 6 giá trị sau được coi là Falsy:
        false
        0 (số không)
        '' or "" (chuỗi rỗng)
        null
        undefined
        NaN

    Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, 
    kể cả những giá trị sau:
        '0' (một chuỗi chứa số không)
        ' ' (một chuỗi chứa dấu cách)
        'false' (một chuỗi chứa từ khóa false)
        [] (một array trống)
        {} (một object trống)
        function(){} (một hàm "trống")
    Câu hỏi:
    - Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, 
    và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?
    Câu trả lời:
    => document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). 
    Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. 
    Tuy nhiên, document.all là một ngoại lệ.
    Cụ thể như sau:
        + document.all chuyển sang boolean sẽ là false
        + document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
        + Khi typeof document.all sẽ trả về "undefined"
*/

/*
    // 1 Dữ liệu nguyên thủy - Primitive Data
    // + Number vd: 
        var a = 1 
    // + String 
        // vd: 
        var fullName = 'lam van bao' 
        var fullName = "lam van bao" 
        var fullName = 'lam \'van bao' 
        var fullName = 'lam \"van bao' 
        var fullName = "lam \'van bao" 
        var fullName = "lam \"van bao" 
        var fullName = 'lam "van bao' 
        var fullName = "lam 'van bao" 
    // + Boolean 
        // vd: 
        var isSuccess = true 
    // + Underfined 
        // vd: 
            var age 
    // + Null 
        // vd: 
        var isNull = null 
    // + Symbol 
        // vd: 
        var id = Symbol('id')  // unique

    // 2 Dữ liệu phức tạp - Complex Data
    // + Function
        // vd:
        var myFunction = function() {
            alert('Hi every one') 
        }
        myFunction() 
    //+ Object
        // vd:
        var myObject = {
            name: 'lam van bao',
            age: 18,
            myFunction = function() {
                alert('Hi every one') 
            }
        }
        console.log(myObject) 

        // vd:
        var myArray = [
            'html',
            'css',
            'javascript'
        ]
        console.log(myArray) 

        // => cách kiểm tra dữ liệu là 
        // typeof [tên biến]
*/ 

/*
// CHUỖI(String) TRONG JAVASCRIPT
    // 1. Tạo chuỗi
    // - Các cách tạo chuỗi => có 2 cách tạo chuỗi(String)
    // - Nên dùng cách nào? Lý do? 
    //    + lý do 1 nên dùng cách 1 vì cách 2 dài dòng
    //    + lý do 2 khi tạo ra cùng một chuỗi thì cách 1 chạy nhanh hơn cách 2
    //    + lý do 3 kiểu dữ liệu tạo ra không mong muốn
    //    - Kiểm tra data type
            var fullName1 = 'Lam Van Bao' // cách 1
            var fistName1 = new String('Binh') // cách 2
            console.log(typeof fullName1) // kiểu String
            console.log(typeof fistName1) // kiểu Object (kiểu dữ liệu tạo ra không mong muốn)

    // 2. Một số case sử dụng backslash (\)
    // search => backslash in javascript
        var fullName2 = '\'Lam \"Van \\Bao \bBackspace \fForm Feed \nNew Line \rCarriage Return \tHorizontalTabulator \vVerticalTabulator'
        console.log(fullName2)

    // 3. Xem độ dài chuỗi
        var fullName3 = 'Lam Van Bao'
        console.log(fullName3.length)

    // 4. Chú ý độ dài khi viết Code 
    // => Khuyên nên dùng tối đa 80 ký tự khi khai báo chuỗi(String) nếu vượt quá thì xuống dòng và dùng nối chuỗi bằng dấu (+)
        var fullName4 = 'Lam Van Bao' + ' + ' + 'Đào Ngự Bình'
        console.log(fullName4)

    // 5. Template string ES6
        var fistName5 = 'Lam'
        var lastName5 = 'Bao'
        console.log(`Tôi là: ${fistName5} ${lastName5}`)

// LÀM VIỆC VỚI CHUỖI(String)
// Search: Javascript string methods
    // 1. Length
        var myString1 = 'Hoc JS tai F8!'
        console.log(myString1.length) // tổng số ký tự tính cả dấu cách

    // 2. Find index
        var myString2 = 'Hoc JS tai JS F8! JS'
        console.log(myString2.indexOf('JS')) // tìm vị trí index đầu tiên
        console.log(myString2.indexOf('JS', 5)) // tìm vị trí index bắt đầu từ index 5
        console.log(myString2.lastIndexOf('JS')) // tìm vị trí index cuối cùng
        console.log(myString2.search('JS')) // tìm vị trí index đầu tiên. Khác với indexOf là ko có bắt đầu từ index số mấy
        // JavaScript Regular Expressions (biểu thức chính quy)
        console.log(myString2.search(/JS/i)) // i là không phân biệt chữ hoa chữ thường

    // 3. Cut string
        var myString3 = 'Hoc JS tai JS F8! JS'
        console.log(myString3.slice(4)) // vị trí cắt ký tự trong chuỗi
        console.log(myString3.slice(4,6)) // vị trí bắt đầu cắt tới vị trí kết thúc
        console.log(myString3.slice(-6,-4)) // cắt từ phải sang trái

    // 4. Replace
        var myString4 = 'Hoc JS tai JS F8! JS'
        console.log(myString4.replace('JS', 'Javascript')) // thay thế chữ JS sang Javascript
        // JavaScript Regular Expressions (biểu thức chính quy)
        console.log(myString4.replace(/JS/g, 'Javascript')) // g là thay thế dc tất cả chữ JS sang Javascript

    // 5. Convert to upper case
        var myString5 = 'Hoc JS tai JS F8! JS'
        console.log(myString5.toUpperCase()) // thành chữ Hoa hết

    // 6. Convert to lower case
        var myString6 = 'Hoc JS tai JS F8! JS'
        console.log(myString6.toLowerCase()) // thành chữ Thường hết

    // 7. Trim
        var myString7 = '  Hoc JS tai F8!  '
        console.log(myString7.trim().length) // loại bỏ khoảng cách trắng giữa 2 đầu

    // 8. Split
        // cắt một chuỗi thành một array phải tìm được điểm chung
        var languages8 = 'HTML, CSS, Javascript'
        console.log(languages8.split(', '))
        console.log(languages8.split(''))

    // 9. Get a character by index
        const fullName9 = 'Lam Bao'
        console.log(fullName9.charAt(2)) // in ra chữ m
        console.log(fullName9.charAt(10)) // không in ra vì vị trí index vượt quá ký tự khai báo
        console.log(typeof fullName9.charAt(10))  // kiểu string
        console.log(fullName9[2]) // in ra chữ m
        console.log(fullName9[10]) // không in ra vì vị trí index vượt quá ký tự khai báo
        console.log(typeof fullName9[10]) // kiểu undefined

    // 10. Concat
        let text1 = "Hello"
        let text2 = "World"
        let text3 = text1.concat(" ", text2) // nối hai chuỗi lại với nhau
        console.log(text3)

    // String Properties
    //     constructor	Returns the string's constructor function
    //     length	Returns the length of a string
    //     prototype	Allows you to add properties and methods to an object

    // String Methods
    //     charAt()	Returns the character at the specified index (position)
    //     charCodeAt()	Returns the Unicode of the character at the specified index
    //     concat()	Joins two or more strings, and returns a new joined strings
    //     endsWith()	Checks whether a string ends with specified string/characters
    //     fromCharCode()	Converts Unicode values to characters
    //     includes()	Checks whether a string contains the specified string/characters
    //     indexOf()	Returns the position of the first found occurrence of a specified value in a string
    //     lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
    //     localeCompare()	Compares two strings in the current locale
    //     match()	Searches a string for a match against a regular expression, and returns the matches
    //     repeat()	Returns a new string with a specified number of copies of an existing string
    //     replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
    //     search()	Searches a string for a specified value, or regular expression, and returns the position of the match
    //     slice()	Extracts a part of a string and returns a new string
    //     split()	Splits a string into an array of substrings
    //     startsWith()	Checks whether a string begins with specified characters
    //     substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
    //     substring()	Extracts the characters from a string, between two specified indices
    //     toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
    //     toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
    //     toLowerCase()	Converts a string to lowercase letters
    //     toString()	Returns the value of a String object
    //     toUpperCase()	Converts a string to uppercase letters
    //     trim()	Removes whitespace from both ends of a string
    //     valueOf()	Returns the primitive value of a String object
*/

/*
//  KIỂU SỐ(Number) TRONG JAVASCRIPT
    // 1. Tạo  Number
    // - Các cách tạo => có 2 cách tạ 0 số(Number)
    // - Dùng cách nào? Tại sao? 
    //     + lý do 1 nên dùng cách 1 vì cách 2 dài dòng
    //     + lý do 2 khi tạo ra cùng một chuỗi thì cách 1 chạy nhanh hơn cách 2
    //     + lý do 3 kiểu dữ liệu tạo ra không mong muốn
    // - Kiểm tra data type
        var age1 = 18 // cách 1
        var age2 = new Number(18) // cách 2
        console.log(typeof age1)  // kiểu Number
        console.log(typeof age2)  // kiểu Object (kiểu dữ liệu tạo ra không mong muốn)

// LÀM VIỆC VỚI SỐ(Number)
//  Search: Javascript number methods
    // 1. To string
        var age = 18 
        console.log(age.toString())  // chuyển kiểu số sang kiểu chuỗi
        console.log(typeof age.toString())  // kiểu string

    // 2. To Fixed    
        var money = 100.789
        console.log(money.toFixed())  // làm tròn lên 1 nếu là 0.5 trở lên
        console.log(money.toFixed(2))  // lấy 2 số sau dấu chấm
        console.log(typeof money.toFixed())  // kiểu string

    // Number Properties    
        // constructor	Returns the function that created JavaScript's Number prototype
        // MAX_VALUE	Returns the largest number possible in JavaScript
        // MIN_VALUE	Returns the smallest number possible in JavaScript
        // NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
        // NaN	Represents a "Not-a-Number" value
        // POSITIVE_INFINITY	Represents infinity (returned on overflow)
        // prototype	Allows you to add properties and methods to an object
    
    // Number Methods
        // isFinite()	Checks whether a value is a finite number
        // isInteger()	Checks whether a value is an integer
        // isNaN()	Checks whether a value is Number.NaN
        // isSafeInteger()	Checks whether a value is a safe integer
        // toExponential(x)	Converts a number into an exponential notation
        // toFixed(x)	Formats a number with x numbers of digits after the decimal point
        // toLocaleString()	Converts a number into a string, based on the locale settings
        // toPrecision(x)	Formats a number to x length
        // toString()	Converts a number to a string
        // valueOf()	Returns the primitive value of a number
*/

/* 
// MẢNG(Array) TRONG JAVASCRIPT 
    // 1. Tạo mảng
    //     - Cách tạo => có 2 cách
    //     - Sử dụng cách nào? 
    //         + lý do 1 nên dùng cách 1 vì cách 2 dài dòng
    //         + lý do 2 khi tạo ra cùng một chuỗi thì cách 1 chạy nhanh hơn cách 2
    //         + lý do 3 kiểu dữ liệu tạo ra không mong muốn
    //     - Kiểm tra data type
            var Array1 = [
                'HTML',
                'CSS',
                'Javascript',
            ] // cách 1

            var Array2 = new Array(
                'HTML',
                'CSS',
                'Javascript',
            ) // cách 2

            console.log(typeof Array1)  // kiểu Object
            console.log(typeof Array2)  // kiểu Object

            // muốn kiểm tra có phải là Array ko thì dùng cách này coi phải là Array không
            console.log(Array.isArray(Array1))  // Kiểu Array vì nó in ra true
            console.log(Array.isArray(Array2))  // Kiểu Array vì nó in ra true

    // 2. Truy xuất mảng
        var languages = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        // - Độ dài mảng
        console.log(languages.length)  // có 3 phần tử trong mảng

        // - Lấy phần tử theo index
        console.log(languages[2])  // từ vị trí index lấy ra phần tử trong mảng

// LÀM VIỆC VỚI MẢNG(Array)
// Search: Javascript array methods
    // 1. To string
        var languages1 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages1.toString())  // chuyển kiểu Array sang kiểu String

    // 2. Join
        var languages2 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages2.join(' - '))  // chuyển kiểu Array sang kiểu String và bỏ ký tự mình muốn vào giữa các phần tử

    // 3. Pop
        var languages3 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages3.pop())  // lần 1 xóa element cuối mảng và trả về phần tử đã xóa
        console.log(languages3.pop())  // lần 2 xóa element kế bên mảng và trả về phần tử đã xóa
        console.log(languages3.pop())  // lần 3 xóa element kế bên mảng và trả về phần tử đã xóa
        console.log(languages3.pop())  // lần 4 vì hết phần tử để xóa nên nó để undefined

    // 4. Push
        var languages4 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages4.push('Python', 'C++'))  // thêm element vào cuối mảng rồi trả về số phần tử

    // 5. Shift 
        var languages5 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages5.shift())  // lần 1 xóa element đầu mảng và trả về phần tử đã xóa
        console.log(languages5.shift())  // lần 2 xóa element đầu mảng và trả về phần tử đã xóa
        console.log(languages5.shift())  // lần 3 xóa element đầu mảng và trả về phần tử đã xóa
        console.log(languages5.shift())  // lần 4 xóa element đầu mảng và trả về phần tử đã xóa

    // 6. Unshift 
        var languages6 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages6.unshift('Python', 'C++'))  // thêm element vào đầu mảng rồi trả về số phần tử

    // 7. Splicing 
        // (xóa cắt chèn)
        var languages71 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages71.splice(1, 2))  // số 1 là từ index 1, số 2 là xóa 2 phần tử từ index 1 và trả về phần tử đã xóa
        var languages72 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages72.splice(1, 1, 'Python', 'C++'))  // số 1 là từ index 1, số 1 là xóa 1 phần tử từ index 1(số 0 là không xóa phần nào từ index 1), 'Python' và 'C++' là thêm phần tử ở index 1 và trả về phần tử đã xóa nếu ko xóa thì mảng rỗng

    // 8. Concat 
        var languages81 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        var languages82 = [
            'Python',
            'C++',
            'C#',
        ] 
        console.log(languages81.concat(languages82))  // 2 mảng hợp nhất thành 1 mảng trong languages

    // 9. Slicing
        var languages91 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages91.slice(1))  // từ index 1 cắt hết phần tử trong mảng đến cuối
        var languages92 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages92.slice(1,2))  // từ index 1 cắt 2 phần tử trong mảng từ index 1
        var languages93 = [
            'HTML',
            'CSS',
            'Javascript',
        ] 
        console.log(languages93.slice(0))  // để số 0 nó biến thành copy hết mảng
        
    // Array Properties
    //     constructor	Returns the function that created the Array object's prototype
    //     length	Sets or returns the number of elements in an array
    //     prototype	Allows you to add properties and methods to an Array object
    // Array Methods
    //     concat()	Joins two or more arrays, and returns a copy of the joined arrays
    //     copyWithin()	Copies array elements within the array, to and from specified positions
    //     entries()	Returns a key/value pair Array Iteration Object
    //     every()	Checks if every element in an array pass a test
    //     fill()	Fill the elements in an array with a static value
    //     filter()	Creates a new array with every element in an array that pass a test
    //     find()	Returns the value of the first element in an array that pass a test
    //     findIndex()	Returns the index of the first element in an array that pass a test
    //     forEach()	Calls a function for each array element
    //     from()	Creates an array from an object
    //     includes()	Check if an array contains the specified element
    //     indexOf()	Search the array for an element and returns its position
    //     isArray()	Checks whether an object is an array
    //     join()	Joins all elements of an array into a string
    //     keys()	Returns a Array Iteration Object, containing the keys of the original array
    //     lastIndexOf()	Search the array for an element, starting at the end, and returns its position
    //     map()	Creates a new array with the result of calling a function for each array element
    //     pop()	Removes the last element of an array, and returns that element
    //     push()	Adds new elements to the end of an array, and returns the new length
    //     reduce()	Reduce the values of an array to a single value (going left-to-right)
    //     reduceRight()	Reduce the values of an array to a single value (going right-to-left)
    //     reverse()	Reverses the order of the elements in an array
    //     shift()	Removes the first element of an array, and returns that element
    //     slice()	Selects a part of an array, and returns the new array
    //     some()	Checks if any of the elements in an array pass a test
    //     sort()	Sorts the elements of an array
    //     splice()	Adds/Removes elements from an array
    //     toString()	Converts an array to a string, and returns the result
    //     unshift()	Adds new elements to the beginning of an array, and returns the new length
    //     valueOf()	Returns the primitive value of an array
*/

/*
// LÀM VIỆC VỚI MẢNG(Array) PHẦN 2
// Search: JavaScript Array Iteration
    // Array methods:
    var courses = [
        {
            id: 1,
            name: 'Javascript',
            coin: 50
        },
        {
            id: 2,
            name: 'CSS',
            coin: 0
        },
        {
            id: 3,
            name: 'CSS',
            coin: 200
        },
        {
            id: 4,
            name: 'Python',
            coin: 150
        },
    ]

    // 1. forEach() 
    // duyệt qua từng phần tử của mảng
    var forEach = courses.forEach(function(course, index, array) {
        console.log('\ncourse', course, '\nindex', index, '\narray', array)
    })
    console.log(forEach) // undefined ko tạo ra mảng mới // còn map() tạo ra mảng mới

    // vd1:
    // const numbers = [1, 2, 3, 4, 5, 6] 
    // let sum = 0 
    // for(let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }
    // console.log(sum) // => 21

    // vd2:
    // const numbers = [1, 2, 3, 4, 5, 6]
    // let sum = 0
    // forEach(numbers, function(element){
    //     sum += element
    // })
    // console.log(sum) // => 21

    // 2. every() 
    // chỉ cần 1 phần tử trong mảng ko thỏa điều kiện thì sẽ trả về false
    var every = courses.every(function(course, index, array) {
        console.log('every \ncourse', course, '\nindex', index, '\narray', array) 
        return course.coin === 0 // tất cả coin có bằng 0, thì trả về true
    })
    console.log('every',every) // kq: false

    // 3. some() 
    // chỉ cần 1 phần tử trong mảng thỏa mãn 1 điều kiện thì trả về true
    var some = courses.some(function(course, index, array) {
        console.log('some \ncourse', course, '\nindex', index, '\narray', array) 
        return course.coin === 0 // 1 coin có bằng 0, thì trả về true
    })
    console.log('some',some) // kq: true
    
    // 4. find() 
    // tìm xem trong mảng có phần tử đó có hay không, nếu có trả về phần tử đó, nếu không có thì trả về undefined. 
    // lưu ý chỉ trả về phần tử đầu tiên nó kiểm tra là đúng phần tử sau cho dù đúng điều kiện nó vẫn không trả về.
    var find = courses.find(function(course, index, array) {
        console.log('find \ncourse', course, '\nindex', index, '\narray', array) 
        return course.name === 'CSS' // chỉ cần 1 phần tử bằng CSS thì trả về 1 cái đầu
    })
    console.log('find',find)

    // 5. filter() 
    // giống như find() như nó in hết ra hết phần tử đã thỏa mãn điều kiện.
    var filter = courses.filter(function(course, index, array) {
        console.log('filter \ncourse', course, '\nindex', index, '\narray', array)
        return course.name === 'CSS' // nhiều phần tử bằng CSS thì trả về hết
    })
    console.log('filter',filter)

    // 6. map()
    // duyệt qua từng phần tử của mảng, tạo ra mảng mới
    // ví dụ 1: 
    var newArray = courses.map(function(course, index, array) {
        console.log('\ncourse', course, '\nindex', index, '\narray', array)
        return {course, index, array}
    })
    console.log(newArray) // tạo ra mảng mới

    // ví dụ 2:
    var newCourse = courses.map(function(course, index, array) {
        console.log('\ncourse', course, '\nindex', index, '\narray', array)
        return {
            id: course.id,
            name: `Khoa hoc: ${course.name}`,
            coin: course.coin,
            coniText: `Gia: ${course.coin}`,
            index: index, // ví trí index
            array: array, // in ra mảng gốc khi chưa thay đổi
        }
    })
    console.log(newCourse) // tạo ra mảng mới

    // 7. reduce()
    // ví dụ 1
    var courses1 = [
        {
            id: 1,
            name: 'Javascript',
            coin: 100
        },
        {
            id: 2,
            name: 'CSS',
            coin: 200
        },
        {
            id: 3,
            name: 'CSS',
            coin: 300
        },
        {
            id: 4,
            name: 'Python',
            coin: 400
        },
    ]
    // nhận về giá trị duy nhất sau khi tính toán và xử lý trên phần tử array
    // previousValue là biến lưu trữ trước trong trường hợp này previousValue = 0 là giá trị khởi tạo
    // currentValue giá trị hiện tại trong trường hợp này currentValue.coin = 100 giá trị ban đầu
    var newArrayReduce = courses1.reduce(function(previousValue, currentValue, currentIndex, array) {
        console.log('\npreviousValue', previousValue, '\ncurrentValue', currentValue ,'\ncurrentIndex', currentIndex, '\narray', array)
        var total = previousValue + currentValue.coin
        console.table({
            'Vị trí': currentIndex, 
            'biến lưu trữ': previousValue, 
            'currentValue.coin':currentValue.coin,  
            'total': previousValue + '+' + currentValue.coin + '=' + total
        })
        return total  // thực hiện việc lưu trữ
    },0) // số 0 là giá trị khởi tạo
    console.log('kq cuối cùng: ',newArrayReduce)

    // ví dụ 2
    // const depthArray = [1,[2,3,4],5,6,[7,8,9]]
    // var flatArray = depthArray.reduce(function(previousValue, currentValue, currentIndex, array) {
    //     return previousValue.concat(currentValue)
    // }, [])
    // console.log(flatArray)

    // 8. includes method
    var title = 'Responsive web design'
    console.log(title.includes('web')) // tìm chữ trong chuỗi nếu có thì trả về true

    var courses = ['HTML','CSS','Javascript']
    console.log(courses.includes('CSS'))  // tìm chữ trong mảng nếu có thì trả về true
*/

/*
// Callback?
    // 1. Là hàm
    // 2. Được truyền qua đối số
    // 3. Được gọi lại (trong hàm nhận đối số)
    function myFunction(param) {
        if(typeof param === 'function'){
            param('Học lập trình')
        }
    }
    function myCallback(value) {
        console.log('Value:', value) 
    }
    myFunction(myCallback)
*/

/*
Hàm (function) trong Javascript
    1. Hàm?
        - Một khối mã
        - Làm 1 việc cụ thể

    2. Loại hàm
        - Built-in
        - Tự định nghĩa

    3. Tính chất
        - Không thực thi khi định nghĩa
        - Sẽ thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về một giá trị

    4. Tạo hàm đầu tiên

        function tenham() {
            alert('Hi') 
        }
        tenham()

Tham số hàm trong Javascript 

    1. Tham số?
        - Định nghĩa? Khi định nghĩa 1 hàm gọi là tham số, khi gọi đến nó gọi là đối số
        - Kiểu dữ liệu? Không giới hạn
        - Tính private?
        - 1 tham số
        - Nhiều tham số

    2. Truyền tham số
        - 1 tham số
        - Nhiều tham số

    3. Arguments?
        - Đối tượng arguments
        - Giới thiệu vòng for of

        function writeLog() {
            for (const iterator of arguments) {
                console.log(iterator) 
            }
        }
        writeLog('Log 1', 'Log 2', 'Log 3')

    4. Return trong hàm 
        function cong(a,b) {
            return a + b
        }
        console.log(cong(2,3)) 

Một số điều cần biết về function

    1. Khi function đặt trùng tên? Thì hàm đặt dưới ghi đè lên hàm trên
        function showMessage() {
            console.log('Message 1') 
        }

        function showMessage() {
            console.log('Message 2') 
        }

        // nó sẽ in ra Message 2 vì nó ghi đè lên
        showMessage()

    2. Khai báo biến trong hàm? Khai báo được biến trong hàm
        function showName() {
            var fullName = 'lam bao'
            console.log(fullName) 
        }

    3. Định nghĩa hàm trong hàm?
        function showMessage1() {
            function showMessage2() {
                console.log('lam bao') 
            }
            showMessage2()
        }
        showMessage1()
    
Các loại function

    1. Declaration function
        showMessage() // Declaration function có thể gọi trước khi khai báo
        function showMessage() {

        }

    2. Expression function
        showMessage() // sẽ bị lỗi ko thể gọi trước khi khai báo
        var showMessage = function() {
            
        }

        setTimeout(function() {

        })

        var myObject = {
            myFunction: function() {

            }
        }

    3. Arrow function
        // cách viết có return 
        const sum = (a, b) => {
            return a + b
        }
        console.log(sum(2,2))

        // cách viết ko có return
        const add = (a, b) => a + b  // Điều này chỉ hoạt động nếu hàm chỉ có một câu lệnh.
        console.log(add(2,2))

        // cách viết có return object
        const sub = (a, b) => {
            return {
                a: a,
                b: b
            }
        }
        console.log(sub(2,2))

        // cách viết return object ngắn gọn hơn
        const tru = (a, b) => ({a: a, b: b })
        console.log(tru(2,2))

        // cách viết khi có một tham số
        const logger1 = (log) => console.log(log)
        logger1('Message1...')

        // cách viết có một tham số ta có thể bỏ dấu () đi
        const logger2 = log => console.log(log)
        logger2('Message2...')

        // điểm khác thứ nhất nhau giữa function với arrow function
        const context = {
            name: 'HTML',
            getName: function() {
                return this.name // sẽ in ra kết quả
            }
        }
        console.log('function',context.getName())

        const arrowfunction = {
            age: '18',
            getName: () => {
                return this.age // điểm khác của arrow function nó sẽ không in ra kết quả mà là undefined
            }
        }
        console.log('arrow function',arrowfunction.getName())

        // điểm khác nhau thứ hai giữa function với arrow function
        const context1 = function(name,price) {
            this.name = name
            this.price = price
        }
        const kq = new context1('Java',1000)
        console.log(kq)

        // sữa thành arrow function nó sẽ lỗi là 'context2 is not a constructor'
        // const context2 = (name,price) => {
        //     this.name = name 
        //     this.price = price 
        // }
        // const kq2 = new context2('HTML-CSS',1000)
        // console.log(kq2) 
*/

/*
// Object trong javascipt

    // thêm key và value
    var emailKey = 'email-key' // cách 3 phải đặt trên myInfor
        
    myInfor = {
        name: 'Lam Bao',
        age: 18,
        address: 'Ho Chi Minh, VN', // gọi là key or thuộc tính 
        [emailKey]: 'lvb@gmail.com',
        // đặt hàm trong đây
        getName: function() {
            return this.name  // gọi là function or phương thức
        },
        // ta cũng có thể định nghĩa mảng trong object
        listPoint: ['PointA', 'PointB', 'PointC', 'PointD']
    } 

    // thêm key và value
    myInfor.email = 'lvbao@fullstack.edu.vn' // cách 1 
    myInfor['my-email'] = 'lvbao@edu.vn' // cách 2 
    console.log(myInfor)

    // lấy 1 value ra ngoài ta chỉ cần gọi key ra
    console.log(myInfor.age)  // cách 1 
    console.log(myInfor['age'])  // cách 2 
    var myKey = 'address'
    console.log(myInfor[myKey])  // cách 3

    // xóa 1 value 
    delete myInfor.age

    // truy xuất theo hàm
    console.log(myInfor.getName())

    // truy xuất theo mảng
    console.log(myInfor.listPoint)
    console.log(myInfor.listPoint[1])

    // Function --> Phương thức / method
    // Others --> Thuộc tính / property

// Object constructor

    var User = function(fistName, lastName) {
        this.fistName = fistName 
        this.lastName = lastName 

        this.getName = function() {
            return `${this.fistName} ${this.lastName}`
        }
    } 

    var author = new User('Lam', 'Bao')
    var user = new User('Bao', 'Binh')

    author.title = 'Khóa học F8'
    user.comment = 'ahii khóa học hay quá'

    console.log(author)
    console.log(user)
    console.log(user.constructor)
    console.log(user.constructor === User)
    console.log(author.getName())
    console.log(user.getName())

// Object prototype

    var User = function(fistName, lastName) {
        this.fistName = fistName 
        this.lastName = lastName 
    }

    User.prototype.className = 'F8'
    User.prototype.getClassName = function() {
        return this.className
    }

    var user1 = new User('Lam', 'Bao')
    var user2 = new User('Binh', 'Bao')

    console.log(user1) 
    console.log(user2) 
    console.log(user1.className) 
    console.log(user2.getClassName()) 
*/

/*
// Math object
// search: JavaScript Math Object

    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()

    console.log(Math.PI) 
    console.log(Math.round(1.6)) 
    console.log(Math.abs(-7)) 
    console.log(Math.ceil(4.1))  // làm tròn trên phải lên hơn 0
    console.log(Math.floor(5.9))  // làm trong dưới
    // ví dụ 1: random
        var random = Math.floor(Math.random() * 5) 
        var bonus = [
            '10 coin',
            '20 coin',
            '30 coin',
            '40 coin',
            '50 coin',
        ]
        console.log(bonus[random]) 
    // ví dụ 2: random
        var random = Math.floor(Math.random() * 100) 
        if(random < 50) {
            console.log('Cường hóa thành công') 
        }

    console.log(Math.min(1,2,3,4,5,6,7,8,9)) 
    console.log(Math.max(1,2,3,4,5,6,7,8,9)) 
*/

/*
// Đối tượng Date
// Search: javascript date object 

    var date = new Date()

    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    console.log(`${day}/${month}/${year}`) 
*/

/*
//  Câu lệnh rẽ nhánh - If else
    // if(điều kiện) {} 
    // else if (điều kiện) {} 
    // else {}

// Câu lệnh rẽ nhánh - Switch
    var date = 2
    switch(date) {
        case 2:
            console.log('Hôm nay thứ 2') 
            break
        default:
            console.log('ERROR') 
    }

// Toán tử 3 ngôi (ternary operator)
    var course = {
        name: 'HTML-CSS',
        coin: 100
    }

    // if (course.coin > 0) {
    //     console.log(`${course.coin} Coins`) 
    // } else {
    //     console.log('Miễn phí') 
    // } // cách thường

    var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn Phí'
    console.log(result)

// Vòng lặp Loop
    // 1. for lặp với điều kiện đúng
        for(var i = 1; i <= 100; i++) {
            console.log(i)
        }

        var myArray = [
            'HTML',
            'CSS',
            'Javascript',
            'Python',
        ]

        var arrayLength = myArray.length

        for(var i = 0; i < arrayLength; i++) {
            console.log(myArray[i])
        }

    // 2. for/in lặp qua key của đối tượng
        // object
        var myInfor = {
            name: 'Lam Bao',
            age: 18
        }
        for(var key in myInfor) {
            console.log(key)
            console.log(myInfor[key])
        }

        // array
        var languages = [
            'HTML',
            'CSS',
            'Javascript',
            'Python',
        ]
        for(var key in languages) {
            console.log(key) 
            console.log(languages[key]) 
        }

        // string
        var myString = 'Javascript'
        for(var key in myString) {
            console.log(key) 
            console.log(myString[key]) 
        }


    // 3. for/of lặp qua value của đối tượng
        // array
        var languages = [
            'HTML',
            'CSS',
            'Javascript',
            'Python',
        ]
        for(var value of languages) {
            console.log(value) 
        }

        // string
        var myString = 'Javascript'
        for(var value of myString) {
            console.log(value) 
        }

        // object
        var myInfor = {
            name: 'Lam Bao',
            age: 18
        }
        console.log(Object.keys(myInfor))  // chuyển thành mảng trả về key
        for(var value of Object.keys(myInfor)) {
            console.log(value) 
            console.log(myInfor[value]) 
        }
        console.log(Object.values(myInfor))  // chuyển thành mảng trả về value
        for(var value of Object.values(myInfor)) {
            console.log(value) 
        }

    // 4. while lặp khi điều kiện đúng
        var myArray = [
            'HTML',
            'CSS',
            'Javascript',
            'Python',
        ]

        var arrayLength = myArray.length
        var i = 0
        while(i < arrayLength) {
            console.log(myArray[i])
            i++;
        }

    // 5. do/while lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
        var i = 0
        do {
            console.log(i)
            i++
        } while(i <= 10)

// Break & Continue in Loop
    for(var i = 0; i < 10; i++){
        if(i >= 5){
            break
        }
        console.log(i)

    }
    
    for(var i = 0; i < 10; i++){
        if (i%2 !== 0){
            continue
        }
        console.log(i)

    }

// Vòng lặp lồng nhau (Nested loop)
    var myArray = [
        [1,2],
        [3,4],
        [5,6],
    ]

    for(var i = 0; i < myArray.length; i++) {
        for(var j = 0; j < myArray[i].length; j++) {
            console.log(myArray[i][j])
        }
    }
*/

/*
2. JSON
    // Là một định dạng dữ liệu (chuỗi)
    // Javascript Object Notation
    // JSON: Number, Boolean, String, Null, Array, Object
    // Stringify: Từ Javascript types -> JSON
    // Parse: Từ JSON -> Javascript types
    var jsonnumber = '1'
    var jsonboolean = 'true'
    var jsonstring = '"lam van bao"'
    var jsonnull = 'null'
    var jsonarray = '["lam","bao"]'
    var jsonobject = '{"name":"lamvanbao","age":"18"}'

    // Từ JSON -> Javascript types
    console.log(JSON.parse(jsonnumber)) 
    console.log(JSON.parse(jsonboolean)) 
    console.log(JSON.parse(jsonstring)) 
    console.log(JSON.parse(jsonnull)) 
    console.log(JSON.parse(jsonarray)) 
    console.log(JSON.parse(jsonobject)) 

    // Từ Javascript types -> JSON
    console.log(JSON.stringify(1)) 
    console.log(JSON.stringify(true)) 
    console.log(JSON.stringify(null)) 
    console.log(JSON.stringify(["lam","bao"])) 
    console.log(JSON.stringify({
        name: "lamvanbao",
        age: "18",
    })) 

3. Promise
    // - Sync(đồng bộ)
    // - Async(bất đồng bộ)
    // - Nỗi đau
        // + Callback hell 
        setTimeout(function() {
            console.log(1) 
            setTimeout(function() {
                console.log(2) 
                setTimeout(function() {
                    console.log(3) 
                }, 1000)
            }, 1000)
        }, 1000)
        // + Pyramid of doom  (đi vào bế tắc)
    // - Lý thuyết, cách hoạt động
        // Promise là một khái niệm sinh ra để xử lý bất đồng bộ và trước khi có Promise người ta sử dụng callback
        // và callback nó sinh ra vấn đề đó là callback hell nó sẽ đi sâu vào và khó nhìn, khó hiểu và nó sinh ra từ
        // phiên bản ES6 để khắc phục tình trạng callback hell
        // để tạo ra Promise sử dụng từ khóa new Promise và trong constructor của nó ta truyền 1 excutor function
        // trong function có nó ta nhận được hai tham số một là resolve, reject
        // resolve khi gọi thao tác thành công và reject khi gọi thao tác thất bại
        // và khi ta sử dụng Promise ta sử dụng phương thức .then() khi thành công và .catch() khi thất bại
        

        // khởi tạo Promise()
        // nếu là Promise() thì truyền vào function
        // thuật ngữ Executor nghĩ là hàm này sẽ thực thi khi gọi đến Promise
        // ví dụ 1
        var promise = new Promise(
            // Executor
            function(resolve, reject) {
                // logic
                // Thành công: resolve()
                // Thất bại: reject()

                // resolve('Thành công')
                reject('Thất bại')
            }
        )

        // có 3 trạng thái Promise
        // + Pendding nghĩa là chờ thành công hay thất bại
        // + Fulfilled nghĩa là thành công
        // + Rejected nghĩa là thất bại
        promise
            // khi thành công thì gọi then
            .then(function(thanhcong) {
                console.log(thanhcong) 
            })
            // khi thất bại thì gọi catch
            .catch(function(thatbai) {
                console.log(thatbai) 
            })
            // khi thành công hay thất bại thì gọi finally
            .finally(function() {
                console.log('Done!') 
            })

        // ví dụ 2
            function sleep(ms){
                return new Promise(function(resolve, reject) {
                    setTimeout(resolve, ms) 
                }) 
            }
            sleep(1000)
                .then(function() {
                    console.log(1) 
                    return sleep(1000) 
                })
                .then(function() {
                    console.log(2) 
                    return sleep(1000) 
                })
                .catch(function(){
                    console.log("eror") 
                })
    // Cách viết khác của Promise gọi là Promise methods 
        // 1. Promise.resolve()
        // 2. Promise.reject()
        // 3. Promise.all()

        // 1. Promise.resolve()
        var promise1 = Promise.resolve('Success') // trạng thái luôn luôn thành công
        promise1
            .then(function(result) {
                console.log('Result: ', result) 
            })
        // 2. Promise.reject()
        var promise2 = Promise.reject('Fail') // trạng thái luôn luôn thất bại
        promise2
            .catch(function(result) {
                console.log('Error: ', result ) 
            })
        // 3. Promise.all()
        var promisecv1 = new Promise(
            function(resolve, reject) {
                setTimeout(function() {
                    resolve([1])
                }, 1000)
            }
        )

        var promisecv2 = new Promise(
            function(resolve, reject) {
                setTimeout(function() {
                    resolve([2,3])
                }, 2000)
            }
        )

        Promise.all([promisecv1, promisecv2])
            .then(function(result) {
                var result1 = result[0]
                var result2 = result[1]
                console.log(result1.concat(result2)) 
            })
            // .then(function([result1, result2]) { // .then cách viết ES6
            //     console.log(result1.concat(result2)) 
            // })
            .catch(function(error) {
                console.log(error) 
            })

4. Fetch (https://jsonplaceholder.typicode.com/)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        return response.json()
        // JSON.parse: JSON -> Javascript type
    })
    .then(function(posts) {
        console.log(posts) 
        var htmls = posts.map(function(post) {
            return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    </li>`
        })
        var html = htmls.join('') 
        document.getElementById('post-block').innerHTML = html
    })

5. DOM location
6. Local storage
7. Session storage
8. Coding convention
9. Best Practices
10. Mistakes
11. Performance
*/

// Polyfill?
// hỗ trợ trình duyệt cũ includes
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
  
      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }
    










