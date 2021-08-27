// 'use strict'
// const $ = _ => document.querySelector(_);
// const $$ = _ => document.querySelectorAll(_);


// let body = document.querySelector('body')
// let tasks = document.createElement('div')
// let container1 = $('.container1 ')
// tasks.className = 'wrapper__Task'

// // arr Task
// let task = []
// if (!localStorage.getItem('task'))
//     localStorage.setItem('task', JSON.stringify([]))



// // add Task
// let newTask = document.createElement('button')
// let wrapperBtn = document.createElement('div')
// newTask.className = 'new__BTN'
// wrapperBtn.className = 'wrapper__Btn'
// newTask.textContent = 'Добавить задачу'
// container1.appendChild(wrapperBtn)
// wrapperBtn.appendChild(newTask)
// container1.appendChild(tasks)
// newTask.addEventListener('click', renderCreateModal)

// let state["tasks"] = JSON.parse(localStorage.getItem('task'));

// // data Task
// let dataTask = document.createElement('div')
// dataTask.className = 'dataTask'
// container1.appendChild(dataTask)


// function render(state["tasks"]) {
//     tasks.innerHTML = ''
//     for (let problem of state["tasks"]) {
//         let list = document.createElement('p')
//         let wrapperP = document.createElement('span')

//         let checkboxWrapper = document.createElement('div')
//         let checkbox = document.createElement('input')
//         checkbox.type = 'checkbox'
//         checkbox.className = 'checkbox'
//         checkboxWrapper.className = 'checkboxWrapper'

//         list.innerHTML = problem['themeTask']

//         wrapperP.appendChild(checkboxWrapper)

//         checkboxWrapper.appendChild(checkbox)
//         checkboxWrapper.appendChild(list)
//         wrapperP.className = 'wrapper__P'
//         tasks.appendChild(wrapperP)
//     }

//     // function filter(item) {  
//     //     return item.themeTask !== ''
//     //     if (item.themeTask !== '') {
//     //         return true;
//     //     }
//     //     return false;
//     // }

//     state["tasks"] = state["tasks"].filter(item => item.themeTask !== '');
//     localStorage.setItem("task", JSON.stringify(state["tasks"]));

// }



// function renderCreateModal() {

//     let modalSpan = document.createElement('span')
//     modalSpan.className = 'modal__Task'
//     let buttonAll = document.createElement('div')
//     buttonAll.className = 'button__All'
//     container1.appendChild(modalSpan)
//     container1.appendChild(buttonAll)


//     let themeTask = document.createElement('input')
//     themeTask.className = 'placeTheme'
//     themeTask.placeholder = 'Задача'

//     let textTask = document.createElement('textarea')
//     modalSpan.appendChild(themeTask)
//     modalSpan.appendChild(textTask)


//     let modalOff = document.createElement('button')
//     let modalOk = document.createElement('button')

//     modalOff.className = 'modal__Off'
//     modalOk.className = 'modal__Ok'
//     modalOff.textContent = 'X'
//     modalOk.textContent = 'Ok'
//     buttonAll.appendChild(modalOff)
//     buttonAll.appendChild(modalOk)
//     buttonAll.className = 'button__All'


//     // close Task
//     modalOff.addEventListener('click', function() {
//         modalSpan.remove()
//         buttonAll.remove()
//     })

//     // Confirm Task
//     modalOk.addEventListener('click', function() {
//         if (themeTask.value !== '') {
//             state["tasks"].push({ themeTask: themeTask.value, textTask: textTask.value })
//             localStorage.setItem("task", JSON.stringify(state["tasks"]));
//         }

//         modalSpan.remove()
//         buttonAll.remove()
//             // location.reload() // как это исправить? Инфа у Влада
//         render(JSON.parse(localStorage.getItem('task')))

//     })

//     themeTask.addEventListener('keyup', function(event) {
//         if (event.keyCode === 13) {
//             state["tasks"].push({ themeTask: themeTask.value, textTask: textTask.value })
//             localStorage.setItem("task", JSON.stringify(state["tasks"]));
//             location.reload() // как это исправить? Инфа у Влада
//             modalSpan.remove()
//             buttonAll.remove()
//         }
//     })
// }

// // Modal editing

// function modalEditor(state["tasks"]) {
//     let lists = $$('p')

//     for (let i = 0; i < state["tasks"].length; i++) {
//         lists[i].addEventListener('click', function listeditor() {
//             let modalSpanWrapper = document.createElement('div')
//             modalSpanWrapper.className = 'modalSpanWrapper'

//             let taskEditor = document.createElement('div')
//             let editorTheme = document.createElement('input')
//             let editorText = document.createElement('textarea')
//             let buttonAll = document.createElement('div')

//             let modalOff = document.createElement('button')
//             let modalOk = document.createElement('button')

//             modalOff.className = 'modal__Off'
//             modalOk.className = 'modal__Ok'
//             modalOff.textContent = 'X'
//             modalOk.textContent = 'Ok'
//             buttonAll.className = 'button__All'
//             taskEditor.className = 'modal__Task'

//             container1.appendChild(modalSpanWrapper)
//             modalSpanWrapper.appendChild(taskEditor)
//             taskEditor.appendChild(editorTheme)
//             taskEditor.appendChild(editorText)
//             container1.appendChild(buttonAll)
//             buttonAll.appendChild(modalOff)
//             buttonAll.appendChild(modalOk)

//             editorTheme.value = state["tasks"][i]['themeTask']
//             editorText.value = state["tasks"][i]['textTask']

