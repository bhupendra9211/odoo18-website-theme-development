# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request

# from odoo.tools import html_escape, html_sanitize
# from markupsafe import Markup


class QwebTutorials(http.Controller):
    @http.route('/qweb-tutorials', type='http', auth='public', website=True)
    def qweb_tutorials(self):
        return http.request.render("qweb_tutorial.somePythonTemplate")
    
    @http.route('/bhupendra', type='http', auth='public', website=True)
    def bhupendra(self):
        return http.request.render("qweb_tutorial.bhupendra")
    
    @http.route('/books', type='http', auth='public', website=True)
    def list_books(self):
        books = http.request.env['library.book'].sudo().search([])
        return http.request.render("qweb_tutorial.book_list_template", {
            'books': books
        })
    
    @http.route('/home-with-books', type='http', auth='public', website=True)
    def home_with_books(self):
        books = request.env['library.book'].sudo().search([])
        return request.render('qweb_tutorial.homepage_with_books', {
            'books': books
        })


