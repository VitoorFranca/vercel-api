export const modalPayload = {
  "channel": "C06HEKLDR0A",
  "view": {
    "type": "modal",
    "title": {
      "type": "plain_text",
      "text": "Add Notes"
    },
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "It's Block Kit...but _in a modal_"
        },
        "block_id": "section1",
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click me"
          },
          "action_id": "button_abc",
          "value": "Button value",
          "style": "danger"
        }
      },
      {
        "type": "input",
        "block_id": "section2",
        "label": {
          "type": "plain_text",
          "text": "Note"
        },
        "element": {
          "type": "plain_text_input",
          "action_id": "input_o1",  
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
      //"action_id": "submit_btn",
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