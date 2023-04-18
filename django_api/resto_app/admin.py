from django.contrib import admin
from .models import Message, Employee, Dish, JobApplication, JobOpening, Review

# Register your models here.
admin.site.register(Message)
admin.site.register(Employee)
admin.site.register(Dish)
admin.site.register(JobApplication)
admin.site.register(JobOpening)
admin.site.register(Review)

