import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import ejsMate from 'ejs-mate';
import { DBCONNECT } from "./src/db/db.js";
import dotenv from "dotenv"
import {loginUser} from "./src/controllers/user.controller.js"
dotenv.config()
// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set ejs-mate as the rendering engine for EJS files
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.urlencoded({extended:true}))


DBCONNECT()
.then(console.log("mongo db is connected sucessfuly"))
.catch((err)=>{
    console.log(err)
})


app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/login',(req,res)=>{
    res.render( "login.ejs")
})

app.listen(PORT,()=>{
    console.log("server is running")
})

app.post('/VIDEOS/user/1234243543/h2h',loginUser)


 