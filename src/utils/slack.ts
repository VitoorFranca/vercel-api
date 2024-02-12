export const modalPayload = {
  "view": {
    "type": "modal",
    "callback_id": "modal_status_update",
    "title": {
      "type": "plain_text",
      "text": "Add Notes"
    },
    "blocks": [      
      {
        "type": "input",
        "block_id": "section",
        "label": {
          "type": "plain_text",
          "text": "Note"
        },
        "element": {
          "type": "plain_text_input",
          "action_id": "input",
          "placeholder": {
            "type": "plain_text",
            "text": " "
          },
          "multiline": true
        },
        "optional": false
      }
    ],
    "close": {
      "type": "plain_text",
      "text": "Cancel"
    },
    "submit": {
      "type": "plain_text",
      "text": "Send"
    }
    // "private_metadata": "Shhhhhhhh",
    // "callback_id": "view_identifier_12"
  }
}

export const buttonPayload = {
  "channel": "C06HEKLDR0A",
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