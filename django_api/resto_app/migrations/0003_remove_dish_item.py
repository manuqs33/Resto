# Generated by Django 4.2 on 2023-04-20 20:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resto_app', '0002_alter_jobapplication_position'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='item',
        ),
    ]
