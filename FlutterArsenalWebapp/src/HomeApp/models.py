from django.db import models

class Project(models.Model):
    title = models.TextField()
    slug = models.SlugField()
    excerpt = models.TextField()
    tag = models.TextField()
    category = models.TextField()
    author = models.TextField()
    image = models.ImageField(null = True, blank = True)
    approval_status = models.BooleanField(default= False, null = True)
    def __str__(self):
        return self.title

    def getAllApproved():
        return Project.objects.all().filter(approval_status=True)
