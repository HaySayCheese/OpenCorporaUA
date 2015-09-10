# coding=utf-8
from collective.decorators.jinja2_shortcuts import render_jinja2_template


@render_jinja2_template
def index(request):
    return 'main/index.html'