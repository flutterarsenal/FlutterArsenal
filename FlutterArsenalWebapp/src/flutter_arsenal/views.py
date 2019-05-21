from django.http import HttpResponse
from django.shortcuts import render

def contribute_page(request):
    return render(request, "contributePage.html")

def top_projects_page(request):
    return render(request, "topProjectsPage.html")

def events_page(request):
    return render(request, "eventsPage.html")

def contact_page(request):
    return render(request, "contactPage.html")