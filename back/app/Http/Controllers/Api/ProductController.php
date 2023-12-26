<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Exception;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $products = Product::all();
            return ProductResource::collection($products);
        } catch (Exception  $e) {
            return response()->json(['message' => 'An error occurred while showing products.'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        try {
            $product = Product::create($request->all());
            return response()->json(['data' => new ProductResource($product)], 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'An error occurred while creating the product'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try{
        $product = Product::findOrFail($id);
        return new ProductResource($product);
    } catch (Exception  $e) {
        return response()->json(['message' => 'An error occurred while showing products.'], 500);
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
        //
    }
}
