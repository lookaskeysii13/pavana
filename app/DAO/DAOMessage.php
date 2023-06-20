<?php

namespace App\DAO;

use App\DTO\DTOMessage;
use Illuminate\Support\Facades\DB;

class DAOMessage {

    public function GetMessage(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM message_tbl"
            )
        );

        return $this->TransferData($data);
    }

    public function GetTotalMessage(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "Call `SetMessageID`();"
            )
        );

        return $data[0]->Counter;
    }

    public function GetFilteredMessage(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM message_tbl where Status = 1"
            )
        );

        return $this->TransferData($data);
    }

    public function SendMessage($MessageID,$Message,$Name,$Email,$ContactNumber){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `SendMessage`('$MessageID','$Message','$Name','$Email','$ContactNumber')"
            )
        );
    }

    public function UpdateMessageStatus($MessageID,$Status){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateMessageStatus`('$MessageID','$Status')"
            )
        );
    }

    public function TransferData($data){
        $dto_message = new DTOMessage();
        $dto_message->setMessage_data($data);
        return $dto_message->getMessage_data();
    }

}