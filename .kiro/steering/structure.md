# Project Structure

## Directory Organization

```
career-referee/
├── .kiro/              # Kiro configuration and steering files
├── .vscode/            # VS Code workspace settings
├── data/               # Data files and role definitions
│   └── roles.json      # Engineering role profiles with scoring
├── frontend/           # Web application files
│   ├── index.html      # Main application page
│   ├── styles.css      # CSS styling and responsive design
│   └── app.js          # Application logic (to be created)
├── tests/              # Testing utilities and test files
│   └── test-setup.js   # Test utilities and helper functions
└── README.md           # Project documentation
```

## File Conventions

### Data Files (`data/`)
- **roles.json**: Contains role definitions with 5-dimension scoring
- Each role includes: name, scores (1-5), description, risks, growthAreas
- JSON structure must maintain consistent field names

### Frontend Files (`frontend/`)
- **index.html**: Single-page application entry point
- **styles.css**: All styling, uses CSS Grid/Flexbox, mobile-first
- **app.js**: Main application logic (when created)
- No build process - files served directly

### Testing (`tests/`)
- **test-setup.js**: Utility functions for testing
- Includes profile generators and validation helpers
- No test framework configured yet - manual testing in browser

## Code Organization Principles

1. **Separation of Concerns**: Data, presentation, and logic in separate files
2. **Static Architecture**: No server dependencies, pure client-side
3. **Responsive Design**: Mobile-first CSS approach
4. **Accessibility**: Semantic HTML, proper form labels
5. **Progressive Enhancement**: Works without JavaScript (basic functionality)

## Naming Conventions
- Files: kebab-case for multi-word files
- CSS classes: kebab-case
- JavaScript: camelCase for variables/functions
- JSON keys: camelCase for consistency

## Key Architectural Decisions
- Vanilla JavaScript (no frameworks) for simplicity
- Single HTML file for entire application
- JSON data files for easy role profile updates
- CSS Grid for responsive layouts
- Client-side only for easy deployment