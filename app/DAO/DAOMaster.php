<?php

namespace App\DAO;

use App\DTO\DTOMaster;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DAOMaster {

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

    public function GetMessage(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM message_tbl
                WHERE Status = 1"
            )
        );

        return $this->TransferData($data);
    }

    public function GetContact(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM contact_detail_tbl AS CDT
                INNER JOIN contact_type_tbl AS CTT
                ON CDT.ContactTypeID = CTT.ContactTypeID"
            )
        );

        return $this->TransferData($data);
    }

    public function UpdateText($TextID,$TextContent){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateText`('$TextID','$TextContent')"
            )
        );
    }

    public function TransferData($data){
        $dto_master = new DTOMaster();
        $dto_master->setMaster_data($data);
        return $dto_master->getMaster_data();
    }

}