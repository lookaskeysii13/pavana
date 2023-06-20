<?php

namespace App\Models;

use App\DAO\DAOMaster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MasterModel extends Model
{
    public $master;

    public function __construct(){
        $this->master = new DAOMaster();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETTEXT'){
            return $this->master->GetText();
        }else if($request->Function == 'GETMESSAGE'){
            return $this->master->GetMessage();
        }else if($request->Function == 'GETCONTACT'){
            return $this->master->GetContact();
        }
    }

    public function SelectTransactionFunction($request){
        if($request->input('Function') == 'UPDATETEXT'){
            $TextID = $request->input('data.TextID');
            $TextContent = $request->input('data.TextContent');
            return $this->master->UpdateText($TextID,$TextContent);
        }
    }
}
