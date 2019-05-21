from django.db import models

class Project(models.Model):
    title = models.TextField()
    slug = models.SlugField()
    excerpt = models.TextField()
    tag = models.TextField()
    category = models.TextField()
    author = models.TextField()
    image = models.ImageField(null = True, blank = True)