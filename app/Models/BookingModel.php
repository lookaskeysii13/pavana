<?php

namespace App\Models;

use App\DAO\DAOBooking;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BookingModel extends Model
{
    public $booking;

    public function __construct(){
        $this->booking = new DAOBooking();
    }

    public function SelectFunction($request){
        if($request->Function == 'GETBOOKING'){
            return $this->booking->GetBooking();
        }else if($request->Function == 'GETFILTEREDDATE'){
            $DateValue = $request->dateValue;
            return $this->booking->GetFilteredDate($DateValue);
        }
    }

    public function SelectTransactionFunction($request){
        if($request->input('Function') == 'ADDBOOKING'){
            $BookingID = $this->SetBookingID();
            $ServiceID = $request->input('data.ServiceID');
            $Name = $request->input('data.Name');
            $NumPerson = $request->input('data.NumPerson');
            $SelectedDate = $request->input('data.SelectedDate');
            $SelectedTime = $request->input('data.SelectedTime');
            $ContactNumber = $request->input('data.ContactNumber');
            $Email = $request->input('data.Email');
            $Message = $request->input('data.Message');

            return $this->booking->AddBooking($BookingID,$ServiceID,$Name,$NumPerson,$SelectedDate,$SelectedTime,$ContactNumber,$Email,$Message);
        }elseif($request->input('Function') == 'UPDATEBOOKING'){
            $BookingID = $request->input('data.BookingID');
            $StatusID = $request->input('data.StatusID');
            return $this->booking->UpdateBooking($BookingID,$StatusID);
        }
    }

    public function SetBookingID(){
        $lastDigit = $this->booking->GetTotalBooking();
        $day = date('d');
        $month = date("m");
        $year = date("Y");
        $Format = str_pad($lastDigit,5,0,STR_PAD_LEFT);
        return $year.$month.$day."-".$Format;
    }
}
