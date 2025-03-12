# -*- coding: utf-8 -*-
{
    'name' : 'OWL Tutorial',
    'version' : '17.1.0',
    'summary': 'OWL Tutorial',
    'sequence': -1,
    'description': """OWL Tutorial""",
    'category': 'OWL',
    'depends' : ['base', 'web', 'point_of_sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/todo_list_views.xml',
        'views/odoo_services.xml',
        'views/res_partner_views.xml'
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'todo_list_owl/static/src/components/todo_list/todo_list.js',
            'todo_list_owl/static/src/components/todo_list/todo_list.xml',
            'todo_list_owl/static/src/components/todo_list/todo_list.scss',
            'todo_list_owl/static/src/components/view_inheritance/res_partner_views.xml',
            'todo_list_owl/static/src/components/view_inheritance/res_partner_list_view.js',
            'todo_list_owl/static/src/components/view_inheritance/res_partner_kanban_view.js',
            'todo_list_owl/static/src/components/view_inheritance/res_partner_kanban_views.xml',
            'todo_list_owl/static/src/components/*/*.scss',
            'todo_list_owl/static/src/components/*/*.js',
            'todo_list_owl/static/src/components/*/*.xml',
        ],
        'point_of_sale._assets_pos': [
            'todo_list_owl/static/src/pos/**/*.js',
            'todo_list_owl/static/src/pos/**/*.xml',
            'todo_list_owl/static/src/pos/**/*.scss',
            'todo_list_owl/static/src/pos/navbar.xml',
            'todo_list_owl/static/src/pos/pos.scss',
        ]
    },
}