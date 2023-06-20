<?php

namespace App\Models;

use App\DAO\DAOMessage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MessageModel extends Model
{
    public $message;

    public function __construct(){
        $this->message = new DAOMessage();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETMESSAGE'){
            return $this->message->GetMessage();
        }elseif($request->Function == 'GETFILTEREDMESSAGE'){
            return $this->message->GetFilteredMessage();
        }
    }

    
    public function SelectTransactionFunction($request){
        if($request->Function == 'SENDMESSAGE'){
            $MessageID = $this->SetMessageID();
            $Message = $request->input('data.Message');
            $Name = $request->input('data.Firstname').' '.$request->input('data.Lastname');
            $Email = $request->input('data.Email');
            $ContactNumber = $request->input('data.ContactNumber');

            return $this->message->SendMessage($MessageID,$Message,$Name,$Email,$ContactNumber);
        }elseif($request->Function == 'UPDATEMESSAGESTATUS'){
            $MessageID = $request->input('data.MessageID');

            $request->input('data.Status') == 1 ?  $Status = 0 : $Status = 1;

            return $this->message->UpdateMessageStatus($MessageID,$Status);
        }
    }

    public function SetMessageID(){
        $lastDigit = $this->message->GetTotalMessage();
        $day = date('d');
        $month = date("m");
        $year = date("Y");
        $Format = str_pad($lastDigit,5,0,STR_PAD_LEFT);
        return $year.$month.$day."-".$Format;
    }
}
