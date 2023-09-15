<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    private $database;

    public function __construct()
    {
        $this->database = \App\Services\FirebaseService::connect();
    }

    public function create(Request $request)
    {
        $this->database
            ->getReference('/')
            ->push([
                'humidity' => '20%',
                'temperature' => '38'
            ]);

        
        
        return response()->json('blog has been create');
    }

    public function index()
    {
        dd($this ->database->getReference('')->getValue());
        return response()->json($this->database->getReference('')->getValue());
    }

    public function edit(Request $request)
    {
        $this->database->getReference('test/blogs/' . $request['title'])
            ->update([
                'content/' => $request['content']
            ]);

        return response()->json('blog has been edited');
    }

    public function delete(Request $request)
    {
        $this->database
            ->getReference('test/blogs/' . $request['title'])
            ->remove();

        return response()->json('blog has been deleted');
    }
}
