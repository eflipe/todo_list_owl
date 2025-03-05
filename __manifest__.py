# -*- coding: utf-8 -*-
{
    'name' : 'OWL Tutorial',
    'version' : '17.1.0',
    'summary': 'OWL Tutorial',
    'sequence': -1,
    'description': """OWL Tutorial""",
    'category': 'OWL',
    'depends' : ['base', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/todo_list_views.xml',
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
        ],
    },
}