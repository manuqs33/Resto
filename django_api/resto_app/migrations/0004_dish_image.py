# Generated by Django 4.2 on 2023-04-20 20:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resto_app', '0003_remove_dish_item'),
    ]

    operations = [
        migrations.AddField(
            model_name='dish',
            name='image',
            field=models.ImageField(default=None, upload_to='images/'),
            preserve_default=False,
        ),
    ]
