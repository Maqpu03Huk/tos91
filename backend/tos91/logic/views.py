from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse

@csrf_exempt
@require_http_methods(["POST"])
def check_work(request):
    print('hello')

    return JsonResponse({
        'status': 'ok'
    })
# Create your views here.
