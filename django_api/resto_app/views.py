from .serializers import (
    MessageSerializer,
    SendMessageSerializer, 
    EmployeeSerializer, 
    JobApplicationSerializer, 
    JobOpeningSerializer, 
    ReviewSerializer, 
    DishSerializer,
)
from .models import (
    Message,
    Employee, 
    Dish, 
    JobApplication, 
    JobOpening, 
    Review,
)
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet


class MessageViewSet(ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    http_method_names = ['get', 'post', 'put']

    def get_serializer_class(self):
        if self.action == 'post':
            return SendMessageSerializer
        else:
            return MessageSerializer

    @action(detail=False, methods=['post'])
    def perform_create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid()
        # serializer.send_mail()
        return Response(serializer.data)

class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    http_method_names = ['get', 'post', 'put']


class DishViewSet(ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    http_method_names = ['get', 'post', 'put']

    @action(detail=False, methods=['get'], url_path='recommended')
    def get_recommended(self, request):
        filtered_queryset = self.queryset.filter(recommended=True)
        serializer = self.get_serializer(filtered_queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='notrecommended')
    def get_notrecommended(self, request):
        filtered_queryset = self.queryset.filter(recommended=False)
        serializer = self.get_serializer(filtered_queryset, many=True)
        return Response(serializer.data)


class JobApplicationViewSet(ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    http_method_names = ['get', 'post', 'put']


class JobOpeningViewSet(ModelViewSet):
    queryset = JobOpening.objects.all()
    serializer_class = JobOpeningSerializer
    http_method_names = ['get', 'post', 'put']


class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    http_method_names = ['get', 'post', 'put']





