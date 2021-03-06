<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use GuzzleHttp\Client;
use Laravel\Passport\Client as OClient;
use Exception;

class AuthenticationController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function register(Request $request)
    {
        try {
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            $success['token'] =  $user->createToken('access_token')->accessToken;
            $success = true;
            $message = 'User register successfully';
        } catch (\Illuminate\Database\QueryException $ex) {
            $success = false;
            $message = $ex->getMessage();
        }

        // response
        $response = [
            'success' => $success,
            'message' => $message,
        ];
        return response()->json($response);
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('access_token')->accessToken;
            $user = auth()->user();
            // $token->expires_at = Carbon::now()->addWeeks(1)->toDateTimeString();
            // $token->save();
            return response()->json([
                'userData' => [
                    new UserResource(auth()->user()),
                    'ability' => [
                        'action' => $user->getPermissionNames(), 'subject' => $user->getRoleNames(),
                    ],
                    'role' => $user->getRoleNames()
                ],
                'refreshToken' => $token,
                'accessToken' => $token
            ], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }



    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $response = [
            'status' => true,
            'message' => 'Logout successfully',
        ];
        return response($response, 201);
    }

    public function user(Request $request)
    {

        return $user = auth()->user();
        return response()->json([new UserResource($user)], 200);
    }
}
