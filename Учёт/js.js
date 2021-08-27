'use strict'
const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);

// let employees = [
//     { name: 'Жорик', age: 30, salary: 400 },
//     { name: 'Кукр', age: 31, salary: 500 },
//     { name: 'Кедр', age: 32, salary: 600 },
// ];

// for (let xs of employees) {
//     localStorage.setItem('log', xs['name'])
//     localStorage.setItem('log2', xs['age'])
//     localStorage.setItem('log3', xs['salary'])
//     console.log(localStorage.getItem('log'));
//     console.log(localStorage.getItem('log2'));
//     console.log(localStorage.getItem('log3'));
// }



// let body = document.querySelector('body')
// let container = document.createElement('div')
// container.className = 'container'
// let tabl = document.createElement('table')
// body.appendChild(container)
// container.appendChild(tabl)

// let inputName = document.createElement('input')
// let inputAge = document.createElement('input')
// let inputSalary = document.createElement('input')
// let inputRab = document.createElement('p')

// inputRab.innerHTML = `<input type ='button' value = 'Добавить раба'>`

// for (let elem of employees) {
//     let tr = document.createElement('tr')

//     let td = document.createElement('td')
//     let td1 = document.createElement('td')
//     let td2 = document.createElement('td')
//     let tdRemove = document.createElement('td')
//     let a = document.createElement('a')
//     tr.appendChild(td)
//     tr.appendChild(td1)
//     tr.appendChild(td2)
//     tr.appendChild(tdRemove)
//     td.innerHTML = elem.name
//     td1.innerHTML = elem.age
//     td2.innerHTML = elem.salary
//     tabl.appendChild(tr)
//     tdRemove.appendChild(a)

//     a.href = '#'
//     a.innerHTML = 'Удалить'

//     a.addEventListener('click', funcRemove)

//     // localStorage.setItem('log', td)
//     // console.log(localStorage.getItem('log'));
// }

// let tab = $$('td:nth-child(-n+3)')
// for (let elem of tab) {
//     elem.addEventListener('click', func)
// }

// inputRab.addEventListener('click', function() {
//     let allTd = document.createElement('tr')
//     let newTd = document.createElement('td')
//     let newTd2 = document.createElement('td')
//     let newTd3 = document.createElement('td')
//     let newRemove = document.createElement('td')
//     let newA = document.createElement('a')


//     allTd.appendChild(newTd)
//     allTd.appendChild(newTd2)
//     allTd.appendChild(newTd3)
//     allTd.appendChild(newRemove)
//     newRemove.appendChild(newA)
//     tabl.appendChild(allTd)


//     if (Number(inputAge.value)) {
//         function difference(s) {
//             return newTd2.innerHTML = Math.abs(s)
//         }
//         difference(inputAge.value)
//     }

//     if (Number(inputSalary.value)) {
//         function difference(s) {
//             return newTd3.innerHTML = Math.abs(s)
//         }
//         difference(inputSalary.value)
//     }

//     newTd.innerHTML = inputName.value
//     inputName.value = ''
//     newA.href = '#'
//     newA.innerHTML = 'Удалить'
//     newTd.addEventListener('click', func)
//     newTd2.addEventListener('click', func)
//     newTd3.addEventListener('click', func)
//     console.log(allTd)



//     newA.addEventListener('click', funcRemove)
// })

// let container2 = document.createElement('div')
// container2.className = 'container2'
// body.appendChild(container2)

// inputName.placeholder = 'Имя'
// inputAge.placeholder = 'Возраст'
// inputSalary.placeholder = 'Зарплата'
// container2.appendChild(inputName)
// container2.appendChild(inputAge)
// container2.appendChild(inputSalary)
// container2.appendChild(inputRab)



// function funcRemove() {
//     this.parentElement.parentElement.remove()
// }

// function func() {
//     let input = document.createElement('input')

//     input.value = this.innerHTML
//     this.innerHTML = ''
//     this.appendChild(input)
//     this.removeEventListener('click', func)

//     let self = this
//     input.addEventListener('blur', function() {

//         self.innerHTML = input.value
//         let inputSelf = input.value
//         if (Number(input.value)) {
//             inputSelf = input.value

//             function difference(s) {
//                 return self.innerHTML = Math.abs(s)
//             }
//             difference(inputSelf)
//         }

//         self.addEventListener('click', func)
//     })
// }

// const her = {
//     a: 'asdasd',
//     d: 'asdasd',
//     r: 'asdasd'
// }
// localStorage.setItem('log2', her['a'])
// let re = localStorage.getItem('log2')

// console.log(re);

// let op = 'sisi'
// localStorage.setItem('log', op)
// let we = localStorage.getItem('log')
// console.log(we);


