export const modalPayload = {
    "channel" : "C06HEKLDR0A",  
  "view": {
    "type": "modal",
    //"callback_id": "modal-identifier",
    "title": {
      "type": "plain_text",
      "text": "Send Status Update"
    },
    "blocks": [
      {
        "type": "input",
        "block_id": "input_status",
        "element": {
          "type": "plain_text_input",
          "action_id": "input_action"
        },
        "label": {
          "type": 'plain_text',
          "text": 'Digite alguma coisa:'
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Enviar"
          },
          "action_id": "submit_button"
        }
      }
    ]
  }

}

export const buttonPayload = {
    "channel" : "C06HEKLDR0A",    
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Clique no botão abaixo:"
      },
      "accessory": {
                "value": "incidentId=15120",
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "Abrir Modal"
        },
        "action_id": "open_modal_button"
      }
    }
  ]

}