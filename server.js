const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    'chance the rapper':{
        'age':29,
        'birthName':'Chancelor Bennett',
        'birthLocation':'Chicago, Illinois'
    },
    'dylan':{
        'age':29,
        'birthName':'Dylan',
        'birthLocation':'Dylan'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rappperName/', (request, response)=>{
    const rappersName = request.params.rappperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}. You better catch it.`)
})