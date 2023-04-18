"""
URL configuration for django_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from resto_app import views

router = routers.DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)
router.register(r'dishes',views.DishViewSet)
router.register(r'job_applications', views.JobApplicationViewSet)
router.register(r'job_openings', views.JobOpeningViewSet)
router.register(r'messages', views.MessageViewSet)
router.register(r'reviews', views.ReviewViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
