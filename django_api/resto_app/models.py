from django.db import models


class Message(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=255)
    message_text = models.TextField()

    def __str__(self):
        return f'{self.name}: {self.subject}'


class Review(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    review_text = models.TextField()

    def __str__(self):
        return f'{self.name} {self.surname}'


class Dish(models.Model):
    DISH_TYPE_CHOICES = [
        ('Plato principal', 'Plato principal'),
        ('Entrada', 'Entrada'),
    ]

    name = models.CharField(max_length=255)
    item = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    dish_type = models.CharField(choices=DISH_TYPE_CHOICES, max_length=20)

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class JobOpening(models.Model):
    position = models.CharField(max_length=255)
    job_type = models.CharField(max_length=255)

    def __str__(self):
        return self.position


class JobApplication(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    position = models.CharField(max_length=255)
    interview_date = models.DateTimeField()
    cv_link = models.URLField()

    def __str__(self):
        return f"{self.name} {self.surname}"
