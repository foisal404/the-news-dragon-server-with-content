const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news=require('./data/news.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

//all catagores
app.get('/categories', (req, res) =>{
    // console.log(categories);
    res.send(categories);
})
//all news
app.get('/news',(req,res)=>{
    res.send(news)
})

//catagory with specific id
app.get('/categories/:id',(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    if(id==='0'){
        res.send(news)
    }
    else{
        res.send(news.filter(cate=>cate.category_id===id))
    }
})

//news with specific id
app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    res.send(news.find(cata=>cata._id===id))
})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
