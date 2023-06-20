<?php

namespace App\DAO;

use App\DTO\DTOAbout;
use Illuminate\Support\Facades\DB;

class DAOAbout {

    public function GetText(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM text_tbl AS TTBL
                INNER JOIN text_type_tbl AS TTTBL
                ON TTBL.TextID = TTTBL.TextTypeID"
            )
        );

        return $this->TransferData($data);
    }

    public function TransferData($data){
        $dto_admin = new DTOAbout();
        $dto_admin->setAbout_data($data);
        return $dto_admin->getAbout_data();
    }

}