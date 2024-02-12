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
      console.log("requisição completa: " + JSON.stringify(req.body))
      console.log("payload " + JSON.stringify(payload))
      console.log("payload/trigger_id open modal: " + payload.trigger_id)

      res.status(200).json({
        "response_action": "errors",
        "errors": {          
          "section": "Ocorreu um erro ao processar sua interação de bloco."
        }
      });

      //const result = await this.slackService.openModal(payload.trigger_id);
      //console.log("request: " + result);
      //res.status(200).json(result);
    } catch (error) {
      console.log('Error open modal: ' + error )
      res.status(400).json({ message: 'Error open modal: ' + error });
    }
  }
  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.slackService.sendMessage(req.body);
      console.log("request: " + result);
      res.status(200).json(result);
    } catch (error) {
      console.log('Error send message: ' + error )
      res.status(400).json({ message: 'Error send message: ' + error });
    }
  }
}

