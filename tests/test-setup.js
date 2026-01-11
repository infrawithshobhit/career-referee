// Test setup and utilities for Career Referee
// This file will be expanded as we add testing frameworks

// Basic test utilities
const TestUtils = {
    // Generate random user profile for testing
    generateRandomUserProfile() {
        return {
            coding: Math.floor(Math.random() * 5) + 1,
            ops: Math.floor(Math.random() * 5) + 1,
            stress: Math.floor(Math.random() * 5) + 1,
            salary: Math.floor(Math.random() * 5) + 1,
            worklife: Math.floor(Math.random() * 5) + 1
        };
    },

    // Generate edge case profiles
    generateEdgeCaseProfiles() {
        return [
            { coding: 1, ops: 1, stress: 1, salary: 1, worklife: 1 }, // All minimum
            { coding: 5, ops: 5, stress: 5, salary: 5, worklife: 5 }, // All maximum
            { coding: 1, ops: 5, stress: 1, salary: 5, worklife: 1 }, // Mixed extremes
            { coding: 5, ops: 1, stress: 5, salary: 1, worklife: 5 }  // Mixed extremes
        ];
    },

    // Validate profile structure
    isValidProfile(profile) {
        const requiredFields = ['coding', 'ops', 'stress', 'salary', 'worklife'];
        return requiredFields.every(field => 
            profile.hasOwnProperty(field) && 
            Number.isInteger(profile[field]) && 
            profile[field] >= 1 && 
            profile[field] <= 5
        );
    }
};

// Export for use in tests (when using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestUtils;
}