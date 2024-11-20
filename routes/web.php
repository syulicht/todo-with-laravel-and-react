<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/todo-create', [TodoController::class, 'store']);

Route::get('/todo-get', [TodoController:: class, 'get']);
