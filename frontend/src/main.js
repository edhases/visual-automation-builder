import * as Blockly from "blockly/core";
import "blockly/blocks";
import * as En from "blockly/msg/en";
import * as Uk from "blockly/msg/uk";

const MEDIA_PATH = "/visual_automation_builder/blockly-media/";

const I18N = {
  en: {
    title: "Automation Builder",
    alias: "Automation name",
    save: "Save automation",
    clear: "Clear",
    status_saved: "Saved ✓",
    status_no_trigger: "Add at least one trigger",
    status_no_action: "Add at least one action",
    status_error: "Error",
    cat_triggers: "Triggers",
    cat_conditions: "Conditions",
    cat_actions: "Actions",
    block_trigger_state: "When entity becomes…",
    block_trigger_numeric: "When number is above/below…",
    block_trigger_time: "At a specific time",
    block_condition_state: "If entity is…",
    block_condition_numeric: "If number is above/below…",
    block_action_service: "Call a service",
    block_action_delay: "Wait N seconds",
    block_action_notify: "Send a notification",
    block_action_choose: "If / else branch",
    block_action_repeat: "Repeat N times",
    when: "when",
    becomes: "becomes",
    at_time: "at time",
    if: "if",
    is: "is",
    above: "above",
    below: "below",
    call_service: "call service",
    target: "target",
    data_json: "data JSON",
    wait: "wait",
    seconds: "seconds",
    notify: "notify",
    message: "message",
    then: "then",
    else: "else",
    repeat: "repeat",
    times: "times",
    do: "do",
    hint: "Click a block in the palette to add it to the canvas.",
  },
  uk: {
    title: "Конструктор автоматизацій",
    alias: "Назва автоматизації",
    save: "Зберегти автоматизацію",
    clear: "Очистити",
    status_saved: "Збережено ✓",
    status_no_trigger: "Додайте хоча б один тригер",
    status_no_action: "Додайте хоча б одну дію",
    status_error: "Помилка",
    cat_triggers: "Тригери",
    cat_conditions: "Умови",
    cat_actions: "Дії",
    block_trigger_state: "Коли сутність стає…",
    block_trigger_numeric: "Коли число вище/нижче…",
    block_trigger_time: "У вказаний час",
    block_condition_state: "Якщо сутність…",
    block_condition_numeric: "Якщо число вище/нижче…",
    block_action_service: "Викликати сервіс",
    block_action_delay: "Чекати N секунд",
    block_action_notify: "Надіслати сповіщення",
    block_action_choose: "Розгалуження if / else",
    block_action_repeat: "Повторити N разів",
    when: "коли",
    becomes: "стає",
    at_time: "о",
    if: "якщо",
    is: "це",
    above: "вище",
    below: "нижче",
    call_service: "викликати сервіс",
    target: "ціль",
    data_json: "data JSON",
    wait: "чекати",
    seconds: "секунд",
    notify: "сповістити",
    message: "повідомлення",
    then: "тоді",
    else: "інакше",
    repeat: "повторити",
    times: "разів",
    do: "робити",
    hint: "Натисніть блок у палітрі, щоб додати його на полотно.",
  },
};

let currentLang = "en";

function t(key) {
  return I18N[currentLang]?.[key] || I18N.en[key] || key;
}

function setLocaleFor(lang) {
  currentLang = lang && lang.startsWith("uk") ? "uk" : "en";
  Blockly.setLocale(currentLang === "uk" ? Uk : En);
  window.__VAB_LANG = currentLang;
}

/** @type {Array<Array<string>>} */
let entityOptions = [["(no entities)", ""]];
window.__VAB_ENTITIES = entityOptions;

let lastEntitySignature = "";

function setEntityOptions(hass) {
  if (!hass || !hass.states) return;
  const options = Object.entries(hass.states)
    .map(([id, state]) => [state?.attributes?.friendly_name || id, id])
    .sort((a, b) => a[0].localeCompare(b[0]));
  if (!options.length) {
    options.push(["(no entities)", ""]);
  }
  const signature = options.map(([label, id]) => `${id}|${label}`).join("\n");
  if (signature === lastEntitySignature) return;
  lastEntitySignature = signature;
  entityOptions = options;
  window.__VAB_ENTITIES = entityOptions;

  if (window.__VAB_WORKSPACE) {
    for (const block of window.__VAB_WORKSPACE.getAllBlocks(false)) {
      for (const fieldName of ["ENTITY", "TARGET"]) {
        const field = block.getField && block.getField(fieldName);
        if (!field || !field.setOptions) continue;
        const value = field.getValue();
        field.setOptions(entityOptions);
        if (value) field.setValue(value);
      }
    }
  }
}

function entityDropdown() {
  return () => window.__VAB_ENTITIES || entityOptions;
}