//             modalOk.addEventListener('click', function() {
//                 JSON.parse(localStorage.getItem('task'));
//                 state["tasks"][i]['themeTask'] = editorTheme.value
//                 state["tasks"][i]['textTask'] = editorText.value
//                 localStorage.setItem("task", JSON.stringify(state["tasks"]));
//                 taskEditor.remove()
//                 buttonAll.remove()
//                 modalSpanWrapper.remove()
//                 location.reload() // как это исправить? Инфа у Влада
//             })

//             // delete copies
//             function copies() {
//                 let removeTasks = $$('.modal__Task')
//                 let removeBtn = $$('.button__All')
//                 if (removeTasks.length == 2) {
//                     removeTasks[1].remove()
//                     removeBtn[1].remove()
//                 }
//             }
//             copies()

//             modalOff.addEventListener('click', function modalRemove() {
//                 taskEditor.remove()
//                 buttonAll.remove()
//                 modalSpanWrapper.remove()
//             })
//         })
//     }
// }
// render(JSON.parse(localStorage.getItem('task')))
// modalEditor(state["tasks"])

// function removeTask() {
//     let wrapperP = $$('.wrapper__P')
//     for (let i = 0; i < state["tasks"].length; i++) {
//         let removeA = document.createElement('button')
//         removeA.className = 'remove__All'
//         removeA.textContent = 'Удалить'

//         wrapperP[i].appendChild(removeA)
//         let removeAll = $$('.remove__All')

//         removeAll[i].addEventListener('click', function() {
//             state["tasks"].splice(i, 1)
//             localStorage.setItem("task", JSON.stringify(state["tasks"]));
//             render(JSON.parse(localStorage.getItem('task')))
//         })

//     }
// }
// removeTask()

// let arrdata = []
// if (!localStorage.getItem('taskdata'))
//     localStorage.setItem('taskdata', JSON.stringify([]))


// let parsrdata = JSON.parse(localStorage.getItem('taskdata'))

// function checkbox() {
//     let check = $$('.checkbox')
//     for (let i = 0; i < state["tasks"].length; i++) {
//         check[i].addEventListener('click', function() {
//             if (check[i].checked) {
// parsrdata.push(state["tasks"][i])
//                 localStorage.setItem("taskdata", JSON.stringify(parsrdata));
//                 state["tasks"].splice(i, 1)
//                 localStorage.setItem("task", JSON.stringify(state["tasks"]));
//                 location.reload() // как это исправить? Инфа у Влада
//             }
//         })
//     }
// }
// checkbox()

// let contAll = $('.container__all')

// function setdata() {
//     for (let i = 0; i < parsrdata.length; i++) {
//         let wrapperdata = document.createElement('div')
//         let inputdata = document.createElement('input')
//         inputdata.type = 'checkbox'
//         inputdata.className = 'chekdata'
//         wrapperdata.className = 'wrapperdata'
//         let p = document.createElement('p')
//         p.className = 'pdata'
//         dataTask.appendChild(wrapperdata)
//         wrapperdata.appendChild(inputdata)
//         wrapperdata.appendChild(p)
//         p.innerHTML = parsrdata[i]['themeTask']


//         p.addEventListener('click', function() {
//             let showAll = document.createElement('div')
//             let showAll2 = document.createElement('div')
//             let wrapperShowThemText = document.createElement('div')
//             wrapperShowThemText.className = 'wrapperShowThemText'

//             showAll.className = 'showAll'
//             showAll2.className = 'showAll2'
//             let showTheme = document.createElement('div')
//             let showText = document.createElement('div')
//             let showBtn = document.createElement('button')
//             showBtn.className = 'showBtn'
//             showBtn.textContent = 'Закрыть'



//             contAll.appendChild(showAll2)
//             contAll.appendChild(wrapperShowThemText)
//             showAll2.appendChild(showAll)
//             showAll.appendChild(wrapperShowThemText)
//             wrapperShowThemText.appendChild(showTheme)
//             wrapperShowThemText.appendChild(showText)
//             showAll.appendChild(showBtn)

//             showTheme.innerHTML = parsrdata[i]['themeTask']
//             showText.innerHTML = parsrdata[i]['textTask']
//             showBtn.addEventListener('click', function() {
//                 showAll.remove()
//                 showAll2.remove()
//             })
//         })
//     }
// }
// setdata()

// function checkbox2() {
//     let check = $$('.chekdata')
//     for (let i = 0; i < parsrdata.length; i++) {
// check[i].setAttribute('checked', 'true')
//         check[i].addEventListener('click', function() {
//             if (check[i].checked == false) {
//                 state["tasks"].push(parsrdata[i])
//                 localStorage.setItem("task", JSON.stringify(state["tasks"]));
//                 parsrdata.splice(i, 1)
//                 localStorage.setItem("taskdata", JSON.stringify(parsrdata));
//                 location.reload() // как это исправить? Инфа у Влада
//             }
//         })
//     }
// }
// checkbox2()


// function removeTaskdata() {
//     let wrapperdata = $$('.wrapperdata')
//     for (let i = 0; i < parsrdata.length; i++) {
//         let removeA = document.createElement('button')
//         removeA.className = 'removedata'
//         removeA.textContent = 'Удалить'
//         if (1 == 1) {
//             wrapperdata[i].appendChild(removeA)
//             let removeAll = $$('.removedata')

//             removeAll[i].addEventListener('click', function() {
//                 parsrdata.splice(i, 1)
//                 localStorage.setItem("taskdata", JSON.stringify(parsrdata));
//                 location.reload() // как это исправить? Инфа у Влада
//                 console.log(1);
//             })
//         }
//     }
// }
// removeTaskdata()