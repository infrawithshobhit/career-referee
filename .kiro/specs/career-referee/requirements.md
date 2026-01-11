# Requirements Document

## Introduction

The Career Referee for Engineers is a web-based decision engine that provides objective, data-driven career guidance for engineering professionals. Unlike subjective career advice, this tool uses quantitative scoring across five key dimensions to match users with the most suitable engineering roles, providing transparent reasoning and trade-off analysis.

## Glossary

- **Career_Referee**: The web application system that evaluates engineering role fit
- **Role_Profile**: A quantitative representation of an engineering role across five dimensions
- **User_Profile**: A user's self-assessed scores across the five evaluation dimensions
- **Distance_Calculator**: The algorithm that computes similarity between user and role profiles
- **Scorecard**: A comprehensive report showing role matches, trade-offs, and recommendations

## Requirements

### Requirement 1: User Assessment Collection

**User Story:** As an engineer, I want to answer 5 targeted questions about my skills and preferences, so that I can get personalized role recommendations.

#### Acceptance Criteria

1. WHEN a user visits the assessment page, THE Career_Referee SHALL display exactly 5 questions with clear rating scales
2. WHEN a user provides ratings, THE Career_Referee SHALL validate that all scores are between 1 and 5 inclusive
3. WHEN a user submits incomplete responses, THE Career_Referee SHALL prevent submission and highlight missing fields
4. WHEN all questions are answered, THE Career_Referee SHALL enable the evaluation submission
5. THE Career_Referee SHALL collect scores for: coding skill, ops experience, stress tolerance, salary ambition, and work-life preference

### Requirement 2: Role Profile Management

**User Story:** As a system administrator, I want to maintain accurate role profiles, so that the recommendations remain current and reliable.

#### Acceptance Criteria

1. THE Career_Referee SHALL store role profiles for SRE, DevOps, Platform Engineer, and Cloud Engineer roles
2. WHEN role data is accessed, THE Career_Referee SHALL return profiles with scores for all five dimensions
3. WHEN role profiles are updated, THE Career_Referee SHALL validate that all dimension scores are between 1 and 5
4. THE Career_Referee SHALL persist role profile changes immediately
5. WHEN invalid role data is provided, THE Career_Referee SHALL reject the update and return descriptive errors

### Requirement 3: Distance Calculation Engine

**User Story:** As the system, I want to calculate objective similarity scores between users and roles, so that recommendations are mathematically sound.

#### Acceptance Criteria

1. WHEN user and role profiles are provided, THE Distance_Calculator SHALL compute Euclidean distance across all five dimensions
2. WHEN multiple roles are evaluated, THE Distance_Calculator SHALL rank them by ascending distance (closest first)
3. THE Distance_Calculator SHALL handle edge cases where user scores exactly match role profiles
4. WHEN distance calculations are performed, THE Distance_Calculator SHALL return results within 100 milliseconds
5. THE Distance_Calculator SHALL produce deterministic results for identical inputs

### Requirement 4: Comprehensive Scorecard Generation

**User Story:** As an engineer, I want to see detailed analysis of how I match each role, so that I can make informed career decisions.

#### Acceptance Criteria

1. WHEN evaluation is complete, THE Career_Referee SHALL display the best-fit role prominently
2. WHEN showing role matches, THE Career_Referee SHALL display match percentages for all evaluated roles
3. WHEN presenting trade-offs, THE Career_Referee SHALL explain what the user gains and loses for each role choice
4. WHEN showing growth paths, THE Career_Referee SHALL recommend specific skills to develop for better role fit
5. WHEN displaying risk profiles, THE Career_Referee SHALL highlight burnout, layoff, and stagnation risks per role

### Requirement 5: Transparent Decision Reasoning

**User Story:** As an engineer, I want to understand why specific roles were recommended, so that I can trust and act on the guidance.

#### Acceptance Criteria

1. WHEN displaying recommendations, THE Career_Referee SHALL show the mathematical distance scores
2. WHEN explaining role fit, THE Career_Referee SHALL identify which dimensions align well and which conflict
3. WHEN presenting alternatives, THE Career_Referee SHALL quantify trade-offs between salary, stress, and work-life balance
4. THE Career_Referee SHALL provide specific examples of how dimension mismatches affect role suitability
5. WHEN users request details, THE Career_Referee SHALL show the complete scoring breakdown

### Requirement 6: Web Interface Delivery

**User Story:** As an engineer, I want to access the tool through a web browser, so that I can use it without installing software.

#### Acceptance Criteria

1. WHEN users access the application URL, THE Career_Referee SHALL load within 3 seconds
2. WHEN displaying on different screen sizes, THE Career_Referee SHALL maintain usability and readability
3. WHEN users interact with form elements, THE Career_Referee SHALL provide immediate visual feedback
4. THE Career_Referee SHALL work correctly in Chrome, Firefox, Safari, and Edge browsers
5. WHEN JavaScript is disabled, THE Career_Referee SHALL display a message explaining requirements

### Requirement 7: Data Persistence and Retrieval

**User Story:** As the system, I want to efficiently store and retrieve role profiles, so that evaluations are fast and reliable.

#### Acceptance Criteria

1. WHEN the application starts, THE Career_Referee SHALL load role profiles from persistent storage
2. WHEN role data is requested, THE Career_Referee SHALL return it within 50 milliseconds
3. THE Career_Referee SHALL handle storage failures gracefully and provide fallback data
4. WHEN role profiles are modified, THE Career_Referee SHALL validate data integrity before saving
5. THE Career_Referee SHALL support JSON format for role profile storage and retrieval

### Requirement 8: Input Validation and Error Handling

**User Story:** As a user, I want clear feedback when I provide invalid input, so that I can correct mistakes and complete my assessment.

#### Acceptance Criteria

1. WHEN invalid scores are entered, THE Career_Referee SHALL display specific error messages
2. WHEN network errors occur, THE Career_Referee SHALL retry operations and inform users of status
3. WHEN calculation errors happen, THE Career_Referee SHALL log details and show user-friendly messages
4. THE Career_Referee SHALL prevent submission of assessments with missing or invalid data
5. WHEN errors are resolved, THE Career_Referee SHALL automatically clear error messages and enable progression