export const newBrewerValidationSchema = {
    name: {
        optional: false,
        notEmpty: {
            errorMessage: "Brewer name is required",
        },
        isString: {
            errorMessage: "Brewer name must be a string",
        },
        isLength: {
            options: {
                min: 2,
                max: 255,
            },
            errorMessage: "Brewer name must between 2 and 255 characters",
        },
    },
    description: {
        optional: false,
        notEmpty: {
            errorMessage: "Description is required",
        },
        isString: {
            errorMessage: "Description must be a string",
        },
    },
    website: {
        optional: true,
        isString: {
            errorMessage: "Brewer website URL must be a string",
        },
    },
};

export const newEventsValidationSchema = {
    name: {
        optional: false,
        notEmpty: {
            errorMessage: "Event name is required",
        },
        isString: {
            errorMessage: "Event name must be a string",
        },
        isLength: {
            options: {
                min: 2,
                max: 255,
            },
            errorMessage: "Event name must between 2 and 255 characters",
        },
    },
    brewer_id: {
        optional: false,
        notEmpty: {
            errorMessage: "Brewer ID is required",
        },
        isNumeric: {
            errorMessage: "Brewer ID must be an integer",
        },
    },
    date: {
        optional: false,
        notEmpty: {
            errorMessage: "Date is required",
        },
        isString: {
            errorMessage:
                "Date must be a string in the format YYYY-MM-DDTHH-MM-SSZ",
        },
    },
    description: {
        optional: false,
        notEmpty: {
            errorMessage: "Event description is required",
        },
        isString: {
            errorMessage: "Description must be a string",
        },
    },
    location: {
        optional: false,
        notEmpty: {
            errorMessage: "Event location is required",
        },
        isString: {
            errorMessage: "Location address must be a string",
        },
    },
    latitude: {
        optional: true,
        isNumeric: {
            errorMessage: "Latitude coordinates must be numeric",
        },
    },
    longitude: {
        optional: true,
        isNumeric: {
            errorMessage: "Longitude coordinates must be numeric",
        },
    },
    promotions: {
        optional: true,
        isString: {
            errorMessage: "Promotions must be a string",
        },
    },
};

export const newFavValidationSchema = {
    user_id: {
        optional: false,
        notEmpty: {
            errorMessage: "User ID is required",
        },
        isNumeric: {
            errorMessage: "User ID must be an integer",
        },
    },
    event_id: {
        optional: false,
        notEmpty: {
            errorMessage: "Event ID is required",
        },
        isNumeric: {
            errorMessage: "Event ID must be an integer",
        },
    },
};
