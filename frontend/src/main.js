import * as Blockly from "blockly/core";
import "blockly/blocks";
import * as En from "blockly/msg/en";

Blockly.setLocale(En);

const MEDIA_PATH = "/visual_automation_builder/blockly-media/";

/** @type {Array<Array<string>>} */
let entityOptions = [["(no entities)", ""]];

function setEntityOptions(hass) {
  if (!hass || !hass.states) return;
  entityOptions = Object.keys(hass.states)
    .sort()
    .map((id) => [id, id]);
  window.__VAB_ENTITIES = entityOptions;
  if (window.__VAB_WORKSPACE) {
    for (const block of window.__VAB_WORKSPACE.getAllBlocks(false)) {
      const field = block.getField && block.getField("ENTITY");
      if (field && field.setOptions) field.setOptions(entityOptions);
      const target = block.getField && block.getField("TARGET");
      if (target && target.setOptions) target.setOptions(entityOptions);
    }
  }
}

window.__VAB_ENTITIES = entityOptions;

function entityDropdown() {
  return () => window.__VAB_ENTITIES || entityOptions;
}

function defineBlocks() {
  Blockly.Blocks["vab_trigger_state"] = {
    init() {
      this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField("becomes")
        .appendField(new Blockly.FieldTextInput("on"), "STATE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("State trigger");
    },
  };

  Blockly.Blocks["vab_trigger_time"] = {
    init() {
      this.appendDummyInput()
        .appendField("at time")
        .appendField(new Blockly.FieldTextInput("08:00:00"), "TIME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Time trigger (HH:MM:SS)");
    },
  };

  Blockly.Blocks["vab_trigger_numeric"] = {
    init() {
      this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(
          new Blockly.FieldDropdown([
            ["is above", "above"],
            ["is below", "below"],
          ]),
          "DIR"
        )
        .appendField(new Blockly.FieldNumber(0), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Numeric state trigger");
    },
  };

  Blockly.Blocks["vab_condition_state"] = {
    init() {
      this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField("is")
        .appendField(new Blockly.FieldTextInput("on"), "STATE");
      this.setOutput(true, "Condition");
      this.setColour(210);
      this.setTooltip("State condition");
    },
  };

  Blockly.Blocks["vab_condition_numeric"] = {
    init() {
      this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(
          new Blockly.FieldDropdown([
            ["above", "above"],
            ["below", "below"],
          ]),
          "DIR"
        )
        .appendField(new Blockly.FieldNumber(0), "VALUE");
      this.setOutput(true, "Condition");
      this.setColour(210);
      this.setTooltip("Numeric condition");
    },
  };

  Blockly.Blocks["vab_action_service"] = {
    init() {
      this.appendDummyInput()
        .appendField("call service")
        .appendField(new Blockly.FieldTextInput("light.turn_on"), "SERVICE");
      this.appendDummyInput()
        .appendField("target")
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "TARGET");
      this.appendDummyInput()
        .appendField("data JSON")
        .appendField(new Blockly.FieldTextInput("{}"), "DATA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("Call a Home Assistant service");
    },
  };

  Blockly.Blocks["vab_action_delay"] = {
    init() {
      this.appendDummyInput()
        .appendField("wait")
        .appendField(new Blockly.FieldNumber(5, 0, 86400, 1), "DELAY")
        .appendField("seconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
    },
  };

  Blockly.Blocks["vab_action_notify"] = {
    init() {
      this.appendDummyInput()
        .appendField("notify")
        .appendField(new Blockly.FieldTextInput("Automation"), "TITLE");
      this.appendDummyInput()
        .appendField("message")
        .appendField(new Blockly.FieldTextInput("Done"), "MESSAGE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
    },
  };

  Blockly.Blocks["vab_action_choose"] = {
    init() {
      this.appendValueInput("CONDITION")
        .setCheck("Condition")
        .appendField("if");
      this.appendStatementInput("THEN").appendField("then");
      this.appendStatementInput("ELSE").appendField("else");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("Choose / if-else branch");
    },
  };

  Blockly.Blocks["vab_action_repeat"] = {
    init() {
      this.appendDummyInput()
        .appendField("repeat")
        .appendField(new Blockly.FieldNumber(1, 1, 1000, 1), "COUNT")
        .appendField("times");
      this.appendStatementInput("DO").appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("Repeat actions");
    },
  };
}

function toolbox() {
  return {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Triggers",
        colour: "120",
        contents: [
          { kind: "block", type: "vab_trigger_state" },
          { kind: "block", type: "vab_trigger_numeric" },
          { kind: "block", type: "vab_trigger_time" },
        ],
      },
      {
        kind: "category",
        name: "Conditions",
        colour: "210",
        contents: [
          { kind: "block", type: "vab_condition_state" },
          { kind: "block", type: "vab_condition_numeric" },
        ],
      },
      {
        kind: "category",
        name: "Actions",
        colour: "260",
        contents: [
          { kind: "block", type: "vab_action_service" },
          { kind: "block", type: "vab_action_delay" },
          { kind: "block", type: "vab_action_notify" },
          { kind: "block", type: "vab_action_choose" },
          { kind: "block", type: "vab_action_repeat" },
        ],
      },
    ],
  };
}

function parseJson(text) {
  try {
    return JSON.parse(text || "{}");
  } catch {
    return {};
  }
}

function conditionToConfig(block) {
  if (!block) return null;
  if (block.type === "vab_condition_state") {
    return {
      condition: "state",
      entity_id: block.getFieldValue("ENTITY"),
      state: block.getFieldValue("STATE"),
    };
  }
  if (block.type === "vab_condition_numeric") {
    return {
      condition: "numeric_state",
      entity_id: block.getFieldValue("ENTITY"),
      [block.getFieldValue("DIR")]: Number(block.getFieldValue("VALUE") || 0),
    };
  }
  return null;
}

function actionToConfig(block) {
  if (!block) return null;
  switch (block.type) {
    case "vab_action_service": {
      const config = { service: block.getFieldValue("SERVICE") };
      const target = block.getFieldValue("TARGET");
      if (target) config.target = { entity_id: target };
      const data = parseJson(block.getFieldValue("DATA"));
      if (data && Object.keys(data).length) config.data = data;
      return config;
    }
    case "vab_action_delay":
      return { delay: { seconds: Number(block.getFieldValue("DELAY") || 0) } };
    case "vab_action_notify":
      return {
        service: "persistent_notification.create",
        data: {
          title: block.getFieldValue("TITLE") || "Automation",
          message: block.getFieldValue("MESSAGE") || "",
        },
      };
    case "vab_action_choose": {
      const condition = conditionToConfig(block.getInputTargetBlock("CONDITION"));
      return {
        choose: [
          {
            conditions: condition ? [condition] : [],
            sequence: sequenceToConfig(block.getInputTargetBlock("THEN")),
          },
        ],
        default: sequenceToConfig(block.getInputTargetBlock("ELSE")),
      };
    }
    case "vab_action_repeat":
      return {
        repeat: {
          count: Number(block.getFieldValue("COUNT") || 1),
          sequence: sequenceToConfig(block.getInputTargetBlock("DO")),
        },
      };
    default:
      return null;
  }
}

function sequenceToConfig(firstBlock) {
  const result = [];
  let block = firstBlock;
  while (block) {
    const config = actionToConfig(block);
    if (config) result.push(config);
    block = block.getNextBlock();
  }
  return result;
}

function triggerToConfig(block) {
  switch (block.type) {
    case "vab_trigger_state":
      return {
        platform: "state",
        entity_id: block.getFieldValue("ENTITY"),
        to: block.getFieldValue("STATE"),
      };
    case "vab_trigger_numeric":
      return {
        platform: "numeric_state",
        entity_id: block.getFieldValue("ENTITY"),
        [block.getFieldValue("DIR")]: Number(block.getFieldValue("VALUE") || 0),
      };
    case "vab_trigger_time":
      return { platform: "time", at: block.getFieldValue("TIME") };
    default:
      return null;
  }
}

function isActionType(type) {
  return type.startsWith("vab_action_");
}

function isTriggerType(type) {
  return type.startsWith("vab_trigger_");
}

function isConditionType(type) {
  return type.startsWith("vab_condition_");
}

class AutomationBuilder extends HTMLElement {
  constructor() {
    super();
    this._hass = undefined;
    this._workspace = undefined;
    this._alias = "Visual automation";
  }

  set hass(hass) {
    this._hass = hass;
    setEntityOptions(hass);
  }

  get hass() {
    return this._hass;
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        automation-builder { display: block; height: 100%; background: var(--primary-background-color); }
        automation-builder .vab-toolbar {
          display: flex; gap: 8px; align-items: center; padding: 8px 12px;
          background: var(--card-background-color); border-bottom: 1px solid var(--divider-color);
          font-family: var(--paper-font-body1_-_font-family);
        }
        automation-builder .vab-toolbar input {
          flex: 0 0 260px; padding: 8px; border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--secondary-background-color); color: var(--primary-text-color);
        }
        automation-builder .vab-toolbar button {
          padding: 8px 14px; border: none; border-radius: 6px; cursor: pointer;
          background: var(--primary-color); color: var(--text-primary-color); font-weight: 600;
        }
        automation-builder .vab-toolbar button.secondary { background: var(--secondary-background-color); color: var(--primary-text-color); }
        automation-builder .vab-status { margin-left: auto; opacity: 0.8; }
        automation-builder .vab-blockly { position: absolute; top: 53px; left: 0; right: 0; bottom: 0; }
      </style>
      <div class="vab-toolbar">
        <input id="vab-alias" placeholder="Automation name" value="Visual automation" />
        <button id="vab-save">Save automation</button>
        <button id="vab-clear" class="secondary">Clear</button>
        <span class="vab-status" id="vab-status"></span>
      </div>
      <div class="vab-blockly" id="vab-blockly"></div>
    `;

    defineBlocks();
    setEntityOptions(this._hass);

    this._workspace = Blockly.inject(this.querySelector("#vab-blockly"), {
      toolbox: toolbox(),
      renderer: "zelos",
      media: MEDIA_PATH,
      grid: { spacing: 24, length: 3, colour: "#ccc", snap: true },
      zoom: { controls: true, wheel: true, startScale: 0.9, maxScale: 2, minScale: 0.4 },
      trashcan: true,
    });
    window.__VAB_WORKSPACE = this._workspace;

    this.querySelector("#vab-alias").addEventListener("input", (event) => {
      this._alias = event.target.value;
    });
    this.querySelector("#vab-save").addEventListener("click", () => {
      this.saveAutomation();
    });
    this.querySelector("#vab-clear").addEventListener("click", () => {
      this._workspace.clear();
      this.setStatus("");
    });

    this._resizeObserver = new ResizeObserver(() => {
      Blockly.svgResize(this._workspace);
    });
    this._resizeObserver.observe(this);
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    if (this._workspace) {
      this._workspace.dispose();
      this._workspace = undefined;
      window.__VAB_WORKSPACE = undefined;
    }
  }

  setStatus(text) {
    const status = this.querySelector("#vab-status");
    if (status) status.textContent = text;
  }

  buildAutomation() {
    const triggers = [];
    const conditions = [];
    const actions = [];

    for (const block of this._workspace.getTopBlocks(true)) {
      if (block.getPreviousBlock()) continue;

      // A top-level value block (condition) is not part of a statement chain.
      if (isConditionType(block.type)) {
        const condition = conditionToConfig(block);
        if (condition) conditions.push(condition);
        continue;
      }

      // Walk the statement chain (trigger -> actions or actions only).
      let current = block;
      while (current) {
        if (isTriggerType(current.type)) {
          const trigger = triggerToConfig(current);
          if (trigger) triggers.push(trigger);
        } else if (isActionType(current.type)) {
          const action = actionToConfig(current);
          if (action) actions.push(action);
        }
        current = current.getNextBlock();
      }
    }

    return {
      alias: this._alias || "Visual automation",
      trigger: triggers,
      condition: conditions,
      action: actions,
      mode: "single",
    };
  }

  async saveAutomation() {
    if (!this._hass) {
      this.setStatus("Not connected to Home Assistant");
      return;
    }
    const config = this.buildAutomation();
    if (!config.trigger.length) {
      this.setStatus("Add at least one trigger");
      return;
    }
    if (!config.action.length) {
      this.setStatus("Add at least one action");
      return;
    }
    const id = `vab_${Date.now().toString(36)}`;
    try {
      await this._hass.callApi(`POST`, `config/automation/config/${id}`, config);
      this.setStatus("Saved ✓");
      await this._hass.callService("persistent_notification", "create", {
        title: "Automation Builder",
        message: `Automation "${config.alias}" saved.`,
        notification_id: `vab_${id}`,
      });
    } catch (err) {
      console.error(err);
      this.setStatus(`Error: ${err.message || err}`);
    }
  }
}

customElements.define("automation-builder", AutomationBuilder);
