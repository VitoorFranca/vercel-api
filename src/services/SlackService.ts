import axios, { Axios } from "axios";
import { buttonPayload, modalPayload } from "../utils/slack";

export class SlackService {
    client: Axios;

  constructor() {
    this.client = new axios.Axios({
        baseURL:  "https://slack.com/api/",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`
    }});
  }

  async sendMessage(options: any): Promise<object> {
    try {        
        const response = await this.client.post("chat.postMessage", {
            ...buttonPayload,
                ...options
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.SLACK_TOKEN}`
            },
        }
        )
        console.log(response)
        return response;
    } catch (error : any) {      
      throw new Error('API Error: ' + error.message);
    }
  }
  async openModal(triggerId: string): Promise<object> {
      try {
          const response = await this.client.post("views.open", {
              ...modalPayload,
              trigger_id: triggerId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.SLACK_TOKEN}`
                },
            }
            
            )
            console.log(response)
      
      return response;
    } catch (error : any) {
      throw new Error('API Error: ' + error.message);
    }
  }
}
