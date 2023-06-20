<?php

namespace App\DAO;
use App\DTO\DTOBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades;
use Illuminate\Support\Facades\DB;

class DAOBooking {

    public function GetBooking(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "
                    CALL `GetBooking`()
                "
            )
        );

        return $this->TransferData($data);
    }

    public function GetTotalBooking(){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "Call `SetBookingID`();"
            )
        );

        return $data[0]->Counter;
    }

    public function AddBooking($BookingID,$ServiceID,$Name,$NumPerson,$SelectedDate,$SelectedTime,$ContactNumber,$Email,$Message){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `InsertBooking`('$BookingID','$ServiceID','$Name','$NumPerson','$SelectedDate','$SelectedTime','$ContactNumber','$Email','$Message')"
            )
        );
    }

    public function UpdateBooking($BookingID,$StatusID){
        DB::connection('mysql')->select(
            DB::raw(
                "CALL `UpdateBooking`('$BookingID','$StatusID')"
            )
        );
    }

    public function GetFilteredDate($DateValue){
        $data = DB::connection('mysql')->select(
            DB::raw(
                "SELECT * FROM booking_schedule_tbl AS BST 
                INNER JOIN booking_status_tbl AS BStat
                ON BST.StatusID = BStat.StatusID
                WHERE BookingDate = '$DateValue'"
            )
        );

        return $this->TransferData($data);
    }

    public function TransferData($data){
        $dto_booking = new DTOBooking();
        $dto_booking->setBooking_data($data);
        return $dto_booking->getBooking_data();
    }

}