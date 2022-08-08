# BE
composer create-project --prefer-dist laravel/laravel todolist
cd todolist
php artisan make:model Item -m
php artisan migrate
php artisan make:controller ItemController --resource

# API
GET : http://127.0.0.1:8000/api/items
POST: http://127.0.0.1:8000/api/item/store
PUT : http://127.0.0.1:8000/api/item/1
DEL : http://127.0.0.1:8000/api/item/2

# FE
npm install
npm install vue