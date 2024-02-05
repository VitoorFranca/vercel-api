import { Router } from 'express';
import { SlackController } from '../controllers/SlackController';
import { SlackService } from '../services/SlackService';

export class SlackRoutes {
  private router: Router;
  private slackController: SlackController;

  constructor() {
    this.router = Router();
    this.slackController = new SlackController(new SlackService());
  }

  getRoutes(): Router {
    /**
     * @swagger
     * /v1/convert/{currency}/{value}:
     *   get:
     *     summary: Convert currency value
     *     description: Convert a given value from a specific currency to other currencies based on the latest exchange rates.
     *     parameters:
     *       - in: path
     *         name: currency
     *         required: true
     *         description: The currency code to convert from.
     *         schema:
     *           type: string
     *       - in: path
     *         name: value
     *         required: true
     *         description: The value to be converted.
     *         schema:
     *           type: number
     *     responses:
     *       200:
     *         description: OK
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 USD:
     *                   type: number
     *                   description: The converted value to USD.
     *                 EUR:
     *                   type: number
     *                   description: The converted value to EUR.
     *                 INR:
     *                   type: number
     *                   description: The converted value to INR.
     *       400:
     *         description: Bad Request
     *       500:
     *         description: Internal Server Error
     */

    // this.router.get(
    //   '/slack/modal',
    //   this.slackController.openModal.bind(this.slackController),
    // );
    this.router.post(
      '/slack/webhook',
      this.slackController.openModal.bind(this.slackController),
    );
    this.router.post(
      '/slack/send-message',
      this.slackController.sendMessage.bind(this.slackController),
    );
    return this.router;
  }
}
