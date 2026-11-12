# Visual Automation Builder

[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A Scratch-like, block-based automation editor for Home Assistant, powered by
[Blockly](https://developers.google.com/blockly). Build automations visually and
save them as **native Home Assistant automations** (they appear in Settings →
Automations and can be edited with the standard editor).

> **Disclaimer:** This is a community project, not affiliated with Google,
> Blockly, or Home Assistant.

## Features (MVP)

- Native sidebar panel — no external service, no Docker, no Node-RED.
- Blockly canvas with a Scratch-like renderer.
- Blocks:
  - **Triggers:** state, numeric state, time.
  - **Conditions:** state, numeric state.
  - **Actions:** call service, delay, notify, choose (if/else), repeat.
- Saves to `automations.yaml` via the native automation config API.
- Entity dropdowns populated from your Home Assistant entities.

## Installation

### HACS

1. Add this repository as a custom repository in HACS.
2. Install "Visual Automation Builder".
3. Restart Home Assistant.
4. Settings → Devices & Services → Add Integration → **Visual Automation Builder**.
5. Open **Automation Builder** in the sidebar.

### Manual

Copy `custom_components/visual_automation_builder` to your Home Assistant
`custom_components` directory, restart, then add the integration once.

## Usage

1. Drag a trigger (e.g. *when light.kitchen becomes on*).
2. Optionally add conditions (*if ...*).
3. Drag actions (*call service light.turn_on*, *wait*, *if/else*, *repeat*).
4. Enter the automation name and press **Save automation**.
5. The automation is created in the native Automations list.

## Development

The frontend is built with Vite + Blockly:

```bash
cd frontend
npm install
npm run build
```

The build output is written to
`custom_components/visual_automation_builder/frontend/automation-builder.js`.
The Blockly media files are copied to `frontend/blockly-media/`.

## Roadmap

- Import existing automations into blocks.
- More triggers/conditions (sun, zone, device, template, webhook).
- `and`/`or`/`not` condition groups.
- Scripts and scenes as building blocks.
- YAML import/export.

## License

MIT — see [LICENSE](LICENSE). Blockly is Apache-2.0.
