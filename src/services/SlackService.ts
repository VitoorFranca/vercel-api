import axios, { AxiosInstance } from "axios";
import { buttonPayload, modalPayload } from "../utils/slack";

export class SlackService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://slack.com/api/",
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
      })
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      throw new Error('API Error: ' + error.message);
    }
  }
  async openModal(triggerId: string): Promise<object> {
    try {
      const response = await this.client.post("views.open", {
        ...modalPayload,
        trigger_id: triggerId
      })
      console.log(response.data)

      return response.data;
    } catch (error: any) {
      throw new Error('API Error: ' + error.message);
    }
  }
}
