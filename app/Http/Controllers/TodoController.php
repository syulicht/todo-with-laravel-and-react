<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Log;

class TodoController extends Controller
{
    public function store (Request $req) {
        $validateData = $req->validate([
            'title' => 'required|string|max:255',
        ]);

        Log::debug($req);

        Todo::create($validateData);
    }

    public function get (Request $req) {
        return Todo::where('is_completed', 0)->get();
    }
}
