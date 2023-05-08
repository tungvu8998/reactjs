// import location from './tinhthanh.js';
// import location from './location.js';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sub } from 'date-fns'

const hostname = 'localhost';
const port = 3006;
var app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const POST_LIST = [
    { id: "1", title: "New 1", like: 10, heart: 20, shared: "5", author:"l2t", status: "old", content: "VTI dang mo 1 khoa hoc Reactjs do mentor Luu Quoc Thang day" },
    // { id: "3", title: "New 2", like: 2, heart: 20, shared: "2", author:"l2t", status: "old", content: "VTI la cty cong nghe hang dau viet nam" },
    // { id: "7", title: "New 3", like: 102, heart: 3, shared: "53", author:"l2t", status: "hot", content: "VTI Academy dang la 1 trong nhung don vi hang dau trong linh vuc dao tao nganh cntt" },
    // { id: "10", title: "New 4", like: 101, heart: 4, shared: "51", author:"l2t", status: "old", content: "Hoc vien lop Railway_61 rat la gioi:D" },
    // { id: "100", title: "New 5", like: 101, heart: 5, shared: "56", author:"l2t", status: "new", content: "Thoi tiet hom nay rat la lanh" },
    // { id: "1000", title: "New 6", like: 100, heart: 6, shared: "50", author:"l2t", status: "new", content: "tai van phong hom nay rat la on" }
];

var auth = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiSG9hbmdORDEwIiwiaWF0IjoxNjI1MTk5ODg2LCJleHAiOjE2MzU1Njc4ODZ9.OHpyQF6LPJTn9PWKgp9e8iUK2bJhbxJQ4PK5MxvdoMk",
    "user": {
        "id": 1,
        "created_at": "2021-05-10T17:00:00.000Z",
        "updated_at": "2021-06-01T12:46:18.437Z",
        "created_by": "HoangND10",
        "updated_by": "HoangND10",
        "account": "HoangND10",
        "password": "$2b$05$gGQ1Erh1hB6osgDTv7MhDOnLzSAqzTeJTGH7gs.uuacCzlgZrVKLK",
        "email": "HoangND10@gmail.com",
        "full_name": "Ngo Duc Hoang",
        "mobile_number": "123456",
        "status": "ACTIVE",
        "role": "ADMIN",
        "permissions": "AM",
        "nationality": "VietNam"
    }
}

var products = [
    {
        id: 1,
        image: 'https://i.im.ge/2022/11/06/2naTm0.tai-xung.jpg',
        name: 'product 1',
        description: 'des 1',
        price: 100   
    },
    {
        id: 2,
        image: 'https://i.im.ge/2022/11/06/2naTm0.tai-xung.jpg',
        name: 'product 2',
        description: 'des 3',
        price: 200  
    },
    {
        id: 3,
        image: 'https://i.im.ge/2022/11/06/2naTm0.tai-xung.jpg',
        name: 'product 3',
        description: 'des 2',
        price: 300  
    }
  ];
var messageResponse = {
    "message": "Update project successfully"
}

var login = {
    "message": "Login successfully",
    "user": {
        "id": 1,
        "created_at": "2021-07-13T04:05:02.869Z",
        "updated_at": "2021-07-13T04:50:56.777Z",
        "created_by": "HoangND10",
        "updated_by": "ADMIN",
        "account": "HoangND10",
        "password": "$2b$04$YzWMKEiAHUak/jrIFJ29veJUkG60laeH9NMZFRLZluIY1tuptrI4O",
        "email": "HoangND10@gmail.com",
        "full_name": "Ngo Duc Hoang",
        "status": "ACTIVE",
        "role": "GUEST",
        "permissions": null,
        "nationality": "VietNam"
    }
}

app.get('/posts', cors(), function(req, res, next) {
    res.json(POST_LIST)
})

app.post('/product', cors(), function(req, res, next) {
    res.json(products)
})
app.post('/posts', cors(), function(req, res, next) {
    res.json(initialPosts)
})
app.post('/auth', cors(), function(req, res, next) {
    res.json(auth)
})

