import express, { Request, response, Response } from "express";
import cors from 'cors';

import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

dotenv.config();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "WOlskdjf" });
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})
