from .models import Message, Employee, Dish, JobApplication, JobOpening, Review
from rest_framework import serializers


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'


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
