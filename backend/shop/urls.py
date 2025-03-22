from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet


router = DefaultRouter()

router.register("products", ProductViewSet)
router.register("categories", CategoryViewSet)


urlpatterns = [
    path("", include(router.urls)),
]
