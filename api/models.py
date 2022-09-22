from django.db import models
import uuid

CATEGORIES = [
  ('House', 'House'),
  ('Utensils', 'Utensils'),
  ('Automobiles', 'Automobiles'),
  ('Clothes', 'Clothes'),
  ('Accessories', 'Accessories'),
  ('Electronics', 'Electronics'),
  ('Home appliances', 'Home appliances'),
  ('Computers', 'Computers'),
  ('Videogames', 'Videogames'),
  ('Others', 'Others'),
]

# Create your models here.
class Product(models.Model):
  id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4, editable=False)
  title = models.CharField(max_length=200)
  description = models.CharField(max_length=200)
  category = models.CharField(max_length=200, choices=CATEGORIES, default='House')
  price = models.DecimalField(max_digits=10, decimal_places=2)
  quantity = models.IntegerField()
  image_url = models.URLField(blank=True, max_length=400)
  contact = models.CharField(max_length=11)
  email = models.EmailField(max_length=200)