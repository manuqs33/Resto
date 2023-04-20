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
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    recommended = models.BooleanField()
    dish_type = models.CharField(choices=DISH_TYPE_CHOICES, max_length=20)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.name


class JobOpening(models.Model):
    position = models.CharField(max_length=255)
    job_type = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.position


class JobApplication(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    position = models.ForeignKey(JobOpening, on_delete=models.CASCADE)
    interview_date = models.DateTimeField()
    cv_link = models.URLField()

    def __str__(self):
        return f"{self.name} {self.surname}"
