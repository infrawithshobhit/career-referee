# Technology Stack

## Architecture
- **Type**: Static web application
- **Runtime**: Client-side only (no server required)
- **Deployment**: Static hosting compatible

## Tech Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Data**: JSON files for role definitions
- **Styling**: Modern CSS with CSS Grid and Flexbox
- **Browser Support**: Modern browsers with JavaScript enabled

## Key Libraries/Frameworks
- No external dependencies - pure vanilla JavaScript
- Uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- Responsive design with mobile-first approach

## Development Commands
Since this is a static web application, no build process is required:

```bash
# Development
# Simply open frontend/index.html in a web browser
# Or use a local server:
python -m http.server 8000  # Python 3
# or
npx serve .  # If you have Node.js

# Testing
# Open tests/test-setup.js for test utilities
# No test runner configured yet - tests run in browser console

# Deployment
# Copy all files to static hosting service
# No compilation or build step needed
```

## File Structure
- `frontend/` - All web application files
- `data/` - JSON data files (role definitions)
- `tests/` - Testing utilities and setup

## Browser Requirements
- JavaScript must be enabled
- Modern browser with ES6+ support
- No server-side processing required