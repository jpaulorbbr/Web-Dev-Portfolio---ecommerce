from django.urls import path 

from . import views

urlpatterns = [
    path('', views.admin, name='admin_home'),
    path('login/', views.admin_login, name='admin_login'),
    path('logout/', views.admin_logout, name='admin_logout'),
    path('register/', views.admin_register, name='admin_register'),
    path('profile/', views.admin_profile, name='admin_profile'),
    path('already-authenticated', views.admin_already_authenticated, name='admin_already_authenticated'),
    path('no-access/', views.admin_no_access, name='admin_no_access'),
    path('no-access-area', views.admin_no_access_area, name='admin_no_access_area'),
    path('users/', views.admin_users, name='admin_users'),
    path('users/<str:slug>', views.admin_user_detail, name='admin_user_detail'),
    path('users/staff/', views.admin_users_staff, name='admin_users_staff'),
    path('users/staff/<str:slug>', views.admin_user_detail_staff, name='admin_user_detail_staff'),
    path('products/', views.admin_products, name='admin_products'),
    path('categories-of-products/', views.admin_categories_of_products_view, name='categories_of_products'),
]