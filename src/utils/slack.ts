export const modalPayload = {
    "channel" : "C06GXQ3CV7V",  
  "view": {
    "type": "modal",
    "callback_id": "modal-identifier",
    "title": {
      "type": "plain_text",
      "text": "Just a modal"
    },
    "blocks": [
      {
        "type": "section",
        "block_id": "section-identifier",
        "text": {
          "type": "mrkdwn",
          "text": "*Welcome* to ~my~ Block Kit _modal_!"
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Just a button"
          },
          "action_id": "button-identifier"
        }
      }
    ]
  }

}

export const buttonPayload = {
    "channel" : "C06GXQ3CV7V",    
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