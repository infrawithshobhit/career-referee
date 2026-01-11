# Career Referee for Engineers

> "Not everyone should be an SRE — and this tool tells you why."

**Kiro Week 6 Challenge: The Referee**

A data-driven career decision tool that provides objective guidance for engineering professionals through quantitative role matching. Built as part of the AI for Bharat Kiro Week 6 Challenge to create a tool that compares options and explains trade-offs.

## What It Does

The Career Referee evaluates your fit for different engineering roles using mathematical analysis across 5 key dimensions:

- **Coding Skill** - Technical implementation ability
- **Ops Experience** - Infrastructure and operations knowledge  
- **Stress Tolerance** - Ability to handle high-pressure situations
- **Salary Ambition** - Compensation goals and expectations
- **Work-Life Balance** - Priority between career intensity and personal time

## How It Works

1. **Assessment** - Answer 5 questions rating yourself 1-5 on each dimension
2. **Analysis** - Algorithm calculates your distance from each role profile using Euclidean distance
3. **Results** - Get your best fit role plus detailed analysis of:
   - Match percentages for all roles
   - Trade-offs (what you gain/lose with each choice)
   - Growth paths (skills to develop)
   - Risk profiles (burnout, layoffs, stagnation)

## Engineering Roles Evaluated

- **SRE** - High stress, high pay, low work-life balance
- **DevOps** - Moderate across all dimensions  
- **Platform Engineer** - High coding, high pay, better balance
- **Cloud Engineer** - Lower stress, moderate pay, best balance

## Project Structure

```
career-referee/
├── frontend/           # Web application files
│   ├── index.html     # Main application page
│   ├── styles.css     # Styling and responsive design
│   └── app.js         # Application logic (to be created)
├── data/              # Role definitions and data
│   └── roles.json     # Engineering role profiles
├── tests/             # Test files and utilities
│   └── test-setup.js  # Testing utilities
└── README.md          # This file
```

## Getting Started

1. Open `frontend/index.html` in a web browser
2. Complete the 5-question assessment
3. Review your personalized career recommendations

## Development

This is a static web application that runs entirely in the browser. No server setup required.

To extend or modify:
1. Edit role profiles in `data/roles.json`
2. Modify UI in `frontend/index.html` and `frontend/styles.css`
3. Update logic in `frontend/app.js` (when created)

## Deployment

Can be deployed to any static hosting service:
- AWS S3 + CloudFront
- Netlify
- Vercel
- GitHub Pages

The application is designed for global deployment with CDN distribution for fast loading worldwide.

## Challenge Requirements Met

### ✅ Compares Options
- Evaluates 4 engineering roles: SRE, DevOps Engineer, Platform Engineer, Cloud Engineer
- Uses mathematical analysis (Euclidean distance) across 5 dimensions
- Provides quantitative match percentages for objective comparison

### ✅ Explains Trade-offs
- **Gains/Losses Analysis**: Shows what you gain or sacrifice with each role choice
- **Risk Assessment**: Highlights potential risks (burnout, layoffs, stagnation)
- **Growth Paths**: Recommends skills to develop for each role
- **Detailed Breakdowns**: Explains why each role fits or doesn't fit your profile

### ✅ Helps Users Choose
- Ranks roles by best fit percentage
- Provides actionable insights for career decisions
- Shows your current profile vs. role requirements
- Offers clear next steps for career development

## Kiro Development Acceleration

This project was built using Kiro AI assistant, which accelerated development through:

1. **Automated Code Generation**: Generated complete JavaScript application logic
2. **Steering Rules**: Created project-specific guidelines for consistent development
3. **Architecture Decisions**: Recommended vanilla JavaScript for simplicity and deployment
4. **Testing Setup**: Created test utilities and validation functions
5. **Deployment Preparation**: Generated deployment guides and project structure

### Key Kiro Contributions:
- **Frontend Logic**: Complete `app.js` with Euclidean distance algorithm
- **Responsive Design**: Mobile-first CSS with modern features
- **Data Structure**: JSON-based role definitions for easy updates
- **Error Handling**: Robust error handling and user feedback
- **Testing Framework**: Basic test utilities and validation

## Live Demo

[Add your deployed URL here after deployment]

## Technical Implementation

- **Algorithm**: Euclidean distance calculation for role matching
- **Architecture**: Static web application (client-side only)
- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Data**: JSON-based role profiles with 5-dimension scoring
- **Deployment**: Compatible with any static hosting service

## Repository Structure

```
career-referee/
├── .kiro/              # Kiro configuration and steering files (INCLUDED)
├── data/               # Role definitions and scoring data
├── frontend/           # Complete web application
├── tests/              # Testing utilities and validation
├── DEPLOYMENT.md       # Deployment guide
└── README.md           # This file
```

## Submission Links

- **GitHub Repository**: https://github.com/infrawithshobhit/career-referee
- **AWS Builder Center Blog**: [Add your blog post URL after publishing]
- **Live Demo**: [Add your deployed app URL after deployment]

---

*Built with Kiro AI Assistant for AI for Bharat Week 6 Challenge*