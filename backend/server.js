import               'dotenv/config';
import express  from 'express';
import mongoose from 'mongoose';


import router from './routes/pharmaPosts.js';




const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect(
    "mongodb://0.0.0.0:27017/postsDB"
);


app.use('/farmacie/posts', router)


app.listen(port, () => {
    console.log('Server has been successfully started on port', port);
})