app.post('/project/tests/batches/find', cors(), function(req, res, next) {
    let resObj = batches.find(o => o.id === req.body.id)
    res.json(resObj)
})

app.post('/users', cors(), function(req, res, next) {
    res.json(users)
})

app.post('/patient/find', cors(), function(req, res, next) {
    res.json({'response': patients})
})

app.post('/service/find', cors(), function(req, res, next) {
    res.json({'response': medicalService})
})

app.get('/service/find-one/:id', cors(), function(req, res, next) {
    let resObj = medicalService.find(o => o.id.includes(req.params.id))
    res.json({'response': resObj})
})

app.get('/facility/find-one/:id', cors(), function(req, res, next) {
    let resObj = medicalFacilites.find(o => o.id.includes(req.params.id))
    res.json({'response': resObj})
})

app.post('/facility/find', cors(), function(req, res, next) {
    res.json({'response': medicalFacilites})
})

app.get('/patient/find-one/:id', cors(), function(req, res, next) {
    let resObj = patients.find(o => o.id.includes(req.params.id))
    res.json({'response': resObj})
})

app.get('/doctor/find-one/:id', cors(), function(req, res, next) {
    let resObj = doctors.find(o => o.id.includes(req.params.id))
    res.json({'response': resObj})
})

app.post('/doctor/find', cors(), function(req, res, next) {
    res.json({'response': doctors})
})

app.post('/user', cors(), function(req, res, next) {
    let resObj = users.find(o => o.id === req.body.id)
    res.json(resObj)
})

app.post('/user/update', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.post('/user/register', cors(), function(req, res, next) {
    res.json(messageResponse)
})


app.post('/user/login', cors(), function(req, res, next) {
    res.json(login)
})

app.post('/employees', cors(), function(req, res, next) {
    res.json(emplyees)
})

app.post('/project/find', cors(), function(req, res, next) {
    // console.log(req.body)
    // console.log(req)
    console.log(req.body)
    let resObj = dataProject.find(o => o.id === req.body.id)
    res.json(resObj)
})

app.post('/user/find', cors(), function(req, res, next) {
    let resObj = users.filter(o => o.user_name.includes(req.body.user_name))
    res.json(resObj)
})

app.post('/user/add-to-project', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.post('/project/find-all', cors(), function(req, res, next) {
    // console.log(req.body)
    // console.log(req)
    console.log(req.body)
    let projectObj = dataProject.find(o => o.id === req.body.id)
    let testsArr = tests.filter(o => o.project_id === req.body.id)
    let usersArr = users.filter(o => o.project_id === req.body.id)
    let resObj = {
        project: projectObj,
        tests: testsArr,
        users: usersArr
    }
    res.json(resObj)
})


app.post('/holidays', cors(), function(req, res, next) {
    res.json(holidays)
})

app.post('/holiday', cors(), function(req, res, next) {
    let resObj = users.find(o => o.id === req.body.id)
    res.json(resObj)
})

app.post('/holidays/update', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.post('/holidays/delete', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.post('/holidays/register', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.post('/holidays/upload', cors(), function(req, res, next) {
    res.json(messageResponse)
})

app.get('/search', function(req, res, next) {
    res.json(searchResult)
})

app.get('/suggest', function(req, res, next) {
    res.json(suggetResult)
})

// app.get('/location1', function(req, res, next) {
//     var b = []
//     for (const a0 of location) {
//         let temp0 = {
//             n: a0.name,
//             d: []
//         }
        
//         for (const a1 of a0.districts) { 
//             let temp1 = {
//                 n: a1.name, 
//                 w: []
//             };
//             for (const a2 of a1.wards) { 
//                 let temp2 = {
//                     n: a2.name
//                 };
//                 temp1.w.push(temp2);
//             }
//             temp0.d.push(temp1);
//         }
//         b.push(temp0);
//     }
//     res.json({'location': b})
// })

app.get('/location', function(req, res, next) {
    res.json({'location': location})
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});