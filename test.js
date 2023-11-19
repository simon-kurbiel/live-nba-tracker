const getData = async ()=>{
    await fetch("http://127.0.0.1:5000/api/v1/nba/live").then(element=>element.json()).then(value=>{
        console.log(value.data[0].status.timeLeft);
    })
}

getData();