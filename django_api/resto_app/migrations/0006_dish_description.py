# Generated by Django 4.2 on 2023-04-20 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resto_app', '0005_alter_dish_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='dish',
            name='description',
            field=models.CharField(default=None, max_length=255),
            preserve_default=False,
        ),
    ]