// let employees = [
//     { name: 'Жорик', age: 30, salary: 400 },
//     { name: 'Кукр', age: 31, salary: 500 },
//     { name: 'Кедр', age: 32, salary: 600 },
// ];


const body = document.querySelector('body');
let container = document.createElement('div')
container.className = 'container'
let tabl = document.createElement('table')
body.appendChild(container)
container.appendChild(tabl)


if (localStorage.getItem('employees')) {} else {
    localStorage.setItem('employees', JSON.stringify([]))
}
let inputName = document.createElement('input')
let inputAge = document.createElement('input')
let inputSalary = document.createElement('input')
let inputRab = document.createElement('p')

inputRab.innerHTML = `<input type ='button' value = 'Добавить раба'>`
let persone = localStorage.getItem('employees');
let pers = JSON.parse(persone);

function render(pers) {
    tabl.innerHTML = ''
    for (let elem of pers) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let tdRemove = document.createElement('td')
        let a = document.createElement('a')
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(tdRemove)

        td.innerHTML = elem["name"]
        td1.innerHTML = elem['age']
        td2.innerHTML = elem['salary']
        tabl.appendChild(tr)

        tdRemove.appendChild(a)
        a.href = '#'
        a.innerHTML = 'Удалить'
        a.addEventListener('click', funcRemove)
    }
}

render(JSON.parse(localStorage.getItem('employees')))

let tab = $$('td:nth-child(-n+3)')
for (let elem of tab) {
    elem.addEventListener('click', func)
}

inputRab.addEventListener('click', function() {
    let allTd = document.createElement('tr')
    let newTd = document.createElement('td')
    let newTd2 = document.createElement('td')
    let newTd3 = document.createElement('td')
    let newRemove = document.createElement('td')
    let newA = document.createElement('a')


    allTd.appendChild(newTd)
    allTd.appendChild(newTd2)
    allTd.appendChild(newTd3)
    allTd.appendChild(newRemove)
    newRemove.appendChild(newA)
    tabl.appendChild(allTd)

    let persAll = localStorage.getItem('employees')
    let allPers = JSON.parse(persAll);

    allPers.push({ name: inputName.value, age: inputAge.value, salary: inputSalary.value })
    let newPersAll = localStorage.setItem('employees', JSON.stringify(allPers))

    render(JSON.parse(localStorage.getItem('employees')))



    if (Number(inputAge.value)) {
        function difference(s) {
            return newTd2.innerHTML = Math.abs(s)
        }
        difference(inputAge.value)
    }

    if (Number(inputSalary.value)) {
        function difference(s) {
            return newTd3.innerHTML = Math.abs(s)
        }
        difference(inputSalary.value)
    }

    newTd.innerHTML = inputName.value
    inputName.value = ''
    newA.href = '#'
    newA.innerHTML = 'Удалить'
    newTd.addEventListener('click', func)
    newTd2.addEventListener('click', func)
    newTd3.addEventListener('click', func)



    newA.addEventListener('click', funcRemove)
})


let container2 = document.createElement('div')
container2.className = 'container2'
body.appendChild(container2)

inputName.placeholder = 'Имя'
inputAge.placeholder = 'Возраст'
inputSalary.placeholder = 'Зарплата'
container2.appendChild(inputName)
container2.appendChild(inputAge)
container2.appendChild(inputSalary)
container2.appendChild(inputRab)


function funcRemove() {
    let x = 0
    let aRem = $$('a')
    for (let i = 0; i < aRem.length; i++) {
        x = i - 1
    }
    let persAll = localStorage.getItem('employees')
    let allPers = JSON.parse(persAll)
    allPers.splice(x, 1)
    localStorage.setItem('employees', JSON.stringify(allPers))
    render(JSON.parse(localStorage.getItem('employees')))
};


function func() {
    let input = document.createElement('input')

    input.value = this.innerHTML
    this.innerHTML = ''
    this.appendChild(input)
    this.removeEventListener('click', func)

    let self = this
    input.addEventListener('blur', function() {

        self.innerHTML = input.value
        let inputSelf = input.value
        if (Number(input.value)) {
            inputSelf = input.value

            function difference(s) {
                return self.innerHTML = Math.abs(s)
            }
            difference(inputSelf)
        }

        self.addEventListener('click', func)
    })
}

'use strict'
const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);


let body = document.querySelector('body')
let tasks = document.createElement('div')
let container1 = $('.container1 ')
tasks.className = 'wrapper__Task'

// arr Task
let task = []
if (localStorage.getItem('task')) {} else {
    localStorage.setItem('task', JSON.stringify([]))
}


