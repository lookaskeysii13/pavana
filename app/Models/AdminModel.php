<?php

namespace App\Models;

use App\DAO\DAOAdmin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdminModel extends Model
{
    public $admin;

    public function __construct(){
        $this->admin = new DAOAdmin();
    }

    public function SelectFunction($request){
        if($request->Function == 'CHECKCREDENTIALS'){
            $Username = $request->Username;
            $Password = $request->Password;
            $Passphrase = 'YourPassPhrase';
            return $this->admin->CheckCredentials($Username,$Password,$Passphrase);
        }elseif($request->Function == 'GETACCOUNT'){
            $Passphrase = 'YourPassPhrase';
            $ID = $request->ID;
            return $this->admin->GetAccount($Passphrase,$ID);
        }
    }

    public function SelectTransactionFunction($request){
        if($request->input('Function') == 'UPDATEUSER'){
            $Username = $request->input('data.Username');
            $Password = $request->input('data.Password');
            $ID = $request->input('data.ID');
            return $this->admin->UpdateUser($Username,$Password,$ID);
        }
    }
}
