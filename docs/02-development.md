# 02 — Development

## Build the frontend

```bash
cd frontend
npm install
npm run build
```

Output: `custom_components/visual_automation_builder/frontend/automation-builder.js`.

Copy Blockly media after upgrading Blockly:

```bash
cp -r frontend/node_modules/blockly/media custom_components/visual_automation_builder/frontend/blockly-media
```

## Run in Home Assistant

Copy `custom_components/visual_automation_builder` to HA's `custom_components`,
restart, add the integration once, then open **Automation Builder** in the
sidebar.

## Adding a block

1. Define it in `frontend/src/main.js` with `Blockly.Blocks[...]`.
2. Add it to the toolbox.
3. Add serialization in `triggerToConfig`, `conditionToConfig`, or
   `actionToConfig`.
4. Rebuild the frontend.
