const todoInput=document.querySelector("#todo-input");
let checkBoxCount = 0;
const todoList=document.querySelector("#todo-list");
const savedTodoList=JSON.parse(localStorage.getItem('saved-items'));
const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));


const creatTodo=function (storageData){
    let todoContents=todoInput.value;
    if(storageData){
        todoContents=storageData.content;
    }

    const newLi=document.createElement('li');
    const newSpan=document.createElement('span');
    const newLabel=document.createElement('label');
    const newCbx=document.createElement('input');

    newCbx.type='checkbox';
    newCbx.setAttribute('id', 'checkbox'+checkBoxCount);
    newLabel.setAttribute('for','checkbox'+checkBoxCount);

    if(storageData?.complete){
        newLi.classList.add('complete')
        newCbx.checked=true;
    }

    newCbx.addEventListener('click',()=>{
        newLi.classList.toggle('complete');
        saveItemsFn()
    })
    newLi.addEventListener('dblclick',()=>{
        newLi.remove();
        saveItemsFn();
    })

    newSpan.textContent=todoContents
    newLi.appendChild(newCbx);
    newLi.appendChild(newLabel);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi)
    todoInput.value='';
    checkBoxCount++;
    saveItemsFn();
}
const checkInput =()=>{
    if(event.key==='Enter' && todoInput.value.trim()!==''){
        creatTodo();
    }
}
const deleteAll =function (){
    const liList=document.querySelectorAll('li');
    for(let i=0;i<liList.length;i++){
        liList[i].remove();
    }
    saveItemsFn();
}

const saveItemsFn=function (){
    const saveItems=[];
    for(let i=0;i<todoList.children.length;i++){
        const todoObj={
            content : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete'),
        }
        saveItems.push(todoObj);
    }
    saveItems.length===0 ? localStorage.removeItem('saved-items'):localStorage.setItem('saved-items',JSON.stringify(saveItems));

}
if(savedTodoList){
    for(let i=0;i<savedTodoList.length;i++){
        creatTodo(savedTodoList[i]);
    }
}
const weatherDataActive=function ({location,weather}){
    const weatherMainList=[
        'Clear',
        'Clouds',
        'Drizzle',
        'Rain',
        'Snow',
        'Thunderstorm',
    ]
    weather=weatherMainList.includes(weather)? weather:'Fog'
    const locationNameTag=document.querySelector('#location-name-tag');
    locationNameTag.textContent=location;

    if(!savedWeatherData||savedWeatherData.location!==location || savedWeatherData.weather !==weather){
        localStorage.setItem('saved-weather',JSON.stringify({location,weather}));
    }
    document.body.style.backgroundImage=`url('./images/${weather}.gif')`
}
const weatherSearch=function ({latitude,longitude}){
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f665a56e2f67e1a88f246e55e5c2d24c
`).then((res)=>{
    return res.json();
   }).then((json)=>{
       const weatherData={
           location:json.name,
           weather:json.weather[0].main
       }
       weatherDataActive(weatherData);
   }).catch((err)=>{
       console.error(err);
   });
}

const accessToGeo = function ({coords}){
    const {latitude,longitude}=coords
    const positionObj={
        latitude,
        longitude,
    }
    weatherSearch(positionObj)
};
const askForLocation=function (){
    navigator.geolocation.getCurrentPosition(accessToGeo,(err)=>{
    });
}
askForLocation();
if(savedWeatherData){
    weatherDataActive(savedWeatherData);
}
