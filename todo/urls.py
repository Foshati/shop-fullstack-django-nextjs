from django.urls import path
from . import views

app_name = "todo"
urlpatterns = [
    path("", views.todo_list, name="todo_list"),
    path("add/", views.add_todo, name="add_todo"),
    path("delete/<int:pk>/", views.delete_todo, name="delete_todo"),
]
