<?php

// Author: Austin Crane
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Blog;
use App\Http\Requests;
use App\Http\Controllers\Controller;
// Keep in mind this probably needs refactoring :/ and dont make fun of my spelling!
class BlogController extends Controller
{
  public function __construct()
  {
    $this->middleware('cors');
  }
  // GET /blogs
  public function index(){
    // Return all blogs in DB

    return response()->json(Blog::all());
  }

  // GET /blogs/{blogId}
  // EXAMPLE: /blogs/1
  public function show($blogId){
    // Find blog by primary key id
    return response()->json(Blog::findOrFail($blogId));
  }

  // POST /blogs
  public function store(Request $request){
        $blog = new Blog;
        $blog->title = $request->title;
        $blog->text = $request->text;
        if($blog->save()){
          // handle success
          return response()->json($blog);
        }else{
          // Error handle
          // return response()->json({"error": "Unable to save blog"});
        }
  }

  // PUT/PATCH /blogs/{blogId}
  // EXAMPLE: /blogs/1
  public function update($blogId, Request $request){
    $blog = Blog::findOrFail($blogId);
    if ($request->title) {
      $blog->title = $request->title;
    }
    if ($request->text) {
      $blog->text = $request->text;
    }
    $blog->save();
  }

  // DELETE /blogs/{blogId}
  // EXAMPLE: /blogs/1
  public function destroy($blogId){
    if(Blog::destroy($blogId)){
      // handle success
    }else{
      // handle error
    }
  }

}
