from dataclasses import fields
from .models import List, Item
from rest_framework import serializers


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'done', 'owner']



class ListSerializer(serializers.HyperlinkedModelSerializer):
    item_set = ItemSerializer(many=True)
    class Meta:
        model = List
        fields = ['owner', 'name', 'item_set']
