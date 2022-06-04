// JS HTML DOM
// 1. Element: ID, class, tag, CSS selector, HTML collection
// - ID
var nameId = document.getElementById('getID')
console.log('ID', nameId);
// - class
var nameClass = document.getElementsByClassName('getClass')
console.log('class', nameClass);
// - tag 
var nameTag = document.getElementsByTagName('div')
console.log('tag', nameTag);
// - CSS selector
var nameCSS = document.querySelector('.getCSS')
console.log('query 1 Class', nameCSS);
var nameAllCSS = document.querySelectorAll('.getCSS ul li')
console.log('query nhiều Class', nameAllCSS);
// - HTML collection
console.log('query trong form theo tên id', document.forms['form-1'])
console.log('query trong form theo vị trí index', document.forms[0])
console.log('query trong form theo vị trí index', document.forms[1])

// 2. Attribute
// thêm tên Attribute vào element
var headingElement = document.querySelector('a')

// + cách 1 này gọi là seter
headingElement.className = 'Heading' // thêm thuộc tính class 
headingElement.id = 'Heading' // thêm thuộc tính id
headingElement.title = 'Heading' // thêm thuộc tính title
headingElement.href = 'google.com' // thêm thuộc tính href // nếu đặt tên thuộc tính href này không phải trên thẻ <a></a> sẽ bị lỗi vì thẻ <a></a> có thuộc tính này 

// + cách 2 này gọi là phương thức 
// nếu đặt tên thuộc tính href có sẵn hoặc một tên thuộc tính bất kì 
// thì tên thuộc tính sẽ xuất hiện trong thẻ mình muốn khác với cách 1 seter
headingElement.setAttribute('class', 'heading...') // đè lên thuộc tính headingElement.className = 'Heading'
headingElement.setAttribute('id', 'heading...') // đè lên thuộc tính headingElement.id = 'Heading'
// một tên thuộc tính bất kỳ mà không có sẵn 
headingElement.setAttribute('abc', 'tenthuoctinh') 

// lấy tên Attribute từ thẻ mà mình đã đặt tên
var getElement = document.querySelector('h3')
getElement1 = getElement.getAttribute('id')
console.log('lấy tên Attribute ra: ',getElement1);
getElement2 = getElement.getAttribute('class')
console.log('lấy tên Attribute ra: ',getElement2);

// 3. Text 
// - InnerText với TextContent
var nameText = document.querySelector('.text-test')
console.log('InnerText: ',nameText.innerText); // trước khi xử lý
console.log('TextContent: ',nameText.textContent); // trước khi xử lý
nameText.innerText = `

New InnerText với TextContent

`
// sự khác biệt giữa innerText vs textContent
console.log("sự khác biệt giữa innerText vs textConten: ",nameText.innerText); // sau khi xử lý
console.log("sự khác biệt giữa innerText vs textContent: ",nameText.textContent); // sau khi xử lý

// DOM HTML
// InnerHTML 
// nếu thêm inerHTML vào thì các thành phần thẻ bên trong class="box1" sẽ mất hết vì nó ghi đè lên ghi đè lên chính <div title="trang chu">add</div>
var boxElement1 = document.querySelector('.box1').innerHTML = '<div title="trang chu">element1</div>' 
console.log('InnerHTML',boxElement1);
// OuterHTML
// khi console.log thì nó vẫn in ra <div title="trang chu">element</div> như thời điểm hiện tại nó không còn trong DOM nữa
var boxElement2 = document.querySelector('.box2').outerHTML = '<div title="trang chu">element2</div'
console.log('OuterHTML',boxElement2);

// DOM CSS
var domCSS = document.querySelector('.box3')
// cách 1
domCSS.style.width = '100px'
domCSS.style.height = '150px'
domCSS.style.backgroundColor = 'red'
// cách 2
Object.assign(domCSS.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'blue'
})

// ClassList property
var boxElement = document.querySelector('.box4')
// 1.add // thêm class vào element
boxElement.classList.add('color-red')
// 2.contains // kiểm tra có tồn tại class trong element ko có thì true
console.log(boxElement.classList.contains('color-red'))
// 3. remove // xóa class trong element
boxElement.classList.remove('color-red')
// 4. toggle // kiểm tra có class đó trong element có hay không có thì xóa class đó đi không có thì thêm class đó vào
setInterval(() => {
    boxElement.classList.toggle('red')
},1000)


