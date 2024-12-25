import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.COHERE_API_KEY;
const BASE_URL = process.env.COHERE_URL;

app.post('/chat', async (req, res)=>{

const prompt = req.body.prompt;
    try {
        const response = await axios.post(
            BASE_URL,
            {
                model: 'command-xlarge',
                prompt,
                max_tokens: 100,
            },
            { headers: { Authorization: `Bearer ${API_KEY}` } }
        );
        console.log(response.data.text);
        res.json({response: response.data.text});
    } catch (error) {
        console.error('Error generating text:', error.response?.data || error.message);
    }
})


app.listen(PORT, (req, res)=>{
    console.log(`app listening on port ${PORT}`);
})
