// API Configuration
const API_BASE_URL = 'http://127.0.0.1:8000';

const API_ENDPOINTS = {
    // Auth
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    ME: '/me',
    
    // Categories
    CATEGORIES: '/categories',
    CATEGORY_BY_ID: (id) => `/categories/${id}`,
    
    // Services
    SERVICES: '/services',
    SERVICE_BY_ID: (id) => `/services/${id}`,
    PROVIDER_SERVICES: '/provider/services',
    SEARCH_SERVICES: '/search/services',
    
    // Bookings
    BOOKINGS: '/bookings',
    BOOKING_BY_ID: (id) => `/bookings/${id}`,
    CANCEL_BOOKING: (id) => `/bookings/${id}/cancel`,
    CUSTOMER_BOOKINGS: '/customer/bookings',
    PROVIDER_BOOKINGS: '/provider/bookings',
    ACCEPT_BOOKING: (id) => `/provider/bookings/${id}/accept`,
    REJECT_BOOKING: (id) => `/provider/bookings/${id}/reject`,
    COMPLETE_BOOKING: (id) => `/provider/bookings/${id}/complete`,
    
    // Availability
    PROVIDER_AVAILABILITY: '/availability/provider',
    PROVIDER_TIMEOFF: '/availability/provider/timeoff',
    PROVIDER_SLOTS: (providerId) => `/availability/provider/${providerId}/slots`,
    
    // Reviews
    REVIEWS: '/reviews',
    PROVIDER_REVIEWS: (providerId) => `/reviews/provider/${providerId}`,
    SERVICE_REVIEWS: (serviceId) => `/reviews/service/${serviceId}`,
    
    // Dashboards
    ADMIN_SUMMARY: '/admin/summary',
    ADMIN_DASHBOARD: '/admin/dashboard/advanced',
    PROVIDER_DASHBOARD: '/provider/dashboard/summary',
    PROVIDER_EARNINGS: '/provider/dashboard/earnings',
    PROVIDER_BOOKING_STATS: '/provider/dashboard/bookings/stats',
    PROVIDER_REVIEWS_SUMMARY: '/provider/dashboard/reviews',
    CUSTOMER_DASHBOARD: '/customer/dashboard',
    
    // Admin
    ADMIN_USERS: '/admin/users',
    ADMIN_USER_BY_ID: (id) => `/admin/users/${id}`,
    ADMIN_USER_STATUS: (id) => `/admin/users/${id}/status`,
    ADMIN_APPROVE_PROVIDER: (id) => `/admin/providers/${id}/approve`
};

// User roles
const USER_ROLES = {
    CUSTOMER: 'customer',
    PROVIDER: 'provider',
    ADMIN: 'admin'
};

// Booking statuses
const BOOKING_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

// Storage keys
const STORAGE_KEYS = {
    TOKEN: 'servicehub_token',
    USER: 'servicehub_user'
};
