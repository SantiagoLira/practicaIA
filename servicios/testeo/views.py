from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from logica import test
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

    
@csrf_exempt
def index(request):
    data = json.loads(request.body.decode('utf-8'))
    
    nick_name =data['nick_name']
    full_name =data['full_name']
    # nick_name = request.POST.get('nick_name')
    # full_name = request.POST.get('full_name')


    try:
        user = test.create_user(nick_name=nick_name, fullname=full_name)
        response = {
            "status": "success",
            "code": 200,
            "data": "User saved successfully"
        }
    except Exception as e:
        response = {
            "status": "error",
            "code": 400,
            "data": str(e)
        }
    return JsonResponse(response)