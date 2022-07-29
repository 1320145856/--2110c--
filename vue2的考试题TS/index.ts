interface sp {
    id: number,
    goods_name: string,
    price: number
}
let array1 = [
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
]
let array: Array<sp> = array1
let ss: number = 0
let bb: number = 0
let cc:number = 0
let arrys:number[] = []
let ipt: HTMLInputElement = document.querySelector('.ipt')
let tbody: HTMLTableSectionElement = document.querySelector('tbody')
let ul:HTMLUListElement = document.querySelector('ul')


xr(array)
function xr(array: Array<sp>) {
    tbody.innerHTML = ''
    array.forEach(item => {
        let tr: HTMLTableRowElement = document.createElement('tr')
        tr.innerHTML = `<td>${item.id}</td><td>${item.goods_name}</td><td>${item.price}</td>`
        tbody.appendChild(tr)
    })
}

function sc(e: { keyCode: number; target: { value: any } }) {
    if (e.keyCode == 13) {
        let aa = e.target.value
        if (aa == '') {
            xr(array)
        } else {
            let arr = array.filter(item => {
                return item.goods_name.includes(aa)
            })
            xr(arr)
        }
    }
}

function px() {
    let img1: HTMLImageElement = document.querySelectorAll('#img1')[0] as HTMLImageElement
    console.log(img1);
    if (ss == 0) {
        let arr = array.sort(function (a: sp, b: sp) {
            return b.id - a.id
        })
        img1.className = 'xz'
        ss = 1
        xr(arr)
    } else {
        
        let arr = array.sort(function (a: sp, b: sp) {
            return a.id - b.id
        })
        img1.className = ''
        ss = 0
        xr(arr)

    }
}

function px1() {
    let img1: HTMLImageElement = document.querySelectorAll('#img1')[1] as HTMLImageElement
    if (bb == 0) {
        let arr = array.sort(function (a: sp, b: sp) {
            return b.price - a.price
        })
        bb = 1
        img1.className = 'xz'
        xr(arr)
    } else {
        let arr = array.sort(function (a: sp, b: sp) {
            return a.price - b.price
        })
        bb = 0
        img1.className = ''
        xr(arr)
    }
}


function ts(e: { keyCode: number; target: { value: any } }){
    if(e.keyCode==13){
        cc = e.target.value
        arrys = []
        let zys = Math.ceil(array.length/cc)
        // console.log(zys);
        for(var i = 1;i<=zys;i++){
            arrys.push(i)
        }
        console.log(arrys);
        let arr1 = array.slice(0,cc)
        xr(arr1)
        ul.innerHTML = ''
        for(var i = 0;i<arrys.length;i++){
            var li = document.createElement('li')
            li.innerHTML = `<span onclick='dq(this)'>${arrys[i]}</span>`
            ul.appendChild(li)
        }
    }
}

function dq(ele:HTMLSpanElement){
    // console.log(ele.innerHTML);
    let pp = Number(ele.innerHTML)
    let j1:number = cc*pp-cc
    let j2:number = cc*pp
    var arr = array.slice(j1,j2)
    xr(arr)
}