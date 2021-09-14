// info date
const datenumber = document.getElementById('datenumber');
const datetext   = document.getElementById('datetext');
const datemonth  = document.getElementById('datemonth');
const dateyear   = document.getElementById('dateyear');

// tasks container
const taskscontainer = document.getElementById('taskscontainer');

const setDate = () => {
const date = new Date();
datenumber.textContent = date.toLocaleString('es', { day: 'numeric'});
datetext.textContent = date.toLocaleString('es', { weekday: 'long'});
datemonth.textContent = date.toLocaleString('es', { month: 'short'});
dateyear.textContent = date.toLocaleString('es', { year: 'numeric'});
};



const addnewtask = event => {
    event.preventDefault();
    const { value } = event.target.tasktext;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundborder');
    task.addEventListener('click', changetasktstate)
    task.textContent = value;
    taskscontainer.prepend(task);
    event.target.reset();


};

const changetasktstate = event => {
    event.target.classList.toggle('done');
};

    const order = () => {
        const done = [];
        const todo = [];
        taskscontainer.childNodes.forEach( el => {
            el.classList.contains('done') ? done.push(el) : todo.push(el)

    })
    return [...todo,...done];
 }

    const renderorderedtasks = () => {
        order().forEach(el => taskscontainer.appendChild(el))

    }

setDate();