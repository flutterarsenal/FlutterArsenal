from django.shortcuts import render, get_object_or_404
from django.http import Http404

from .models import Project

def home_page(request):
    card_objs = Project.getAllApproved()
    print(card_objs)
    template = 'homePage.html'
    context = {"card_objects": card_objs}
    return render(request, template, context)

def project_page(request, slug):
    project = get_object_or_404(Project, slug=slug)
    template = 'projectPage.html'
    context = {"project": project}
    return render(request, template, context)