from .models import (
    Message, 
    Employee, 
    Dish, 
    JobApplication, 
    JobOpening, 
    Review
)
from django.core.mail import send_mail
from rest_framework import serializers


class MessageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Message
        fields = '__all__'


class SendMessageSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    address = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)
    subject = serializers.CharField(required=True)
    message_text = serializers.CharField(required=True)
    
    # send_mail(
    #     'Asunto del correo electrónico',
    #     f'Nombre: {name}\nDirección: {address}\nCorreo: {email}\nTeléfono: {phone}\nAsunto: {subject}\nMensaje: {message_text}',
    #     'restaurantetestapp@gmail.com',
    #     ['hernan.rvera@outlook.com'],
    #     fail_silently=False,
    # )


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'


class DishSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dish
        fields = '__all__'


class JobApplicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobApplication
        fields = '__all__'


class JobOpeningSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobOpening
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'
