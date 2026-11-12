# 01 — Architecture

```
Home Assistant
├── custom_components/visual_automation_builder/
│   ├── __init__.py        # static path + panel registration
│   ├── config_flow.py     # one-time setup entry
│   ├── const.py
│   └── frontend/
│       ├── automation-builder.js   # Vite build (Blockly bundle)
│       └── blockly-media/          # sprites/sounds for Blockly
└── frontend/              # source
    ├── package.json
    ├── vite.config.js
    └── src/main.js        # custom element <automation-builder>
```

## Startup

1. The user adds the integration once (config flow creates a single entry).
2. `async_setup_entry` registers a static path at `/visual_automation_builder`
   and a `panel_custom` panel at `/automation-builder`.
3. The panel loads `automation-builder.js`, which registers the
   `<automation-builder>` custom element and creates a Blockly workspace.

## Save flow

1. The panel walks the workspace:
   - top-level `vab_trigger_*` → `trigger`
   - top-level `vab_condition_*` → `condition`
   - top-level `vab_action_*` chains → `action`
2. It builds the native automation object.
3. `hass.callApi("POST", "config/automation/config/{id}", config)` writes to
   `automations.yaml`; HA's config hook reloads automations automatically.

## Entity dropdowns

Entity IDs come from `hass.states` and are refreshed whenever HA pushes new
state to the panel. Blockly `FieldDropdown.setOptions()` updates existing
blocks when the list changes.
