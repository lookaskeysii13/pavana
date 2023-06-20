<?php

namespace App\Http\Controllers;

use App\DTO\DTOImage;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Validate the uploaded image
            'imageName' => 'required|string'
        ]);
        
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $extension = $image->getClientOriginalExtension();
            $filename = $this->SetFileName();
            $imagePath = $image->storeAs('/',$filename.'.'.$extension,'public'); // Store the image in the "public/images" directory
            $newImage = new Image();
            $newImage->LocationID = 0;
            $newImage->filename = $filename.'.'.strtolower($extension);
            $newImage->path = $image->getPathname();
            $newImage->save();
            return response()->json(['message' => 'Image uploaded successfully.']);

            // $result = $this->checkFileName($request->input('imageName').'.'.strtolower($extension));

            // if($result == 0){
            //     $imagePath = $image->storeAs('/',$request->input('imageName').'.'.$extension,'public'); // Store the image in the "public/images" directory
            //     $newImage = new Image();
            //     $newImage->LocationID = 0;
            //     $newImage->filename = $request->input('imageName').'.'.strtolower($extension);
            //     $newImage->path = $image->getPathname();
            //     $newImage->save();
            //     return response()->json(['message' => 'Image uploaded successfully.']);
            // }else{
            //     return 'FILENAME ALREADY EXIST!';
            // }
        }

        return response()->json(['message' => 'Error uploading image.'], 400);
    }

    public function SetFileName(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "Call `SetImageName`()"
            )
        );

        $lastDigit = $data[0]->Counter;
        $day = date('d');
        $month = date('m');
        $year = date('Y');
        $Format = str_pad($lastDigit,5,0,STR_PAD_LEFT);
        return 'I'.$year.$month.$day.$Format;
        // $lastDigit = $this->booking->GetTotalBooking();
        // $day = date('d');
        // $month = date("m");
        // $year = date("Y");
        // $Format = str_pad($lastDigit,5,0,STR_PAD_LEFT);
        // return $year.$month.$day."-".$Format;
    }

    public function checkFileName($name){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM images WHERE filename = '$name'"
            )
        );

        if(count($data) > 0){
            return 1;
        }else{
            return 0;
        }
        
    }

    public function getImages(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM image_location_tbl WHERE deleted_at IS NULL"
            )
        );

        $imageList = [];
        foreach($data as $rec){
            $dto_image = new DTOImage();
            $dto_image->setImageLocID($rec->ImageLocID);
            $dto_image->setImageLocName($rec->ImageLocName);
            $dto_image->setImageName($rec->ImageName);
            // $dto_image->setLocationId($rec->LocationID);
            $imageList[] = $dto_image;
        }
        return $imageList;
    }

    public function getAllImages(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM images WHERE deleted_at IS NULL"
            )
        );

        $imageList = [];
        foreach($data as $rec){
            $dto_image = new DTOImage();
            $dto_image->setId($rec->id);
            $dto_image->setFilename($rec->filename);
            // $dto_image->setImageName($rec->ImageName);
            // $dto_image->setLocationId($rec->LocationID);
            $imageList[] = $dto_image;
        }
        return $imageList;
    }

    public function getSelection(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM image_location_tbl WHERE deleted_at IS NULL"
            )
        );

        return $data;
    }

    public function updateImageLocation(Request $request){
        $ImageName = $request->input('data.filename');
        $LocationId = $request->input('data.LocationID');
        DB::connection('mysql')->select(
            DB::raw(
                "Call `UpdateImageLocation`('$ImageName','$LocationId');"
            )
        );
    }
}