// add Task
let newTask = document.createElement('button')
let wrapperBtn = document.createElement('div')
newTask.className = 'new__BTN'
wrapperBtn.className = 'wrapper__Btn'
newTask.textContent = 'Добавить задачу'
container1.appendChild(wrapperBtn)
wrapperBtn.appendChild(newTask)
container1.appendChild(tasks)
newTask.addEventListener('click', renderCreateModal)

let state["tasks"] = JSON.parse(localStorage.getItem('task'));

// data Task
let dataTask = document.createElement('div')
dataTask.className = 'dataTask'
container1.appendChild(dataTask)


function render(state["tasks"]) {
    for (let problem of state["tasks"]) {
        let list = document.createElement('p')
        let wrapperP = document.createElement('span')

        let checkboxWrapper = document.createElement('div')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'checkbox'
        checkboxWrapper.className = 'checkboxWrapper'

        list.innerHTML = problem['themeTask']

        wrapperP.appendChild(checkboxWrapper)

        checkboxWrapper.appendChild(checkbox)
        checkboxWrapper.appendChild(list)
        wrapperP.className = 'wrapper__P'
        tasks.appendChild(wrapperP)
    }

    function filter(item) { // блять как я это сделал? Узнать у Влада
        if (item.themeTask !== '') {
            return true;
        }
        return false;
    }

    state["tasks"] = state["tasks"].filter(x => x.themeTask !== '');
    // state["tasks"] = state["tasks"].filter(filter);
    localStorage.setItem("task", JSON.stringify(state["tasks"]));

}

function renderCreateModal() {

    let modalSpan = document.createElement('span')
    modalSpan.className = 'modal__Task'
    let buttonAll = document.createElement('div')
    buttonAll.className = 'button__All'
    container1.appendChild(modalSpan)
    container1.appendChild(buttonAll)


    let themeTask = document.createElement('input')
    themeTask.placeholder = `                                 ${'Задача'}` // как сделать красиво?

    let textTask = document.createElement('textarea')


    modalSpan.appendChild(themeTask)
    modalSpan.appendChild(textTask)


    let modalOff = document.createElement('button')
    let modalOk = document.createElement('button')

    modalOff.className = 'modal__Off'
    modalOk.className = 'modal__Ok'
    modalOff.textContent = 'X'
    modalOk.textContent = 'Ok'
    buttonAll.appendChild(modalOff)
    buttonAll.appendChild(modalOk)
    buttonAll.className = 'button__All'


    // close Task
    modalOff.addEventListener('click', function() {
        modalSpan.remove()
        buttonAll.remove()
    })

    // Confirm Task
    modalOk.addEventListener('click', function() {
        state["tasks"].push({ themeTask: themeTask.value, textTask: textTask.value })
        localStorage.setItem("task", JSON.stringify(state["tasks"]));

        location.reload() // как это исправить? Инфа у Влада
        modalSpan.remove()
        buttonAll.remove()
    })
    themeTask.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            state["tasks"].push({ themeTask: themeTask.value, textTask: textTask.value })
            localStorage.setItem("task", JSON.stringify(state["tasks"]));
            location.reload() // как это исправить? Инфа у Влада
            modalSpan.remove()
            buttonAll.remove()
        }
    })
}

// Modal editing



function modalEditor(state["tasks"]) {
    let lists = $$('p')

    for (let i = 0; i < state["tasks"].length; i++) {
        lists[i].addEventListener('click', function listeditor() {
            let modalSpanWrapper = document.createElement('div')
            modalSpanWrapper.className = 'modalSpanWrapper'

            let taskEditor = document.createElement('div')
            let editorTheme = document.createElement('input')
            let editorText = document.createElement('textarea')
            let buttonAll = document.createElement('div')

            let modalOff = document.createElement('button')
            let modalOk = document.createElement('button')

            modalOff.className = 'modal__Off'
            modalOk.className = 'modal__Ok'
            modalOff.textContent = 'X'
            modalOk.textContent = 'Ok'
            buttonAll.className = 'button__All'
            taskEditor.className = 'modal__Task'

            container1.appendChild(modalSpanWrapper)
            modalSpanWrapper.appendChild(taskEditor)
            taskEditor.appendChild(editorTheme)
            taskEditor.appendChild(editorText)
            container1.appendChild(buttonAll)
            buttonAll.appendChild(modalOff)
            buttonAll.appendChild(modalOk)

            editorTheme.value = state["tasks"][i]['themeTask']
            editorText.value = state["tasks"][i]['textTask']

            modalOk.addEventListener('click', function() {

                JSON.parse(localStorage.getItem('task'));
                state["tasks"][i]['themeTask'] = editorTheme.value
                state["tasks"][i]['textTask'] = editorText.value
                localStorage.setItem("task", JSON.stringify(state["tasks"]));
                taskEditor.remove()
                buttonAll.remove()
                modalSpanWrapper.remove()
                location.reload() // как это исправить? Инфа у Влада

            })

            // delete copies
            function copies() {
                let removeTasks = $$('.modal__Task')
                let removeBtn = $$('.button__All')

                if (removeTasks.length == 2) {
                    removeTasks[1].remove()
                    removeBtn[1].remove()
                }
            }
            copies()

            modalOff.addEventListener('click', function modalRemove() {
                taskEditor.remove()
                buttonAll.remove()
                modalSpanWrapper.remove()

            })

        })

    }

}
render(JSON.parse(localStorage.getItem('task')))
modalEditor(state["tasks"])

