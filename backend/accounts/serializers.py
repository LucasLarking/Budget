
from rest_framework.serializers import ModelSerializer
from .models import User

class UserRegistrationSerialize(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
    
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user