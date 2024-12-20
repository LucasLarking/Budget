from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, AbstractBaseUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email