function removeTask() {
    let wrapperP = $$('.wrapper__P')
    for (let i = 0; i < state["tasks"].length; i++) {
        let removeA = document.createElement('button')
        removeA.className = 'remove__All'
        removeA.textContent = 'Удалить'
        if (1 == 1) {
            wrapperP[i].appendChild(removeA)
            let removeAll = $$('.remove__All')

            removeAll[i].addEventListener('click', function() {
                state["tasks"].splice(i, 1)
                localStorage.setItem("task", JSON.stringify(state["tasks"]));
                location.reload() // как это исправить? Инфа у Влада
            })
        }
    }
}
removeTask()

let arrdata = []
if (localStorage.getItem('taskdata')) {} else {
    localStorage.setItem('taskdata', JSON.stringify([]))
}

let parsrdata = JSON.parse(localStorage.getItem('taskdata'))

function checkbox() {
    let check = $$('.checkbox')
    for (let i = 0; i < state["tasks"].length; i++) {
        check[i].addEventListener('click', function() {
            if (check[i].checked) {
                parsrdata.push(state["tasks"][i])
                localStorage.setItem("taskdata", JSON.stringify(parsrdata));

                state["tasks"].splice(i, 1)
                localStorage.setItem("task", JSON.stringify(state["tasks"]));
                location.reload() // как это исправить? Инфа у Влада

            } else {}
        })

    }
}
checkbox()

let contAll = $('.container__all')
let wrapperdata = document.createElement('div')

function setdata(checkbox) {
    for (let i = 0; i < parsrdata.length; i++) {
        let inputdata = document.createElement('input')
        inputdata.type = 'checkbox'
        inputdata.className = 'chekdata'
        wrapperdata.className = 'wrapperdata'
        let p = document.createElement('p')
        p.className = 'pdata'

        dataTask.appendChild(wrapperdata)
        wrapperdata.appendChild(inputdata)

        wrapperdata.appendChild(p)
        p.innerHTML = parsrdata[i]['themeTask']


        p.addEventListener('click', function() {
            let showAll = document.createElement('div')
            let showAll2 = document.createElement('div')
            showAll.className = 'showAll'
            showAll2.className = 'showAll2'
            let showTheme = document.createElement('div')
            let showText = document.createElement('div')
            let showBtn = document.createElement('button')
            showBtn.textContent = 'Закрыть'

            contAll.appendChild(showAll2)
            showAll2.appendChild(showAll)
            showAll.appendChild(showTheme)
            showAll.appendChild(showText)
            showAll.appendChild(showBtn)

            showTheme.innerHTML = parsrdata[i]['themeTask']
            showText.innerHTML = parsrdata[i]['textTask']
            showBtn.addEventListener('click', function() {
                showAll.remove()
                showAll2.remove()
            })
        })
    }
}
setdata()

function checkbox2() {
    let check = $$('.chekdata')
    for (let i = 0; i < parsrdata.length; i++) {
        check[i].addEventListener('click', function() {
            if (check[i].checked) {
                state["tasks"].push(parsrdata[i])
                localStorage.setItem("task", JSON.stringify(state["tasks"]));
                parsrdata.splice(i, 1)
                localStorage.setItem("taskdata", JSON.stringify(parsrdata));
                location.reload() // как это исправить? Инфа у Влада
            } else {}
        })
    }
}
checkbox2()


// function removeTaskdata() {
//     let wrapperdata = $$('.wrapperdata')
//     for (let i = 0; i < parsrdata.length; i++) {
//         let removeAres = document.createElement('button')
//         removeAres.className = 'removedata'
//         removeAres.textContent = 'Удалить'
//         if (1 == 1) {
//             wrapperdata[i].appendChild(removeAres)
//             let removeAllres = $$('.removedata')

//             removeAllres[i].addEventListener('click', function() {
//                 parsrdata.splice(i, 1)
//                 localStorage.setItem("taskdata", JSON.stringify(parsrdata));
//                 location.reload() // как это исправить? Инфа у Влада
//                 console.log(1);
//             })
//         }
//     }
// }
// removeTaskdata()