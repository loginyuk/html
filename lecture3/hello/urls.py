from django.urls import path
from.import views
urlpatterns = [
    path("", views.index, name="index"),
    path("<str:name>", views.greet, name="greet"),
    path("yura", views.yura, name="yura"),
    path("david", views.david, name="david")
]