const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required().messages({
            'string.empty': 'Title is required.'
        }),
        image: Joi.object({
            url: Joi.string().uri().required().messages({
                'string.uri': 'Image must be a valid URL.'
            }),
            filename: Joi.string().required().messages({
                'string.empty': 'Filename is required.'
            })
        }).required(),
        category: Joi.string()
            .valid("Study", "Family", "Love", "Pets", "Internet", "Gaming", "Food", "Life", "Movies", "School", "Tech")
            .required()
            .messages({
                'any.only': 'Category must be one of the predefined values.',
                'string.empty': 'Category is required.'
            }),
        votes: Joi.array().items(
            Joi.object({
                user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),  // Valid MongoDB ObjectId
                type: Joi.string().valid("upvote", "downvote").required()
            })
        ).optional()
    }).required()
});
