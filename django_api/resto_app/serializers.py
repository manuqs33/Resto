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
    
    def create(self, validated_data):
        send_mail(
            validated_data['subject'],
            f'Nombre: {validated_data["name"]}\nDirección: {validated_data["address"]}\nCorreo: {validated_data["email"]}\nTeléfono: {validated_data["phone"]}\nMensaje: {validated_data["message_text"]}',
            validated_data["email"],
            ['restaurantetestapp@gmail.com'],
            fail_silently=False,
        )
        send_mail(
            'Opinión',
            '¡Gracias por dejarnos tu opinión!\nEsperamos que vuelvas pronto.\n\nhttps://testingwebap.wixsite.com/testrestaurant',
            'restaurantetestapp@gmail.com',
            [validated_data["email"]],
            fail_silently=False,
        )
        return validated_data


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


class JobApplicationMailSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)
    position = serializers.PrimaryKeyRelatedField(required=True, queryset=JobOpening.objects.all(), source="jobopening")
    interview_date = serializers.DateTimeField(required=True)
    cv_link = serializers.CharField(required=True)

    def create(self, validated_data):
        send_mail(
            f'CV - {validated_data["jobopening"]}',
            f'Nombre: {validated_data["name"]}\nApellido: {validated_data["surname"]}\nCorreo: {validated_data["email"]}\nTeléfono: {validated_data["phone"]}\nFecha Disponible: {validated_data["interview_date"]}\nCV link: {validated_data["cv_link"]}',
            validated_data["email"],
            ['restaurantetestapp@gmail.com'],
            fail_silently=False,
        )
        send_mail(
            f'CV - {validated_data["jobopening"]}',
            '¡Gracias por enviarnos tu CV!\nAlguien de nuestro equipo se pondrá en contacto con vos luego de analizarlo.\n\nNo dejes de chequear nuuestras nuevas ofertas en: https://testingwebap.wixsite.com/testrestaurant',
            'restaurantetestapp@gmail.com',
            [validated_data["email"]],
            fail_silently=False,
        )
        return validated_data


class JobOpeningSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobOpening
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'
