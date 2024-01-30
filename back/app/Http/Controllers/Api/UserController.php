<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Gate;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use Exception;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    // function __construct()
    // {
    //     $this->middleware("auth:sanctum")->except('store');
    // }
    // public function index()
    // {
    //     try {
    //         $users = User::all();
    //         return UserResource::collection($users);
    //     } catch (Exception $e) {
    //         return response()->json($e, 500);
    //     }
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    // public function store(StoreUserRequest $request)
    // {

    //     try {
    //         $this->validate($request, [
    //             'name' => 'required|string',
    //             'email' => 'required',
    //             'password' => 'required'
    //         ]);

    //         $user = User::create([
    //             'name' => $request->name,
    //             'email' => $request->email,
    //             'password' => bcrypt($request->password),
    //         ]);

    //         return response()->json(['data' => new UserResource($user)], 200);
    //     } catch (Exception $e) {
    //         return response()->json($e, 500);
    //     }
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
