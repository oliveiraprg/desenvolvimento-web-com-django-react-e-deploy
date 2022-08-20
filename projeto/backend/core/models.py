from xmlrpc.client import Boolean
from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class Item(models.Model):
    owner = models.ForeignKey(List, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    done = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'Item: {self.name} Feito: {self.done} - {self.owner}'
    
