<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Exception;

class LoginController extends Controller
{
    public function login(Request $request)
    {

        try {

            $this->validate($request, [
                'email' => 'required',
                "password" => "required",
            ]);

            $login = $request->only("email", "password");
            if (!Auth::attempt($login)) {
                return response(['message' => 'invalid login'], 401);
            }
            $user = Auth::user();
            $user->tokens()->delete();
            $token = $user->createToken($user->email);

            return response([
                // 'id' => $user->id,
                // 'name' => $user->name,
                // 'email' => $user->email,
                'token' => $token->plainTextToken
            ], 200);

        } catch (Exception $e) {
            return response()->json($e, 500);
        }
    }
}
