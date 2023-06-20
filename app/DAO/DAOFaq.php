<?php

namespace App\DAO;

use App\DTO\DTOFaq;
use Illuminate\Support\Facades\DB;

class DAOFaq {

    public function GetFaq(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM frequently_asked_question_tbl WHERE deleted_at IS NULL"
            )
        );

        return $this->TransferData($data);
    }
    
    public function GetMaxID(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT count(*) as MaxID FROM frequently_asked_question_tbl"
            )
        );

        return $this->TransferData($data[0]->MaxID);
    }
    
    public function AddFaq($ID,$Question,$Answer){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `InsertFaq`('$ID','$Question','$Answer')"
            )
        );
    }

    public function UpdateFaq($ID,$Question,$Answer){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateFaq`('$ID','$Question','$Answer')"
            )
        );

        return $this->TransferData($data);
    }

    public function DeleteFaq($ID){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "CALL `DeleteFaq`('$ID')"
            )
        );

        return $this->TransferData($data);
    }

    public function TransferData($data){
        $dto_faq = new DTOFaq();
        $dto_faq->setFaq_data($data);
        return $dto_faq->getFaq_data();
    }

}