// Packages
import                   'dotenv/config';
import express      from 'express';
import mongoose     from 'mongoose';


// Components
import router       from './routes/pharmaPosts.js';
import adminRouter  from './routes/adminLogin.js';




const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect(
    "mongodb://0.0.0.0:27017/postsDB"
);


app.use('/stomatologie/posts',  router);
app.use('/beauty/posts',        router);
app.use('/farmacie/posts',      router);
app.use('/adminLogin',          adminRouter);


app.listen(port, () => {
    console.log('Server has been successfully started on port', port);
})
