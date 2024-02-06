import axios, { Axios } from "axios";
import { buttonPayload, modalPayload } from "../utils/slack";

export class SlackService {
    client: Axios;

  constructor() {
    this.client = new axios.Axios({
        baseURL:  "https://slack.com/api",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer xoxb-6302536431154-6573962128836-Nj70ISnTvndfgwL5eueiWLUI'
    }});
  }

  async sendMessage(options: any): Promise<object> {
    try {
        // console.log(options)
        const response = await axios.post("https://slack.com/api/chat.postMessage", {
            ...buttonPayload,
                ...options
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer xoxb-6302536431154-6573962128836-Nj70ISnTvndfgwL5eueiWLUI'
            },
        }
        )
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
      throw new Error('API Error');
    }
  }
  async openModal(triggerId: string): Promise<object> {
      try {
          const response = await this.client.post("https://slack.com/api/views.open", {
              ...modalPayload,
              trigger_id: triggerId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer xoxb-6302536431154-6573962128836-Nj70ISnTvndfgwL5eueiWLUI'
                },
            }
            
            )
            console.log(response)
      
      return response;
    } catch (error) {
      throw new Error('API Error');
    }
  }
}