function defineBlocks() {
  Blockly.Blocks["vab_trigger_state"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("when"))
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(t("becomes"))
        .appendField(new Blockly.FieldTextInput("on"), "STATE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
    },
  };

  Blockly.Blocks["vab_trigger_time"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("at_time"))
        .appendField(new Blockly.FieldTextInput("08:00:00"), "TIME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
    },
  };

  Blockly.Blocks["vab_trigger_numeric"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("when"))
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(
          new Blockly.FieldDropdown([
            [t("above"), "above"],
            [t("below"), "below"],
          ]),
          "DIR"
        )
        .appendField(new Blockly.FieldNumber(0), "VALUE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
    },
  };

  Blockly.Blocks["vab_condition_state"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("if"))
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(t("is"))
        .appendField(new Blockly.FieldTextInput("on"), "STATE");
      this.setOutput(true, "Condition");
      this.setColour(210);
    },
  };

  Blockly.Blocks["vab_condition_numeric"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("if"))
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "ENTITY")
        .appendField(
          new Blockly.FieldDropdown([
            [t("above"), "above"],
            [t("below"), "below"],
          ]),
          "DIR"
        )
        .appendField(new Blockly.FieldNumber(0), "VALUE");
      this.setOutput(true, "Condition");
      this.setColour(210);
    },
  };

  Blockly.Blocks["vab_action_service"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("call_service"))
        .appendField(new Blockly.FieldTextInput("light.turn_on"), "SERVICE");
      this.appendDummyInput()
        .appendField(t("target"))
        .appendField(new Blockly.FieldDropdown(entityDropdown()), "TARGET");
      this.appendDummyInput()
        .appendField(t("data_json"))
        .appendField(new Blockly.FieldTextInput("{}"), "DATA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
    },
  };

  Blockly.Blocks["vab_action_delay"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("wait"))
        .appendField(new Blockly.FieldNumber(5, 0, 86400, 1), "DELAY")
        .appendField(t("seconds"));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
    },
  };

  Blockly.Blocks["vab_action_notify"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("notify"))
        .appendField(new Blockly.FieldTextInput("Automation"), "TITLE");
      this.appendDummyInput()
        .appendField(t("message"))
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
        .appendField(t("if"));
      this.appendStatementInput("THEN").appendField(t("then"));
      this.appendStatementInput("ELSE").appendField(t("else"));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    },
  };

  Blockly.Blocks["vab_action_repeat"] = {
    init() {
      this.appendDummyInput()
        .appendField(t("repeat"))
        .appendField(new Blockly.FieldNumber(1, 1, 1000, 1), "COUNT")
        .appendField(t("times"));
      this.appendStatementInput("DO").appendField(t("do"));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    },
  };
}

const THEME = Blockly.Theme.defineTheme("vab-dark", {
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: "#111315",
    toolboxBackgroundColour: "#1b1d1f",
    toolboxForegroundColour: "#e6e6e6",
    flyoutBackgroundColour: "#202326",
    flyoutForegroundColour: "#e6e6e6",
    flyoutOpacity: 1,
    scrollbarColour: "#4a4f54",
    insertionMarkerColour: "#ffffff",
    insertionMarkerOpacity: 0.4,
    cursorColour: "#4fc3f7",
  },
  fontStyle: { family: "Roboto, Noto Sans, sans-serif", size: 11 },
});

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

const PALETTE = [
  {
    key: "cat_triggers",
    colour: "#5aa15a",
    blocks: [
      { type: "vab_trigger_state", label: "block_trigger_state" },
      { type: "vab_trigger_numeric", label: "block_trigger_numeric" },
      { type: "vab_trigger_time", label: "block_trigger_time" },
    ],
  },
  {
    key: "cat_conditions",
    colour: "#4a90d9",
    blocks: [
      { type: "vab_condition_state", label: "block_condition_state" },
      { type: "vab_condition_numeric", label: "block_condition_numeric" },
    ],
  },
  {
    key: "cat_actions",
    colour: "#c07a3a",
    blocks: [
      { type: "vab_action_service", label: "block_action_service" },
      { type: "vab_action_delay", label: "block_action_delay" },
      { type: "vab_action_notify", label: "block_action_notify" },
      { type: "vab_action_choose", label: "block_action_choose" },
      { type: "vab_action_repeat", label: "block_action_repeat" },
    ],
  },
];

class AutomationBuilder extends HTMLElement {
  constructor() {
    super();
    this._hass = undefined;
    this._workspace = undefined;
    this._alias = "Visual automation";
  }

