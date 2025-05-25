# -*- encoding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'YourHome Theme',
    'description': 'YourHome website theme',
    'category': 'Theme',
    'sequence': -1,
    'version': '1.0',
    'depends': ['website'],
    'data': [
        'views/custom_header.xml',
        'views/footer.xml',
        'views/homepage.xml',
        'views/services_page.xml',
        'views/menus.xml',
        'views/snippets/property-agents.xml',
        'views/snippets/snippets.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_yourhome/static/src/scss/styles.scss',
            'theme_yourhome/static/src/scss/property-agents.scss',
        ],
        'web._assets_primary_variables': [
            'theme_yourhome/static/src/scss/primary_variables.scss',
        ],
        # 'web._assets_frontend_helpers': [
        #     ('prepend', 'theme_yourhome/static/src/scss/bootstrap_overridden.scss'),
        # ],

    },
    'images': [
    ],
    'license': 'LGPL-3',
}
