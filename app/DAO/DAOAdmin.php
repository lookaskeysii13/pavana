<?php

namespace App\DAO;

use App\DTO\DTOAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DAOAdmin {
    
    public function CheckCredentials($Username,$Password,$Passphrase){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "Call `GetAdmin`();"
            )
        );

        if(count($data) > 0){

            foreach ($data as $rec) {
                if($rec->Username == $Username && $rec->Password == $Password){
                    return $this->TransferData($data);
                }else{
                    return 'ERROR'; 
                }
            }
        }
    }

    public function GetAccount($Passphrase,$ID){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "Call `GetAdmin`();"
            )
        );
        
        foreach ($data as $rec) {
            $test = '"' . $rec->ID . '"' ;
            if($test == $ID){
                return $this->TransferData($data);
            }else{
                return 'ERROR'; 
            }
        }

        return $this->TransferData($data);
    }

    public function UpdateUser($Username,$Password,$ID){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateAdminAccount`('$ID','$Username','$Password')"
            )
        );
    }

    public function GetUser(){
        $passphrase = 'YourPassphrase';
        $plaintext = 'Sensitive data to be encrypted';

        // Encryption
        // $ciphertext = openssl_encrypt($plaintext, 'AES-256-CBC', $passphrase);

        // Store $ciphertext in the appropriate column in your database

        // Decryption
        $ciphertextFromDatabase = '0x6e01d16e488a4818a2cb6d29367d99a3';

        $decryptedtext = openssl_decrypt($ciphertextFromDatabase, 'AES-256-CBC', $passphrase);
        echo $decryptedtext;
        // $data = DB::connection('mysql')->select(
        //     DB::raw(
        //         "SELECT * FROM admin"
        //     )
        // );

        // return $this->TransferData($data);
    }

    public function TransferData($data){
        $dto_admin = new DTOAdmin();
        $dto_admin->setAdmin_data($data);
        return $dto_admin->getAdmin_data();
    }

}