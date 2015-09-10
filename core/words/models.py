# coding=utf-8
from django.contrib.postgres.fields.array import ArrayField
from django.contrib.postgres.fields.hstore import HStoreField
from django.db import models


class Words(models.Model):
    word = models.DateTimeField(auto_now_add=True)
    normal_form = models.TextField(db_index=True)
    other_forms = HStoreField(blank=True, db_index=True)
    grammemes_tid = ArrayField(base_field=models.PositiveIntegerField, blank=True)
