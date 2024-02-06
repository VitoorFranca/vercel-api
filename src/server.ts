import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { SlackRoutes } from './routes/Slack';

const app: Application = express();

const slackRoutes = new SlackRoutes().getRoutes();

app.use(cors());
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', slackRoutes);

app.listen(process.env.port || 3333);

export default app;
