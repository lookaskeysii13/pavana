<?php

namespace App\Models;

use App\DAO\DAOFaq;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FAQModel extends Model
{
    public $faq;

    public function __construct()
    {
        $this->faq = new DAOFaq();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETFAQ'){
            return $this->faq->GetFaq();
        }
    }

    public function SelectTransactionFunction($request){
        $Question = $request->input('data.Question');
        $Answer = $request->input('data.Answer');
        if($request->input('Function') == 'ADDFAQ'){
            $ID = $this->faq->GetMaxID();
            return $this->faq->AddFaq(($ID + 1),$Question,$Answer);
        }elseif($request->input('Function')  == 'UPDATEFAQ'){
            $ID = $request->input('data.FaqID');
            return $this->faq->UpdateFaq($ID,$Question,$Answer);
        }elseif($request->input('Function') == 'DELETEFAQ'){
            $ID = $request->input('data.FaqID');
            return $this->faq->DeleteFaq($ID);
        }
    }
}
