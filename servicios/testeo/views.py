from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from logica import test
# Create your views here.
def index(request):
    return JsonResponse(
        {
            "test":"hola",
            "angulo":"asd",
            "adas":"asd",
            "asd":test.f()
        }
    )
