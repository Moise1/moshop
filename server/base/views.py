from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(req):
    return JsonResponse('Hello', safe=False)
    
