#coding=utf-8
from django.conf.urls import include, url
from django.contrib import admin
from apps.main import views


urlpatterns = [
    url(r'^$', views.index)
]
