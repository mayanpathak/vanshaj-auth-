/**
 * API Testing Guide for Postman
 * Backend Authentication System
 * 
 * Base URL: http://localhost:5001
 * 
 * This file contains all the endpoints, sample data, and testing instructions
 * for the authentication API. Use this as a reference for Postman testing.
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const BASE_URL = "http://localhost:5001";
const API_VERSION = "/api";

// ============================================================================
// SAMPLE TEST DATA
// ============================================================================

const SAMPLE_USERS = {
  validUser: {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
  },
  validUser2: {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "securepassword123"
  },
  invalidEmail: {
    name: "Test User",
    email: "invalid-email",
    password: "password123"
  },
  weakPassword: {
    name: "Test User",
    email: "test@example.com",
    password: "123"
  },
  missingFields: {
    name: "Test User",
    email: "test@example.com"
  }
};

// ============================================================================
// API ENDPOINTS
// ============================================================================

const ENDPOINTS = {
  // Test Route
  test: {
    method: "GET",
    url: `${BASE_URL}${API_VERSION}/test`,
    description: "Test if API is running",
    headers: {},
    body: null,
    expectedResponse: {
      message: "API is working"
    }
  },

  // Authentication Routes
  signup: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/signup`,
    description: "Register a new user",
    headers: {
      "Content-Type": "application/json"
    },
    body: SAMPLE_USERS.validUser,
    expectedResponse: {
      success: true,
      message: "User created successfully. Verification email sent.",
      token: "jwt_token_here",
      user: {
        _id: "user_id",
        name: "John Doe",
        email: "john.doe@example.com",
        isVerified: false,
        lastLogin: "2024-01-01T00:00:00.000Z",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      }
    }
  },

  verifyEmail: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/verify-email`,
    description: "Verify user email with verification code",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      code: "123456"
    },
    expectedResponse: {
      success: true,
      message: "Email verified successfully",
      user: {
        _id: "user_id",
        name: "John Doe",
        email: "john.doe@example.com",
        isVerified: true,
        lastLogin: "2024-01-01T00:00:00.000Z",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      }
    }
  },

  login: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/login`,
    description: "Login with email and password",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email: "john.doe@example.com",
      password: "password123"
    },
    expectedResponse: {
      success: true,
      message: "Logged in successfully",
      token: "jwt_token_here",
      user: {
        _id: "user_id",
        name: "John Doe",
        email: "john.doe@example.com",
        isVerified: true,
        lastLogin: "2024-01-01T00:00:00.000Z",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      }
    }
  },

  checkAuth: {
    method: "GET",
    url: `${BASE_URL}${API_VERSION}/auth/check-auth`,
    description: "Check if user is authenticated (requires JWT token)",
    headers: {
      "Authorization": "Bearer YOUR_JWT_TOKEN"
    },
    body: null,
    expectedResponse: {
      success: true,
      user: {
        _id: "user_id",
        name: "John Doe",
        email: "john.doe@example.com",
        isVerified: true,
        lastLogin: "2024-01-01T00:00:00.000Z",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      }
    }
  },

  logout: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/logout`,
    description: "Logout user (clears JWT cookie)",
    headers: {
      "Content-Type": "application/json"
    },
    body: null,
    expectedResponse: {
      success: true,
      message: "Logged out successfully"
    }
  },

  forgotPassword: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/forgot-password`,
    description: "Request password reset email",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      email: "john.doe@example.com"
    },
    expectedResponse: {
      success: true,
      message: "If an account exists, a password reset link has been sent"
    }
  },

  resetPassword: {
    method: "POST",
    url: `${BASE_URL}${API_VERSION}/auth/reset-password/:resetToken`,
    description: "Reset password using reset token",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      password: "newpassword123"
    },
    expectedResponse: {
      success: true,
      message: "Password reset successful"
    }
  }
};

// ============================================================================
// ERROR RESPONSES
// ============================================================================

const ERROR_RESPONSES = {
  // 400 Bad Request
  badRequest: {
    success: false,
    message: "All fields are required"
  },

  invalidEmail: {
    success: false,
    message: "Invalid email format"
  },

  weakPassword: {
    success: false,
    message: "Password must be at least 8 characters"
  },

  invalidVerificationCode: {
    success: false,
    message: "Invalid or expired verification code"
  },

  invalidResetToken: {
    success: false,
    message: "Invalid or expired reset token"
  },

  samePassword: {
    success: false,
    message: "New password must be different from current password"
  },

  // 401 Unauthorized
  invalidCredentials: {
    success: false,
    message: "Invalid credentials"
  },

  // 403 Forbidden
  emailNotVerified: {
    success: false,
    message: "Please verify your email first"
  },

  // 404 Not Found
  userNotFound: {
    success: false,
    message: "User not found"
  },

  routeNotFound: {
    success: false,
    error: "Route not found"
  },

  // 409 Conflict
  userExists: {
    success: false,
    message: "User already exists"
  },

  // 500 Internal Server Error
  serverError: {
    success: false,
    message: "Internal server error"
  }
};

// ============================================================================
// TESTING SCENARIOS
// ============================================================================

const TEST_SCENARIOS = {
  // Happy Path Testing
  happyPath: [
    {
      step: 1,
      description: "Test API is running",
      endpoint: "test",
      expectedStatus: 200
    },
    {
      step: 2,
      description: "Register new user",
      endpoint: "signup",
      data: SAMPLE_USERS.validUser,
      expectedStatus: 201
    },
    {
      step: 3,
      description: "Verify email with code",
      endpoint: "verifyEmail",
      data: { code: "123456" },
      expectedStatus: 200
    },
    {
      step: 4,
      description: "Login with credentials",
      endpoint: "login",
      data: {
        email: SAMPLE_USERS.validUser.email,
        password: SAMPLE_USERS.validUser.password
      },
      expectedStatus: 200
    },
    {
      step: 5,
      description: "Check authentication status",
      endpoint: "checkAuth",
      requiresToken: true,
      expectedStatus: 200
    },
    {
      step: 6,
      description: "Logout user",
      endpoint: "logout",
      expectedStatus: 200
    }
  ],

  // Error Path Testing
  errorScenarios: [
    {
      description: "Register with invalid email",
      endpoint: "signup",
      data: SAMPLE_USERS.invalidEmail,
      expectedStatus: 400,
      expectedError: "Invalid email format"
    },
    {
      description: "Register with weak password",
      endpoint: "signup",
      data: SAMPLE_USERS.weakPassword,
      expectedStatus: 400,
      expectedError: "Password must be at least 8 characters"
    },
    {
      description: "Register with missing fields",
      endpoint: "signup",
      data: SAMPLE_USERS.missingFields,
      expectedStatus: 400,
      expectedError: "All fields are required"
    },
    {
      description: "Login with unverified email",
      endpoint: "login",
      data: {
        email: "unverified@example.com",
        password: "password123"
      },
      expectedStatus: 403,
      expectedError: "Please verify your email first"
    },
    {
      description: "Login with wrong credentials",
      endpoint: "login",
      data: {
        email: "wrong@example.com",
        password: "wrongpassword"
      },
      expectedStatus: 401,
      expectedError: "Invalid credentials"
    },
    {
      description: "Access protected route without token",
      endpoint: "checkAuth",
      expectedStatus: 401,
      expectedError: "Unauthorized"
    }
  ],

  // Password Reset Flow
  passwordResetFlow: [
    {
      step: 1,
      description: "Request password reset",
      endpoint: "forgotPassword",
      data: { email: "john.doe@example.com" },
      expectedStatus: 200
    },
    {
      step: 2,
      description: "Reset password with token",
      endpoint: "resetPassword",
      urlParams: { resetToken: "sample_reset_token" },
      data: { password: "newpassword123" },
      expectedStatus: 200
    }
  ]
};

// ============================================================================
// POSTMAN COLLECTION FORMAT
// ============================================================================

const POSTMAN_COLLECTION = {
  info: {
    name: "Authentication API Tests",
    description: "Complete test suite for authentication endpoints",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  variable: [
    {
      key: "baseUrl",
      value: BASE_URL,
      type: "string"
    },
    {
      key: "jwtToken",
      value: "",
      type: "string"
    }
  ],
  item: [
    {
      name: "Test API",
      request: {
        method: "GET",
        header: [],
        url: {
          raw: "{{baseUrl}}/api/test",
          host: ["{{baseUrl}}"],
          path: ["api", "test"]
        }
      }
    },
    {
      name: "Authentication",
      item: [
        {
          name: "Signup",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify(SAMPLE_USERS.validUser, null, 2)
            },
            url: {
              raw: "{{baseUrl}}/api/auth/signup",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "signup"]
            }
          }
        },
        {
          name: "Verify Email",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify({ code: "123456" }, null, 2)
            },
            url: {
              raw: "{{baseUrl}}/api/auth/verify-email",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "verify-email"]
            }
          }
        },
        {
          name: "Login",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify({
                email: "john.doe@example.com",
                password: "password123"
              }, null, 2)
            },
            url: {
              raw: "{{baseUrl}}/api/auth/login",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "login"]
            }
          }
        },
        {
          name: "Check Auth",
          request: {
            method: "GET",
            header: [
              {
                key: "Authorization",
                value: "Bearer {{jwtToken}}"
              }
            ],
            url: {
              raw: "{{baseUrl}}/api/auth/check-auth",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "check-auth"]
            }
          }
        },
        {
          name: "Logout",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            url: {
              raw: "{{baseUrl}}/api/auth/logout",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "logout"]
            }
          }
        },
        {
          name: "Forgot Password",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify({ email: "john.doe@example.com" }, null, 2)
            },
            url: {
              raw: "{{baseUrl}}/api/auth/forgot-password",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "forgot-password"]
            }
          }
        },
        {
          name: "Reset Password",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json"
              }
            ],
            body: {
              mode: "raw",
              raw: JSON.stringify({ password: "newpassword123" }, null, 2)
            },
            url: {
              raw: "{{baseUrl}}/api/auth/reset-password/:resetToken",
              host: ["{{baseUrl}}"],
              path: ["api", "auth", "reset-password", ":resetToken"],
              variable: [
                {
                  key: "resetToken",
                  value: "sample_reset_token"
                }
              ]
            }
          }
        }
      ]
    }
  ]
};

// ============================================================================
// TESTING INSTRUCTIONS
// ============================================================================

const TESTING_INSTRUCTIONS = `
TESTING INSTRUCTIONS FOR POSTMAN:

1. SETUP:
   - Import the Postman collection above
   - Set the baseUrl variable to: ${BASE_URL}
   - Ensure your backend server is running on port 5001

2. TESTING ORDER:
   a) Start with "Test API" to verify server is running
   b) Use "Signup" to create a new user
   c) Check console logs for verification code
   d) Use "Verify Email" with the code from console
   e) Use "Login" with the registered credentials
   f) Copy the JWT token from response and set it as jwtToken variable
   g) Test "Check Auth" to verify authentication
   h) Test "Logout" to clear authentication
   i) Test "Forgot Password" and "Reset Password" flows

3. ERROR TESTING:
   - Test with invalid email formats
   - Test with weak passwords (< 8 characters)
   - Test with missing required fields
   - Test login with unverified email
   - Test protected routes without JWT token
   - Test with non-existent users

4. IMPORTANT NOTES:
   - JWT tokens are stored in HTTP-only cookies
   - Email verification is required before login
   - Password reset tokens expire in 1 hour
   - Email verification tokens expire in 24 hours
   - All passwords must be at least 8 characters
   - Email format is validated using regex

5. EXPECTED STATUS CODES:
   - 200: Success
   - 201: Created (signup)
   - 400: Bad Request (validation errors)
   - 401: Unauthorized (invalid credentials)
   - 403: Forbidden (email not verified)
   - 404: Not Found
   - 409: Conflict (user already exists)
   - 500: Internal Server Error
`;

// ============================================================================
// EXPORT FOR USE
// ============================================================================

module.exports = {
  BASE_URL,
  SAMPLE_USERS,
  ENDPOINTS,
  ERROR_RESPONSES,
  TEST_SCENARIOS,
  POSTMAN_COLLECTION,
  TESTING_INSTRUCTIONS
};

// ============================================================================
// CONSOLE OUTPUT FOR REFERENCE
// ============================================================================

console.log("=== AUTHENTICATION API TESTING GUIDE ===");
console.log(`Base URL: ${BASE_URL}`);
console.log("\n=== AVAILABLE ENDPOINTS ===");
Object.keys(ENDPOINTS).forEach(key => {
  const endpoint = ENDPOINTS[key];
  console.log(`${endpoint.method} ${endpoint.url} - ${endpoint.description}`);
});

console.log("\n=== SAMPLE TEST DATA ===");
console.log(JSON.stringify(SAMPLE_USERS, null, 2));

console.log("\n=== TESTING INSTRUCTIONS ===");
console.log(TESTING_INSTRUCTIONS);

console.log("\n=== POSTMAN COLLECTION ===");
console.log("Copy the POSTMAN_COLLECTION object above and import it into Postman");

console.log("\n=== ERROR RESPONSES ===");
Object.keys(ERROR_RESPONSES).forEach(key => {
  console.log(`${key}:`, JSON.stringify(ERROR_RESPONSES[key], null, 2));
});
