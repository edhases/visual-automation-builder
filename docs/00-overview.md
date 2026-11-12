# 00 — Overview

Visual Automation Builder is a Home Assistant custom integration that adds a
Scratch-like block editor to the sidebar.

- **Native:** runs inside Home Assistant as a custom integration + `panel_custom`
  panel. No separate service, no Node-RED, no Docker.
- **Blockly:** the editor is built with Google Blockly and the `zelos` renderer.
- **Native automations:** the Save button writes to `automations.yaml` through
  the standard `/api/config/automation/config/{id}` endpoint, so automations
  appear in Settings → Automations and can be edited there.
- **Auth:** the panel receives HA's `hass` object, so all API calls use the
  logged-in user's session.

## MVP blocks

| Category | Block | HA output |
|---|---|---|
| Trigger | state | `platform: state` |
| Trigger | numeric | `platform: numeric_state` |
| Trigger | time | `platform: time` |
| Condition | state | `condition: state` |
| Condition | numeric | `condition: numeric_state` |
| Action | service | `service` + `target` + `data` |
| Action | delay | `delay: {seconds}` |
| Action | notify | `persistent_notification.create` |
| Action | choose | `choose` / `default` |
| Action | repeat | `repeat: {count, sequence}` |

## Limitations

- Importing existing automations is planned.
- Conditions are simple; `and`/`or`/`not` groups are planned.
- The editor creates new automations; it does not edit existing ones yet.
