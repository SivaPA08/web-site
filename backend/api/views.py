from django.shortcuts import render
from django.http import JsonResponse
from django.db import connection
import json
from django.views.decorators.csrf import csrf_exempt
import sqlite3
@csrf_exempt
def Login(req):
    if req.method == 'POST':
        try:
            data = json.loads(req.body)
            username = data.get('username')
            password = data.get('password')

            if not username or not password:
                return JsonResponse({'msg': 'Invalid input'}, status=400)

            with connection.cursor() as cursor:
                query = 'SELECT * FROM USER WHERE USERNAME = %s AND PASSWORD = %s'
                cursor.execute(query, [username, password])
                val = cursor.fetchone()

            if val:
                return JsonResponse({'msg': '1'})
            else:
                return JsonResponse({'msg': '0'})

        except json.JSONDecodeError:
            return JsonResponse({'msg': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'msg': 'Error', 'error': str(e)}, status=500)


@csrf_exempt
def Register(req):
    if req.method == 'POST':
        try:

            data = json.loads(req.body)
            username = data.get('username')
            password = data.get('password')

            if not username or not password:
                return JsonResponse({'msg': 'Invalid input'}, status=400)


            with connection.cursor() as cursor:
                query = 'INSERT INTO USER (USERNAME, PASSWORD) VALUES (%s, %s)'
                cursor.execute(query, [username, password])

            return JsonResponse({'msg': '1'})

        except sqlite3.IntegrityError:
            return JsonResponse({'msg': 'Username already exists'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'msg': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'msg': 'Error', 'error': str(e)}, status=500)
