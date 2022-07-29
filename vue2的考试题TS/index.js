var array1 = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
];
var array = array1;
var ss = 0;
var bb = 0;
var cc = 0;
var arrys = [];
var ipt = document.querySelector('.ipt');
var tbody = document.querySelector('tbody');
var ul = document.querySelector('ul');
xr(array);
function xr(array) {
    tbody.innerHTML = '';
    array.forEach(function (item) {
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(item.id, "</td><td>").concat(item.goods_name, "</td><td>").concat(item.price, "</td>");
        tbody.appendChild(tr);
    });
}
function sc(e) {
    if (e.keyCode == 13) {
        var aa_1 = e.target.value;
        if (aa_1 == '') {
            xr(array);
        }
        else {
            var arr = array.filter(function (item) {
                return item.goods_name.includes(aa_1);
            });
            xr(arr);
        }
    }
}
function px() {
    var img1 = document.querySelectorAll('#img1')[0];
    console.log(img1);
    if (ss == 0) {
        var arr = array.sort(function (a, b) {
            return b.id - a.id;
        });
        img1.className = 'xz';
        ss = 1;
        xr(arr);
    }
    else {
        var arr = array.sort(function (a, b) {
            return a.id - b.id;
        });
        img1.className = '';
        ss = 0;
        xr(arr);
    }
}
function px1() {
    var img1 = document.querySelectorAll('#img1')[1];
    if (bb == 0) {
        var arr = array.sort(function (a, b) {
            return b.price - a.price;
        });
        bb = 1;
        img1.className = 'xz';
        xr(arr);
    }
    else {
        var arr = array.sort(function (a, b) {
            return a.price - b.price;
        });
        bb = 0;
        img1.className = '';
        xr(arr);
    }
}
function ts(e) {
    if (e.keyCode == 13) {
        cc = e.target.value;
        arrys = [];
        var zys = Math.ceil(array.length / cc);
        // console.log(zys);
        for (var i = 1; i <= zys; i++) {
            arrys.push(i);
        }
        console.log(arrys);
        var arr1 = array.slice(0, cc);
        xr(arr1);
        ul.innerHTML = '';
        for (var i = 0; i < arrys.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = "<span onclick='dq(this)'>".concat(arrys[i], "</span>");
            ul.appendChild(li);
        }
    }
}
function dq(ele) {
    // console.log(ele.innerHTML);
    var pp = Number(ele.innerHTML);
    var j1 = cc * pp - cc;
    var j2 = cc * pp;
    var arr = array.slice(j1, j2);
    xr(arr);
}
