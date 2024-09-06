from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Todo

from django.views.decorators.http import require_http_methods


def todo_list(request):
    todos = Todo.objects.all()
    return render(request, "todo/todo_list.html", {"todos": todos})


def add_todo(request):
    title = request.POST.get("title")
    todo = Todo.objects.create(title=title)
    return render(request, "todo/todo_item.html", {"todo": todo})


@csrf_exempt
@require_http_methods(["POST"])
def delete_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    todo.delete()
    return HttpResponse("")


def toggle_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    todo.completed = not todo.completed
    todo.save()
    return render(request, "todo/todo_item.html", {"todo": todo})
