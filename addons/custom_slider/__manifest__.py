# -*- coding: utf-8 -*-
{
    'name': "custom_slider",
    'summary': "custom slider module for Odoo",
    'description': """
    This module is designed to create a custom slider for the Odoo website.
    """,
    'author': "Smarten",
    'website': "https://www.smarten.com.np",
    'category': 'eCommerce',
    'sequence': -1,
    'version': '18.0',
    'license': 'LGPL-3',
    'depends': ['website'],
    
    'data': [
        # 'views/custom_slider_template.xml',
        'views/snippets/custom_slider.xml',
        'views/snippets/custom_slider_stories_snippet.xml',
        'views/snippets/starbucks_slider.xml',
        'views/snippets/bootstrap_slider.xml',
        'views/snippets/image_slider.xml',
        'views/snippets/snippets.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            # 'custom_slider/static/src/scss/custom_slider_template.css',
            'custom_slider/static/src/js/custom_slider_template.js',
            'custom_slider/static/src/js/custom_slider_stories.js',
            'custom_slider/static/src/js/starbucks.js',
            'custom_slider/static/src/js/image_slider.js',
            # 'custom_slider/static/src/js/custom_slider.js',

            # 'custom_slider/static/src/scss/sync.min.css',
            # 'custom_slider/static/src/scss/async.min.css',
            # 'custom_slider/static/src/scss/index.min.css',
            'custom_slider/static/src/scss/custom_slider.css',
            'custom_slider/static/src/scss/custom_slider_stories.css',
            'custom_slider/static/src/scss/image_slider.scss',
            'custom_slider/static/src/scss/starbucks.scss',
            'custom_slider/static/src/scss/bootstrap_slider.scss',
            # 'custom_slider/static/src/scss/custom_slider.scss',


            # 'custom_slider/static/src/js/gsap.min.js',
            # 'custom_slider/static/src/js/swiper.bundle.js',
            # 'custom_slider/static/src/js/wow.min.js',

        ],
    },
    'images': [
    ],

    "installable": True,
    "application": True,
}