  set hass(hass) {
    this._hass = hass;
    const lang = hass?.locale?.language || hass?.language;
    if (lang) setLocaleFor(lang);
    setEntityOptions(hass);
    if (this._workspace && lang && lang !== window.__VAB_LANG_APPLIED) {
      window.__VAB_LANG_APPLIED = lang;
    }
  }

  get hass() {
    return this._hass;
  }

  connectedCallback() {
    setLocaleFor(this._hass?.locale?.language || this._hass?.language || "en");
    this.innerHTML = `
      <style>
        automation-builder {
          display: flex; flex-direction: column; height: 100%;
          background: var(--primary-background-color); color: var(--primary-text-color);
          font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
        }
        automation-builder .vab-header {
          display: flex; gap: 10px; align-items: center; padding: 12px 16px;
          background: var(--card-background-color);
          border-bottom: 1px solid var(--divider-color);
        }
        automation-builder .vab-title { font-size: 18px; font-weight: 600; margin-right: 8px; }
        automation-builder .vab-header input {
          flex: 1 1 240px; min-width: 160px; padding: 9px 12px; border-radius: 8px;
          border: 1px solid var(--divider-color);
          background: var(--secondary-background-color); color: var(--primary-text-color);
          font-size: 14px;
        }
        automation-builder .vab-header button {
          padding: 9px 16px; border: none; border-radius: 8px; cursor: pointer;
          background: var(--primary-color); color: var(--text-primary-color);
          font-weight: 600; font-size: 14px;
        }
        automation-builder .vab-header button.secondary {
          background: var(--secondary-background-color); color: var(--primary-text-color);
          border: 1px solid var(--divider-color);
        }
        automation-builder .vab-status { font-size: 13px; opacity: 0.85; min-width: 120px; }
        automation-builder .vab-body { display: flex; flex: 1; min-height: 0; }
        automation-builder .vab-palette {
          width: 260px; min-width: 220px; overflow-y: auto; padding: 12px;
          background: var(--card-background-color);
          border-right: 1px solid var(--divider-color);
        }
        automation-builder .vab-cat { margin-bottom: 16px; }
        automation-builder .vab-cat h3 {
          margin: 0 0 8px; font-size: 13px; text-transform: uppercase;
          letter-spacing: 0.06em; opacity: 0.7;
        }
        automation-builder .vab-block-btn {
          display: flex; align-items: center; gap: 8px; width: 100%;
          margin-bottom: 6px; padding: 9px 10px; border-radius: 8px;
          border: 1px solid var(--divider-color); cursor: pointer;
          background: var(--secondary-background-color); color: var(--primary-text-color);
          text-align: left; font-size: 13px;
        }
        automation-builder .vab-block-btn:hover {
          filter: brightness(1.15); border-color: var(--primary-color);
        }
        automation-builder .vab-dot {
          width: 10px; height: 10px; border-radius: 50%; flex: 0 0 10px;
        }
        automation-builder .vab-hint {
          font-size: 12px; opacity: 0.6; line-height: 1.4; margin-top: 12px;
        }
        automation-builder .vab-blockly { flex: 1; min-width: 0; position: relative; }

        /* Readable text inside Blockly blocks on the dark theme. */
        automation-builder .blocklyText,
        automation-builder .blocklyDropdownText,
        automation-builder .blocklyFlyoutLabelText { fill: #f5f5f5 !important; }
        automation-builder .blocklyHtmlInput {
          color: #f5f5f5 !important;
          background: #23272b !important;
          border: 1px solid #3a3f44 !important;
          border-radius: 4px !important;
        }
        automation-builder .blocklyDropDownDiv {
          background: #23272b !important;
          border-color: #3a3f44 !important;
          color: #f5f5f5 !important;
        }
        automation-builder .blocklyMenuItem { color: #f5f5f5 !important; }
        automation-builder .blocklyMenuItem:hover,
        automation-builder .blocklyMenuItemHighlight { background: #2f7bd6 !important; }

        /* The renderer draws a second opaque path over the block when it is
           selected, hiding all text. Keep only a thin blue outline. */
        automation-builder .blocklyPathSelected {
          fill: none !important;
          fill-opacity: 0 !important;
          stroke: #4fc3f7 !important;
          stroke-width: 2px !important;
          pointer-events: none !important;
        }
      </style>
      <div class="vab-header">
        <div class="vab-title">${t("title")}</div>
        <input id="vab-alias" placeholder="${t("alias")}" value="" />
        <button id="vab-save">${t("save")}</button>
        <button id="vab-clear" class="secondary">${t("clear")}</button>
        <span class="vab-status" id="vab-status"></span>
      </div>
      <div class="vab-body">
        <aside class="vab-palette">
          ${PALETTE.map(
            (cat) => `
            <div class="vab-cat">
              <h3>${t(cat.key)}</h3>
              ${cat.blocks
                .map(
                  (b) => `
                <button class="vab-block-btn" data-block="${b.type}">
                  <span class="vab-dot" style="background:${cat.colour}"></span>
                  <span>${t(b.label)}</span>
                </button>`
                )
                .join("")}
            </div>`
          ).join("")}
          <div class="vab-hint">${t("hint")}</div>
        </aside>
        <div class="vab-blockly" id="vab-blockly"></div>
      </div>
    `;

    defineBlocks();
    setEntityOptions(this._hass);

    this._workspace = Blockly.inject(this.querySelector("#vab-blockly"), {
      theme: THEME,
      renderer: "zelos",
      media: MEDIA_PATH,
      grid: { spacing: 24, length: 3, colour: "#2a2e33", snap: true },
      zoom: { controls: true, wheel: true, startScale: 0.9, maxScale: 2, minScale: 0.4 },
      trashcan: true,
      move: { scrollbars: true, drag: true, wheel: true },
    });
    window.__VAB_WORKSPACE = this._workspace;

    this._copyBlocklyStyles();
    this._injectGlobalStyles();

    this._workspace.addChangeListener((event) => {
      if (
        event.type === Blockly.Events.SELECTED ||
        event.type === Blockly.Events.CLICK
      ) {
        setTimeout(() => {
          if (!this._workspace) return;
          this._workspace.render();
        }, 0);
      }
    });

    for (const button of this.querySelectorAll(".vab-block-btn")) {
      button.addEventListener("click", () => {
        this.addBlock(button.dataset.block);
      });
    }

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
      if (this._workspace) Blockly.svgResize(this._workspace);
    });
    this._resizeObserver.observe(this);
  }

  addBlock(type) {
    const block = this._workspace.newBlock(type);
    block.initSvg();
    block.render();
    const metrics = this._workspace.getMetrics();
    block.moveBy(
      metrics.viewLeft + 40 + Math.random() * 60,
      metrics.viewTop + 40 + Math.random() * 60
    );
    block.select();
    if (Blockly.renderManagement?.finishQueuedRenders) {
      Blockly.renderManagement.finishQueuedRenders();
    }
    Blockly.svgResize(this._workspace);
    // Force a follow-up paint; without this the first render can show an
    // empty block until the workspace receives a click/resize.
    this._workspace.render();
    setTimeout(() => {
      if (!this._workspace) return;
      this._workspace.render();
      Blockly.svgResize(this._workspace);
    }, 0);
  }

  _injectGlobalStyles() {
    if (document.getElementById("vab-global-style")) return;
    const style = document.createElement("style");
    style.id = "vab-global-style";
    style.textContent = `
      .blocklyDropDownDiv {
        background: #23272b !important;
        border-color: #3a3f44 !important;
        color: #f5f5f5 !important;
        max-height: 340px !important;
        overflow-y: auto !important;
      }
      .blocklyMenuItem { color: #f5f5f5 !important; }
      .blocklyMenuItem:hover, .blocklyMenuItemHighlight {
        background: #2f7bd6 !important;
        color: #ffffff !important;
      }
      .blocklyHtmlInput {
        color: #f5f5f5 !important;
        background: #23272b !important;
        border: 1px solid #3a3f44 !important;
      }
    `;
    document.head.appendChild(style);
  }

  _copyBlocklyStyles() {
    const root = this.getRootNode();
    if (!root || root === document) return;
    for (const id of [
      "blockly-common-style",
      "blockly-renderer-style-zelos-classic",
      "blockly-renderer-style-zelos",
    ]) {
      const source = document.getElementById(id);
      if (!source || root.querySelector(`#${id}-shadow`)) continue;
      const clone = source.cloneNode(true);
      clone.id = `${id}-shadow`;
      root.appendChild(clone);
    }
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

      if (isConditionType(block.type)) {
        const condition = conditionToConfig(block);
        if (condition) conditions.push(condition);
        continue;
      }

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
      this.setStatus(t("status_error"));
      return;
    }
    const config = this.buildAutomation();
    if (!config.trigger.length) {
      this.setStatus(t("status_no_trigger"));
      return;
    }
    if (!config.action.length) {
      this.setStatus(t("status_no_action"));
      return;
    }
    const id = `vab_${Date.now().toString(36)}`;
    try {
      await this._hass.callApi("POST", `config/automation/config/${id}`, config);
      this.setStatus(t("status_saved"));
      await this._hass.callService("persistent_notification", "create", {
        title: "Automation Builder",
        message: `Automation "${config.alias}" saved.`,
        notification_id: `vab_${id}`,
      });
    } catch (err) {
      console.error(err);
      this.setStatus(`${t("status_error")}: ${err.message || err}`);
    }
  }
}

customElements.define("automation-builder", AutomationBuilder);
