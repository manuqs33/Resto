# Generated by Django 4.2 on 2023-04-20 20:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resto_app', '0004_dish_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
