<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Exception;
// use Storage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

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
    // public function store(StoreProductRequest $request)
    // {

        


    //     // try {
    //         $data = request()->all();
    //         $productName = $request->name;
    //         $path = 'img/products/';
    //         $productFolder = public_path($path . $productName);
    //         if (!is_dir($productFolder)) {
    //             mkdir($productFolder, 0755, true);
    //         }

    //         if ($request->hasFile('image')) {
    //             $imagePath = $request->file('image')->store($path, 'public');
    //         } else {
    //             $imagePath = null;
    //         }
    //         $data['image'] = $imagePath;

    //         Product::create($data);

    //         return response()->json(['data' => new ProductResource($data)], 200);
    //     // } catch (Exception $e) {
    //     //     return response()->json(['message' => 'An error occurred while creating the product'], 500);
    //     // }
    // }

    public function store(StoreProductRequest $request)
    {
        try {
        $data = $request->all();
        $productName = $request->name;
        $path = 'img/products/';
        $productFolder = public_path($path . $productName);   
        if (!is_dir($productFolder)) {
            mkdir($productFolder, 0755, true);
        } 
        if ($request->hasFile('image')) {
            $file = $request->file('image');   
            $filename = $productName . time() . '.' . $file->getClientOriginalExtension();    
            $file->move($productFolder, $filename);   
            $data['image'] = $filename;
        } else {
            $data['image'] = null;
        }
        Product::create($data);
        return response()->json(['data' => new ProductResource($data)], 200);
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
