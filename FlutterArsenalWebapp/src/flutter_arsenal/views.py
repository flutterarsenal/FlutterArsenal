from django.http import HttpResponse
from django.shortcuts import render

def home_page(request):
    return render(request, "homeTemplate.html")

def project_page(request):
    return render(request, "projectPageTemplate.html")