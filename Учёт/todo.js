'use strict';
const $ = _ => document.querySelector(_);
const $$ = _ => document.querySelectorAll(_);

// Create, init params and returns elements
const create = (elementName, params) => {
    // Create empty element
    const element = document.createElement(elementName);

    // If params truthy => marge input params
    params && Object.assign(element, params);

    // Returns created element
    return element;
}

const append = (root, child) => root.appendChild(child);
const removeChilds = element => element.innerHTML = '';

function toggleModal(isShow) {
    $('.modal__Task').style.display = isShow ? 'inherit' : 'none';
    $('.button__All').style.display = isShow ? 'inherit' : 'none';
}

function toggleModalEditor(isShow) {
    $('.modal__TaskRes').style.display = isShow ? 'flex' : 'none';
    $('.button__AllRes').style.display = isShow ? 'flex' : 'none';
    $('.modalSpanWrapper').style.display = isShow ? 'flex' : 'none';
}

// Standart
// ECMA Script 2016, 2019
// Sanya Aboba
// Vlados Abobus

const body = $('body');
const tasks = document.createElement('div')
const containerRes = $('.container1')
tasks.className = 'wrapper__Task'

const state = {
    editedTaskIndex: null,
    tasks: []
};

// Read / Write data
const localStorageKey = 'task';
const setStore = items => localStorage.setItem(localStorageKey, JSON.stringify(items));
const getStore = () => JSON.parse(localStorage.getItem(localStorageKey));

// TODO: MAIN: Use state instead of this parseTask --- OK
// TODO: Use global state obj (state)---OK
if (!getStore()) setStore(state.tasks);


// add Task
// TODO: Use const --- OK
const newTask = create('button', { className: 'new__BTN', textContent: 'Добавить задачу' })
const wrapperBtn = create('div', { className: 'wrapper__Btn' })
wrapperBtn.appendChild(newTask)

// TODO: Use correct nameing --- OK
containerRes.appendChild(wrapperBtn)
containerRes.appendChild(tasks)
newTask.addEventListener('click', () => toggleModal(true));

// data Task
const dataTask = create('div', { className: 'dataTask' });
containerRes.appendChild(dataTask);

function init() {
    function render() {
        removeChilds(dataTask);
        removeChilds(tasks);
        for (let i = 0; i < state.tasks.length; i++) {
            // TODO: Separate to render list item fn --- ne ysno
            const list = create('p')
            const wrapperList = create('span', { className: "wrapper__Tasks" });
            const checkboxWrapper = create('div', { className: 'checkboxWrapper' });
            const checkbox = create('input', { type: 'checkbox', className: 'checkbox' });
            checkbox.setAttribute('data-id', i);

            // TODO: Use correct naming --- OK
            const index = Number(checkbox.dataset.id);

            list.innerHTML = state.tasks[index].themeTask;
            checkboxWrapper.appendChild(checkbox)
            wrapperList.appendChild(checkboxWrapper)
            checkboxWrapper.appendChild(list)

            state.tasks[index].data ?
                dataTask.appendChild(wrapperList) :
                tasks.appendChild(wrapperList);
            checkbox.checked = state.tasks[index].data;

            checkbox.addEventListener('click', () => {
                state.tasks[index].data = !state.tasks[index].data;
                setStore(state.tasks);
                render();
            });

            // TODO: Refactor too --- vrode OK
            // editor task
            list.addEventListener('click', function(event) {
                const id = Number(event.target.parentElement.firstChild.dataset['id'])
                state.editedTaskIndex = id;
                const arr = getStore();
                // --
                const resValue = $(".modal__TaskRes");
                resValue.querySelector('input').value = arr[id].themeTask;
                resValue.querySelector('textarea').value = arr[id].textTask;
                // TODO: Separate to toggleFn --- OK
                toggleModalEditor(true)
                    // TODO: End here
                    // if (parseTask[index].data) {
                    //     wr.querySelector('input').setAttribute("readonly", 'readonly');
                    //     wr.querySelector('textarea').setAttribute("readonly", 'readonly');
                    // }
            });

            // remove task
            const removeTask = create('button', { className: 'remove__Task', textContent: 'Удалить' })
            wrapperList.appendChild(removeTask)
            removeTask.addEventListener('click', () => {
                state.tasks.splice(index, 1);
                setStore(state.tasks)
                render()
            })
        }
    }

    function renderEditModal() {
        //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        state.tasks = getStore();
        const modalSpanWrapper = create('div', { className: "modalSpanWrapper" });
        const taskEditor = create('div', { className: "modal__TaskRes" });
        const buttonAll = create('div', { className: 'button__AllRes' });
        const modalOff = create('button', { className: 'modal__Off', textContent: 'X' });
        const modalOk = create('button', { className: 'modal__Ok', textContent: 'Ok' });
        // // TODO: Separate to Fn --- HZ
        containerRes.appendChild(modalSpanWrapper)
        modalSpanWrapper.appendChild(taskEditor)
        containerRes.appendChild(buttonAll)
        buttonAll.appendChild(modalOff)
        buttonAll.appendChild(modalOk);
        //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

        // TODO: Delete unnesesary --- OK
        const editorTheme = create('input');
        const editorText = create('textarea');

        taskEditor.appendChild(editorTheme)
        taskEditor.appendChild(editorText)

        // TODO: refactor --- vrode OK
        modalOk.addEventListener('click', function(event) {
            const { target } = event;
            const index = state.editedTaskIndex;

            state.tasks[index].themeTask = editorTheme.value;
            state.tasks[index].textTask = editorText.value;
            setStore(state.tasks);

            // TODO: Use only one render edit modal window, and show/hide in future !!! --- OK
            toggleModalEditor(false)
            render();
        });

        modalOff.addEventListener('click', function() {
            // TODO: And here (use toggleFn) --- OK
            toggleModalEditor(false)
        })
    }

    function renderCreateModal() {
        // TODO: Use const --- OK
        const modalSpan = create('span', { className: 'modal__Task' })
        const buttonAll = create('div', { className: 'button__All' })
        containerRes.appendChild(modalSpan)
        containerRes.appendChild(buttonAll)

        const themeTask = create('input', { className: 'placeTheme', placeholder: 'Задачa' })
        const textTask = create('textarea')

        modalSpan.appendChild(themeTask)
        modalSpan.appendChild(textTask)

        const modalOff = create('button', { className: 'modal__Off', textContent: 'X' })
        const modalOk = create('button', { className: 'modal__Ok', textContent: 'OK' })

        buttonAll.appendChild(modalOff)
        buttonAll.appendChild(modalOk)

        // close Task
        modalOff.addEventListener('click', () => {
            // TODO: use toggle modal Fn !!!!!! --- OK
            toggleModal(false)
        });

        // Confirm Task
        modalOk.addEventListener('click', () => {
            // TODO: OPTIONAL: Use next expr - themeTask.value !== '' && ok(themeTask, textTask); --- OK
            themeTask.value.replace(/\s/g, "") !== '' && confirmTask(themeTask, textTask); // как рабатоет?
            themeTask.value = ''
            textTask.value = ''
        })

        themeTask.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && themeTask.value.replace(/\s/g, "") !== '') {
                confirmTask(themeTask, textTask)
                themeTask.value = ''
                textTask.value = ''
            }
        })
    }

    function confirmTask(themeTask, textTask) {
        state.tasks.push({ themeTask: themeTask.value, textTask: textTask.value, data: false })
        setStore(state.tasks);
        toggleModal(false);
        render()
    }
    renderEditModal()
    renderCreateModal();
    render();
}
init()


toggleModalEditor(false)
toggleModal(false);