import axios, { Axios } from "axios";
import { buttonPayload, modalPayload } from "../utils/slack";

export class SlackService {
    client: Axios;

  constructor() {
    this.client = new axios.Axios({
        baseURL:  "https://slack.com/api",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer xoxp-6302536431154-6296635752214-6588262837425-1389f300eaa01cf71a72c45b936b1bc4'
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
                Authorization: 'Bearer xoxp-6302536431154-6296635752214-6588262837425-1389f300eaa01cf71a72c45b936b1bc4'
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
                    Authorization: 'Bearer xoxp-6302536431154-6296635752214-6588262837425-1389f300eaa01cf71a72c45b936b1bc4'
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
