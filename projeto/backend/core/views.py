from .models import List, Item
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ListSerializer, ItemSerializer


class ListViewSet(viewsets.ModelViewSet):

    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]


class ItemViewSet(viewsets.ModelViewSet):

    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]

