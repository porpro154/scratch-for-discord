import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_emoji";

const blockData = {
    "message0": "get emoji by id %1",
    "args0": [
        {
            "type": "input_value",
            "name": "ID",
            "check": ['Number', 'String']
        }
    ],
    "colour": "#50a6c9",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    return [ `s4d.client.emojis.cache.get(${id})`, Blockly.JavaScript.ORDER_NONE ];
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "EMOJI",
        types: [
            "ID"
        ]
    }
]);
