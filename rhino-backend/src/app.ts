import express, { Request, response, Response } from "express";

import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "WOlskdjf" });
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})
