<?php

namespace App\Http\Middleware;

use Closure;

class Cors {
    public function handle($request, Closure $next)
    {
      // Allow from origin, i suggest downloading chrome extension called Cors
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', '*');
    }
}
