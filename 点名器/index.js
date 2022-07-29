var ul = document.querySelector('ul');
var array = [{ name: '张三' }, { name: '张四' }, { name: '张五' }, { name: '张六' }, { name: '李三' }, { name: '李四' }, { name: '李五' }, { name: '李六' }, { name: '王三' }, { name: '王四' }, { name: '王五' }, { name: '王六' }, { name: '王七' }];
var array1 = [];
var array2 = [];
var btn = document.querySelector('.btn');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var drdm;
var aa;
var bb;
var cc = '#';
var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var arr1 = [];
xr(array);
// for(let j = 0;j<6;j++){
//     bb=Math.floor(Math.random() * arr.length);
//     cc+=arr[bb]
//     console.log(cc,'cc');
// }
// arr1.push(cc)
function xr(array) {
    array.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = "".concat(item.name);
        ul.appendChild(li);
    });
    btn.onclick = function () {
        drdm = setInterval(function () {
            aa = Math.floor(Math.random() * array.length);
            arr1 = [];
            for (var i = 0; i < array.length; i++) {
                cc = '#';
                for (var j = 0; j < 6; j++) {
                    bb = Math.floor(Math.random() * arr.length);
                    cc += arr[bb];
                }
                arr1.push(cc);
            }
            var li = document.querySelectorAll('li');
            for (var i = 0; i < li.length; i++) {
                li[i].style.background = arr1[i];
            }
        }, 100);
    };
    btn2.onclick = function () {
        clearInterval(drdm);
        console.log('123');
        if (array1.length == array.length) {
            array1 = [];
        }
        if (array1.length == 0) {
            array1.push(aa);
        }
        else {
            for (var i = 0; i < array1.length; i++) {
                if (array1[i] == aa) {
                    aa = Math.floor(Math.random() * array.length);
                    console.log(i);
                    if (i != array.length - 1) {
                        i = -1;
                    }
                    else if (array.length - 1 == i) {
                        array1 = [];
                    }
                }
            }
            array1.push(aa);
            console.log(array1);
        }
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++) {
            li[i].style.background = '';
        }
        li[aa].style.background = 'red';
    };
    btn1.onclick = function () {
        array2 = [];
        for (var i = 0; i < 2; i++) {
            var aa_1 = Math.floor(Math.random() * array.length);
            array2.push(aa_1);
        }
        var li = document.querySelectorAll('li');
        for (var i = 0; i < li.length; i++) {
            li[i].style.background = '';
        }
        for (var i = 0; i < array2.length; i++) {
            li[array2[i]].style.background = 'red';
        }
    };
}
