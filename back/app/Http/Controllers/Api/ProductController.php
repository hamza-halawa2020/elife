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
    // function __construct()
    // {
    //     $this->middleware("auth:sanctum")->except(['index','show']);
    // }

    public function index()
    {
        try {
            // $products = Product::all();
            $products = Product::with('images.product')->get();
            return ProductResource::collection($products);
        } catch (Exception $e) {
            return response()->json(['message' => 'An error occurred while showing products.'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */


    public function store(StoreProductRequest $request)
    {

        try {
            // if (Gate::allows("is-admin")) {
            $data = $request->only([
                'name',
                'description',
            ]);
            $product = Product::create([
                'name' => $data['name'],
                'description' => $data['description'],
            ]);

            if ($request->hasFile('image')) {
                foreach ($request->file('image') as $image) {
                    $extension = $image->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $folderPath = 'images/products/' . $product->id;
                    $image->move(public_path($folderPath), $filename);
                    $product->images()->create([
                        'product_id' => $product->id,
                        'image' => $folderPath . '/' . $filename,
                    ]);
                }
            }
            $product->load('images');

            return response()->json(['data' => new ProductResource($product)], 201);
            // } else {
            //     return response()->json(['message' => 'not allow to delete product.'], 403);
            // }
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }

    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            // $product = Product::findOrFail($id);
            $product = Product::with('images.product')->findOrFail($id);

            return new ProductResource($product);
        } catch (Exception $e) {
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
