<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
Route::inertia('/', 'welcome')->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    //Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('dashboard', [EventController::class, 'index'])->name('dashboard');
    Route::post('event', [EventController::class, 'store'])->name('event.store');
    Route::put('event/{event}', [EventController::class, 'update'])->name('event.update');
    Route::delete('event/{event}', [EventController::class, 'delete'])->name('event.delete');
});

require __DIR__.'/settings.php';
