# -*- coding: utf-8 -*-
{
    'name': "starbucks_slider",
    'summary': "starbucks custom slider module for Odoo",
    'description': """
    This module is designed to create a custom slider for the Odoo website.
    """,
    'author': "Smarten",
    'website': "https://www.smarten.com.np",
    'category': 'Theme',
    'sequence': -2,
    'version': '18.0',
    'license': 'LGPL-3',
    'depends': ['website'],
    
    'data': [
        'views/starbucks.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'starbucks_slider/static/src/scss/starbucks.css',
            'starbucks_slider/static/src/js/starbucks.js',

        ],
    },

    "installable": True,
    "application": True,
}

