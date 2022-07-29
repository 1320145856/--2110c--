let ul: HTMLUListElement = document.querySelector('ul')
interface Array1 {
    name: string
}

let array: Array<Array1> = [{ name: '张三' }, { name: '张四' }, { name: '张五' }, { name: '张六' }, { name: '李三' }, { name: '李四' }, { name: '李五' }, { name: '李六' }, { name: '王三' }, { name: '王四' }, { name: '王五' }, { name: '王六' }, { name: '王七' }]

let array1: number[] = []
let array2: number[] = []
let btn: HTMLButtonElement = document.querySelector('.btn')
let btn1: HTMLButtonElement = document.querySelector('.btn1')
let btn2: HTMLButtonElement = document.querySelector('.btn2')
let drdm: NodeJS.Timer
let aa: number
let bb: number
let cc: string = '#'
let arr: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let arr1: Array<string> = []
xr(array)
// for(let j = 0;j<6;j++){
//     bb=Math.floor(Math.random() * arr.length);
//     cc+=arr[bb]
//     console.log(cc,'cc');
// }
// arr1.push(cc)
function xr(array: Array<Array1>) {
    array.forEach(item => {
        let li: HTMLLIElement = document.createElement('li')
        li.innerHTML = `${item.name}`
        ul.appendChild(li)
    })
    btn.onclick = function () {
        drdm = setInterval(function () {
            aa = Math.floor(Math.random() * array.length);
            arr1 = []
            for (let i = 0; i < array.length; i++) {
                cc = '#'
                for (let j = 0; j < 6; j++) {
                    bb = Math.floor(Math.random() * arr.length);
                    cc += arr[bb]
                }
                arr1.push(cc)
            }
            let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
            for (let i = 0; i < li.length; i++) {
                li[i].style.background = arr1[i]
            }
        }, 100)

    }
    btn2.onclick = function () {
        clearInterval(drdm)
        console.log('123');
        if (array1.length == array.length) {
            array1 = []
        }
        if (array1.length == 0) {
            array1.push(aa)
        } else {
            for (let i = 0; i < array1.length; i++) {
                if (array1[i] == aa) {
                    aa = Math.floor(Math.random() * array.length);
                    console.log(i);
                    if (i != array.length - 1) {
                        i = -1
                    } else if (array.length - 1 == i) {
                        array1 = []
                    }
                }
            }
            array1.push(aa)
            console.log(array1);
        }
        let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
        for (let i = 0; i < li.length; i++) {
            li[i].style.background = ''
        }
        li[aa].style.background = 'red'

    }
    btn1.onclick = function () {
        array2 = []
        for (let i = 0; i < 2; i++) {
            let aa: number = Math.floor(Math.random() * array.length);
            array2.push(aa)
        }
        let li: NodeListOf<HTMLLIElement> = document.querySelectorAll('li')
        for (let i = 0; i < li.length; i++) {
            li[i].style.background = ''
        }
        for (let i = 0; i < array2.length; i++) {
            li[array2[i]].style.background = 'red'
        }
    }
}