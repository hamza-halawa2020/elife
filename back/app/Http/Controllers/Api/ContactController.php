<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use Exception;




class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    function __construct()
    {
        $this->middleware("auth:sanctum")->except(['store']);
    }



    public function index()
    {
        try {
            $contacts = Contact::all();
            return ContactResource::collection($contacts);
        } catch (Exception $e) {
            return response()->json(['message' => 'An error occurred while showing contacts.'], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        try {
            $contact = Contact::create($request->all());
            return response()->json(['data' => new ContactResource($contact)], 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'An error occurred while creating the contact'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            // if (Gate::allows("is-admin")) {
            $contact = Contact::findOrFail($id);
            return new ContactResource($contact);
            // } else {
            // return response()->json(['message' => 'not allow to show contacts.'], 403);
            // }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while showing contacts.'], 500);
        }
    }

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
        try {
            //  if (Gate::allows("is-admin")) {
            $contact = Contact::findOrFail($id);
            $contact->delete();
            return response()->json(['message' => 'Contact deleted successfully'], 200);
            //  } else {
            //  return response()->json(['message' => 'not allow to show contacts.'], 403);
            //  }
        } catch (\Throwable $th) {
            return response()->json(['message' => 'An error occurred while deleting the contact'], 500);
        }
    }
}