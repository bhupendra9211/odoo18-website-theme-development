# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request

# from odoo.tools import html_escape, html_sanitize
# from markupsafe import Markup


class QwebTutorials(http.Controller):
    @http.route('/qweb-tutorials', type='http', auth='public', website=True)
    def qweb_tutorials(self):
        return http.request.render("qweb_tutorial.somePythonTemplate")
    
    @http.route('/books', type='http', auth='public', website=True)
    def list_books(self):
        books = http.request.env['library.book'].sudo().search([])
        return http.request.render("qweb_tutorial.book_list_template", {
            'books': books
        })

