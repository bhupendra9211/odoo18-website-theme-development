# -*- coding: utf-8 -*-
{
    'name' : 'QWEB Tutorial',
    'version' : '18.0',
    'summary': 'QWEB Tutorial',
    'sequence': -1,
    'description': """QWEB Tutorial""",
    'category': 'Website',
    'depends' : ['web', 'website'],
    'data': [
        'views/for_python_templates.xml',
        'views/book_template.xml',
        'data/book_data.xml',
        'views/homepage_with_books.xml',
        'views/bhupendra.xml'
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_frontend': [
            'qweb_tutorial/static/src/*',
        ],
    },
}