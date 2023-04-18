from rest_framework.viewsets import ModelViewSet
from .serializers import MessageSerializer, EmployeeSerializer, JobApplicationSerializer, JobOpeningSerializer, ReviewSerializer, DishSerializer
from .models import Message, Employee, Dish, JobApplication, JobOpening, Review


class MessageViewSet(ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    http_method_names = ['get', 'post', 'put']


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    http_method_names = ['get', 'post', 'put']


class DishViewSet(ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    http_method_names = ['get', 'post', 'put']


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





