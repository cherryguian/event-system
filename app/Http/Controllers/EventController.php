<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Inertia::render('dashboard', [
            'events' => Event::query()->latest()->get(),
        ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' =>['required', 'string', 'max:255'],
            'description' =>['nullable', 'string'],
            'contactnumber' =>['required', 'numeric', 'min:0'],
            'venue' =>['required', 'string', 'max:255'],
            'date' =>['required', 'string', 'max:100'],
            'time' =>['required', 'string', 'max:100'],

        ]);

        Event::create($data);

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    // public function show(event $event)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(event $event)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
         $data = $request->validate([
            'name' =>['required', 'string', 'max:255'],
            'description' =>['nullable', 'string'],
            'contactnumber' =>['required', 'numeric', 'min:0'],
            'venue' =>['required', 'string', 'max:255'],
            'date' =>['required', 'string', 'min:100'],
            'time' =>['required', 'string', 'min:100'],

        ]);

        $event::update($data);

        return redirect()->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Event $event)
    {
        $event::delete($data);

        return redirect()->route('dashboard');
    }
}
