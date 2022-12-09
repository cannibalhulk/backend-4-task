const express = require("express");

const app = express();

const goods = [
    { 
        id: 1, 
        ad: 'Alma',
        qiymet:2,
        miqdar:5000
    },
    { 
        id: 2, 
        ad: 'Pomidor',
        qiymet:2,
        miqdar:4050,

    },
    { 
        id: 3, 
        ad: 'Xiyar',
        qiymet:3,
        miqdar:5300,
        
    },
    { 
        id: 4, 
        ad: 'Qarpiz',
        qiymet:0.90,
        miqdar:2240

    },
    { 
        id: 5, 
        ad: 'Badimcan',
        qiymet: 3.10,
        miqdar:3245,
    },
    { 
        id: 6, 
        ad: 'Yemis',
        qiymet:1,
        miqdar:2785,

    },
    { 
        id: 7, 
        ad: 'Pendir',
        qiymet:6,
        miqdar:70,
         
    },
    { 
        id: 8, 
        ad: 'Goyerti',
        qiymet:0.25,
        miqdar:100,

    },
    { 
        id: 9, 
        ad: 'Armud',
        qiymet:2.50,
        miqdar:4420, 
    },
    { 
        id: 10, 
        ad: 'Turp',
        qiymet:2,
        miqdar:3000,
         
    },
    { 
        id: 11, 
        ad: 'Uzum',
        qiymet:2.30,
        miqdar:5520, 
    },
    { 
        id: 12, 
        ad: 'Kartof',
        qiymet:0.80,
        miqdar:10020, 
    },
    { 
        id: 13, 
        ad: 'Qusburnu',
        qiymet:3,
        miqdar:7000, 
    },
    { 
        id: 14, 
        ad: 'Zencefil',
        qiymet:1.40,
        miqdar:8000, 
    },
    { 
        id: 15, 
        ad: 'Makaron',
        qiymet:3,
        miqdar:800, 
    },
    { 
        id: 16, 
        ad: 'Un',
        qiymet:2,
        miqdar:'200 Kq', 
    },
    { 
        id: 17, 
        ad: 'Limon',
        qiymet:1,
        miqdar:3800, 
    },
];

app.get('/goods',function(req,res){
    // res.json(goods)
    const say = parseInt(req.query.say);
    const ofset = parseInt(req.query.ofset);

    res.send({ users: goods.slice(ofset, ofset + say), count: goods.length })
})
    
app.get('/goods/:id',function(req,res){
    res.json({id:req.params.id,ad:goods.find((good)=>{
            if(good.id==req.params.id){
               return good;
            }
        }).ad,qiymet:goods.find((good)=>{
            if(good.id==req.params.id){
               return good;
            }
        }).qiymet,miqdar:goods.find((good)=>{
            if(good.id==req.params.id){
               return good;
            }
        }).miqdar})
})


app.listen(5003);
