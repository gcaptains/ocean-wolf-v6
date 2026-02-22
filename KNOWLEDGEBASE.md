# Ocean Wolf: Digital Infrastructure Knowledgebase

## 1. Project Overview
**Project Name**: Ocean Wolf - Defense Prime Landing Page
**Objective**: A high-fidelity, cinematic React web application representing "Ocean Wolf," an elite, rapid-deployment engineering protocol focused on solving catastrophic Department of Defense challenges.
**Aesthetic Profile**: Tier 1 Defense Prime. Stealthy palette (Vantablack, Graphite, Titanium White), cinematic naval imagery, precise 1px structural lines, monospace typographical accents, and global ambient animations.

## 2. Technical Stack
- **Core Framework**: React 19 + Vite
- **Routing**: `react-router-dom` (Multi-Page Architecture)
- **Styling Engine**: Tailwind CSS
- **Animation**: CSS Keyframes + Global Mouse Tracking (React Refs)
- **SEO/Metadata Head Management**: `react-helmet-async`
- **Typography**: Google Fonts (Inter for prose, Space Mono for tactical data)

## 3. Information Architecture (Pages)

### `/` (Home)
The landing point, establishing the cinematic aesthetic and core value proposition.
- `CinematicHero.jsx`: Global mouse-tracking parallax background with tactical stats bar.
- `EngineeredCapabilities.jsx`: Side-by-side feature cards paired with a live, simulated React typing terminal (AI Fusion Engine).
- `Philosophy.jsx`: Stark contrast layout comparing the 18-month "Legacy Approach" to the 5-day "Ocean Wolf Protocol".
- `OriginStoryboard.jsx`: Vertical timeline mapping the crisis-response roots from Deepwater Horizon to the Department of War.
- `FirstMissionOverview.jsx`: Overview of the Trump-Class Battleship sprint.
- `GlobalCTA.jsx`: Real-time React countdown component driving down to April 19, 2026.

### `/about` (The Origin)
Details the underlying methodology and history.
- **The Wolf's Playbook**: A four-day breakdown of the original Deepwater Horizon crisis response sprint.
- **Manifesto**: The thesis that the DoD doesn't lack talent, but lacks a mechanism for rapid expert fusion.
- **Identifier Quote**: Connects the "Ocean Wolf" name to maritime origins and John Boyd.

### `/protocol` (The Cycle)
The operational mechanics of an Ocean Wolf sprint.
- **The Cycle**: Monday-Friday mapping from Problem Decomposition to Final Delivery.
- **The AI Engine**: Exhaustive breakdown of Pre-Sprint, During-Sprint, and Post-Sprint AI augmentation.
- **The Decision Package**: Tabular breakdown of the 80-120 page output.
- **Tempo Comparison**: Table contrasting traditional think tanks to Ocean Wolf's 5-day delivery.

### `/mission/trump-class` (First Mission)
A deep dive into the specific industrial constraints of building the next capital ship.
- **Specs**: Hardware displacement, weapons payload, and railgun integration.
- **The Industrial Challenge**: The grim reality of 8 active shipyards versus 30,000-ton hull requirements.
- **Expert Domains**: Who sits in the room during the sprint.

### `/participate` (Engagement)
The interactive portal for initiating contact.
- **Engagement Tracks**: Sponsor a Sprint, Nominate an Expert, General Briefing.
- **Secure Form**: Interactive Request Briefing form with Clearance Selectors and simulated 800ms API transmission sequence.

### Legal & Fallbacks
- `/privacy` & `/terms`: Minimalist, austere legal declarations reflecting defense-industry data requirements.
- `/404`: Custom "Asset Unreachable" page with pulse animations and glowing borders.

## 4. Core Design System (`index.css` & `tailwind.config.js`)
All components adhere to a strict tactical design system:
- **Colors**:
  - `obsidian`: Main background (`#0a0a0c`)
  - `graphite`: Card background (`#121215`)
  - `titanium`: Primary text (`#e0e0e0`)
  - `titanium-muted`: Secondary text (`#8a8a93`)
  - `tactical-red`: Primary accent and highlight (`#990000`)
- **Effects**:
  - `shadow-glow-red`: A custom drop shadow (`0 0 15px rgba(153, 0, 0, 0.4)`) used for active elements and hovers.
  - `border-titanium/10` and `border-tactical-red/30` provide 1px structural constraints across all grids.

## 5. Global Animations & Interactivity
- **Skeletal Fade-Ins**: All major text blocks and cards utilize native CSS transition delays to load progressively down the page.
- **Scanning Reticle**: The custom `CustomCursor.jsx` replaces the default browser mouse with a 1px crosshair. When hovering over actionable buttons (`a`, `button`, `input`, `.cursor-crosshair`), it rotates 45 degrees, shifts to `tactical-red`, and expands its corner brackets.
- **Parallax Hero**: The `CinematicHero` component listens for `e.clientX / e.clientY` and translates the background image on a `-1` to `1` coordinate plane to create depth.
- **Live Terminal Ingest**: `EngineeredCapabilities.jsx` maintains an internal `useEffect` interval that iterates over an array of classified log entries, managing standard array state to simulate real-time terminal ingest.

## 6. Deployment Protocol
To initiate the application locally on a clean network port (to avoid cache overlap with legacy builds):
```bash
npm install
npm run dev -- --host --port 5177
```
The production bundle can be generated securely via `npm run build`.
