// DOM events
// 1. Attribute events
// xem ví dụ bên dom2.html
/* 
    <h1 onclick="console.log(this);">
        <span>JavaScript HTML DOM Events - Attribute events</span>
    </h1> 
*/

// 2. Assign event using the element node
    // chỉ chọn onclick 1 thẻ element 
    var h1Element = document.querySelector('.box5')
    h1Element.onclick = function(event) {
        console.log(event.target);
    }

    // chọn onclick nhiều thẻ element 
    var h1Element = document.querySelectorAll('h1')
    for (let i = 0; i < h1Element.length; i++) {
        h1Element[i].onclick = function(event) {
            console.log(event.target);
        }
    }

// 3. DOM events example
var textElement = document.querySelector('input[type="text"]')
textElement.oninput = function(event) {
    console.log(event.target.value);
}

var checkboxElement = document.querySelector('input[type="checkbox"]')
checkboxElement.oninput = function(event) {
    console.log(event.target.checked);
}

var selectElement = document.querySelector('select')
selectElement.onchange = function(event) {
    console.log(event.target.value);
}

var onkeydownElement = document.querySelector('input[type="text"]')
onkeydownElement.onkeydown = function(event) {
    console.log(event.target.value);
}

var onkeydownElement = document.querySelector('input[type="text"]')
onkeydownElement.onkeyup = function(event) {
    console.log(event.target.value);
}

// 4. DOM event
// 1. preventDefault
var alements = document.querySelectorAll('a')

for (var i = 0; i < alements.length; i++) {
    alements[i].onclick = function(event) {
        // nếu không phải là đường link có địa chỉ này thì bỏ qua hành vi mặc định của thẻ a
        if (!event.target.href.startsWith('https://fullstack.edu.vn')) {
            event.preventDefault() // bỏ qua hành vi mặc định
        }
    }
}
// 2. stopPropagation
document.querySelector('.noibot').onclick = function() {
    console.log('DIV')
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation() // bỏ qua nổi bột chữ DIV khi click vào
    console.log('Click me!')
}

// 5. Event listener
// Xử lý nhiều việc khi 1 event xảy ra
// Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn')

function viec1() {
    console.log('Viec 1');
}

function viec2() {
    console.log('Viec 2');
}

// Lắng nghe
btn.addEventListener('click',viec1)
btn.addEventListener('click',viec2)

// Hủy bỏ
setTimeout(function() {
    btn.removeEventListener('click',viec1)
}, 3000)