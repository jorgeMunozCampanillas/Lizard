<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        //Check that the permission passed is the same as the one in db
        //in this way if the user changes it in the front, we will not give him access to the back
        if (Auth::user()->permissions >= 2) {
            return $next($request);
        }else{
            return response()->json([
                'status' => 0,
                'error' => 'You dont have permiss here 😈'
            ]);
        }
    }
}
