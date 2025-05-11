from odoo import models, fields

class Book(models.Model):
    _name = 'library.book'
    _description = 'Book'

    name = fields.Char("Title")
    author = fields.Char("Author")
    price = fields.Float("Price")
