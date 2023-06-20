<?php

namespace App\Models;

use App\DAO\DAOAbout;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AboutModel extends Model
{
    public $about;

    public function __construct(){
        $this->about = new DAOAbout();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETTEXT'){
            return $this->about->GetText();
        }
    }
}
