from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()


class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    imgUrl = models.CharField(max_length=250,blank=True, null=True)
