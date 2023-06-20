<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\MasterController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\AdminLoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/login',AdminLoginController::class);
Route::resource('/master',MasterController::class);
Route::resource('/services',ServicesController::class);
Route::resource('/booking',BookingController::class);
Route::resource('/faq',FAQController::class);
Route::resource('/message',MessageController::class);
Route::resource('/about',AboutController::class);

Route::post('/upload',[ImageController::class,'upload']);
Route::post('/updateImageLocation',[ImageController::class,'updateImageLocation']);
Route::get('/getImages',[ImageController::class,'getImages']);
Route::get('/getAllImages',[ImageController::class,'getAllImages']);
Route::get('/getSelection',[ImageController::class,'getSelection']);
