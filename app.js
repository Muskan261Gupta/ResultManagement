console.log('hello world from Nodejs');
// const sum=(num1,num2)=>num1+num2;
// const c=sum(12,1);
// console.log(c);


// const tut=require('./tutorial');
// console.log(tut.sum(5,6));
// console.log(tut.PI);
// console.log(new tut.SomeMathObject());

//                 Event listener
// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();
// eventEmitter.on('muskan',(num1,num2)=>{
//     console.log("hello "+(num1+num2));
// })
// eventEmitter.emit('muskan',3,4);


//                Readline module
// const readline=require('readline');
// const r1=readline.createInterface({input: process.stdin,output: process.stdout});

// let num1=Math.floor((Math.))

//           file system and folders

// const fs = require('fs');
// fs.writeFile('example.html',"this is an example",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('file created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else    
//                 console.log(file);
//         })
//     }
// })

// fs.rename('example.txt','example2.txt',(err)=>{
//             if(err)
//                 console.log(err);
//             else    
//                 console.log("successsfully renamed the file");
// })

// fs.appendFile('example2.txt','Some data appended',(err)=>{
//                 if(err)
//                     console.log(err);
//                 else    
//                     console.log("successsfully appended the file");
//     })


// fs.unlink('example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else    
//         console.log("successsfully deleted the file");
// })

// fs.mkdir('practice',(err)=>{
//     if(err)
//         console.log(err);
//     else    
//         console.log("successsfully created the folder");
//         // fs.rmdir('practice',(err)=>{
//         //     if(err)
//         //         console.log(err);
//         //     else    
//         //         console.log("successsfully deleted the folder");
//         // })

//         fs.writeFile('./practice/new.txt','some data',(err)=>{
//             if(err)
//                 console.log(err);
//             else    
//                 console.log("successsfully created the file");
//         })
// })

// // fs.rmdir('practice',(err)=>{
// //     if(err)
// //         console.log(err);
// //     else    
// //         console.log("successsfully deleted the folder");
// // })

// fs.unlink('./practice/new.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else    {

//         console.log("successsfully deleted the file");
//         fs.rmdir('practice',(err)=>{
//     if(err)
//         console.log(err);
//     else    
//         console.log("successsfully deleted the folder");
// })
//     }
// })


// fs.readdir('practice', (err, files) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log(files);
//         for (let file of files) {
//             fs.unlink('./practice/' + file, (err) => {
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log("successfuly deleted the file " + file);
//             })
//         }
//     }

// })

//        working with readables and writables
// const readStream=fs.createReadStream('./example.txt','utf8');
// const writeStream =fs.createWriteStream('example2.txt');
// readStream.on('data',(chunk)=>{
//     // console.log(chunk);
//     writeStream.write(chunk);
// });    or use shorthand

// readStream.pipe(writeStream);

// const lib= require('zlib');
// const zip=lib.createGzip();
// const unzip=lib.createGunzip();
// const readStream=fs.createReadStream('example2.txt.gz');
// const writeStream =fs.createWriteStream('uncompressed.txt');
// readStream.pipe(unzip).pipe(writeStream);



//       Creating a web server

// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write('Hello world from node js');
//         res.end();
//     }
//     else{
//         res.write('Error!!!!!!!!');
//         res.end();
//     }
// });
// server.listen('8181');

// const server=http.createServer((req,res)=>{
//         // const readStream=fs.createReadStream('./static/example.json');
//         // res.writeHead(200,{'Content-type':'application/json'});
//         const readStream=fs.createReadStream('./static/banner.jpg');
//         res.writeHead(200,{'Content-type':'image/jpg'});
//         readStream.pipe(res);
// });
// server.listen('8181');


// const _ =require('lodash');
// let example= _.fill([1,2,3,4,5],"hello",1,4);
// console.log(example);

///////////////////////////          Express js application        ///////////////////////////

// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const Joi = require('joi');

// const app = express();

// app.use(express.static(path.join(__dirname, 'static')));
// // app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine','ejs');


// app.get('/', (req, res) => {
//     // res.send("Hello world ");
//     // res.sendFile(path.join(__dirname, 'static', 'index.html'));
//     res.render('index1');
// });
// app.get('/example', (req, res) => {
//     res.send("welcome to example page");;
// });
// app.get('/example/:name/:age', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + "  :  " + req.params.age);
// });

// app.post('/', (req, res) => {
//     console.log(req.body);

//     const schema = Joi.object().keys({
//         email: Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required(),
//     });
//     // const validation = Joi.schema.validate(req.body.password);


//     app.post("/post", (req, res) => {
//         const validation = schema.validate(req.body);
//         if (validation.error) {
//             res.send("something went wrong");
//         }
//         res.send("success");
//     });

//     res.send('successfully posted data');

//     res.send('successfully posted data');
// })


// app.post("/", (req, res) => {
//     console.log(req.body);

//     const schema = Joi.object().keys({
//         email: Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required(),
//     });
//     const validation = schema.validate(req.body);
//     if (validation.error) {
//         res.send("something went wrong");
//     }
//     res.send("success");
// });


// app.listen(8182);    


/////////////////////////    Express Js tutorial   ///////////////////////////


// const express=require('express');
// const { get } = require('lodash');
// const cookieParser=require('cookie-parser');
// const session=require('express-session');
// const app=express();

// app.use(cookieParser());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use((req,res,next)=>{
//     console.log(req.method);
//     next();
// })

// const users=[
//     {name:'muskan',age:21},
//     {name:'payal',age:23}
// ]

// app.get('/',(req,res)=>{
//     // res.send(201);
// })
// app.get('/users',(req,res)=>{
//     res.status(200).send(users);
// })

// app.get('/users/:name',(req,res)=>{
// // app.get('/user',(req,res)=>{

//     // console.log(req.params);
//     const {name}=req.params;
//     // const {name}=req.query;
//     const user=users.find((user)=>user.name===name);
//     if(user){
//         res.status(200).send(user);
//     }
//     else{
//         res.status(404).send('Not found');
//     }
// })

// app.post('/',(req,res)=>{
//     const user=req.body;
//     users.push(user);
//     console.log(req.body);
//     res.status(201).send(user);    
// })

// function validateCookie(req,res,next){
//     const {cookies}=req;
//     // console.log(cookies);
//     if('session_id' in cookies){
//         console.log('session id exists');
//         if(cookies.session_id==='123456') next();
//         else res.status(403).send({msg:"not authenticated"});
//     }else res.status(403).send({msg:"not authenticated"});

// }

// app.get('/signin',validateCookie,(req,res)=>{
//     res.cookie('session_id','123456');
//     res.status(200).json({msg: 'loggedIn'})
// })


// app.get('/protected',validateCookie,(req,res)=>{
//     res.status(200).json({msg:'you are authorized'});
// })
// app.listen('8181',()=>{
//     console.log('server is running');
// })

 


///////////////////   8 hrs video node and express    //////////////////////////////
// var i=1
// setInterval(() => {
//     console.log(i++);
//   }, 1000)


// const os = require('os')

// info about current user
// const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`)

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }
// console.log(currentOS)
