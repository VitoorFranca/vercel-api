import { Request, Response } from 'express';
import { SlackService } from '../services/SlackService';

export class SlackController {
  private slackService: SlackService;

  constructor(slackService: SlackService) {
    this.slackService = slackService;
  }

  async openModal(req: Request, res: Response): Promise<void> {
    try {
      const payload = JSON.parse(req.body.payload)

      const result = await this.slackService.openModal(payload.trigger_id);
      res.status(200).json(result);
    } catch (error) {
      res.status(200).json({ message: 'Error converting currencies' });
    }
  }
  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.slackService.sendMessage(req.body);
      res.status(200).json(result);
    } catch (error) {
      // console.log(error)
      res.status(200).json({ message: 'Error converting currencies' });
    }
  }
}
